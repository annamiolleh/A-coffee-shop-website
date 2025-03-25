import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';  
import 'swiper/css';
import 'swiper/css/navigation';  
import './slider.scss';
import brown from '../../img/select/brown.png';
import green from '../../img/select/green.png';
import olive from '../../img/select/olive.png';
import btn from '../../img/select/arrow.svg';



const ProductList = [
    { 
      pic: brown,
      title: 'Cappuccino',
      text: 'Our cafe will serve you quickly',
      price: '8,45$',
      quantity:'330ml',
    },
    { 
        pic: olive,
        title: 'Latte',
        text: 'Our cafe will serve you quickly',
        price: '8,45$',
        quantity:'330ml',
      },
      { 
        pic: green,
        title: 'Raff',
        text: 'Our cafe will serve you quickly',
        price: '6,45$',
        quantity:'330ml',
      },
      { 
        pic: brown,
        title: 'Americano',
        text: 'Our cafe will serve you quickly',
        price: '6,45$',
        quantity:'330ml',
      },
      { 
        pic: olive,
        title: 'Mocha',
        text: 'Our cafe will serve you quickly',
        price: '8,45$',
        quantity:'330ml',
      },
      { 
        pic: green,
        title: 'Doppio',
        text: 'Our cafe will serve you quickly',
        price: '7,45$',
        quantity:'330ml',
      }
  ];

const ProductSlider = () => {
  const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);

    const handleSlideChange = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        }
    };
    return (
        <div className='slider-select__wrap'>
            <div className='slider-select__swiper'>
                <Swiper className='testimonials-over'
                modules={[Navigation]} 
                navigation={{
                    nextEl: '.custom-next',  // Подключаем кастомные кнопки
                    prevEl: '.custom-prev',
                    disabledClass: 'swiper-button-disabled',
                }} 
                onReachEnd={(swiper) => {
                    console.log('Reached the last slide');
                  }}
                  onReachBeginning={(swiper) => {
                    console.log('Reached the first slide');
                  }}           
                spaceBetween={30}           
                watchSlidesProgress={true}
                slidesPerView={2.5}
                autoheight={false.toString()}
                breakpoints={{
                    1495: {
                    slidesPerView: 2.5,       
                    },
                    1024: {
                        slidesPerView: 2.5,       
                        },
                    950: {
                        slidesPerView: 2.5,       
                        },
                    768: {
                      slidesPerView: 2.5,       
                    },
                    630: {
                      slidesPerView: 1.5,       
                    },
                    320: {
                      slidesPerView: 1,       
                    },
                }}
                ref={swiperRef}
                >
                {ProductList.map((elem, index) => (
                <SwiperSlide key={index} className='swiper-slide-custom'>
                <div className="slider-select__item">
                    <div className='slider-select__pic'>
                        <img src={elem.pic} alt="picCup"></img>
                    </div>
                    <h3 className="slider-select__title">{elem.title}</h3>
                    <p className="slider-select__text">{elem.text}</p>
                    <div className='slider-select__details'>
                        <p className='slider-select__price'>{elem.price}</p>
                        <p className='slider-select__quantity'>{elem.quantity}</p>
                    </div>
                </div>
                </SwiperSlide>
                ))}
                </Swiper>
                {/* <div className='button-wrap'> */}
                <button 
                  className={`custom-prev ${isBeginning ? 'disabled' : ''}`} 
                  disabled={isBeginning}
                  ><img src={btn} alt="switcher"/>
                </button>
                <button 
                  className={`custom-next ${isEnd ? 'disabled' : ''}`} 
                  disabled={isEnd}>
                  <img src={btn} alt="switcher"/>
                </button>
   
                {/* </div> */}
            </div>
            
        </div>
    );
  };

export default ProductSlider;