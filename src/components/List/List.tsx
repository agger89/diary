import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const ListBlock = styled.div``

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
  background-color: #999;
`

const Wrap = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 40px 20px;
`

const TextGroup = styled.div`
  text-align: center;
`

interface ListProps {
  hashtag?: Boolean
}

const List: FunctionComponent<ListProps> = ({ hashtag }) => {
  const href = hashtag ? '/hashtagResult' : '/diary'

  return (
    <ListBlock>
      <Contents>
        <Link href={href}>
          <Wrap>
            <TextGroup>
              <h5>#곰돌이의꿈</h5>
              <div>
                <span>이야기 56</span>
                <span>구독 33</span>
              </div>
            </TextGroup>
          </Wrap>
        </Link>
      </Contents>
      <Contents>
        <Link href={href}>
          <Wrap>
            <TextGroup>
              <h5>#곰돌이의꿈</h5>
              <div>
                <span>이야기 56</span>
                <span>구독 33</span>
              </div>
            </TextGroup>
          </Wrap>
        </Link>
      </Contents>
      <Contents>
        <Link href={href}>
          <Wrap>
            <TextGroup>
              <h5>#곰돌이의꿈</h5>
              <div>
                <span>이야기 56</span>
                <span>구독 33</span>
              </div>
            </TextGroup>
          </Wrap>
        </Link>
      </Contents>
    </ListBlock>
  )
}

export default List
