import react, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Stories from "./stories";
import Feed from "./Feed";
import Post from "./Post";
import {db} from "./firebase.jsx";
import {collection, onSnapshot, query} from "firebase/firestore";

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const q = query(collection(db, 'posts'));
    onSnapshot(q, (querySnapshot) =>{
      setPosts(querySnapshot.docs.map((doc) => ({
        info: doc.data(),
        id: doc.id
      })));
    });
  
  }, [])
  

  return (
    <div className="App">
     <Header/>
     <Stories/>
     <Feed/>
     {
     posts.map(function(val) {
      return(
      <Post nome={val.info.nome} horario='12:00' conteudo={val.info.conteudo}/>
      )})
     }
    
    </div>
  )
}

export default App

/* 
2:00:19
1:52:57
*/