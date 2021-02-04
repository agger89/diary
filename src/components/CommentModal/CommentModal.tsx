import React, { FunctionComponent } from 'react'
import CommentWriteFormModal from 'components/CommentModal/CommentWriteFormModal'
import CommentDeleteFormModal from 'components/CommentModal/CommentDeleteFormModal'
import CommentDiscardModal from 'components/CommentModal/CommentDiscardModal'

interface CommentModalProps {
  toggleCommentWriteFormModal: boolean
  onToggleCommentWriteFormModal: (value: boolean) => void
  toggleCommentDeleteFormModal: boolean
  onToggleCommentDeleteFormModal: (value: boolean) => void
  showCommentDiscardModal: boolean
  onShowCommentDiscardModal: (value: boolean) => void
  comment: any
  onComment: (value: string) => void
  onCloseCommentWriteFormModal: () => void
  commentID: number
}

const CommentModal: FunctionComponent<CommentModalProps> = ({
  toggleCommentWriteFormModal,
  onToggleCommentWriteFormModal,
  toggleCommentDeleteFormModal,
  onToggleCommentDeleteFormModal,
  showCommentDiscardModal,
  onShowCommentDiscardModal,
  comment,
  onComment,
  onCloseCommentWriteFormModal,
  commentID,
}) => {
  return (
    <>
      {toggleCommentWriteFormModal && (
        <CommentWriteFormModal
          showCommentDiscardModal={showCommentDiscardModal}
          onShowCommentDiscardModal={onShowCommentDiscardModal}
          onToggleCommentWriteFormModal={onToggleCommentWriteFormModal}
          comment={comment}
          onComment={onComment}
          onCloseCommentWriteFormModal={onCloseCommentWriteFormModal}
        />
      )}
      {showCommentDiscardModal && (
        <CommentDiscardModal
          onToggleCommentWriteFormModal={onToggleCommentWriteFormModal}
          onShowCommentDiscardModal={onShowCommentDiscardModal}
          onComment={onComment}
        />
      )}
      {toggleCommentDeleteFormModal && (
        <CommentDeleteFormModal
          onToggleCommentDeleteFormModal={onToggleCommentDeleteFormModal}
          commentID={commentID}
        />
      )}
    </>
  )
}

export default CommentModal
