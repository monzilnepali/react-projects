import React from 'react';
import Header from './Components/Header'
import Search from "./Components/Search";
import './Style/app.css'

function App() {

  return (
      <div className="container">
        <Header/>
        <div className="mainBody">
            <Search/>
        </div>

      </div>



  );
}

export default App;
