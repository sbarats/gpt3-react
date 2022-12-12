import React from 'react';

import { About, Blog, Features, Header, Possibility, Footer } from './containers';
import { CTA, Brands, Navbar } from './components';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <About />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;