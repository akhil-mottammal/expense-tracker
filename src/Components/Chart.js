import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'
function Chart(props) {

  let chartDataPoints=[
    {
      label:"jan",
      value:0
    },
    {
      label:"feb",
      value:0
    },
    {
      label:"mar",
      value:0
    },
    {
      label:"apr",
      value:0
    },
    {
      label:"may",
      value:0
    },
    {
      label:"jun",
      value:0
    },
    {
      label:"jul",
      value:0
    },
    {
      label:"aug",
      value:0
    },
    {
      label:"sep",
      value:0
    },
    {
      label:"oct",
      value:0
    },
    {
      label:"nov",
      value:0
    },
    {
      label:"dec",
      value:0
    }
  ]


  for(let expence of props.expences){
   let month= expence.date.getMonth()-1
   chartDataPoints[month].value+=expence.price
   

   }
 
  
  
      let arrayOfMax=chartDataPoints.map((item)=>{
        return item.value
      })
      
      
      let maxValue=Math.max(...arrayOfMax)
      
  
  return (
    
    <div className='chart'>
      
        {chartDataPoints.map((item)=>{
          return <ChartBar key={item.label} label={item.label} maxValue={maxValue} value={item.value}/>
        })}
        </div>
  )
}

export default Chart