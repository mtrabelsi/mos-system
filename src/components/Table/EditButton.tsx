import React from 'react'
import { Link } from "react-router-dom"
function EditButton(props) {
    const { item } = props
    const {
        _id
    } = item;
    return (<Link to={`/edit/${_id}`}>Edit</Link>)
}


export default EditButton