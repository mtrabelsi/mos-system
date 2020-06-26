import React, { useState } from 'react'
import {
    RightNavigator,
    LeftNavigator,
    PaginationWrapper
} from './atoms'
import { PaginationCPropType, PageChangeSignature } from './types'
import { ControlButtons, Button } from '../Button/atoms'
import leftArrow from './../../icons/left-arrow.png'
import rightArrow from './../../icons/right-arrow.png'

function Pagination(props: PaginationCPropType) {
    const { 
        limit, 
        offset, 
        setFilter, 
        lastQueriedLength,
        itemsCountPerPage,
        leftLabel,
        rightLabel
    }  = props
    const FIRST_PAGE = 1
    const [activePage, setActivePage] = useState<number>(FIRST_PAGE)
    const handlePageChange : PageChangeSignature = (newPage) => {
        setFilter({
            limit,
            offset: newPage * limit,
            pageNumber: newPage
        })
        setActivePage(newPage)
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
       {/*<ControlButtons>
            <Button
                customMargin="5px 0"
                customWidth="280px"
                iconLeft={leftArrow}
                hasIconLeft
                onClick={e => history.goBack()}
                value="Prev" 
            />
            <Button
                customMargin="5px 0"
                customWidth="280px"
                iconRight={rightArrow}
                hasIconRight
                onClick={e => history.goBack()}
                value="Next" 
            />
       </ControlButtons>*/}
    </PaginationWrapper>)
}

export default Pagination