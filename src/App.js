import React from 'react';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import Select from './components/Select/Select.js';
import Contact from './components/Contact/Contact.js';
import Events from './components/Events/Events.js';
import Footer from './components/Footer/Footer.js';

class App extends React.Component { 
     render() {
        return (
            <>
                <Header />
                <Main />
                <About />
                <Select />
                <Events />
                <Contact />
                <Footer />
            </>
        )
     }
}

export default App;