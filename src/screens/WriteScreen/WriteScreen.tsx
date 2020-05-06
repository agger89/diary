import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const WriteBlock = styled.div`
  padding: 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonGroup = styled.div`
  display: flex;
  & > * {
    margin: 0 4px;
  }
`

const CloseButton = styled.button``

// 변수명 변경
const EmojiButton = styled.div``
const ImageButton = styled.div``
const MapButton = styled.div``

const SaveButton = styled.button``

const WriteInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
`

const WriteScreen: FunctionComponent = () => {
  return (
    <WriteBlock>
      <Header>
        <CloseButton>X</CloseButton>
        <ButtonGroup>
          <EmojiButton>emoji</EmojiButton>
          <ImageButton>select image</ImageButton>
          <MapButton>map</MapButton>
        </ButtonGroup>
        <SaveButton>저장</SaveButton>
      </Header>
      <WriteInputWrap>
        <input type="text" placeholder="생각을 자유롭게 적어보세요." />
      </WriteInputWrap>
    </WriteBlock>
  )
}

export default WriteScreen
