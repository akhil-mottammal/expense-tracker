import React from 'react'
import ExpanceDate from './ExpanceDate'
import './ExpanceItem.css'
import Card from './Card'
import ExpensesFilter from './ExpencesFilter'
function ExpanceItem(props) {
 
  return (
      
    <Card className='expance-item '>
       <ExpanceDate data={props.data}/>
        <p className='title'>{props.data.title}</p>
        <div className='price'>
          <h3>{props.data.price}</h3>
        </div>
    </Card>
    
  )
}

export default ExpanceItem