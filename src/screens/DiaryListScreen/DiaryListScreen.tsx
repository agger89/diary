import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import DiaryListItemScreen from './DirayListItemScreen'

const DiaryListScreenBlock = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  flex-direction: column;
  padding: 80px;
`

const FilterTabBlock = styled.div`
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
`

const DiaryListItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 32px;
`

const DiaryListScreen: FunctionComponent = () => {
  return (
    <DiaryListScreenBlock>
      <FilterTabBlock>
        <span className="tab-item">popular</span>
        <span className="tab-item">most like</span>
        <span className="tab-item">recent</span>
      </FilterTabBlock>
      <DiaryListItemBlock>
        <DiaryListItemScreen />
        <DiaryListItemScreen />
        <DiaryListItemScreen />
        <DiaryListItemScreen />
        <DiaryListItemScreen />
        <DiaryListItemScreen />
      </DiaryListItemBlock>
    </DiaryListScreenBlock>
  )
}

export default DiaryListScreen
