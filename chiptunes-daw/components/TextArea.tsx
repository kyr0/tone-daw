import { SyntheticEvent, useEffect, useState } from "react"
import { InputProps } from "./interface/InputProps"

export interface TextFieldDerivedProps extends InputProps {
    color?: 'none' | 'success' | 'warning' | 'error'
    cols?: number
    rows?: number
}

export interface TextAreaProps extends TextFieldDerivedProps {
}

export const TextArea = ({ ...props }: TextAreaProps) => {

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
            <textarea id={props.id} cols={props.cols} rows={props.rows} className={`input ${props.disabled ? 'is-disabled' : ''} ${props.color ? 'is-' + props.color : ''} ${props.className}`} disabled={props.disabled} name={props.name} style={props.style} value={value} onChange={props.disabled ? () => {} : onValueChange} />
        </div>
    )
}