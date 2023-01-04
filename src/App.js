import "./App.css";

/*
    This is our application's top-level component.
    
    @author Andy Yang
*/
/*
  This is the entry-point for our application. Many different home pages
  
  @author Andy Yang
*/

import React from 'react'
import { Footer, Header,Hero, Products, Slider, Testimonial, Visual } from "./components";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <Slider/>
      <Visual/>
      <Products/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
