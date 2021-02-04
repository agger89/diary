import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { CommentDetail as CommentIcon } from '@styled-icons/boxicons-solid'
import { HeartFill as LikeIcon } from '@styled-icons/bootstrap'

const ActionButtonBlock = styled.div`
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

const CustomLikeIcon = styled(LikeIcon)`
  color: ${({ toggleLike }) => toggleLike && '#ff4746 !important'};
`

interface ActionButtonProps {
  like: boolean
  onLike: (value: boolean) => void
  onToggleCommentWriteFormModal: (value: boolean) => void
}

const ActionButton: FunctionComponent<ActionButtonProps> = ({
  like,
  onLike,
  onToggleCommentWriteFormModal,
}) => {
  const handleClickLike = () => {
    onLike(!like)
  }

  return (
    <ActionButtonBlock>
      <button className="like" onClick={handleClickLike}>
        <CustomLikeIcon toggleLike={like} /> Like
      </button>
      <button onClick={() => onToggleCommentWriteFormModal(true)}>
        <CommentIcon />
        Comment
      </button>
    </ActionButtonBlock>
  )
}

export default ActionButton
