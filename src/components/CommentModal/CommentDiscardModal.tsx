import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const CommentDiscardModalBlock = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  margin-left: -240px;
  width: 320px;
  padding: 24px 40px 30px 40px;
  background-color: #1c1e21;
  border: 1px solid #f4f5f61f;
  border-radius: 16px;
  .title {
    margin: 14px 0;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }
  .description {
    margin-bottom: 24px;
    color: #686e78;
    line-height: 1.25rem;
    text-align: center;
  }
`

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  button {
    padding: 10px 40px;
    background-color: transparent;
    border-radius: 12px;
    border: 0;
    font-weight: 600;
    outline: none;
    cursor: pointer;
  }
  .stay-button {
    border: 1px solid #26282c;
    color: #fff;
    &:hover {
      background-color: #e9eaec14;
      color: #fff;
    }
  }
  .discard-button {
    background-color: #26282c;
    border: 1px solid #1c1e21;
    color: #686e78;
    &:hover {
      background-color: rgb(224, 67, 55);
      color: #151618;
    }
  }
`
interface CommentDiscardModalProps {
  onToggleCommentWriteFormModal: (value: boolean) => void
  onToggleCommentDiscardModal: (value: boolean) => void
  onComment: (value: string) => void
}

const CommentDiscardModal: FunctionComponent<CommentDiscardModalProps> = ({
  onToggleCommentWriteFormModal,
  onToggleCommentDiscardModal,
  onComment,
}) => {
  const handleDiscardButtonClick = () => {
    // onComment('')
    onToggleCommentDiscardModal(false)
    onToggleCommentWriteFormModal(false)
  }

  return (
    <CommentDiscardModalBlock>
      <h1 className="title">Discard comment</h1>
      <p className="description">
        Are you sure you want to close and discard your comment?
      </p>
      <ButtonBlock>
        <button
          className="stay-button"
          onClick={() => onToggleCommentDiscardModal(false)}
        >
          Stay
        </button>
        <button className="discard-button" onClick={handleDiscardButtonClick}>
          Discard
        </button>
      </ButtonBlock>
    </CommentDiscardModalBlock>
  )
}

export default CommentDiscardModal
