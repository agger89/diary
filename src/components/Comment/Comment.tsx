import React, { FunctionComponent } from 'react'
import gql from 'graphql-tag'
import { useCommentsQuery, useCreateOneCommentMutation } from 'generated/graphql'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const CommentBlock = styled.div`
  position: absolute;
  right: 0;
  bottom: 150px;
  left: 0;
`

const ShareButtonBlock = styled.div`
  padding: 20px;
  border-bottom: 1px solid #999;
  a {
    display: inline-block;
  }
  span {
    margin: 0 4px;
  }
`

const CommentListBlock = styled.ul`
  li {
    display: flex;
    padding: 20px;
    background-color: #999;
  }
`

const ProfileImage = styled.span`
  flex-grow: 1;
  text-align: center;
`
const Content = styled.span`
  flex-grow: 6;
`
const LikeButton = styled.span`
  flex-grow: 1;
  text-align: center;
`

const CommentFormBlock = styled.div``

const Comment: FunctionComponent = () => {
  const { handleSubmit, register, errors, reset } = useForm()

  const { data } = useCommentsQuery()
  const comments = data?.comments

  const [
    createOnecomment,
    { loading: onePostMutaionLoading, error: onePostMutaionError },
  ] = useCreateOneCommentMutation()

  const commentForm = ({ comment }) => {
    reset() // reset after form submit

    const data = {
      text: comment,
      member: {
        connect: {
          id: 1,
        },
      },
      post: {
        connect: {
          id: 1,
        },
      },
    }

    createOnecomment({
      variables: {
        data,
      },
    })
  }

  return (
    <CommentBlock>
      <ShareButtonBlock>
        <a>
          <i>icon</i>
          <span>공유하기</span>
        </a>
      </ShareButtonBlock>
      <CommentListBlock>
        {/* 등록한 댓글 바로 보여주기 (새로고침??? 하지 않고) */}
        {comments?.map((comment) => (
          <li key={comment.id}>
            <ProfileImage>image</ProfileImage>
            <Content>{comment.text}</Content>
            <LikeButton>image</LikeButton>
          </li>
        ))}
      </CommentListBlock>
      <CommentFormBlock>
        <form onSubmit={handleSubmit(commentForm)}>
          <textarea
            name="comment"
            ref={register}
            placeholder="따뜻한 한마디를 남겨보세요."
          />
          {errors.comment && errors.comment.message}
          <button type="submit">등록</button>
        </form>
      </CommentFormBlock>
    </CommentBlock>
  )
}

export default Comment

gql`
  query Comments {
    comments {
      id
      text
    }
  }
`

gql`
  mutation CreateOneComment($data: commentCreateInput!) {
    createOnecomment(data: $data) {
      id
    }
  }
`
