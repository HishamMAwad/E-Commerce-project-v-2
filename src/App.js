import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header/Header';





class App extends React.Component {

    
  
    render(){
      return (
          <div>
            <Header/>
            <Navigation/>
          </div>
      );
    }
}

export default App;
