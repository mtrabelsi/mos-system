
export type ButtonPropType = {
    textColor?: string,
    customWidth?: string,
    customMargin?: string,
    buttonStyle?: object,
    disabled?: boolean,
    iconLeft?: any,
    textStyle?: object,
    imgStyle?: object,
    value?: string,
    hasIconLeft?: boolean,
    successMode?: boolean,
    special?: boolean,
    onClick?: (e: React.MouseEvent) => void,
    isDanger?: boolean,
    iconRight?: any,
    hasIconRight?: boolean
}