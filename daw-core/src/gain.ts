import { Gain } from "tone";
import { Decibels } from "tone/build/esm/core/type/Units";

export const gain = (volume?: Decibels) => new Gain({
    units: "decibels",
    gain: volume
})