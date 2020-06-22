import React, { FunctionComponent, useState, useCallback, FormEvent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Comment from 'components/Comment'

const DiaryBlock = styled.div`
  padding: 20px;
`

// 변수 네이밍 수정
const TextGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  border-bottom: 1px solid #999;
`

const Text = styled.div``
const Hashtag = styled.div``

// 변수 네이밍 수정
const Bottom = styled.div`
  display: flex;
  height: 300px;
`

const ButtonGroup = styled.div`
  margin-left: auto;
`

const DiaryScreen: FunctionComponent = () => {
  const [showComment, setShowComment] = useState(false)

  const handleClickShowComment = () => {
    setShowComment(true)
  }

  const handleClickHideComment = () => {
    setShowComment(false)
  }

  return (
    <DiaryBlock>
      <TextGroup onClick={handleClickHideComment}>
        <Text>text text text text text text text text text text</Text>
        <Hashtag>
          <Link href="/hashtag">
            <a># 해시태그</a>
          </Link>
        </Hashtag>
      </TextGroup>
      <Bottom>
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
  )
}

export default DiaryScreen
