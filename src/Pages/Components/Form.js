


import { useEffect,useState,useRef } from 'react'
import * as React from 'react';


import axios from 'axios';

// const api = "http://localhost:3001/employees"













export default function Form(props) {
  const api = props.api
  //props.toapi
  // props.data
  // let Keys = props.key
 
  const toapi = props.toapi

  const [Value,setValue] = useState({})
  const[Data,setData] = useState([]);
  const[Keys,setKeys] = useState([]);
  let obj = {}
  useEffect(
    ()=>{
     async function getData(){
      
      const res = await axios.get(api)
      setKeys(Object.keys(res.data.data[0]))
     
     } 
     getData()    
    }
    ,[]  
  )
  




  

  const fieldChecker=(key)=>{

    const date_input = key.includes("date")
    const phone = key.includes("Phone")
    const hour = key.includes("Hour")
    const sHour = key.includes("hour")
    // const 
    if (date_input){
      return <div key={key} >
                <label htmlFor={key} >{key}</label>
                <input type="date" id={key} className="p-2 m-2 w-sm" onChange={e=>handleChange(e,key)} placeholder="test"/>
            </div>
        
    }else if(phone||hour||sHour){
      return <div key={key}>
                <label htmlFor={key} >{key}</label>
                <input type="number" id={key} defaultValue="" className="p-2 m-2 w-sm" onChange={e=>handleChange(e,key)} placeholder="test"/>
            </div>
    
    }else{
      return <div key={key} >
                <label htmlFor={key} >{key}</label>
                <input type="text" id={key} className="p-2 m-2 w-sm" onChange={e=>handleChange(e,key)} placeholder="test"/>
            </div>
    }

  }

  const sendValue= async  (data)=>{
    try {
      const resp = await axios.post(toapi, data);
      console.log(resp.data);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
  }

  let handleChange=(e,key)=>{
    console.log(e.target.value)
    console.log(key)
    obj[key]=e.target.value
    setValue({...Value,...obj})
    console.log(Value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    sendValue(Value)
  }

  

  return (
    <div>

      
      
     
      <form onSubmit={handleSubmit} className="max-w-[500px] bg-red-700 flex flex-wrap space-between "  >
        {
          Keys.map(
            key=>
            ( 
              fieldChecker(key)
            
              
            )
          )
        }
        <button type="submit" className="bg-blue-500">Submit</button>
        
      </form>
      
    </div>
  );
    }