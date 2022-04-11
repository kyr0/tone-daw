import { getGlobal, setGlobal } from "kiss-arch";
import { Synth } from "tone";

const PULSE1_NAME = "pulse1";

export const pulse = (width: number = 0.5, ) => {

    const synth = getGlobal<Synth>(PULSE1_NAME) || new Synth({
        oscillator: {
            type: "pulse",
            width
        },
        envelope:{
            release: 0.07
        },
        volume: -6
    }).toDestination()

    setGlobal(PULSE1_NAME, synth)

    return synth;
}