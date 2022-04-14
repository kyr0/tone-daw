import { HTMLProps, SyntheticEvent, useEffect, useState } from "react"

export interface TextFieldDerivedProps extends HTMLProps<HTMLInputElement> {
    validationMode?: 'none' | 'success' | 'warning' | 'error'
}

export interface TextFieldProps extends TextFieldDerivedProps {
    type: 'text' | 'password'
}

export const TextField = ({ ...props }: TextFieldProps) => {

    const [value, setValue] = useState(props.value || '')

    const onValueChange = (evt: SyntheticEvent) => {
        setValue((evt.target as HTMLInputElement).value)
    }

    useEffect(() => {
        setValue(props.value || '')
    }, [props.value])

    return (
        <div className="field">
            <label htmlFor={props.name}>{props.label}</label>
            <input autoComplete={props.autoComplete} type={props.type} className={`input ${props.disabled ? 'is-disabled' : ''} ${props.validationMode ? 'is-' + props.validationMode : ''} ${props.className}`} disabled={props.disabled} name={props.name} style={props.style} value={value} onChange={props.disabled ? () => {} : onValueChange} />
        </div>
    )
}