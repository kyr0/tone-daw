import { PropsWithChildren } from "react"
import { StyleProps } from "./interface/StyleProps"

export interface ModalProps extends StyleProps, PropsWithChildren<any> {
    open?: boolean
}

export const Modal = ({ open, children, style }: ModalProps) => (
    <dialog className="dialog" style={{ ...style, display: open ? 'block' : 'none' }}>
        {children}
    </dialog>
)