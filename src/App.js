import React from 'react';

import { Navbar } from './app/components/navbar/Navbar'
import { XScroll } from './app/components/xScroll/XScroll'
import { UserSection } from './app/components/user-section/UserSection'



import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <UserSection/>
      <XScroll>
        
      </XScroll>
    </div>
  );
}

export default App;
