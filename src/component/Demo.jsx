import {React,useState} from 'react';
import './web/Style.css';
import image1 from "../assest/image1.jpeg"
import images2 from "../assest/images2.jpeg"





function Demo() {

  const [turnOn,setTurnOn]=useState(false)
  

  const looks=()=>{
    setTurnOn(true);
  }
  const kill=()=>{
    setTurnOn(false)
  }

  return(
    <div className='main'>

    <h1 className='p1'> Can i do the light on? </h1>
    
    <button onClick={looks} className='btn1'> Turn On</button>
    <img src={turnOn?image1:images2} alt='off/onn'/>
    <button onClick={kill} className='btn2'> Turn Off</button>

    </div>

  )
}

export default Demo
 
    
  
      


   

    
  
    
  