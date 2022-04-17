import { PropsWithChildren } from "react"
import { IdProps } from "./interface/IdProps"
import { StyleProps } from "./interface/StyleProps"

export interface ModalProps extends StyleProps, PropsWithChildren<any>, IdProps {
    open?: boolean
    backdrop?: boolean
    backdropClose?: boolean
    onClose?: () => void
}

export const Modal = ({ id, open, backdrop, children, style, className, onClose, backdropClose }: ModalProps) => (
    <>
        <dialog id={id} className={`modal is-rounded ${className || ''}`} style={{ ...style, display: open ? 'block' : 'none' }}>
            {children}
        </dialog>
        {backdrop !== false && <div className="modal-backdrop" style={{ ...style, display: open ? 'block' : 'none' }} onClick={backdropClose !== false && onClose ? onClose : () => {}} />}
    </>
)


export interface ModalContentProps extends StyleProps, PropsWithChildren<any>, IdProps {
}

export const ModalContent = ({ id, children, style, className }: ModalContentProps) => (
    <>
        <div id={id} className={`modal-content ${className || ''}`} style={style}>
            {children}
        </div>
    </>
)