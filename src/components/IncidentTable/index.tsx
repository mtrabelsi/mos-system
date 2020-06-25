import React from 'react'
import Table from '../Table'

function IncidentTable(props) {
  const { items } = props
  return (<Table 
    data={items}
  />)
}

export default IncidentTable;