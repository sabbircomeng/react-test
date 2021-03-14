import React, { useState } from 'react';
import Menu from './component/menu/Menu';
import MainSlider from './component/slides/MainSlider';
import PremiumMembers from './component/PremiumMembers';
import MembershipPlan from './component/MembershipPlan';
import HappyStory from './component/HappyStory';
import VideoSession from './component/VideoSession';
import AboutHm from './component/AboutHm';
import Visitors from './component/Visitors';
import Footer from './component/Footer';

function App() {   
  return (
      <div className="full-body-wrp">   
        <Menu/>     
        <MainSlider/>
        <PremiumMembers/>
        <MembershipPlan/>
        <HappyStory/>        
        <VideoSession/>
        <AboutHm/>
        <Visitors/>        
        <Footer/>
      </div>
  );
}

export default App;
