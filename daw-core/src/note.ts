import { Frequency, Time } from "tone/build/esm/core/type/Units";

export interface Note {
    name: Frequency,
    duration: Time,
    time: Time,
    velocity: number,
}