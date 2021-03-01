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

const DiaryListItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 32px;
`

const DiaryListScreen: FunctionComponent = () => {
  return (
    <DiaryListScreenBlock>
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
