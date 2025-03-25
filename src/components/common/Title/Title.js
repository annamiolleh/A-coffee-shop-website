import React, { useRef } from 'react';
import './title.scss';
import { motion, useInView } from 'framer-motion';

  const Title = ({ firstPartStart, firstPartEnd, secondPart }) => {
    const ref = useRef(null);  // Референс на элемент
    const isInView = useInView(ref, { amount: 0.25 });  // Анимация при скролле на 1/4 секции
  
    return (
      <div ref={ref} className={`title`}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}  // Анимация при скролле
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          {firstPartStart} <br />
          <motion.span
          className='highlight'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}  // Анимация при скролле
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          {secondPart}
        </motion.span>
        </motion.h1>  
      </div>
    );
  };
export default Title;