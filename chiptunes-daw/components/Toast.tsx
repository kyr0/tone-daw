import { PropsWithChildren } from "react";
import { StyleProps } from "./interface/StyleProps";

export interface ToastProps extends StyleProps, PropsWithChildren<any> {
    bubblePostion?: 'left' | 'right'
    cursor?: 'pointer' | 'default'
}

export const Toast = ({ className, bubblePostion, cursor, children, style }: ToastProps) => (
    <p style={style} className={`balloon from-${bubblePostion || 'left'} ${cursor} ${className}`}>
        {children}
    </p>
)