import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

function Home() {
    const [category, setCategory] = useState("general");

    return (
        <> 
            <Navbar setCategory={setCategory} />
            <Hero />
            <NewsBoard category={category} />
            <Footer />
        </>
    )
}

export default Home;

// import { withRouter } from 'react-router-dom';    
// const ComponentToHide = (props) => {
//   const { location } = props;
//   if (location.pathname.match(/routeOnWhichToHideIt/)){
//     return null;
//   }

//   return (
//     <ComponentToHideContent/>
//   )
// }

// const ComponentThatHides = withRouter(ComponentToHide);