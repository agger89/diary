import React, { FunctionComponent, useState } from 'react'
import gql from 'graphql-tag'
import { useWriteScreenCreateOnePostMutation } from 'generated/graphql'
import { useForm } from 'react-hook-form'
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
  const { handleSubmit, register, errors, reset } = useForm()

  const [
    createOnepost,
    { loading: onePostMutaionLoading, error: onePostMutaionError },
  ] = useWriteScreenCreateOnePostMutation()

  const writeForm = ({ title, content }, e) => {
    e.target.reset() // reset after form submit
    const data = {
      title: title,
      text: content,
      member: {
        connect: {
          id: 1,
        },
      },
    }

    createOnepost({
      variables: {
        data,
      },
    })
  }

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
        <form onSubmit={handleSubmit(writeForm)}>
          <input
            type="text"
            name="title"
            ref={register}
            placeholder="제목을 적으세요."
          />
          {errors.title && errors.title.message}
          <input
            type="text"
            name="content"
            ref={register}
            placeholder="생각을 자유롭게 적어보세요."
          />
          {errors.content && errors.content.message}
          <button type="submit">Submit</button>
        </form>
      </WriteInputWrap>
    </WriteBlock>
  )
}

export default WriteScreen

gql`
  mutation WriteScreenCreateOnePost($data: postCreateInput!) {
    createOnepost(data: $data) {
      id
    }
  }
`
