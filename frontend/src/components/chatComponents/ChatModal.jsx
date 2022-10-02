import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AddChannel from '../modals/AddChannel';
import RenameModal from '../modals/RenameChannel'
import DeleteModal from '../modals/DeleteChannel'
import { closeModal } from '../../slices/modalsSlice';

const mod = {
  add: AddChannel,
  rename: RenameModal,
  delete: DeleteModal,
}

const ChatModal = () => {
  const dispatch = useDispatch()
  const { type, isOpen } = useSelector(state => state.modals);
  if (!isOpen) {
    return null;
  }
  const ChatModal = mod[type];
  const onHide = () => dispatch(closeModal());
  return (
    <Modal show={isOpen} centered onHide={onHide} >
      <ChatModal onHide={onHide}  />
    </Modal>
  )
}
export default ChatModal;