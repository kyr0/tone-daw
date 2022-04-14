import { SyntheticEvent, useEffect, useState } from "react"
import { StyleProps } from "./interface/StyleProps"

export interface BooleanFieldDerivedProps extends StyleProps {
    name: string
    value: string
    label: string
    checked?: boolean
    disabled?: boolean
}

export interface BooleanFieldProps extends BooleanFieldDerivedProps {
    type: 'radio' | 'checkbox'
}

export const BooleanField = ({ ...props }: BooleanFieldProps) => {

    const [value, setValue] = useState(props.value || '')
    const [checked, setChecked] = useState<boolean>(props.checked || false)

    const onValueChange = (evt: SyntheticEvent) => {
        setChecked((evt.target as HTMLInputElement).checked)
        setValue((evt.target as HTMLInputElement).value)
    }

    useEffect(() => {
        setValue(props.value || '')
        setChecked(props.checked || false)
    }, [props.value, props.checked])

    return (
        <label className={`is-${props.type}`}>
            <input type={props.type} className={`${props.type} ${props.disabled ? 'is-disabled' : ''} ${props.className}`} disabled={props.disabled} name={props.name} style={props.style} value={value} checked={checked} onChange={props.disabled ? () => {} : onValueChange} />
            <span>{props.label}</span>
        </label>
    )
}