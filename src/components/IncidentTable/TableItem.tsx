import React from 'react'
import { 
    DataWrapper,
    TableItemWrapper
} from './atoms';
import { IncidentType } from '../../api/types';
import { IncidentItemType } from './types';
import { RouteComponentProps } from 'react-router';

function TableItem(props: IncidentItemType | RouteComponentProps) {
    const { incident } = props as IncidentItemType
    const { history } = props as RouteComponentProps
    
    const {
        _id,
        status,
        address,
    } = incident

    return (
        <TableItemWrapper onClick={e => history.push(`/edit/${_id}`)}> 
            <DataWrapper>
                {_id} {status.criticality} {status.verified} {address}
            </DataWrapper>
        </TableItemWrapper>
    )
}

export default TableItem