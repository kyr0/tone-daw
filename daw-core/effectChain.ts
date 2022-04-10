import { Freeverb, JCReverb, Phaser, PitchShift, FrequencyShifter, PingPongDelay, Compressor, FeedbackDelay, Chorus, Tremolo, BitCrusher, Chebyshev, StereoWidener, Vibrato, Distortion, AutoWah, Filter, EQ3, PhaserOptions, FreeverbOptions, JCReverbOptions, PitchShiftOptions, AutoWahOptions, BitCrusherOptions, ChebyshevOptions, ChorusOptions, CompressorOptions, DistortionOptions, FilterOptions, PingPongDelayOptions, StereoWidenerOptions, TremoloOptions, VibratoOptions, ToneAudioNode, MidSideSplit, MidSideMerge } from "tone";
import { Decibels, Frequency, Time } from "tone/build/esm/core/type/Units";

export type EffectName = 
    'reverbFree' | 
    'reverbJC' | 
    'phaseShift' | 
    'pitchShift'| 
    'frequencyShifter' | 
    'pingPongDelay' | 
    'compressor' | 
    'feedbackDelay' | 
    'chorus' | 
    'phaser' | 
    'tremolo' | 
    'wahWah' | 
    'bitcrusher' | 
    'distortion' | 
    'feedbackDelay' | 
    'chebyshev' | 
    'stereoWidener' | 
    'vibrato' | 
    'eq' | 
    'tremolo' |
    'filter'

export interface FeedbackDelayOptions {
    delayTime: Time;
    maxDelay: Time;
}

export interface FrequencyShifterOptions {
    frequency: Frequency;
}

export interface EQ3Options {
    low: Decibels;
    mid: Decibels;
    high: Decibels;
    lowFrequency: Frequency;
    highFrequency: Frequency;
}

export interface EffectOptions {
    reverbFree?: Partial<Pick<FreeverbOptions, "dampening" | "roomSize" | "wet">>,
    reverbJC?: Partial<Pick<JCReverbOptions, "roomSize" | "wet">>,
    pitchShift?: Partial<Pick<PitchShiftOptions, "pitch" | "wet" | "delayTime" | "feedback" | "windowSize">>,
    frequencyShifter?: Partial<Pick<FrequencyShifterOptions, "frequency">>,
    pingPongDelay?: Partial<Pick<PingPongDelayOptions, "delayTime" | "maxDelay" | "wet" | "feedback">>,
    feedbackDelay?: Partial<FeedbackDelayOptions>,
    chorus?: Partial<Pick<ChorusOptions, "frequency" | "delayTime" | "depth" | "spread" | "wet" | "feedback" | "type">>,
    phaser?: Partial<Pick<PhaserOptions, "frequency" | "octaves" | "baseFrequency" | "wet" | "Q">>,
    tremolo?: Partial<Pick<TremoloOptions, "frequency" | "depth" | "wet" | "spread" | "type">>,
    wahWah?: Partial<Pick<AutoWahOptions, "baseFrequency" | "octaves" | "sensitivity" | "Q" | "wet" | "follower" | "gain">>,
    bitcrusher?: Partial<Pick<BitCrusherOptions, "bits" | "wet">>,
    chebyshev?: Partial<Pick<ChebyshevOptions, "order" | "oversample" | "wet">>,
    compressor?: Partial<Pick<CompressorOptions, "attack"| "knee" | "ratio" | "release" | "threshold">>,
    distortion?: Partial<Pick<DistortionOptions, "distortion" | "wet" | "oversample">>,
    filter?: Partial<Pick<FilterOptions, "detune" | "gain" | "Q" | "frequency" | "rolloff" | "type">>,
    stereoWidener?: Partial<Pick<StereoWidenerOptions, "width" | "wet">>,
    vibrato?: Partial<Pick<VibratoOptions, "frequency" | "depth" | "wet" | "maxDelay" | "type">>,
    eq?: Partial<EQ3Options>,
}

export interface EffectChainOptions extends EffectOptions {
    // active effect names, order matters for routing
    effects: Array<EffectName>;
    // all effects named here are only effect the mid signal of mid/side mixing
    mid?: EffectChainOptions;
    // all effects named here are only effect the side of mid/side mixing
    side?: EffectChainOptions;
}

export interface Effect {
    name: EffectName;
    instance: ToneAudioNode;
}

export const createEffectInstances = (effectChainOptions: EffectChainOptions) => {

    const effectInstanceChain: Array<Effect> = []

    if (!effectChainOptions.effects) return effectInstanceChain;

    // create actual effect instances
    effectChainOptions.effects.map(effectName => {
        switch (effectName) {
            case 'reverbFree':
                return effectInstanceChain.push({
                    name: 'reverbFree',
                    instance: new Freeverb(effectChainOptions[effectName])
                });
            case 'reverbJC':
                return effectInstanceChain.push({
                    name: 'reverbJC',
                    instance: new JCReverb(effectChainOptions[effectName])
                });
            case 'phaser':
                return effectInstanceChain.push({
                    name: 'phaser',
                    instance: new Phaser(effectChainOptions[effectName])
                });
            case 'pitchShift':
                return effectInstanceChain.push({
                    name: 'pitchShift',
                    instance: new PitchShift(effectChainOptions[effectName])
                });
            case 'frequencyShifter':
                return effectInstanceChain.push({
                    name: 'frequencyShifter',
                    instance: new FrequencyShifter(effectChainOptions[effectName])
                });
            case 'pingPongDelay':
                return effectInstanceChain.push({
                    name: 'pingPongDelay',
                    instance: new PingPongDelay(effectChainOptions[effectName])
                });
            case 'compressor':
                return effectInstanceChain.push({
                    name: 'compressor',
                    instance: new Compressor(effectChainOptions[effectName])
                });
            case 'feedbackDelay':
                return effectInstanceChain.push({
                    name: 'feedbackDelay',
                    instance: new FeedbackDelay(effectChainOptions[effectName])
                });
            case 'chorus':
                return effectInstanceChain.push({
                    name: 'chorus',
                    instance: new Chorus(effectChainOptions[effectName])
                });
            case 'phaser':
                return effectInstanceChain.push({
                    name: 'phaser',
                    instance: new Phaser(effectChainOptions[effectName])
                });
            case 'tremolo':
                return effectInstanceChain.push({
                    name: 'tremolo',
                    instance: new Tremolo(effectChainOptions[effectName])
                });
            case 'wahWah':
                return effectInstanceChain.push({
                    name: 'wahWah',
                    instance: new AutoWah(effectChainOptions[effectName])
                });
            case 'bitcrusher':
                return effectInstanceChain.push({
                    name: 'bitcrusher',
                    instance: new BitCrusher(effectChainOptions[effectName])
                });
            case 'distortion':
                return effectInstanceChain.push({
                    name: 'distortion',
                    instance: new Distortion(effectChainOptions[effectName])
                });
            case 'feedbackDelay':
                return effectInstanceChain.push({
                    name: 'feedbackDelay',
                    instance: new FeedbackDelay(effectChainOptions[effectName])
                });
            case 'chebyshev':
                return effectInstanceChain.push({
                    name: 'chebyshev',
                    instance: new Chebyshev(effectChainOptions[effectName])
                });
            case 'stereoWidener':
                return effectInstanceChain.push({
                    name: 'stereoWidener',
                    instance: new StereoWidener(effectChainOptions[effectName])
                });
            case 'vibrato':
                return effectInstanceChain.push({
                    name: 'vibrato',
                    instance: new Vibrato(effectChainOptions[effectName])
                });
            case 'eq':  
                return effectInstanceChain.push({
                    name: 'eq',
                    instance: new EQ3(effectChainOptions[effectName]!)
                });
            case 'filter':
                return effectInstanceChain.push({
                    name: 'filter',
                    instance: new Filter(effectChainOptions[effectName])
                });
            default:
                return null;
        }
    });
    return effectInstanceChain
}

export interface EffectChain {
    effectInstances: Array<Effect>;
    mid?: EffectChain;
    side?: EffectChain;
    inputNode: ToneAudioNode;
    outputNode: ToneAudioNode;
}

export const effectChain = (effectChainOptions: EffectChainOptions): EffectChain | undefined => {

    const hasMidOrSideRouting = effectChainOptions.mid || effectChainOptions.side;

     const effects: Array<Effect> = createEffectInstances(effectChainOptions);

     if (!effects.length) return;

    // connect effects in the right order
    effects[0].instance.chain(...effects.slice(1).map(effect => effect.instance));
    
    if (hasMidOrSideRouting) {

        const midSideSplitEffect = new MidSideSplit();

        let midChainEndNode: ToneAudioNode | undefined = undefined;
        let sideChainEndNode: ToneAudioNode | undefined = undefined;
        let effectsForMid: Array<Effect> = [];
        let effectsForSide: Array<Effect> = [];

        if (effectChainOptions.mid) {
            effectsForMid = createEffectInstances(effectChainOptions.mid);
            midChainEndNode = midSideSplitEffect.mid.chain(...effectsForMid.map(effect => effect.instance));
        }

        if (effectChainOptions.side) {
            effectsForSide = createEffectInstances(effectChainOptions.side);
            sideChainEndNode = midSideSplitEffect.side.chain(...effectsForSide.map(effect => effect.instance));
        }

        const midSideMergeEffect = new MidSideMerge();

        if (midChainEndNode) {
            midSideMergeEffect.connect(midChainEndNode);
        }

        if (sideChainEndNode) {
            midSideMergeEffect.connect(sideChainEndNode);
        }

        if (effects[0]) {
            midSideMergeEffect.connect(effects[0].instance);
        }
        
        return {
            mid: {
                effectInstances: effectsForMid,
                inputNode: effectsForMid[0].instance,
                outputNode: effectsForMid[effectsForMid.length - 1].instance
            },
            side: {
                effectInstances: effectsForSide,
                inputNode: effectsForSide[0].instance,
                outputNode: effectsForSide[effectsForSide.length - 1].instance
            },
            effectInstances: effects,
            inputNode: midSideSplitEffect,
            outputNode: effects[0] ? effects[effects.length - 1].instance : midSideMergeEffect
        }

    } else {

        return {
            effectInstances: effects,
            inputNode: effects[0].instance,
            outputNode: effects[effects.length - 1].instance
        }
    }
}