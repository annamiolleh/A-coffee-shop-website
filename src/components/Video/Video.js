import React, { useState, useEffect } from 'react';
import './video.scss'; 
import { motion, AnimatePresence } from 'framer-motion';
import playBtn from '../../img/about/play.png';

const Video = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для управления видимостью попапа
  const [isPlaying, setIsPlaying] = useState(false); // Состояние для управления загрузкой видео

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setIsPlaying(false); // Останавливаем видео при закрытии попапа
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className='about__video'>
      {/* Кнопка для открытия попапа */}
      <button onClick={openPopup} className='about__btn btn'>
        <span></span>Cooking process
      </button>

      {/* Попап с видео, который отображается при isOpen === true */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="popup"
            className="popup"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="popup__content">
              <button className="popup__close-btn" onClick={closePopup}>
                &times;
              </button>
              
              {!isPlaying ? (
                <div className="popup__thumbnail">
                  <img
                    src="https://img.youtube.com/vi/K9adFCvR7ow/maxresdefault.jpg" 
                    alt="Video Thumbnail"
                    onClick={() => setIsPlaying(true)} // Запуск видео при клике
                  />
                  <button className="popup__play-btn" onClick={() => setIsPlaying(true)}>
                    <img src={playBtn} alt="button to start the video"/>
                  </button>
                </div>
              ) : (
                <iframe
                  className='popup__video'
                  src="https://www.youtube.com/embed/K9adFCvR7ow?autoplay=1&si=YsK_gZWQ-SXSzx_E"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              )}
            </div>
            <div className="popup__overlay" onClick={closePopup}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Video;