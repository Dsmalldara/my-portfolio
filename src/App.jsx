import React from "react";
import Header from './Components/Header/Header'
import Contact from './Components/Contacts/Contact'
import Nav from './Components/Nav/Nav'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio.'
import Experience from './Components/Experience/experience'
import About  from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Testimonials from './Components/testimonials/testimonials'
function App (){
    return (<>  
    <div id="page">
        <Header/>
    </div>
    <div id="page">
        <Nav/>
    </div>
        <About/>
    <div id="page">        
        <Experience/>
    </div>
    <div id="page">        
        <Services/>
    </div>
    <div id="page">
        <Portfolio/>
    </div>
    <div id="page">
        <Testimonials/>
    </div>
    <div id="page">
        <Contact/>
    </div>
    <div id="page">
        <Footer/>
    </div>  

    </>)
}
export default App;