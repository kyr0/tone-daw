export const applyStyle = (
  name: string,
  props: any,
  styleKeyName: string = name,
) => {
  const style: any = {};
  style[styleKeyName] = props[name];
  return style;
};
