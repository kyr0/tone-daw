import { PropsWithChildren } from "react";
import { StyleProps } from "./interface/StyleProps";

export interface ToastProps extends StyleProps, PropsWithChildren<any> {
    bubblePostion?: 'left' | 'right'
    cursor?: 'pointer' | 'default'
}

export const Toast = ({ className, bubblePostion, cursor, children, style }: ToastProps) => (
    <div style={style} className={`toast from-${bubblePostion || 'left'} ${cursor} ${className}`}>
        {children}
    </div>
)