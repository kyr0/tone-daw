import { applyStyle } from "./function/applyStyle";
import { Color } from "./interface/Color";
import { StyleProps } from "./interface/StyleProps";

export interface BadgeProps extends StyleProps {
    bgColor: Color
    fontColor?: string
    text: string
}

export const Badge = (badgeProps: BadgeProps) =>(
  <span className={`badge ${badgeProps.className}`} style={badgeProps.style}>
    <span className={`is-${badgeProps.bgColor}`} style={applyStyle('fontColor', badgeProps, 'color')}>{badgeProps.text}</span>
  </span>
);

export interface BadgeSplittedProps extends BadgeProps {
    bgColorLeft?: Color
    textLeft: string
    fontColorLeft?: string
}

export const BadgeSplitted = (badgeSplittedProps: BadgeSplittedProps = {
    bgColorLeft: 'dark',
    bgColor: 'success',
    textLeft: 'left',
    text: 'right',
}) => (
  <span className={`badge is-split ${badgeSplittedProps.className}`} style={badgeSplittedProps.style}>
    <span className={`is-${badgeSplittedProps.bgColorLeft || 'dark'}`} style={{ color: badgeSplittedProps.fontColorLeft || '#fff' }}>{badgeSplittedProps.textLeft}</span>
    <span className={`is-${badgeSplittedProps.bgColor}`} style={{ color: badgeSplittedProps.fontColor || '#000' }}>{badgeSplittedProps.text}</span>
  </span>
)