import React, { createContext } from 'react';
import Modal from './Modal/Modal';
import useModal from './useModal';

let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children }) => {
  let { isModalOpen, openModal, closeModal, modalContent } = useModal();
  return (
    <Provider value={{ isModalOpen, openModal, closeModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
