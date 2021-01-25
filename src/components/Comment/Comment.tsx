import React, { FunctionComponent, useState } from 'react'
import gql from 'graphql-tag'
import { useDeleteOneCommentMutation } from 'generated/graphql'
import styled from 'styled-components'
import { HeartFill as LikeIcon } from '@styled-icons/bootstrap'
import {
  CommentDetail as CommentIcon,
  Trash as TrashIcon,
} from '@styled-icons/boxicons-solid'
import { format } from 'date-fns'
import { sortBy } from 'lodash'
import CommentWriteFormModal from '../CommentWriteFormModal'
import CommentDeleteFormModal from '../CommentDeleteFormModal'
import { ProfileImage } from '../../screens/DiaryScreen/DiaryScreen'

const CommentListBlock = styled.ul`
  margin: 16px 0 40px;
  border-bottom: 1px solid #f4f5f61f;
`
const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
`
const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-family: monospace;
  .name {
    margin-bottom: 4px;
    font-size: 16px;
    color: #fff;
    letter-spacing: 0.05rem;
  }
  .date {
    font-size: 12px;
    color: #686e78;
  }
`
const ContentBlock = styled.div`
  margin: 10px 0px;
  padding: 14px 16px;
  background-color: #25282c;
  border-radius: 0.5rem;
  p {
    font-size: 16px;
    font-family: monospace;
    color: #fff;
    letter-spacing: 0.035rem;
    word-break: keep-all;
  }
`
const LikeCommentButtonBlock = styled.div`
  display: flex;
  padding: 4px 0 26px;
  button {
    display: inline-block;
    padding: 4px 10px;
    background-color: transparent;
    border: 0;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    svg {
      width: 18px;
      height: 18px;
      margin-right: 6px;
      color: #a9abb3;
    }
    .count {
      color: #a9abb3;
    }
    &:hover {
      background-color: #e9eaec14;
      color: #fff;
      svg,
      .count {
        color: #fff;
      }
    }
  }
  .like-button {
    margin-right: 24px;
  }
  .delete-button {
    margin-left: auto;
    svg {
      margin-right: 0;
    }
  }
`
const CustomLikeButton = styled(LikeIcon)`
  color: ${({ toggleLike }) => toggleLike && '#ff4746 !important'};
`

const CommentWriteBlock = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 4px 10px;
  background-color: #e9eaec14;
  border-radius: 16px;
  font-family: monospace;
  font-size: 13px;
  color: #a9abb3;
  cursor: pointer;
`
interface CommentProps {
  toggleCommentWriteFormModal: boolean
  onToggleCommentWriteFormModal: (value: boolean) => void
  toggleCommentDeleteFormModal: boolean
  onToggleCommentDeleteFormModal: (value: boolean) => void
  comments: any
}

const Comment: FunctionComponent<CommentProps> = ({
  toggleCommentWriteFormModal,
  onToggleCommentWriteFormModal,
  toggleCommentDeleteFormModal,
  onToggleCommentDeleteFormModal,
  comments,
}) => {
  const [like, setLike] = useState(false)
  const [deleteOnecomment] = useDeleteOneCommentMutation()

  const handleClickLike = () => {
    setLike(!like)
  }

  const handleDeleteComment = (commentId: number) => {
    console.log('commentId', commentId)
    deleteOnecomment({
      variables: {
        id: {
          id: commentId,
        },
      },
    })
  }

  const sortedComments = sortBy(comments).reverse()

  return (
    <>
      <CommentListBlock>
        {sortedComments.map((comment) => (
          <li key={comment.id}>
            <ProfileBlock>
              <ProfileImage name="mark_zuckerberg" />
              <NameBlock>
                <div className="name">{comment.member.name}</div>
                <div className="date">
                  {format(new Date(comment.create_date), 'MMM dd')}
                </div>
              </NameBlock>
            </ProfileBlock>
            <ContentBlock>
              <p>{comment.text}</p>
            </ContentBlock>
            <LikeCommentButtonBlock>
              <button className="like-button" onClick={handleClickLike}>
                <CustomLikeButton toggleLike={like} />
                <span className="count">{comment.like_num}</span>
              </button>
              <button onClick={() => onToggleCommentWriteFormModal(true)}>
                <CommentIcon /> <span className="count">{comment.comments_num}</span>
              </button>
              <button
                className="delete-button"
                onClick={() => handleDeleteComment(comment.id)}
              >
                <TrashIcon />
              </button>
            </LikeCommentButtonBlock>
            {toggleCommentDeleteFormModal && (
              <CommentDeleteFormModal
                onDeleteComment={() => handleDeleteComment(comment.id)}
                onToggleCommentDeleteFormModal={onToggleCommentDeleteFormModal}
              />
            )}
          </li>
        ))}
      </CommentListBlock>
      <CommentWriteBlock onClick={() => onToggleCommentWriteFormModal(true)}>
        <ProfileBlock>
          <ProfileImage name="steve_jobs" width={32} height={32} />
          <p>Write your comment...</p>
        </ProfileBlock>
      </CommentWriteBlock>
      {toggleCommentWriteFormModal && (
        <CommentWriteFormModal
          onToggleCommentWriteFormModal={onToggleCommentWriteFormModal}
        />
      )}
    </>
  )
}

export default Comment

gql`
  mutation DeleteOneComment($id: commentWhereUniqueInput!) {
    deleteOnecomment(where: $id) {
      id
    }
  }
`
