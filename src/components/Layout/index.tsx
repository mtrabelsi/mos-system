import React from 'react';
import {LayoutMain, LayoutTopBar, LayoutTitle} from './atoms';
import Button from '../Button';
import { title } from 'process';
import iconLeft from './../../icons/left-arrow.png'
import { primarytColor } from '../Global';

type LayoutProps = {
    children : React.ReactNode,
    showBackButton: boolean,
    style?: object,
    title: string,
    topBarStyle?: object,
    history: any
}


export const  Layout: React.FC<LayoutProps> = (props) => {
    const { 
        showBackButton, 
        style, 
        history, 
        title,
        topBarStyle
    } = props as LayoutProps
    return(<LayoutMain>

        <LayoutTopBar style={{...topBarStyle, flexWrap: 'wrap'}}>
            {showBackButton &&<Button 
                hasIconLeft
                textColor={primarytColor}
                iconLeft={iconLeft}
                onClick={e => history.goBack()}
                value="Back"
            />}
            {title !== '' && <LayoutTitle>{title}</LayoutTitle>}
        </LayoutTopBar>

        {props.children}
        
    </LayoutMain>)
}


export default Layout;