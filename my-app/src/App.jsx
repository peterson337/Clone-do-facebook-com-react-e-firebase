import react, { useState } from 'react'
import './App.css'
import Header from './Header'
import Stories from "./stories";
import Feed from "./Feed";
import Post from "./Post";

function App() {

  return (
    <div className="App">
     <Header/>
     <Stories/>
     <Feed/>
     <Post/>
    </div>
  )
}

export default App

/* 
1:52:57
*/