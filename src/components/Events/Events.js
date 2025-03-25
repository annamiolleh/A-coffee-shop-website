import React from 'react';
import './events.scss';
import Title from '../common/Title/Title';
import GridToggle from '../GridToggle/GridToggle';


class Events extends React.Component{
    render() {
        return (
            <section id='events' className='events'>
                <div className='events__container'>
                    <div className='events__info'>
                        <Title firstPartStart ='Our New'secondPart='Events'/>
                        <p>Only in 2021 we have made more than 100,000 orders for you, your loved ones, 
                            all of you, and in 2022 we are ready to destroy the market</p>
                    </div>
                       <GridToggle />
                </div>    
            </section>
         )
    }  
}
export default Events; 