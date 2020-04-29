import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const HashtagBlock = styled.div``

const Search = styled.div``

const ContentsList = styled.div``

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  padding: 40px 20px;
  background-color: #999;
`

const TextGroup = styled.div`
  text-align: center;
`

const HashtagScreen: FunctionComponent = () => {
  return (
    <HashtagBlock>
      <Search>
        <input type="text" placeholder="해시태그 검색" />
      </Search>
      <ContentsList>
        <Contents>
          <TextGroup>
            <h5>#곰돌이의꿈</h5>
            <div>
              <span>이야기 56</span>
              <span>구독 33</span>
            </div>
          </TextGroup>
        </Contents>
        <Contents>
          <TextGroup>
            <h5>#곰돌이의꿈</h5>
            <div>
              <span>이야기 56</span>
              <span>구독 33</span>
            </div>
          </TextGroup>
        </Contents>
        <Contents>
          <TextGroup>
            <h5>#곰돌이의꿈</h5>
            <div>
              <span>이야기 56</span>
              <span>구독 33</span>
            </div>
          </TextGroup>
        </Contents>
      </ContentsList>
    </HashtagBlock>
  )
}

export default HashtagScreen
