import React from 'react';
import './about.scss';
import shop from '../../img/about/shop.png'
import Title from '../common/Title/Title';
import Video from '../Video/Video';

class About extends React.Component{
    render() {
        return (
           <section id='about' className='about'>
                <div className='about__container'>
                    <div className='about__pic'>
                        <img src={shop} alt='A coffee shop'></img>
                    </div>
                    <div className='about__info'>
                        <div className='about__title'>
                            <Title firstPartStart ='We make'secondPart='delicious'/>
                        </div>
                        <p> Only in 2021 we have made more than 100,000 orders for you, 
                            your loved ones, all of you, and in 2022 we are ready to destroy the market
                        </p>
                        <div className='about__wrap'>
                            <Video />
                        </div>
                    </div>
                </div>
           </section> 
        )
    }  
}
export default About;