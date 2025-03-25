import React from 'react';
import './contact.scss';
import shop1 from '../../img/contact/shop1.png'
import Title from '../common/Title/Title';
// import social from '../../img/contact/social.svg'

class Contact extends React.Component{
    render() {
        return (
           <section className='contact'>
                <div className='contact__container'>
                    <div className='contact__pic'>
                        <img src={shop1} alt='A coffee shop'></img>
                    </div>
                    <div className='contact__info'>
                        <div className='contact__title'>
                            <Title firstPartStart ='Our'secondPart='Contacts'/>
                        </div>
                        <p> Have time to buy the most harmonious drinks in the new Starbucks coffee and 
                            don't forget about the discount!
                        </p>
                        <ul className='contact__socials'>
                            <li className='contact__item '>
                                <span className='item1'></span><a href="https://www.instagram.com/" target='blank'>@supercoffee</a>
                            </li>
                            <li className='contact__item'>
                                <span className='item2'></span><a href="tel:+7-999-999-99-99">+7-999-999-99-99</a>
                            </li>  
                        </ul>
                    </div>
                </div>
           </section> 
        )
    }  
}
export default Contact;