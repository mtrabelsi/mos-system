import React, { useState } from 'react';
import { StyledSearchBar } from './atoms'

function SearchBar(props) {
    return (
        <StyledSearchBar 
            type="text"
            placeholder={props.placeholder}
            value={props.searchTerm}
            onChange={e => props.handleSearchTermChange(e.target.value)}
        />
    )
}


export default SearchBar
