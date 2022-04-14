export interface BrProps {
    height?: number | string;
    size?: 'small' | 'medium' | 'large';
}

const calcHeight = (size: BrProps['size'], height?: number|string) => { 
    if (height) return height
    switch (size) {
        case 'small':
            return '2em';
        case 'medium':
            return '4em';
        case 'large':
            return '8em';
        default:
            return '0.5em';
    }
}

export const Br = ({ height, size }: BrProps) => <div style={{ height: calcHeight(size || 'small', height)}} />