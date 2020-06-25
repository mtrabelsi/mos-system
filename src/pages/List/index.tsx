import React, { PropsWithChildren } from 'react';
import Layout from '../../components/Layout';
import IncidentTable from '../../components/IncidentTable';
import { getData } from '../../api';
import { RouteComponentProps } from 'react-router';

const List : React.FC<RouteComponentProps & PropsWithChildren<{}> | {}> = (props) => {
    const { history } = props as RouteComponentProps
    return (<Layout>
        <IncidentTable 
            incidents={getData()}
            history={history}
        />
    </Layout>)
}

export default List;