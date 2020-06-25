import React from 'react'
import { 
    StyledTableItem,
    UserDataWrapper,
    OtherDataWrapper
} from './atoms';
import EditButton from './EditButton';
import { IncidentType } from '../../api/types';

type IncidentItemType = {
    itemData: IncidentType;
}
function TableItem(props: IncidentItemType) {
    const { itemData } = props
    const {
        _id,
        status,
        address,
    } = itemData
    return (<StyledTableItem key={_id}>
        <UserDataWrapper>
            {_id} {status.criticality} {status.verified} {address}
        </UserDataWrapper>
        <OtherDataWrapper>
            <EditButton item={itemData} />
        </OtherDataWrapper>
    </StyledTableItem>)
}

export default TableItem