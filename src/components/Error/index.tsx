import React from 'react'
import s from 'styled-components'

const ErrorC = s.section`
    color: red;
`
type ErrorPropsType = {
    errorMsg : string
}
function Error(props) {
    return (<ErrorC>
        {props.errorMsg}
    </ErrorC>)
}

export default Error