import React, { FunctionComponent, useState } from 'react'
import gql from 'graphql-tag'
import { useCommentsQuery, useCreateOneCommentMutation } from 'generated/graphql'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { HeartFill as LikeIcon } from '@styled-icons/bootstrap'
import {
  CommentDetail as CommentIcon,
  UpArrowAlt as SubmitIcon,
} from '@styled-icons/boxicons-solid'
import CommentFormModal from '../CommentFormModal'
import { ProfileImage } from '../../screens/DiaryScreen/DiaryScreen'

const CommentBlock = styled.div``

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
  .like {
    margin-right: 24px;
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
  toggleCommentFormModal: boolean
  onToggleCommentFormModal: (value: boolean) => void
}

const Comment: FunctionComponent<CommentProps> = ({
  toggleCommentFormModal,
  onToggleCommentFormModal,
}) => {
  const [like, setLike] = useState(false)
  const { handleSubmit, register, errors, reset } = useForm()

  // const { data } = useCommentsQuery()
  // const comments = data?.comments

  const [
    createOnecomment,
    { loading: onePostMutaionLoading, error: onePostMutaionError },
  ] = useCreateOneCommentMutation()

  const handleCommentSubmit = ({ comment }) => {
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

  const handleClickLike = () => {
    setLike(!like)
  }

  return (
    <CommentBlock>
      <CommentListBlock>
        {/* 등록한 댓글 바로 보여주기 (새로고침??? 하지 않고) */}
        {/* {comments?.map((comment) => (
          <li key={comment.id}>
            <ProfileImage>image</ProfileImage>
            <Content>{comment.text}</Content>
            <LikeButton>image</LikeButton>
          </li>
        ))} */}
        <li>
          <ProfileBlock>
            <ProfileImage name="mark_zuckerberg" />
            <NameBlock>
              <div className="name">Mark Zuckerberg</div>
              <div className="date">Jan 11</div>
            </NameBlock>
          </ProfileBlock>
          <ContentBlock>
            <p>That's show me what i have to change in my career</p>
          </ContentBlock>
          <LikeCommentButtonBlock>
            <button className="like" onClick={handleClickLike}>
              <CustomLikeButton toggleLike={like} />
              <span className="count">3</span>
            </button>
            <button onClick={() => onToggleCommentFormModal(true)}>
              <CommentIcon /> <span className="count">1</span>
            </button>
          </LikeCommentButtonBlock>
        </li>
      </CommentListBlock>
      <CommentWriteBlock onClick={() => onToggleCommentFormModal(true)}>
        <ProfileBlock>
          <ProfileImage name="steve_jobs" width={32} height={32} />
          <p>Write your comment...</p>
        </ProfileBlock>
      </CommentWriteBlock>
      {toggleCommentFormModal && (
        <CommentFormModal
          onToggleCommentFormModal={onToggleCommentFormModal}
          onCommentSubmit={handleCommentSubmit}
        />
      )}
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
