import { Size } from "./interface/Size";
import { StyleProps } from "./interface/StyleProps";

export type IconName = 'pixelicon-checkmark'

export interface PixelIconProps extends StyleProps {
    name: IconName | string // custom pixelicon
    size?: Size
    borderColor?: string
}

export const PixelIcon = (props: PixelIconProps) => (
    <span className={`pixelicon is-size-${props.size || 'medium'}`} style={props.style}>
        <span className={props.name} />
    </span>
)