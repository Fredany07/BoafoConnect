import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Analytics from "./component/Analytics";
import Footer from "./component/Footer";
import PopularCompanies from "./component/PopularCompanies";
const LandingPage=() =>{
  return(
    <div className="min-h-screen">
      <Header/>
      <Hero/>
       
      <PopularCompanies/>
      <Analytics/>
      <Features/>
     
      <Footer/>
    </div>
  )
}
export default LandingPage;