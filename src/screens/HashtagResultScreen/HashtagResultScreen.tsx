import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import List from 'components/List'

const HashtagResultBlock = styled.div``

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TabGroup = styled.div`
  display: flex;
  div {
    flex-grow: 1;
    text-align: center;
  }
`

const Write = styled.div``

const HashtagResultScreen: FunctionComponent = () => {
  return (
    <HashtagResultBlock>
      <Header>
        <span>#수고했어</span>
      </Header>
      <TabGroup>
        <div>최신글</div>
        <div>인기글</div>
      </TabGroup>
      <Write>
        <input type="text" placeholder="생각을 자유롭게 적어보세요." />
      </Write>
      <List />
    </HashtagResultBlock>
  )
}

export default HashtagResultScreen
