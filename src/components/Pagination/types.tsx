import { SearchFilter } from "../../pages/List/types"

export type PaginationCPropType = {
    itemsCountPerPage: number,
    limit: number, 
    offset:number, 
    pageNumber?: number,
    lastQueriedLength: number,
    leftLabel?: string,
    rightLabel?: string,
    activePage?: number,
    setFilter: (p: SearchFilter) => void
}

export type PageChangeSignature = (n: number) => void