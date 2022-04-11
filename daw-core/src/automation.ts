export type AutomationType = "curve" /** setValueCurveAtTime */ | "linear" /** linearRampToValueAtTime */  | "exponential" /** exponentialRampToValueAtTime */ | "immediate" /** setValueAtTime */

// used to automate an arbitrary single parameter
export interface AutomationOptions {

    // e.g. "sampler.attack", "synthesizer.detune"
    param: string;

    // e.g. "exponential"
    type: AutomationType;

    startTime: number | string;
    
    // e.g. 0.3 or "off"
    value: any;

    // when curve is "linear" or "exponential" this is the end time of the automation
    endTime?: number | string;

    // when curve is "curve"
    duration?: number | string;

    // in case curve is "curve"
    scaling?: number;
}