import { ToneAudioNode } from "tone"
import { Decibels } from "tone/build/esm/core/type/Units"
import { Bus } from "./bus"
import { gain } from "./gain"

export interface SendOptions {
    busName: string
    gain: Decibels
}

export interface Send {
    bus: Bus,
    inputNode: ToneAudioNode,
    outputNode: ToneAudioNode,
}

export const send = (sendOptions: SendOptions, busses: Array<Bus>): Send => {

    const inputGain = gain(sendOptions.gain)
    const bus = busses.find(bus => bus.name === sendOptions.busName)

    if (!bus) {
        throw new Error(`send: bus "${sendOptions.busName}" not found`)
    }

    // connect input to bus effect chain
    inputGain.connect(bus.inputNode)

    return {
        bus,
        inputNode: inputGain,
        outputNode: bus.outputNode,
    }
}