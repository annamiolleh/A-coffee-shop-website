import React, { useState, useEffect } from 'react';
import './video.scss'; 
import { motion, AnimatePresence } from 'framer-motion';

const Video = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для управления видимостью попапа

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Чистка эффекта при размонтировании компонента
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [isOpen]); // Срабатывает при изменении состояния isOpen

  return (
    <div className='about__video'>
      {/* Кнопка для открытия попапа */}
      <button onClick={openPopup} className='about__btn'><span></span>Cooking process</button>

      {/* Попап с видео, который отображается при isOpen === true */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="popup"
            className="popup"
            initial={{ opacity: 0, scale: 0 }}  
            animate={{ opacity: 1, scale: 1 }}   
            exit={{ opacity: 0, scale: 0 }}    
            transition={{ duration: 0.4, ease: 'easeOut' }}>
            <div className="popup__content">
              <button className="popup__close-btn" onClick={closePopup}>
                &times;
              </button>
              <iframe className='popup__video'
              src="https://www.youtube.com/embed/K9adFCvR7ow?si=YsK_gZWQ-SXSzx_E" 
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            {/* Фон попапа, при клике на который попап закроется */}
            <div className="popup__overlay" onClick={closePopup}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Video;