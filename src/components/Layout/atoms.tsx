import s from 'styled-components';
import { defaultColor, tabletWidth, titleFontSize } from '../Global'

export const LayoutMain = s.main`
    padding: 20px;
    //ALWAYS centred
    max-width: ${tabletWidth};
    margin: 0 auto;
    color: ${defaultColor};
`

export const LayoutTitle = s.h1`
    font-size: ${titleFontSize};
`
export const LayoutTopBar = s.section`
    display: flex;
    justify-content: space-between;
`