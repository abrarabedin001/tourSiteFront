
import { useEffect,useState,useRef } from 'react'
import * as React from 'react';
import Table from './Components/Table';
import Form from './Components/Form';

import axios from 'axios';

const api = "http://localhost:3001/customers"
const toapi = "http://localhost:3001/customers"


export function Customers() {

  const dataRef = useRef([])
  const[Data,setData] = useState([]);
  const[Keys,setKeys] = useState([]);
  useEffect(
    ()=>{
     async function getData(){
      
      const res = await axios.get(api)
      // console.log(res.data.data)
      setKeys(Object.keys(res.data.data[0]))
      dataRef.current = res.data.data
      
      setData(res.data.data)
      
     } 
     getData()
     
     
    }
    ,[]

    
  )
  return (
    <div>

      <div className="bg-black">
        hello
      </div>

      <Table Data={Data} keys={Keys} className=""/>
      <Form api={api} toapi={toapi} data={Data} />
      
      
      
    </div>
  );
}


