import React from 'react'
import './ChartBar.css'
function ChartBar(props) {
 let height=0;
 if(props.maxValue>0){
    height=Math.round((props.value/props.maxValue)*100)+"%"
    console.log("height",height)
 }
 
     
  return (
    <div className='chart-bar'>
        <div className='outer-bar'>
            <div className='inner-bar' style={{height:height}}></div>

        </div>
        <div>{props.label}</div>

    </div>
  )
}

export default ChartBar