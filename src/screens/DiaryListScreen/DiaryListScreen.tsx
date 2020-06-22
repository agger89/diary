import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import List from 'components/List'

const DiaryListBlock = styled.div``

const DiaryListScreen: FunctionComponent = () => {
  return (
    <DiaryListBlock>
      <div>DiaryListScreen</div>
      <List />
    </DiaryListBlock>
  )
}

export default DiaryListScreen
