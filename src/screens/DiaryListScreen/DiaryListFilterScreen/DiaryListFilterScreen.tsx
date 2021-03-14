import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Search from 'components/Search'

const FilterTabBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 36px 0;
  .tab-item {
    padding: 0 12px;
    font-weight: 600;
    color: #a9abb3;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
  .active-tab-item {
    color: #fff;
  }
`

const DiaryListFilterScreen: FunctionComponent = () => {
  return (
    <FilterTabBlock>
      <Search />
      <span className="tab-item active-tab-item">popular</span>
      <span className="tab-item">most like</span>
      <span className="tab-item">recent</span>
    </FilterTabBlock>
  )
}

export default DiaryListFilterScreen
