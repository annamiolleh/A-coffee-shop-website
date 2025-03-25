import React, { useState, useEffect } from 'react';
import './counter.scss';

const AutoCounter = () => {
  const [counts, setCounts] = useState([0, 0, 0]); // Три позиции счетчика
  const targetValues = [9, 2, 28]; // Целевые значения для каждой позиции
  const speed = 100; // Интервал обновления в миллисекундах (0.1 сек)

  useEffect(() => {
    const timers = counts.map((count, index) => {
      // Для каждой позиции создаем свой интервал
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          // Увеличиваем значение, если оно не достигло целевого
          if (newCounts[index] < targetValues[index]) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, speed); // Интервал для обновления
    });

    return () => {
      timers.forEach(timer => clearInterval(timer)); // Очищаем интервал при размонтировании
    };
  }, []); // Массив зависимостей пустой, чтобы счетчики запустились при монтировании

  return (
    <div className='counter'>
        <div className='counter__wrap'>
            <div class="counter__value">{counts[0]}K<span>+</span></div>
            <div class="counter__title">Premium Users</div>
        </div>
        <div className='counter__wrap'>
            <div class="counter__value">{counts[1]}K<span>+</span></div>
            <div class="counter__title">Happy Customers</div>
        </div>
        <div className='counter__wrap'>
            <div class="counter__value">{counts[2]}<span>+</span></div>
            <div class="counter__title">Awards Winning</div>
        </div>
    </div>
  );
};

export default AutoCounter;