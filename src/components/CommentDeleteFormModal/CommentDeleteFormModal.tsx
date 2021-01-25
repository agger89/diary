import React, { FunctionComponent } from 'react'
import gql from 'graphql-tag'
import { useDeleteOneCommentMutation } from 'generated/graphql'
import styled from 'styled-components'

const CommentDeleteFormModalBlock = styled.div`
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
  .cancel-button {
    border: 1px solid #26282c;
    color: #fff;
    &:hover {
      background-color: #e9eaec14;
      color: #fff;
    }
  }
  .delete-button {
    background-color: #26282c;
    border: 1px solid #1c1e21;
    color: #686e78;
    &:hover {
      background-color: rgb(224, 67, 55);
      color: #151618;
    }
  }
`

interface CommentDeleteFormModalProps {
  onDeleteComment: () => void
  onToggleCommentDeleteFormModal: (value: boolean) => void
}

const CommentDeleteFormModal: FunctionComponent<CommentDeleteFormModalProps> = ({
  onDeleteComment,
  onToggleCommentDeleteFormModal,
}) => {
  const handleClick = () => {
    onDeleteComment()
  }

  return (
    <CommentDeleteFormModalBlock>
      <h1 className="title">Delete comment</h1>
      <p className="description">Are you sure you want to delete your comment?</p>
      <ButtonBlock>
        <button
          className="cancel-button"
          onClick={() => onToggleCommentDeleteFormModal(false)}
        >
          Cancel
        </button>
        <button className="delete-button" onClick={handleClick}>
          Delete
        </button>
      </ButtonBlock>
    </CommentDeleteFormModalBlock>
  )
}

export default CommentDeleteFormModal

// gql`
//   mutation DeleteOneComment($id: commentWhereUniqueInput!) {
//     deleteOnecomment(where: $id) {
//       id
//     }
//   }
// `
