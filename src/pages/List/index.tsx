import React, { PropsWithChildren, useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import IncidentTable from '../../components/IncidentTable';
import { getData, paginate } from '../../api';
import { RouteComponentProps } from 'react-router';
import InputSearch from '../../components/InputSearch';
import { IncidentType } from '../../api/types';
import { SearchFilter } from './types';
import Pagination from '../../components/Pagination';
import { SearchFeedback, SearchFeedbackItem } from './atoms';

const MAX_PER_PAGE = 7

const List : React.FC<RouteComponentProps & PropsWithChildren<{}> | {}> = (props) => {
    const { history } = props as RouteComponentProps
    const [keyword, setKeyword] =  useState<string>('')
    const [filtredIncidentData, setFiltredInsidents] =  useState<Array<IncidentType>>([])
    const [paginatedIncidentData, setPaginatedInsidents] =  useState<Array<IncidentType>>([])

    const [filter, setFilter] = useState<SearchFilter>({ limit: MAX_PER_PAGE, pageNumber: 1 })

    const handleChange = (value) => {
        setKeyword(value)
        handleSearch(value)
    }
    const handleSearch = (key) => {
        setFilter({
            ...filter,
            pageNumber: 1
        })
        let qIncidents = getData(key)
        setFiltredInsidents(qIncidents)
    }
    useEffect(() => {
        handleSearch('')
    }, [])
    useEffect(() => {
        let pIncidents = paginate(filtredIncidentData, filter.limit, filter.pageNumber)
        setPaginatedInsidents(pIncidents)
    }, [filter, filtredIncidentData])

    return (<Layout title="List of Incidents" history={history} showBackButton={false}>

        <InputSearch 
            value={keyword}
            onChange={e => handleChange(e.target.value)}
            rightIconClickHandler={(shouldResetValue) => shouldResetValue && handleChange('')}
            placeholder="Search by Address or by Id"
        />

        <SearchFeedback>
            <SearchFeedbackItem><b>{paginatedIncidentData.length}</b> Incidents from total of {filtredIncidentData.length}</SearchFeedbackItem>
            <SearchFeedbackItem>Page {filter.pageNumber}</SearchFeedbackItem>
        </SearchFeedback>

        <IncidentTable 
            incidents={paginatedIncidentData}
            history={history}
        />

        <Pagination 
            itemsCountPerPage={MAX_PER_PAGE}
            lastQueriedLength={paginatedIncidentData.length}
            limit={filter.limit}
            offset={filter.offset}
            activePage={filter.pageNumber}
            setFilter={(f: SearchFilter) => {
               setFilter({
                   ...filter,
                   pageNumber: f.pageNumber
               })
            }}
        />
     
    </Layout>)
}

export default List;