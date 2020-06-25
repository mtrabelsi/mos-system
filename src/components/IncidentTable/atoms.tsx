import s from 'styled-components';
import { Link } from 'react-router-dom';
import { defaultColor, lightColor, secondaryColor } from '../Global/theme'
import  '../Global/theme.scss'

export const TableItemWrapper = s.section`
    border-bottom: 1px solid silver;
    padding: 2px;
`
export const DataWrapper = s.div`
    display: flex;
    justify-content: space-between;
`
