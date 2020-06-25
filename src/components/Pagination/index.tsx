import React from 'react'
import Pagination from "react-js-pagination";
import s from 'styled-components';
import './pagination.scss'
import conf from './../../config.json'
const { itemsCountPerPage } = conf


const PaginationWrapper = s.section`
    display: flex;
    justify-content: center;
`

function PaginationC(props) {
    //imit=25&offset=25
    const { limit, offset, total, activePage, setActivePage }  = props

    return (<PaginationWrapper>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          onChange={setActivePage}
        />
    </PaginationWrapper>)
}

export default PaginationC