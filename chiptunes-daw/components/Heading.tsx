import { Br } from "./Br";
import { Text, TextProps } from "./Text";

export interface HeadingProps extends TextProps {
    topBr?: boolean
    bottomBr?: boolean
    dense?: boolean
}

export const Heading = ({ children, style, color, size, centered, topBr, bottomBr, dense }: HeadingProps) => (
    <>
        {(typeof topBr === 'undefined' || topBr) && !dense && <Br size="small"/>}
        <Text style={{
            ...style,
            paddingBottom: '0.5em',
            paddingTop: '0.5em',
            textDecoration: size === 'xlarge' ? 'underline' : 'none',
            display: 'block'
        }} centered={centered} color={color} size={size || 'small'} heading>{children || ''}</Text>
        {(typeof bottomBr === 'undefined' || bottomBr) && !dense && <Br size="small"/>}
    </>
)