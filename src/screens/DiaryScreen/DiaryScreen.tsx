import React, { FunctionComponent, useState } from 'react'
import gql from 'graphql-tag'
import { useDiaryScreenPostQuery } from 'generated/graphql'
import styled from 'styled-components'
import Header from 'components/Header'
import Content from 'components/Content'
import ActionButton from 'components/ActionButton'
import Comment from 'components/Comment'
import CommentModal from 'components/CommentModal'

const DiaryBlock = styled.div`
  position: relative;
  width: 600px;
  padding: 24px 32px 24px;
  border: 1px solid #f4f5f61f;
  .comment-write-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffffff3d;
  }
`

const DiaryScreen: FunctionComponent = () => {
  const [like, setLike] = useState(false)
  const [toggleCommentWriteFormModal, setToggleCommentWriteFormModal] = useState<
    boolean
  >(false)
  const [toggleCommentDeleteFormModal, setToggleCommentDeleteFormModal] = useState(
    false,
  )
  const [comment, setComment] = useState('')
  const [showCommentDiscardModal, setShowCommentDiscardModal] = useState(false)
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

  const handleCloseCommentWriteFormModal = () => {
    if (comment.length) {
      setShowCommentDiscardModal(true)
    } else {
      setToggleCommentWriteFormModal(false)
    }
  }

  return (
    <>
      <DiaryBlock>
        {toggleCommentWriteFormModal && (
          <div
            className="comment-write-wrap"
            onClick={handleCloseCommentWriteFormModal}
          />
        )}
        {toggleCommentDeleteFormModal && (
          <div
            className="comment-write-wrap"
            onClick={() => setToggleCommentDeleteFormModal(false)}
          />
        )}
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
          toggleCommentWriteFormModal={toggleCommentWriteFormModal}
          onToggleCommentWriteFormModal={setToggleCommentWriteFormModal}
          toggleCommentDeleteFormModal={toggleCommentDeleteFormModal}
          onToggleCommentDeleteFormModal={setToggleCommentDeleteFormModal}
          showCommentDiscardModal={showCommentDiscardModal}
          onShowCommentDiscardModal={setShowCommentDiscardModal}
          comments={post.comment}
          onCloseCommentWriteFormModal={handleCloseCommentWriteFormModal}
          onCommentID={setCommentID}
        />
        <CommentModal
          toggleCommentWriteFormModal={toggleCommentWriteFormModal}
          onToggleCommentWriteFormModal={setToggleCommentWriteFormModal}
          toggleCommentDeleteFormModal={toggleCommentDeleteFormModal}
          onToggleCommentDeleteFormModal={setToggleCommentDeleteFormModal}
          showCommentDiscardModal={showCommentDiscardModal}
          onShowCommentDiscardModal={setShowCommentDiscardModal}
          comment={comment}
          onComment={setComment}
          onCloseCommentWriteFormModal={handleCloseCommentWriteFormModal}
          commentID={commentID}
        />
      </DiaryBlock>
    </>
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
