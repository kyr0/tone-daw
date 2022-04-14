import { BooleanFieldDerivedProps, BooleanField } from "./BooleanField"

export interface RadioProps extends BooleanFieldDerivedProps { }

export const Checkbox = ({ ...props }: RadioProps) => <BooleanField {...props} type="checkbox" />