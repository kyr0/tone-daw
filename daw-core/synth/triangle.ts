import { Synth } from "tone";

export const triangle = () => {
    const synth = new Synth({
        oscillator: {
            type: "triangle"
        },
        envelope: {

            attack:0.005,
            decay:0.1,
            sustain:0.3,
            release:1
        },
        volume: -6
    }).toDestination();

    return synth;
}