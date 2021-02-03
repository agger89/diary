import React, { FunctionComponent, useState } from 'react'
import gql from 'graphql-tag'
import { useDiaryScreenPostQuery } from 'generated/graphql'
import styled from 'styled-components'
import { CommentDetail as CommentIcon } from '@styled-icons/boxicons-solid'
import { HeartFill as LikeIcon } from '@styled-icons/bootstrap'
import Comment from 'components/Comment'
import Header from 'components/Header'
import Content from 'components/Content'

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

const DiaryBottomBlock = styled.div``
const LikeCommentInfoBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
  span {
    display: inline-block;
    margin-right: 12px;
    padding: 0;
    background: transparent;
    border: 0;
    font-size: 12px;
    font-weight: bold;
    color: #686e78;
    letter-spacing: 0.025rem;
    .text {
      margin-left: 4px;
    }
  }
`
const LikeCommentButtonBlock = styled.div`
  padding: 16px 0;
  border: 1px solid #f4f5f61f;
  border-right: 0;
  border-left: 0;
  button {
    display: inline-block;
    padding: 6px 10px;
    background-color: transparent;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    color: #a9abb3;
    letter-spacing: 0.025rem;
    outline: none;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      color: #a9abb3;
    }
    &:hover {
      background-color: #e9eaec14;
      color: #fff;
      svg {
        color: #fff;
      }
    }
  }
  .like {
    margin-right: 150px;
  }
`

const CustomLikeButton = styled(LikeIcon)`
  color: ${({ toggleLike }) => toggleLike && '#ff4746 !important'};
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

  const handleClickLike = () => {
    setLike(!like)
  }

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
        <Content postTitle={post.title} postCreateDate={post.create_date} />
        <DiaryBottomBlock>
          <LikeCommentInfoBlock>
            <span>
              {post.like_num} <span className="text">Like</span>
            </span>
            <span>
              {post.comment.length} <span className="text">Comments</span>
            </span>
          </LikeCommentInfoBlock>
          <LikeCommentButtonBlock>
            <button className="like" onClick={handleClickLike}>
              <CustomLikeButton toggleLike={like} /> Like
            </button>
            <button onClick={() => setToggleCommentWriteFormModal(true)}>
              <CommentIcon />
              Comment
            </button>
          </LikeCommentButtonBlock>
        </DiaryBottomBlock>
        <Comment
          toggleCommentWriteFormModal={toggleCommentWriteFormModal}
          onToggleCommentWriteFormModal={setToggleCommentWriteFormModal}
          toggleCommentDeleteFormModal={toggleCommentDeleteFormModal}
          onToggleCommentDeleteFormModal={setToggleCommentDeleteFormModal}
          showCommentDiscardModal={showCommentDiscardModal}
          onShowCommentDiscardModal={setShowCommentDiscardModal}
          comments={post.comment}
          comment={comment}
          onComment={setComment}
          onCloseCommentWriteFormModal={handleCloseCommentWriteFormModal}
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
