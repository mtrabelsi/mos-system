import s from 'styled-components';
import { defaultColor, primarytColor, lightColor, secondaryColor } from '../Global/theme'

export const StyledSearchBar = s.input`
    padding: 5px;
    width: calc(100% - 20px);
    margin: 4px;
    border: 1px solid ${defaultColor};
    &:focus {
        outline: none;
        border: 1px solid ${primarytColor};
    }
`