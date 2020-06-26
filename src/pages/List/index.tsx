import React, { PropsWithChildren, useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import IncidentTable from '../../components/IncidentTable';
import { getData, paginate } from '../../api';
import { RouteComponentProps } from 'react-router';
import { ControlButtons } from '../../components/Button/atoms';
import Button from '../../components/Button'

import InputSearch from '../../components/InputSearch';
import { IncidentType } from '../../api/types';
import { SearchFilter } from './types';
import Pagination from '../../components/Pagination';
import { SearchFeedback, SearchFeedbackItem } from './atoms';

const MAX_PER_PAGE = 7


const List : React.FC<RouteComponentProps & PropsWithChildren<{}> | {}> = (props) => {
    const { history } = props as RouteComponentProps
    const [keyword, setKeyword] =  useState<string>('')
    const [incidentData, setInsidents] =  useState<Array<IncidentType>>([])
    const [filter, setFilter] = useState<SearchFilter>({ limit: MAX_PER_PAGE, pageNumber: 1 })

    const handleChange = (e) => {
        const value = e.target.value
        setKeyword(value)
    }

    useEffect(() => {
        let qIncidents = getData(keyword)
        qIncidents = paginate(qIncidents, filter.limit, filter.pageNumber)
        setInsidents(qIncidents)
    }, [keyword, filter])

    return (<Layout title="List of Incidents" history={history} showBackButton={false}>

        <InputSearch 
            value={keyword}
            onChange={handleChange}
            rightIconClickHandler={(shouldResetValue) => shouldResetValue && setKeyword('')}
            placeholder="Search by Address or by Id"
        />

        <SearchFeedback>
            <SearchFeedbackItem>{incidentData.length} Search result found!</SearchFeedbackItem>
            <SearchFeedbackItem>Page {filter.pageNumber}</SearchFeedbackItem>
        </SearchFeedback>

        <IncidentTable 
            incidents={incidentData}
            history={history}
        />

        <Pagination 
            itemsCountPerPage={MAX_PER_PAGE}
            lastQueriedLength={incidentData.length}
            limit={filter.limit}
            offset={filter.offset}
            setFilter={(f: SearchFilter) => {
                console.log(f);
               setFilter({
                   ...filter,
                   pageNumber: f.pageNumber
               })
            }}
        />
     
    </Layout>)
}

export default List;