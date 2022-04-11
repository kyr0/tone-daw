import { ArrangementOptions } from "../../arrangement";
import { gameboyPWM } from "../instrument/gameboyPWM";

export const simpleSong: ArrangementOptions = {
    bpm: 120,
    masterVolume: -12,
    swingSubdivision: "16n",
    swing: 0.005,
    timeSignature: [4, 4],
    tracks: [{
        soundSource: gameboyPWM,
        notes: [{
            name: "C4",
            duration: '8n',
            time: 0,
            velocity: 5,
        }],
    }]
}