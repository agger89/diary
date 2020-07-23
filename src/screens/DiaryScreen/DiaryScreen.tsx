import React, { FunctionComponent, useState } from 'react'
import gql from 'graphql-tag'
import { useDiaryScreenPostsQuery } from 'generated/graphql'
import Link from 'next/link'
import styled from 'styled-components'
import { format } from 'date-fns'
import Comment from 'components/Comment'

const DiaryBlock = styled.div`
  position: absolute;
  width: 100%;
  padding: 20px;
  background-image: url('/static/main_bg.jpeg');
`
const Header = styled.div`
  text-align: center;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  opacity: 0.7;
`

// 변수 네이밍 수정
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  border-bottom: 1px solid #999;
`

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
`

const Text = styled.div`
  margin-bottom: 6px;
`

const HashtagWrap = styled.a`
  color: #fff;
`

const Hashtag = styled.span`
  color: #999;
`

// 변수 네이밍 수정
const Bottom = styled.div`
  display: flex;
  height: 300px;
`

const ButtonGroup = styled.div`
  margin-left: auto;
`

const DiaryScreen: FunctionComponent = () => {
  const { data } = useDiaryScreenPostsQuery()
  const posts = data?.posts
  console.log('posts', posts)

  const [showComment, setShowComment] = useState(false)

  const handleClickShowComment = () => {
    setShowComment(true)
  }

  const handleClickHideComment = () => {
    setShowComment(false)
  }

  return (
    <>
      {posts?.map((post) => (
        <DiaryBlock key={post.id}>
          <Header>
            <Title>diary</Title>
          </Header>
          <Body onClick={handleClickHideComment}>
            <TextGroup>
              <Text>{post.text}</Text>
              <Hashtag>
                <Link href="/hashtag">
                  <HashtagWrap>
                    <Hashtag>#</Hashtag>
                    {''} 해시태그
                  </HashtagWrap>
                </Link>
              </Hashtag>
            </TextGroup>
          </Body>
          <Bottom>
            {format(new Date(post.create_date), 'HH:mm')}
            <Link href="/diaryList">
              <a>Diary</a>
            </Link>
            <ButtonGroup>
              <button>Like</button>
              <button onClick={handleClickShowComment}>comment</button>
            </ButtonGroup>
          </Bottom>
          {showComment && <Comment />}
        </DiaryBlock>
      ))}
    </>
  )
}

export default DiaryScreen

gql`
  query DiaryScreenPosts {
    posts {
      id
      title
      text
      create_date
    }
  }
`
