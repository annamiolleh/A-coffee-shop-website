import React from 'react';
import './select.scss';
import Title from '../common/Title/Title';
import Slider from '../Slider/Slider';

class Select extends React.Component{
    render() {
        return (
            <section id="select" className='select'>
                <div className='select__container'>
                    <div className='select__products'>
                        <Title firstPartStart ='New Our'secondPart='Products'/>
                        <p>Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</p>
                    </div>
                    <div className='select__slider slider-select'>
                        <Slider />
                    </div>
                </div>    
            </section>
         )
    }  
}
export default Select; 