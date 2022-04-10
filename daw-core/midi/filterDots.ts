export const filterDots = (value: string|number) => {
    if (typeof value === 'string') {
        return value.replace('1/64', '64n')
            .replace('1/32', '32n')
            .replace('1/16', '16n')
            .replace('1/8', '8n')
            .replace('1/4', '4n')
            .replace('1/2', '2n');
    }
    return value
}