 
import React from 'react'
import s from 'styled-components'
import {
    primarytColor,
    secondaryColor,
    lightColor,
    smFontSize,
    fontFamily,
    successColor,
    defaultBoxShadow
  } from './../Global'

export const InputWrap = s.div<any>`
  border-bottom: 1px solid ${lightColor};
  display: flex;
  width: 100%;
  :focus-within {
    border-bottom: 2px solid ${successColor};
  }
  box-shadow: ${p => p.isInputSearch === true ? 'none' :  defaultBoxShadow};
  padding: ${p => p.isInputSearch === true ? 'default' :  '5px'};
`
export const Input = s.input`
  color: ${lightColor};
  background-color: transparent;
  padding: 5px 0;
  border: none;
  outline: none;
  width: 100%;
  font-size: ${smFontSize};
  font-family: ${fontFamily};
  ::placeholder {
    color: ${lightColor};
    font-family: ${fontFamily};
    opacity: 0.4;
  }
  :focus {
  }
`
export const Img = s.img`
  height: 20px;
  padding: 9px;
  cursor: pointer;
`
export const Label = s.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 6px 0;
`
export const LabelText = s.span`
  width: 100%;
  text-transform: uppercase;
  margin-bottom: 5px;
`