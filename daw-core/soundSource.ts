import { Envelope, Sampler, Synth, SynthOptions, ToneAudioBuffer, ToneAudioNode } from "tone";
import { Decibels } from "tone/build/esm/core/type/Units";
import { RecursivePartial } from "tone/build/esm/core/util/Interface";
import { EffectChain, effectChain, EffectChainOptions } from "./effectChain";

// TODO: add soundfont support
// https://github.com/Tonejs/Tone.js/issues/111
export type SoundSourceType = 'synthesizer' | 'sampler'

export interface SamplesMap {
    // URL to the sample, AudioBuffer or ToneAudioBuffer
    [note: string]: ToneAudioBuffer | AudioBuffer | string;
    [midi: number]: ToneAudioBuffer | AudioBuffer | string;
}

export interface SynthesizerOptions extends Pick<RecursivePartial<SynthOptions>, "detune" | "oscillator" | "portamento"> {

    // assign many voices or play monophonic
    polyphonic?: boolean;

    // in case of polyphony, how many voices to assign
    voices?: number;
}

export type SamplerOptions = {
    samples?: SamplesMap, 
    options?: Partial<Omit<SamplerOptions, "urls">>
}

export interface SoundSourceOptions extends EffectChainOptions {

    // display name of the instrument
    name: string;

    // type of the instrument
    type: SoundSourceType;

    // sound source configuration

    // realtime creation of the sound source as a synthesized oscillator signal (subtractive synthesis)
    synthesizer?: SynthesizerOptions;

    // audio sample as basis of playback
    sampler?: SamplerOptions,

    // envelope configuration
    envelope?: Pick<Envelope, "attack" | "decay" | "sustain" | "release">;

    /**
     * -6 = -6dB half the loudness
     * 0 = mean loudness
     * +6 = double the loudness
     */
    volume: Decibels
}

export type SoundSourceNode = Synth<SynthOptions> | Sampler

export interface SoundSource {
    name: string;
    instance: SoundSourceNode;
    effectChain?: EffectChain;
    outputNode: ToneAudioNode;
}

export const soundSource = (soundSourceOptions: SoundSourceOptions): SoundSource => {

    // TODO: add soundfont support
    // https://github.com/Tonejs/Tone.js/issues/111

    let soundSourceNode: SoundSourceNode | undefined;

    if (!soundSourceOptions.sampler && !soundSourceOptions.synthesizer) {
        throw new Error('SoundSource must either be a sampler or synthesizer')
    }

    if (soundSourceOptions.sampler) {

        if (!soundSourceOptions.sampler.samples) {
            throw new Error('Sampler must have samples configured')
        }

        soundSourceNode = new Sampler(soundSourceOptions.sampler.samples, {
            ...soundSourceOptions.sampler.options,
            volume: soundSourceOptions.volume,
            attack: soundSourceOptions.envelope?.attack,
            release: soundSourceOptions.envelope?.release,
        })
    } else {

        if (!soundSourceOptions.synthesizer?.oscillator) { 
            throw new Error('Synthesizer must have an oscillator configured')
        }
        
        soundSourceNode = new Synth<SynthOptions>({
            ...soundSourceOptions.synthesizer,
            envelope: soundSourceOptions.envelope,
            volume: soundSourceOptions.volume,
        })
    }

    let effectChainInstance;

    if (soundSourceOptions.effects && soundSourceOptions.effects.length) {
        effectChainInstance = effectChain(soundSourceOptions)
        soundSourceNode.connect(effectChainInstance!.inputNode)

        return {
            name: soundSourceOptions.name,
            instance: soundSourceNode,
            effectChain: effectChainInstance,
            outputNode: effectChainInstance!.outputNode,
        }
    } else {

        return {
            name: soundSourceOptions.name,
            instance: soundSourceNode,
            effectChain: undefined,
            outputNode: soundSourceNode,
        }
    }
}