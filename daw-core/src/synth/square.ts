import { Synth } from "tone";

export const square = () => {
    const synth = new Synth({
        oscillator: {
            type: "square"
        },
        envelope:{
            release: 0.07
        },
        volume: -6
    }).toDestination();

    return synth;
}