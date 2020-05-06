import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import List from 'components/List'

const HashtagBlock = styled.div``

const Search = styled.div``

const HashtagScreen: FunctionComponent = () => {
  return (
    <HashtagBlock>
      <Search>
        <input type="text" placeholder="해시태그 검색" />
      </Search>
      <List hashtag={true} />
    </HashtagBlock>
  )
}

export default HashtagScreen
