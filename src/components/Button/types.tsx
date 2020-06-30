
export type ButtonPropType = {
    textColor?: string,
    customWidth?: string,
    customMargin?: string,
    buttonStyle?: object,
    disabled?: boolean,
    iconLeft?: any,
    isSpecial?: boolean,
    textStyle?: object,
    imgStyle?: object,
    value?: string,
    iconLeftStyle?: object,
    hasIconLeft?: boolean,
    successMode?: boolean,
    outlineMode?: boolean,
    special?: boolean,
    onClick?: (e: React.MouseEvent) => void,
    isDanger?: boolean,
    iconRight?: any,
    hasIconRight?: boolean
}