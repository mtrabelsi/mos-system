import s from 'styled-components';
import { Link } from 'react-router-dom';
import { defaultColor, lightColor, secondaryColor, smPadding } from '../Global'

export const TableItemWrapper = s.section`
    border-bottom: 1px solid silver;
    padding: 2px;
`
export const DataWrapper = s.div`
    display: flex;
    justify-content: space-between;
    padding: ${smPadding};
`
export const ID = s.div``

export const Criticality = s.div``

export const Verified = s.div``

export const Address = s.div`
    font-style: italic;
`
