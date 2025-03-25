import React from 'react';
import './main.scss';
import { motion } from 'framer-motion';
import Title from '../common/Title/Title';
import Counter from '../Counter/Counter';
import CardList from '../CardList/CardList';
import coffee from '../../img/main/coffee.png'
import decor from '../../img/main/decor.svg'
import discount from '../../img/main/discont.png'

class Main extends React.Component{
    render() {
        return (
            <>
            <section id='main' className='main'>
                <div className='main__container'>
                    <div className='main__info'>
                        <div className='main__wrap'>
                            <Title firstPartStart ='New Cafe'firstPartEnd = 'by' secondPart='StarBucks'/>
                            <p>Have time to buy the most harmonious drinks in the<br />
                            new Starbucks coffee and don't forget about the discount!</p>
                            <div className='main__btns'>
                                <a href='#select' alt='Choose your coffee' className="btn" >Select a coffee</a>
                                <a href='#about' alt='Get more info'>More</a>
                            </div>
                            <Counter />
                        </div>
                        <div className='main__pic'>
                            <div className='main__cup'>
                                <motion.img src={coffee} 
                                 alt="A cup of coffee"
                                initial={{ opacity: 0, x: 120}}
                                animate={{ opacity: 1, x: 0}}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.2}}/>
                                {/* <img src={coffee} alt="A cup of coffee"/> */}
                            </div>
                            <div className='main__dec'>
                                <motion.img src={decor} 
                                    alt="waving decoration"
                                    initial={{ opacity: 0, x: 50, scale: 0, scaleY: 0 }}
                                    animate={{ opacity: 1, x: 0, scale: 1, scaleY: 1 }}
                                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4}}/>
                                {/* <img src={decor} alt="waving decoration"/> */}
                            </div>
                            <div className='main__discont'>
                                {/* <img src={discount} alt="discont label"/> */}
                                <motion.img src={discount} 
                                    alt="discont label"
                                    initial={{ opacity: 0, y: -120}}
                                    animate={{ opacity: 1, y: 0}}
                                    transition={{ duration: 1.4, ease: 'easeOut', delay: 0.6}}/>
                            </div>
                        </div>
                    </div>
                    <div className='main__benefits'>
                        <CardList />
                    </div>
                </div>

            </section>
                
            </>
        )
     }  
}
export default Main;