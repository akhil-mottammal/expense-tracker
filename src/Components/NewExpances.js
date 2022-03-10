import React,{useState} from 'react'
import ExpanceDate from './ExpanceDate'
import ExpanceForm from './ExpanceForm'
import './NewExpances.css'
function NewExpances(props) {
  const[state,setState]=useState(false)
  const newExpanceHandler=(NewExpance)=>{
    const ExpanceData={
      ...NewExpance
    }
   props.expanceItem(ExpanceData)
  }
  const clickHandler=()=>{
    setState(true)
  }
  return (
    <div className='new-expance'>
     {state ? <ExpanceForm setState={setState} onSaveExpance={newExpanceHandler}/> : <button onClick={clickHandler} className='btn'>Add New Expence</button>}
    </div>
  )
}

export default NewExpances