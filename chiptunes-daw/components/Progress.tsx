import { IdProps } from "./interface/IdProps";
import { StyleProps } from "./interface/StyleProps";

export interface ProgressProps extends StyleProps, IdProps {
    value: number | string;
    max?: number | string;
    color?: 'primary' | 'success' | 'error' | 'warning' | 'pattern';
}

export const Progress = ({ id, value, max, style, color }: ProgressProps) => {
    return (
        <progress id={id} className={`progress is-${color}`} style={style} value={value} max={max}></progress>
    );
};