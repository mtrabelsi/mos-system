import React from 'react';
import Layout from '../../components/Layout';
import IncidentTable from '../../components/IncidentTable';
import {getData} from '../../data';

const List = () => {

    return (<Layout>
        <IncidentTable 
            items={getData()}
        />
    </Layout>)
}

export default List;