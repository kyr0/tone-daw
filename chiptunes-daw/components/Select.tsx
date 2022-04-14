import { HTMLProps, SyntheticEvent, useEffect, useState } from "react"

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
    validationMode?: 'none' | 'success' | 'warning' | 'error'
}

export const Select = ({ ...props }: SelectProps) => {

    const [value, setValue] = useState(props.value)

    const onValueChange = (evt: SyntheticEvent) => {
        setValue((evt.target as HTMLSelectElement).value)
    }

    useEffect(() => {
        setValue(props.value)
    }, [props.value, props.multiple])

    return (
        <>
        <label htmlFor={props.id || props.htmlFor}>{props.label}</label>
        <div className={`select ${props.multiple ? 'is-multiple': ''} ${props.validationMode ? 'is-' + props.validationMode : ''} ${props.className}`}>
            <select value={value} onChange={props.disabled ? () => {} : onValueChange} disabled={props.disabled} className={`${props.disabled ? 'is-disabled' : ''}`} multiple={props.multiple} required={props.required} id={props.id || props.htmlFor}>
                {props.children}
            </select>
        </div>
        </>
    )
}