import "./App.css";
import Header from '../src/components/Header'
import Section2 from '../src/components/Section2'
import Section3 from '../src/components/Section3'
import Section4 from '../src/components/Section4'
import Section5 from '../src/components/Section5'
import Footer from './components/Footer'
import React, { useState } from 'react'
import { Button } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}
export default App;
