import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular'
import useHover from '../../hooks/useHover'

const SearchBlock = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  width: 100%;
  padding: 6px;
  background-color: #27282C;
  border-radius: 8px;
  .icon-wrapper {
    position: relative;
    .icon-text {
      position: absolute;
      top: -28px;
      left: -38px;
      background-color: #fff;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 14px;
      letter-spacing: 1.3px;
      white-space: nowrap;
      &:after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 6px solid #fff;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
      }
    }
  }
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
  const [hoverRef, isHovered] = useHover()

  return (
    <SearchBlock>
      <div className="icon-wrapper" ref={hoverRef} >
        <SearchIcon />
        {isHovered && (
          <span className="icon-text">
            Search posts
          </span>
        )}
      </div>
      <SearchInput placeholder="Search" />
    </SearchBlock>
  )
}

export default Search
