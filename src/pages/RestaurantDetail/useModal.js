import { useEffect, useState } from 'react';

export default () => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [contentId, setContentId] = useState(0);
  let [modalContent, setModalContent] = useState([]);

  let openModal = contentId => {
    setIsModalOpen(true);
    setContentId(contentId);
  };

  let closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch('/data/RestaurantDetail/menudetail.json')
      .then(res => res.json())
      .then(result => setModalContent(result));
  }, [contentId]);

  return { isModalOpen, openModal, closeModal, modalContent };
};
