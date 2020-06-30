import s from 'styled-components';
import { Link } from 'react-router-dom';
import { smPadding, primarytColor, dangerColor, defaultColor } from '../Global'

export const TableItemWrapper = s.section`
    border-bottom: 1px solid silver;
    padding: 2px;
    :hover {
        cursor: pointer;
        animation-name: example;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        @keyframes example {
            from {
                border-bottom: 1px solid silver;
            }
            to {
                border-bottom: 1px solid ${primarytColor};
                background-color: rgba(60, 116, 59, 0.1);
            }
          }
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

export const Criticality = s(UppercaseDiv)<any>`
    color: ${p => p.isCritical === true ? 'red' : defaultColor }
`

export const Verified = s(UppercaseDiv)<any>`
    color: ${p => p.isTrue ? primarytColor : dangerColor}
`

export const Address = s.div`
    font-style: italic;
`
