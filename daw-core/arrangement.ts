import { ToneAudioNode } from "tone"
import { Decibels, NormalRange, Subdivision, TimeSignature } from "tone/build/esm/core/type/Units"
import { Bus, bus, BusOptions } from "./bus"
import { EffectChainOptions } from "./effectChain"
import { gain } from "./gain"
import { Track, track, TrackOptions } from "./track"

export interface ArrangementOptions {
    tracks: Array<TrackOptions>
    masterBus?: EffectChainOptions
    // busses are ToneAudioRacks that 
    busses?: Array<BusOptions>
    // gain node right before destination
    // invisible part of the masterBus chain
    // defaults to 0 dB
    masterVolume?: Decibels
    bpm: number
    swing?: NormalRange
    swingSubdivision?: Subdivision
    timeSignature: TimeSignature
}

export interface Arrangement extends Pick<ArrangementOptions, "masterVolume" | "bpm" | "timeSignature"> {
    masterBus: Bus
    busses: Array<Bus>
    tracks: Array<Track>
    swing: NormalRange;
    swingSubdivision: Subdivision;
    outputNode: ToneAudioNode
}

export const arrangement = (arrangementOptions: ArrangementOptions): Arrangement => {

    const masterBus = bus(({
        name: "master",
        ...arrangementOptions.masterBus
    } || {
        name: "master",
        // TODO: limiter or compressor at the end of the chain
        effects: [],
    }) as BusOptions)

    const busses = (arrangementOptions.busses ? arrangementOptions.busses.map(busOptions => bus(busOptions)) : []).filter(Boolean) as Array<Bus>

    // connect busses to master bus
    busses.forEach(bus => {
        if (bus) {
            bus.outputNode.connect(masterBus!.inputNode)
        }
    })
    
    const tracks = arrangementOptions.tracks.map(trackOptions => track(trackOptions, busses))
    
    // connect tracks to master bus
    tracks.forEach(track => {
        track.outputNode.connect(masterBus!.inputNode)
    })

    console.log('arrangement', {
        masterBus: masterBus!,
        busses,
        tracks,
        masterVolume: arrangementOptions.masterVolume,
        bpm: arrangementOptions.bpm,
        swing: arrangementOptions.swing || 0,
        swingSubdivision: arrangementOptions.swingSubdivision || "8n",
        timeSignature: arrangementOptions.timeSignature || 4,
        outputNode: masterBus!.outputNode,
    })

    const masterGain = gain(arrangementOptions.masterVolume || 0)


    masterGain.toDestination()

    masterBus!.outputNode.connect(masterGain)
    
    return {
        masterBus: masterBus!,
        busses,
        tracks,
        masterVolume: arrangementOptions.masterVolume,
        bpm: arrangementOptions.bpm,
        swing: arrangementOptions.swing || 0,
        swingSubdivision: arrangementOptions.swingSubdivision || "8n",
        timeSignature: arrangementOptions.timeSignature || 4,
        outputNode: masterGain,
    }
}