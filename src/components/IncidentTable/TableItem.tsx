import React from 'react'
import { RouteComponentProps } from 'react-router';
import { 
    DataWrapper,
    TableItemWrapper,
    ID,
    Criticality,
    Verified,
    Address
} from './atoms';
import { IncidentType } from '../../api/types';
import { IncidentItemType } from './types';

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
                <Criticality isCritical={status.criticality.toUpperCase() === 'CRITICAL'}>
                    {status.criticality}
                </Criticality>
                <Verified isTrue={status.verified}>
                    {status.verified === true ?  'Verified' : 'Not verified'}
                </Verified>
            </DataWrapper>
            
            <DataWrapper>
                <ID>{_id}</ID>
            </DataWrapper>

            <DataWrapper>
                <Address>{address}</Address>
            </DataWrapper>
        </TableItemWrapper>
    )
}

export default TableItem