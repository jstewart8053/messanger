import React from 'react';
import './App.css';
import HomeIcon from '@material-ui/icons/Home';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {



  // setting name to pass below as props
  // then in Tweets, call props.me to get name


  return (
    <div className="app">
      <h1> Hello React </h1>
      <Sidebar />
    </div>
  );
}

export default App;
