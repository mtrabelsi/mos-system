import React from 'react';
import {LayoutMain, LayoutTopBar, LayoutTitle} from './atoms';
import Button from '../Button';
import { title } from 'process';

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
                onClick={e => history.goBack()}
                value="Home"
            />}
            {title !== '' && <LayoutTitle>{title}</LayoutTitle>}
        </LayoutTopBar>

        {props.children}
        
    </LayoutMain>)
}


export default Layout;