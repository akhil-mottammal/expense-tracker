import React,{useState} from 'react'
import './ExpanceForm.css'
function ExpanceForm(props) {
 const[title,setTitle]=useState('')
 const[amount,setAmount]=useState('')
 const[date,setDate]=useState('')

   const titleChange=(e)=>{
setTitle(e.target.value)
}
const amountChange=(e)=>{
  setAmount(e.target.value)
}
const dateChange=(e)=>{
  setDate(e.target.value)
}

 const submitHandler=(e)=>{
   e.preventDefault()
  const expanceData={
    title:title,
    price:amount,
    date:new Date(date)
  }
props.onSaveExpance(expanceData)
  setTitle('')
  setAmount('')
  setDate('')

 }
 const closeHandler=()=>{
   props.setState(false)
 }

  return (
    <div className='expance-form'>
        <form onSubmit={submitHandler}>
       
           <input value={title} onChange={titleChange} placeholder='Product Name' type="text" name='title'/>
       
       
           <input value={amount} onChange={amountChange} placeholder='Price ' type="number" min="1" step="0.1" name='title'/>
       
       
           <input value={date} onChange={dateChange} placeholder='date' type="date" name='title'/>
           <div>
               <input className='submit' type="submit"/>
               <button onClick={closeHandler} className='cancel'>Cancel</button>
           </div>
       </form>
    </div>
  )
}

export default ExpanceForm