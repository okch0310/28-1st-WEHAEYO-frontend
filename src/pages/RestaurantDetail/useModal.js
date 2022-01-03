import { useEffect, useState } from 'react';

export default () => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [contentId, setContentId] = useState(0);
  let [modalContent, setModalContent] = useState([]);

  let handleModal = contentId => {
    setIsModalOpen(!isModalOpen);
    setContentId(contentId);
  };

  useEffect(() => {
    fetch('/data/RestaurantDetail/restaurantinfo.json')
      .then(res => res.json())
      .then(result => setModalContent(result));
  }, [contentId]);

  return { isModalOpen, handleModal, modalContent };
};
