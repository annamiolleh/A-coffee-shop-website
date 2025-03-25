import React, {useRef} from 'react';
import './cardList.scss';

import { motion, useInView } from 'framer-motion';
import pic1 from '../../img/main/pic1.png'
import pic2 from '../../img/main/pic2.png'
import pic3 from '../../img/main/pic3.png'

// Компонент одной карточки
const Card = ({ icon, title, textFirstPart, textEndPart }) => {
  const ref = useRef(null);  // Создаем референс для карточки
  const isInView = useInView(ref, { amount: 0.25 });  // Анимация при скролле на 1/4 карточки
  return (
    <motion.div
      ref={ref}  // Привязываем реф к карточке
      className="specialization__card card"
      initial={{ opacity: 0, scale: 0.8 }}  // Начальное состояние
      animate={isInView ? { opacity: 1, scale: 1 } : {}}  // Анимация при скролле
      transition={{ duration: 0.5, ease: 'easeOut' }}  // Настройка анимации
    >
    <div className="card-list__item">
      <div className="card-list__icon"> <img src={icon} alt={title} /></div>
      <h3 className="card-list__title">{title}</h3>
      <p className="card-list__text">{textFirstPart}<br />{textEndPart}</p>
    </div>
    </motion.div>
  );
};

// Компонент для отображения карточек
const CardList = () => {
  const cards = [
    {
      icon: pic1, 
      title: 'Tasty',
      textFirstPart: 'We have the most',
      textEndPart: 'delicious coffee'
    },
    {
      icon: pic2,
      title: 'Fast',
      textFirstPart: 'Our cafe will serve',
      textEndPart: 'you quickly'
    },
    {
      icon: pic3,
      title: 'Available',
      textFirstPart: 'Cafe will serveat the',
      textEndPart: ' most pleasant prices'
    },
  ];

  return (
    <div className="card-list">
        <div className="card-list__wrap">
        {cards.map((card, index) => (
            <Card key={index} icon={card.icon} title={card.title} textFirstPart={card.textFirstPart} textEndPart={card.textEndPart}/>
        ))}
        </div>
    </div>
  );
};

export default CardList;