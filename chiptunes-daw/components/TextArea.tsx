import { HTMLProps, SyntheticEvent, useEffect, useState } from "react"

export interface TextFieldDerivedProps extends HTMLProps<HTMLTextAreaElement> {
    validationMode?: 'none' | 'success' | 'warning' | 'error'
}

export interface TextAreaProps extends TextFieldDerivedProps {
}

export const TextArea = ({ ...props }: TextAreaProps) => {

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
            <textarea cols={props.cols} rows={props.rows} className={`input ${props.disabled ? 'is-disabled' : ''} ${props.validationMode ? 'is-' + props.validationMode : ''} ${props.className}`} disabled={props.disabled} name={props.name} style={props.style} value={value} onChange={props.disabled ? () => {} : onValueChange} />
        </div>
    )
}