import React from 'react'
import './Expancedate.css'
function ExpanceDate(props) {
  return (
    <div className='date'>
    <h5>{props.data.date.toLocaleString('en-US',{month:"long"})}</h5>
    <h5>{props.data.date.toLocaleString('en-US',{day:"2-digit"})}</h5>
    <h5>{props.data.date.getFullYear()}</h5>
 </div>
  )
}

export default ExpanceDate