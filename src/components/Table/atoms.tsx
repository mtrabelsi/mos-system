import s from 'styled-components';
import { defaultColor, lightColor, secondaryColor } from '../Global/theme'
import  '../Global/theme.scss'


export const StyledTableItem = s.section`
    border-bottom: 1px solid silver;
    padding: 2px;
`
export const UserDataWrapper = s.div`
    display: flex;
    justify-content: space-between;
`
export const OtherDataWrapper = s.div`
    display: flex;
    justify-content: space-between;
`