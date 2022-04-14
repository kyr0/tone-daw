import { StyleProps } from "./interface/StyleProps";

export interface ProgressProps extends StyleProps {
    value: number | string;
    max?: number | string;
    barStyle?: 'primary' | 'success' | 'error' | 'warning' | 'pattern';
}

export const Progress = ({ value, max, style, barStyle }: ProgressProps) => {
    return (
        <progress className={`progress is-${barStyle}`} style={style} value={value} max={max}></progress>
    );
};