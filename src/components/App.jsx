import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './layout/Header';
import SearchForm from './search/SearchForm';
import Footer from './layout/Footer';



import '../styles/App.scss';


function App() {



  return (

    <div>
      <Header />

      <main>
        <SearchForm
        />
      </main>

      <Footer />
    </div>
  )
}

export default App;




