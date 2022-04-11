import { getGlobal, setGlobal } from "kiss-arch"
import * as Tone from "tone/build/esm"
import { Transport } from "tone/build/esm/core/clock/Transport"
import { NormalRange, Subdivision } from "tone/build/esm/core/type/Units"
import { Arrangement } from "./arrangement"

export const TRANSPORT_NAME = "transport"

export interface TransportOptions {
    bpm: number
    swing: NormalRange
    swingSubdivision: Subdivision
    timeSignature: number
}

export interface TransportResult {
    arrangement: Arrangement
    transport: Transport
}

// singleton transport instance
export const transport = (arrangement: Arrangement): TransportResult => {

    const transportInstance = Tone.getTransport()
    transportInstance.bpm.value = arrangement.bpm || transportInstance.bpm.value
    transportInstance.swing = arrangement.swing || transportInstance.swing
    transportInstance.swingSubdivision = arrangement.swingSubdivision || transportInstance.swingSubdivision
    transportInstance.timeSignature = arrangement.timeSignature || transportInstance.timeSignature

    return {
        transport: transportInstance,
        arrangement
    }
}
