import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular'

const SearchBlock = styled.div`
  svg {
    width: 20px;
    height: 20px;
    padding: 6px;
    border-radius: 4px;
    color: #a9abb3;
    cursor: pointer;
    &:hover {
      background-color: #272729;
      color: #fff;
    }
  }
`

const Search: FunctionComponent = () => {
  return (
    <SearchBlock>
      <SearchIcon />
    </SearchBlock>
  )

}

export default Search
