import { ToneAudioNode } from "tone";
import { EffectChain, effectChain, EffectChainOptions } from "./effectChain";
import { gain } from "./gain";

export interface BusOptions extends EffectChainOptions {
    name: string;
}

export interface Bus {
    name: string;
    effectChainInstance?: EffectChain;
    inputNode: ToneAudioNode;
    outputNode: ToneAudioNode;
}

export const bus = (busOptions: BusOptions): Bus => {    
    const effectChainInstance = effectChain(busOptions)

    if (!effectChainInstance) {
        const gainNode = gain()
        // loopback bus
        return {
            name: busOptions.name,
            inputNode: gainNode,
            outputNode: gainNode,
        }
    };

    return {
        name: busOptions.name,
        effectChainInstance,
        inputNode: effectChainInstance.inputNode,
        outputNode: effectChainInstance.outputNode,
    }
}