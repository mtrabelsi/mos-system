import s from 'styled-components';
import { Link } from 'react-router-dom';
import { smPadding, primarytColor } from '../Global'

export const TableItemWrapper = s.section`
    border-bottom: 1px solid silver;
    padding: 2px;
    :hover {
        border: 1px solid ${primarytColor};
        cursor: pointer;
        transform: scale(1.1);
        -webkit-transition: all 0.2s ease-in-out;
    }
`
const UppercaseDiv = s.div`
    text-transform: uppercase;
`
export const DataWrapper = s.div`
    display: flex;
    justify-content: space-between;
    padding: ${smPadding};
`
export const ID = s.div``

export const Criticality = s(UppercaseDiv)``

export const Verified = s(UppercaseDiv)``

export const Address = s.div`
    font-style: italic;
`
