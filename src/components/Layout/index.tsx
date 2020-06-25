import React from 'react';
import {LayoutMain} from './atoms';

type LayoutProps = {
    children : React.ReactNode
}

export const  Layout: React.FC<LayoutProps> = (props) => {
    return(<LayoutMain>
        {props.children}
    </LayoutMain>)
}


export default Layout;