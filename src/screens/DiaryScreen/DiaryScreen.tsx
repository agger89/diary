import React, { FunctionComponent, useState, useCallback } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Comment from 'components/Comment'

const DiaryBlock = styled.div`
  padding: 20px;
`

// 변수 네이밍 수정
const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  border-bottom: 1px solid #999;
`

// 변수 네이밍 수정
const Bottom = styled.div`
  display: flex;
  height: 300px;
`

const LinkButton = styled(Link)`
  flex: none;
`

const ButtonGroup = styled.div`
  margin-left: auto;
`

const DiaryScreen: FunctionComponent = () => {
  const [showComment, setShowComment] = useState<boolean>(false)

  const handleClick = useCallback((value: boolean) => {
    setShowComment(value)
  }, [])

  return (
    <DiaryBlock>
      <div>
        <Text onClick={() => handleClick(false)}>
          <p>text text text text text text text text text text</p>
        </Text>
        <Bottom>
          <LinkButton href="/diaryList">
            <a>Diary</a>
          </LinkButton>
          <ButtonGroup>
            <button>Like</button>
            <button onClick={() => handleClick(true)}>comment</button>
          </ButtonGroup>
        </Bottom>
      </div>
      {showComment && <Comment />}
    </DiaryBlock>
  )
}

export default DiaryScreen
