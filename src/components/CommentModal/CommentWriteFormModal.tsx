import React, { FunctionComponent, useState, ChangeEvent } from 'react'
import Link from 'next/link'
import gql from 'graphql-tag'
import { useCreateOneCommentMutation } from 'generated/graphql'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import CommentDiscardModal from './CommentDiscardModal'
import ProfileImage from 'components/ProfileImage'

const CommentWriteFormModalBlock = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  bottom: 0;
  left: 50%;
  margin-left: -240px;
  width: 480px;
  height: 408px;
  padding: 8px;
  background-color: #1c1e21;
  border: 1px solid #f4f5f61f;
  border-radius: 16px;
`

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  background-color: #25282c;
  border-radius: 8px;
  .title {
    font-family: monospace;
    font-size: 14px;
    color: #fff;
    letter-spacing: 0.035rem;
    line-height: 1.25rem;
  }
`
const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`
const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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

const BodyBlock = styled.div``
const SubTextBlock = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 8px;
  .time-line-bar {
    display: inline-block;
    width: 1px;
    height: 100%;
    margin-left: 14px;
    margin-right: 25px;
    background-color: #f4f5f61f;
  }
  .sub-text {
    font-family: monospace;
    font-size: 12px;
    color: #a9abb3;
    letter-spacing: 0.025rem;
    span {
      color: #fff;
    }
  }
`

const FormBlock = styled.div`
  display: flex;
  padding: 0 8px;
  form {
    width: calc(100% - 46px - 12px);
    margin-left: 12px;
  }
  textarea {
    width: 100%;
    min-height: 176px;
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 16px;
    color: #fff;
    letter-spacing: 0.01rem;
    line-height: 1.5rem;
    caret-color: rgb(0, 118, 245);
    word-break: break-word;
    resize: none;
  }
`

const SubmitBlock = styled.div`
  position: absolute;
  right: 8px;
  bottom: 6px;
  left: 8px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid #f4f5f61f;
  .button {
    padding: 4px 12px;
    border: 0;
    font-family: monospace;
    font-size: 13px;
    color: #a9abb3;
    line-height: 1.125rem;
    letter-spacing: 0.025rem;
    cursor: pointer;
  }
  .cancel-button {
    border-radius: 4px;
    &:hover {
      background-color: #e9eaec14;
      color: #fff;
    }
  }
  .submit-button {
    background-color: ${({ activeSubmitButton }) =>
      activeSubmitButton ? '#48ffa0' : '#26282c'};
    border-radius: 8px;
    color: ${({ activeSubmitButton }) =>
      activeSubmitButton ? '#151618' : '#686e78'};
  }
`

interface CommentWriteFormModalProps {
  onToggleCommentWriteFormModal: (value: boolean) => void
  showCommentDiscardModal: boolean
  onShowCommentDiscardModal: (value: boolean) => void
  comment: string
  onComment: (value: string) => void
  onCloseCommentWriteFormModal: () => void
}

const CommentWriteFormModal: FunctionComponent<CommentWriteFormModalProps> = ({
  onToggleCommentWriteFormModal,
  showCommentDiscardModal,
  onShowCommentDiscardModal,
  comment,
  onComment,
  onCloseCommentWriteFormModal,
}) => {
  const { handleSubmit, register } = useForm()

  const [activeSubmitButton, setActiveSubmitButton] = useState(false)

  const [createOnecomment] = useCreateOneCommentMutation({
    onCompleted: () => {
      onToggleCommentWriteFormModal(false)
    },
  })

  const onCommentSubmit = ({ comment }) => {
    const commentData = {
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
        commentData,
      },
    })
  }

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onComment(e.target.value)

    if (e.target.value.length > 0) {
      setActiveSubmitButton(true)
    } else {
      setActiveSubmitButton(false)
    }
  }

  return (
    <CommentWriteFormModalBlock>
      <HeaderBlock>
        <ProfileBlock>
          <ProfileImage width={38} height={38} />
          <NameBlock>
            <div className="name">Mark Zuckerberg</div>
            <div className="date">Jan 11</div>
          </NameBlock>
        </ProfileBlock>
        <h1 className="title">
          The most valuable software developer skills to get hired now
        </h1>
      </HeaderBlock>
      <BodyBlock>
        <SubTextBlock>
          <span className="time-line-bar" />
          <p className="sub-text">
            Reply to<span> Mark Zuckerberg</span>
          </p>
        </SubTextBlock>
        <FormBlock>
          <Link href="mypage">
            <ProfileImage width={32} height={32} />
          </Link>
          <form onSubmit={handleSubmit(onCommentSubmit)}>
            <textarea
              value={comment}
              name="comment"
              ref={register}
              placeholder="Write your comment..."
              onChange={handleCommentChange}
            />
            <SubmitBlock activeSubmitButton={activeSubmitButton}>
              <span
                className="button cancel-button"
                onClick={onCloseCommentWriteFormModal}
              >
                Cancel
              </span>
              <button type="submit" className="button submit-button">
                Comment
              </button>
            </SubmitBlock>
          </form>
        </FormBlock>
      </BodyBlock>
    </CommentWriteFormModalBlock>
  )
}

export default CommentWriteFormModal

gql`
  mutation CreateOneComment($commentData: commentCreateInput!) {
    createOnecomment(data: $commentData) {
      id
    }
  }
`
