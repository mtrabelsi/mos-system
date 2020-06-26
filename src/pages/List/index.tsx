import React, { PropsWithChildren, useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import IncidentTable from '../../components/IncidentTable';
import { getData } from '../../api';
import { RouteComponentProps } from 'react-router';
import { ControlButtons } from '../../components/Button/atoms';
import Button from '../../components/Button'
import leftArrow from './../../icons/left-arrow.png'
import rightArrow from './../../icons/right-arrow.png'
import InputSearch from '../../components/InputSearch';
import { IncidentType } from '../../api/types';


const List : React.FC<RouteComponentProps & PropsWithChildren<{}> | {}> = (props) => {
    const { history } = props as RouteComponentProps
    const [keyword, setKeyword] =  useState<string>('')
    const [incidentData, setInsidents] =  useState<Array<IncidentType>>([])

    const handleChange = (e) => {
        const value = e.target.value
        setKeyword(value)
    }

    useEffect(() => {
       const qIncidents = getData(keyword)
       setInsidents(qIncidents)
    }, [keyword])

    return (<Layout title="List of Incidents" history={history} showBackButton={false}>
        <InputSearch 
            value={keyword}
            onChange={handleChange}
            rightIconClickHandler={(shouldResetValue) => shouldResetValue && setKeyword('')}
        />
        <IncidentTable 
            incidents={incidentData}
            history={history}
        />
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
    </Layout>)
}

export default List;