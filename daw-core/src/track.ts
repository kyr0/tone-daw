import { NoteConstructorInterface } from "@tonejs/midi/dist/Note";
import { Panner, Panner3D, Panner3DOptions, Part, ToneAudioNode } from "tone/build/esm";
import { Decibels } from "tone/build/esm/core/type/Units";
import { AutomationOptions } from "./automation";
import { Bus } from "./bus";
import { gain } from "./gain";
import { Note } from "./note";
import { getParams, Params, tryGetParam } from "./param";
import { Send, send, SendOptions } from "./send";
import { SoundSource, soundSource, SoundSourceOptions } from "./soundSource";

// TODO: use Tone.Channel

export interface TrackOptions {
    // e.g. "BASS"
    name?: string

    // e.g. #cc0000 or red
    color?: string

    soundSource: SoundSourceOptions
    
    notes: Array<Note>
    automation?: Array<AutomationOptions>

    // send buses (routed in parallel)
    // effect instances can be "reused"
    // using the same send instance
    sends?: Array<SendOptions>;
    
    /**
     * -6 = -6dB half the loudness
     * 0 = mean loudness (default)
     * +6 = double the loudness
     */
    volume?: Decibels

    /**
     * -1 = hard left
     * 0 = center (default)
     * 1 = hard right
     */
    pan?: number

    /**
     * x, y, z
     */
    panner3d?: Panner3DOptions
}

export interface Track extends Pick<TrackOptions, "name"> {
    part: Part<Note>
    soundSource: SoundSource
    sends: Array<Send>
    outputNode: ToneAudioNode
}

export const track = (trackOptions: TrackOptions, busses: Array<Bus>): Track => {

    const soundSourceInstance = soundSource(trackOptions.soundSource)
    let sendInstances: Array<Send> = []

    // route instrument to sends
    if (trackOptions.sends && trackOptions.sends.length) {

        // determine/construct each bus
        sendInstances = trackOptions.sends.map(sendOptions => send(sendOptions, busses))

        // connect sends to soundSource
        soundSourceInstance.outputNode.fan(...sendInstances.map(sendInstance => sendInstance.inputNode))
    }

    const outputGain = gain(trackOptions.volume);

    let panner: Panner|undefined = undefined;
    let panner3d: Panner3D|undefined = undefined

    // route instrument to panner or panner3d
    if (trackOptions.panner3d) {

        panner3d = new Panner3D(trackOptions.panner3d)
        soundSourceInstance.outputNode.connect(panner3d)
        panner3d.connect(outputGain)

    } else if (trackOptions.pan) {

        panner = new Panner(trackOptions.pan)
        soundSourceInstance.outputNode.connect(panner)
        panner.connect(outputGain)
    }

    if (!panner && !panner3d) {
        soundSourceInstance.outputNode.connect(outputGain)
    }

    const part = new Part<Note>((time, note: any) => {
        console.log('play note', note)

        
        soundSourceInstance.instance.triggerAttackRelease(note.name, '8n', time, note.velocity);
    }, trackOptions.notes)

    const effectParams: { [effectName: string]: Params } = {}

    if (soundSourceInstance.effectChain) {
        soundSourceInstance.effectChain.effectInstances.forEach(effect => {
            effectParams[effect.name] = getParams(effect.instance)
        })
    }

    const automatableParams = {
        soundSource: getParams(soundSourceInstance.instance),
        effects: effectParams,
        volume: outputGain.gain,
        pan: panner?.pan,
        panner3d: {
            x: panner3d?.positionX,
            y: panner3d?.positionY,
            z: panner3d?.positionZ,
        },
    }

    if (trackOptions.automation) {
        trackOptions.automation.forEach(automation => {

            const param = tryGetParam(automatableParams, automation.param)

            if (!param) {
                console.error(`[automation] param "${automation.param}" not found in automatableParams`, automatableParams)
                return
            }

            switch(automation.type) {
                case "linear":
                    param.setValueAtTime(automation.value, automation.startTime)
                    param.linearRampToValueAtTime(automation.value, automation.endTime!)
                    break;
                case "exponential":
                    param.setValueAtTime(automation.value, automation.startTime)
                    param.exponentialRampToValueAtTime(automation.value, automation.endTime!)
                    break;
                case "immediate":
                    param.setValueAtTime(automation.value, automation.startTime)
                    break;
                default:
                case "curve":
                    param.setValueCurveAtTime(automation.value, automation.startTime, automation.duration!, automation.scaling)
            }
        })
    }

    return {
        name: trackOptions.name,
        part,
        soundSource: soundSourceInstance,
        outputNode: outputGain,
        sends: sendInstances,
    };
}
