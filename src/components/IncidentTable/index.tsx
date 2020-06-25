import React, { PropsWithChildren } from 'react'
import { FullIncidentTablePropsType, IncidentTableProps } from './types'
import TableItem from './TableItem'
import { IncidentType } from '../../api/types'
import { RouteChildrenProps } from 'react-router'

const IncidentTable :  React.FC<FullIncidentTablePropsType> = (props) => {
  const { incidents } = props as IncidentTableProps
  const { history } = props as RouteChildrenProps
  return (<section>

    {incidents.length > 0 && incidents.map(incd => (<TableItem key={incd._id}
        incident={incd} 
        history={history}
    />))}

    {incidents.length === 0 && 
    <div>No Item found!</div>}

</section>)
  
}

export default IncidentTable;