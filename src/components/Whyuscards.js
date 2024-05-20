import React from 'react'
import {} from '../App.css'
import { Whycard } from '../constants/Whycard'
import Whyuscard from './Whyuscard'



function Whyuscards() {
    const whycard= Whycard.map((data)=>{
        return(
            <Whyuscard
            key={data.key}
            Images={data.Images}
            name ={data.name}
                />
        )
    })
   
  return (
    <div>
        <div  style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:" 40px",
       
      }}>
            <h1 style={{ marginTop:" 40px"}}>WHY SHOP WITH US</h1>
        </div>
        <div style={{ display: "flex",justifyContent: "center",}}>
        <div style={{width:'95%'}}>
       <div style={{ display: "flex",justifyContent: "space-between",}}>{whycard}</div></div>
         </div>
    </div>
   
  )
}

export default Whyuscards