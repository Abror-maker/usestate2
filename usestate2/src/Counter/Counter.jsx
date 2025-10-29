import React, { useState } from 'react'
import './sanoq.css'
const Counter = () => {
 const [son1,son2]=useState(0)
 const [nom1,nom2]=useState(" samsung")
    function moshin(){
        son2(son1+1)
     if(son1%2==0){
            nom2("Malibu ")
        }else{
            nom2("Cobalt")
        }
    }
    function telfon(){
        son2(son1-1)
        if(son1%2==0){
            nom2("Iphone ")
        }else{
            nom2("Samsung")
        }
    }
    function tiklash(){
        son2(0)
    }
    return (
    <div>
      <h1 style={son1%2==0 ?{background: "blue"} : {background: "red"}}>{son1}</h1>
      <h1 style={son1%2==0 ?{background: "red"} : {background: "blue"}}>{nom1}</h1>
      <div className="buttons">
        <button onClick={moshin}>Malinu/Cobalt     +1</button>
      <button onClick={telfon}>Iphhone/Malibu      -1</button>
      <button onClick={tiklash}>0 ga tiklash</button>

      </div>
    </div>
  )
}

export default Counter
