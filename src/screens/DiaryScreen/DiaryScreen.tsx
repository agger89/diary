import React, { FunctionComponent, useState } from 'react'
import gql from 'graphql-tag'
import { useDiaryScreenPostQuery } from 'generated/graphql'
import styled from 'styled-components'
import Header from 'components/Header'
import Content from 'components/Content'
import ActionButton from 'components/ActionButton'
import Comment from 'components/Comment'
import {
  CommentWriteFormModal,
  CommentDiscardModal,
  CommentDeleteFormModal,
} from 'components/CommentModal'

const DiaryBlock = styled.div`
  position: relative;
  width: 600px;
  padding: 24px 32px 24px;
  border: 1px solid #f4f5f61f;
`

const LoginButtonBlock = styled.button`
  position: fixed;
  top: 10px;
  right: 20px;
  padding: 8px 18px;
  background: transparent;
  border: 0;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #e9eaec14;
  }
`

const DiaryScreen: FunctionComponent = () => {
  const [like, setLike] = useState(false)
  const [toggleCommentWriteFormModal, setToggleCommentWriteFormModal] = useState(
    false,
  )
  const [toggleCommentDeleteFormModal, setToggleCommentDeleteFormModal] = useState(
    false,
  )
  const [toggleCommentDiscardModal, setToggleCommentDiscardModal] = useState(false)
  const [commentID, setCommentID] = useState(null)

  const { data } = useDiaryScreenPostQuery({
    variables: {
      id: {
        id: 1,
      },
    },
  })

  if (!data) {
    return null
  }

  const post = data?.post

  return (
    <DiaryBlock>
      <LoginButtonBlock>Login</LoginButtonBlock>
      <Header />
      <Content
        postTitle={post.title}
        postCreateDate={post.create_date}
        postLikeNum={post.like_num}
        postComment={post.comment}
      />
      <ActionButton
        like={like}
        onLike={setLike}
        onToggleCommentWriteFormModal={setToggleCommentWriteFormModal}
      />
      <Comment
        onToggleCommentWriteFormModal={setToggleCommentWriteFormModal}
        onToggleCommentDeleteFormModal={setToggleCommentDeleteFormModal}
        comments={post.comment}
        onCommentID={setCommentID}
      />
      {toggleCommentWriteFormModal && (
        <CommentWriteFormModal
          toggleCommentDiscardModal={toggleCommentDiscardModal}
          onToggleCommentDiscardModal={setToggleCommentDiscardModal}
          onToggleCommentWriteFormModal={setToggleCommentWriteFormModal}
        />
      )}
      {toggleCommentDiscardModal && (
        <CommentDiscardModal
          onToggleCommentWriteFormModal={setToggleCommentWriteFormModal}
          onToggleCommentDiscardModal={setToggleCommentDiscardModal}
        />
      )}
      {toggleCommentDeleteFormModal && (
        <CommentDeleteFormModal
          onToggleCommentDeleteFormModal={setToggleCommentDeleteFormModal}
          commentID={commentID}
        />
      )}
    </DiaryBlock>
  )
}

export default DiaryScreen

gql`
  query DiaryScreenPost($id: postWhereUniqueInput!) {
    post(where: $id) {
      id
      title
      text
      image
      like_num
      comments_num
      comment {
        id
        text
        member {
          name
        }
        like_num
        comments_num
        create_date
      }
      create_date
    }
  }
`
