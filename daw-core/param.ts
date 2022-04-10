import { Param, ToneAudioNode } from "tone"

export interface Params {
    [paramName: string]: Param | Params
}

// recursively gets a map of instances that only contain Param instances
export const getParams = (object: any): Params => {

    const params: Params = {}

    Object.keys(object).forEach(key => {
        const value = object[key]
        if (value instanceof Param) {
            params[key] = value
        } else if (value instanceof ToneAudioNode) {
            params[key] = getParams(value)
        }
    })
    return params
}

export const tryGetParam = (object: any, path: string): Param | undefined => {

    let signal;
    try {

        let data = {
            ...object
        }
        signal = eval(`(data.${path})`)
    } catch(e) { console.error(e) }

    console.log('signal', signal)

    return signal;
}