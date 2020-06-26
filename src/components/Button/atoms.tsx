import s from 'styled-components'
import {
    primarytColor,
    smFontSize,
    fontFamily,
    mdFontSize,
    defaultBackgroundImage,
    veryLightColor,
    defaultBoxShadow,
    specialBoxShadow,
    dangerColor,
    defaultColor,
    successColor
} from './../Global'
import { ButtonPropType } from './types'

const decideBackground = (p: ButtonPropType) => {
  if(p.successMode) {
    return successColor;
  } else if(p.isDanger) {
    return dangerColor;
  } else {
    return defaultColor;
  }
}
export const Button = s.button<ButtonPropType>`
  width: ${p => p.customWidth || 'default'};
  opacity: ${p => p.disabled ? 0.3 : 1};
  cursor: ${p => p.disabled ? 'none': 'pointer'};
  pointer-events: ${p => p.disabled ? 'none' : 'initial'};
  box-shadow: ${p => p.successMode? specialBoxShadow : defaultBoxShadow};
  background: ${p => decideBackground(p)};
  margin: ${p => p.customMargin || '0px'};
  border: none;
  color: ${p => p.textColor || veryLightColor};
  padding: 5px 0;
  outline: none;
  min-width: 200px;
  height: 40px;
  border-radius: 3px;
  position: relative;
  font-family: ${fontFamily};
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonText = s.span`
  font-size: ${mdFontSize};
  font-family: ${fontFamily};
  font-style: normal;
  text-transform: uppercase;
`

export const ControlButtons = s.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`