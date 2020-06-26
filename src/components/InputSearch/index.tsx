import React, { Component } from 'react';
import SearchIcon from './../../icons/search.png'
import CloseIcon from './../../icons/close.png'

import InputText from './../InputText'
import { InputSearchWrap, MarginFix } from './atoms';

const InputSearch : React.FC<any> = (props) => {
    const isInputDirty = props.value!== ''
    return(<InputSearchWrap
              style={props.containerStyle}
            >
            <MarginFix>
              <InputText
                isInputSearch={true}
                placeholder={props.placeholder || 'Placeholder not set!'}
                rightIcon={isInputDirty ? CloseIcon : SearchIcon}
                rightIconClickHandler={() => props.rightIconClickHandler(isInputDirty)}
                onChange={props.onChange}
                value={props.value}
                hasIconRight={true}
                primaryBorder={true}
                primaryColor={true}
              />
            </MarginFix>

        </InputSearchWrap>)
}

export default InputSearch