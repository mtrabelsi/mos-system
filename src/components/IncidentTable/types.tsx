import { IncidentType } from "../../api/types"
import { RouteComponentProps } from "react-router"
import { PropsWithChildren } from "react"

export type IncidentTableProps = {
    incidents: Array<IncidentType>
}

export type FullIncidentTablePropsType = RouteComponentProps | PropsWithChildren<IncidentTableProps>

export type DataType = {
    id: string,
}

export type TableItemProps = {
    itemData: DataType,
    itemClickHandler: (id: string) => void
}

export type IncidentItemType = {
    incident: IncidentType;
}