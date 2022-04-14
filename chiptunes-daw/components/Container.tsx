import { PropsWithChildren } from "react";
import { StyleProps } from "./interface/StyleProps";

export interface ContainerProps extends PropsWithChildren<any>, StyleProps {
    title?: string
    alignTitle?: 'left' | 'center' | 'right'
    align?: 'left' | 'right' | 'center'
    roundedCornders?: boolean
}

const alignTitleCenterStyle = { marginLeft: 'auto', marginRight: 'auto'}

const alignTitleRightStyle = { marginLeft: 'auto', marginRight: 0 }

export const Container = ({ title, children, style, roundedCornders, align, alignTitle }: ContainerProps) => (
  <section className={`container ${title ? 'with-title' : ''} ${roundedCornders ? 'is-rounded' : ''}  ${align ? 'is-' + align : ''}`} style={style}>
    {title && (<h3 className={`title`} style={{ ...style, ...alignTitle === 'center' ? alignTitleCenterStyle : alignTitle === 'right' ? alignTitleRightStyle : {}}}>{title}</h3>)}
    {children}
  </section>
)
