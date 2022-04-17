import { SyntheticEvent, useEffect, useState } from "react"
import { IdProps } from "./interface/IdProps"
import { InputProps } from "./interface/InputProps"
import { StyleProps } from "./interface/StyleProps"

export interface TextFieldDerivedProps extends StyleProps, IdProps, InputProps {
    color?: 'none' | 'success' | 'warning' | 'error',
}

export interface TextFieldProps extends TextFieldDerivedProps {
    type: 'text' | 'password'
}

export const TextField = ({ ...props }: TextFieldProps) => {

    const [value, setValue] = useState(props.value || '')

    const onValueChange = (evt: SyntheticEvent) => {
        setValue((evt.target as HTMLInputElement).value)

        if (props.onChange) {
            props.onChange((evt.target as HTMLInputElement).value, evt)
        }
    }

    useEffect(() => {
        setValue(props.value || '')
    }, [props.value])

    return (
        <div className="field">
            <label htmlFor={props.name}>{props.label}</label>
            <input id={props.id} autoComplete={props.autoComplete} type={props.type} className={`input ${props.disabled ? 'is-disabled' : ''} ${props.color ? 'is-' + props.color : ''} ${props.className}`} disabled={props.disabled} name={props.name} style={props.style} value={value} onChange={props.disabled ? () => {} : onValueChange} />
        </div>
    )
}