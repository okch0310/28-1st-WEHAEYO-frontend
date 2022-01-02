import React, { createContext } from 'react';
import Modal from './Modal';
import useModal from './useModal';

let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children }) => {
  let { isModalOpen, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ isModalOpen, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
