import React,{useState} from 'react';
import './App.css';
import NamesContainer from './NamesContainer';

function App() {

  const [names]=useState({
    name:['John', 'Abigail', 'X Æ A-Xii', 'Beyonce', 'Khloe Kardashian', 'George Bush', 'Queen Elizabeth', 'Yeezy', 'Ivanka Trump', 'Leonardo DiCaprio' ]
  })
  const [searchTerm,setSearchTerm]=useState("");

  const editSearch=(e)=>{
    setSearchTerm(e.target.value)
  }

  const dynamicSearch=()=>{
    console.log(searchTerm)
    let name= names.name.filter(name=>name.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log(name)
    return name
  }

  return (
    <div className="App">
      <input className="Search" type="text" value={searchTerm} onChange={(e)=>editSearch(e)} placeholder="Seach any name"/>
      <br></br>
      <h3>These are the important names:</h3>
      <NamesContainer names={dynamicSearch()}/>
    </div>
  );
}

export default App;
