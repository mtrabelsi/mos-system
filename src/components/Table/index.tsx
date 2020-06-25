import React from 'react'
import TableItem from './TableItem'

function Table(props) {
    const { data } = props
    return (<section>
        {data.length > 0 && data.map((d, k) => (<TableItem key={k}
            itemData={d} 
        />))}
        {data.length === 0 && 
        <div>No Item found!</div>}
    </section>)
}


export default Table