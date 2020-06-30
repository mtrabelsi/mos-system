import React, { useState } from 'react'
import {
    RightNavigator,
    LeftNavigator,
    PaginationWrapper
} from './atoms'
import { PaginationCPropType, PageChangeSignature } from './types'

const FIRST_PAGE = 1

function Pagination(props: PaginationCPropType) {
    const { 
        limit, 
        offset, 
        setFilter, 
        lastQueriedLength,
        itemsCountPerPage,
        leftLabel,
        rightLabel,
        activePage
    }  = props
    const handlePageChange : PageChangeSignature = (newPage) => {
        setFilter({
            limit,
            offset: newPage * limit,
            pageNumber: newPage
        })
    }
    return (<PaginationWrapper>

        <LeftNavigator 
            disabled={activePage === FIRST_PAGE}
            onClick={(e: React.MouseEvent) => handlePageChange(activePage-1)}
        >
            {(leftLabel || 'Prev').toUpperCase()}
        </LeftNavigator>
        <RightNavigator 
            onClick={(e: React.MouseEvent) => handlePageChange(activePage+1)}
            disabled={lastQueriedLength < itemsCountPerPage}
        >
            {(rightLabel || 'Next').toUpperCase()}
        </RightNavigator>

    </PaginationWrapper>)
}

export default Pagination