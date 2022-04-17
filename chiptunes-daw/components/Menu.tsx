import { PropsWithChildren } from "react";
import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface MenuProps extends StyleProps, PropsWithChildren<any>, IdProps {
}

export const Menu = ({ id, children, style }: MenuProps) => (
    <menu id={id} className="menu" style={style}>{children}</menu>
)