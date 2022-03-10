import React,{useState} from 'react'
import ExpanceItem from './ExpanceItem'
import './Expances.css'
import Error from './Error.js'
import Card from './Card'
import ExpensesFilter from './ExpencesFilter'
import Chart from './Chart'
function Expances(props) {
  const[select,setSelect]=useState("2019");
  
  const filterdDate=(date)=>{
    setSelect(date)
    
  }
  const filtereLists=props.data.filter((item)=>{
    return item.date.getFullYear().toString()===select
  })
  
  return (


    <Card className='expances'>
      <ExpensesFilter selected={select} filterdDate={filterdDate}/>
      <Chart expences={filtereLists}/>
      { filtereLists.length>0 ? filtereLists.map((item)=>{
        return <ExpanceItem  data={item}/>
      }) : <Error/>
    }
        
    </Card>
  )
}

export default Expances