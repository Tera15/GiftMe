import React from 'react';

import { Navbar } from './app/components/navbar/Navbar'
import { XScroll } from './app/components/xScroll/XScroll'
import { UserSection } from './app/components/user-section/UserSection'
import { GiftCard } from './features/gifts/GiftCard'
import { Footer } from  './app/components/footer/Footer'



import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <UserSection/>
      <XScroll>
        <GiftCard/>
        <GiftCard/>
        <GiftCard/>
        <GiftCard/>
        <GiftCard/>
        <GiftCard/>
      </XScroll>
      <Footer/>
    </div>
  );
}

export default App;
