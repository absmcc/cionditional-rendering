import {useState} from "react"
import Loading from './Loading';
import Loaded from './Loaded';


import './App.css';
import { findAllByTestId } from '@testing-library/react';


function App() { 
  //const isLoaded = true;
  const[isLoaded, setIsLoaded] = useState(false)
  const [username, setUsername] = useState('Maria')
  const[objectExample, setObjectExample,] = useState({name:"name of Object"})//don't need this
  const ternary = isLoaded ? "YES" : "NO"

  return (
    <div className="App">
       <h1>Username is:{username !== "" ? username : "Guest"}</h1>
       <h1>Username is {username || "Guest"}</h1>
       <h1>
        {
isLoaded && 
<>
this is really loaded
<Loaded/>
</>

 }</h1>
       
       
       
       <h1>{String(objectExample.name)}</h1>
       <h1>{isLoaded ? "YES" : "NO"}</h1>

      {
      isLoaded ?
       <Loaded/>
      :
     <Loading/>
    }


  <h1>isLoaded = {String(isLoaded)}</h1> 
    <h1> {ternary} </h1>

    <button onClick={()=>{
  console.log("button clicked")
  setIsLoaded(true)
  setIsLoaded(!isLoaded)
  }}>Change Loaded</button>

    </div>
    )
  }
  
  export default App;
  
