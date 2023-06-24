import React from 'react';
import Appbar from './components/Appbar';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

const App= () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Appbar />
        </div>
        <div>
          <Body />
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
