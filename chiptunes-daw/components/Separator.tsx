import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface SeparatorProps extends StyleProps, IdProps {
}

// TODO: also build spacer that takes max. space between elements horizontally
export const Separator = ({ id, style, className }: SeparatorProps) => (
    <div id={id} className={`separator ${className || ''}`} style={style} />
)