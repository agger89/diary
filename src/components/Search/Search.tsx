import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular'
import Tooltip from '../Tooltip'

const SearchBlock = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  width: 100%;
  padding: 6px;
  background-color: #27282C;
  border-radius: 8px;
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
const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: 0;
  color: #a9abb3;
  outline: none;
  caret-color: #0B63C3;
`

const Search: FunctionComponent = () => {
  return (
    <SearchBlock>
      <SearchIcon />
      <Tooltip title="Search posts" />
      <SearchInput placeholder="Search" />
    </SearchBlock>
  )
}

export default Search
