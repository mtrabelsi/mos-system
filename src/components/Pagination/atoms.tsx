 
import s from 'styled-components';
import { Button } from '../Button/atoms';


export const RightNavigator = s(Button) `
    margin-top: 10px
`
export const LeftNavigator = s(Button) `
    margin-top: 10px
`
export const PaginationWrapper = s.section`
    display: flex;
    justify-content: space-between;
    padding: 7px;
    flex-wrap: wrap;
    margin-top: 20px;
`