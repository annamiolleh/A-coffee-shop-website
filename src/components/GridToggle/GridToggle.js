import React, { useRef } from 'react';
import './gridToggle.scss';
import pic1 from '../../img/events/pic1.jpg';
import pic2 from '../../img/events/pic2.png';
import pic3 from '../../img/events/pic3.png';
import pic4 from '../../img/events/pic4.png';
import pic5 from '../../img/events/pic5.png';
import right from '../../img/events/right.png';
import btn from '../../img/select/arrow.svg';
import Button from '../common/Button/Button';


const GridToggle = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const Card = ({ pic, title, url }) => {
    console.log(url);
    return (
      <div className="event__item">
        <div className="event__icon"> <img src={pic} alt={title} /></div>
        <h3 className="event__title">{title}</h3>        
        <Button 
          as="a" 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          caption="More" 
        />
      </div>
      
    );
  };

  const GridList = [
    { 
      pic: pic1,
      title: 'TWO COFFEE FOR 1 PRICE',
      url: 'https://www.starbucks.com/rewards',
    },
    { 
      pic: pic2,
      title: 'KITCHEN TOUR',
      url: 'https://www.youtube.com/watch?v=AqbYLqWdvoI',
    },
    { 
      pic: pic3,
      title: 'FREE COFFEE FOR 3 COFFEE',
      url: 'https://www.starbucks.com/rewards',
    },
    { 
      pic: pic4,
      title: 'OUR INSTAGRAM',
      url: 'https://www.instagram.com/starbucks?igsh=MTRtc3VmZDRrYmdmdQ==',
    },
    { 
      pic: pic5,
      title: 'why do YOU CHOOSE US?',
      url: 'https://www.youtube.com/watch?v=1PpTc5AxPV0',
    },
  ];

  return (
    <div className="event__flexbox">
      <button className="event__arrow-left" onClick={scrollLeft}>
      <img src={right} alt="switcher"/>
      </button>
      <div className="event__wrap" ref={scrollRef}>
        {GridList.map((card, index) => (
          <Card key={index} pic={card.pic} title={card.title} url={card.url} />
        ))}
      </div>
      <button className="event__arrow-right" onClick={scrollRight}>
        <img src={btn} alt="switcher"/>
      </button>
    </div>
  );
};

export default GridToggle;