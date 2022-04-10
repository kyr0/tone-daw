import { NoiseSynth, NoiseSynthOptions } from "tone";
import { RecursivePartial } from "tone/build/esm/core/util/Interface";

export const noise = (options: RecursivePartial<NoiseSynthOptions> | undefined) => 
    new NoiseSynth(options).toDestination();