import React,{useState} from 'react';
import './App.css';
import Expances from './Components/Expances';
import NewExpances from './Components/NewExpances';
import {data} from './Components/ExpanceData'

function App() {
  const[expenceList,setExpenceList]=useState(data)
  
  const newExpanceItem=(expence)=>{
    console.log(expence)
    setExpenceList([expence,...expenceList])
  }
  

    return (
    <div className="App">
      <NewExpances expanceItem={newExpanceItem}/>
      <Expances data={expenceList}/>

    </div>
  );
}

export default App;
