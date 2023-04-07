import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';



export default function DenseTable(props) {
  let rows = props.Data;
  let toapi = props.toapi;
  // console.log(rows)
  const delValue= async  (Id)=>{
    try {
      let link = toapi+"/"+Id
      // console.log(link);
      const resp = await axios.delete(link);
      
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
  }
  
  
  const deleteHandler =(e,rows)=>{
    delValue(rows["Id"])
  }
 
  // console.log(keys,Values)
  return (
    <TableContainer component={Paper} className="mt-5">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        
        {/* ///Column names */}
        <TableHead>
          <TableRow key="special">
            {
               props.keys.map((key)=> <TableCell>{key}</TableCell>)
            }
          </TableRow>
        </TableHead>


        {/* Data Bearing Columns */}
        <TableBody>
          {rows.map((row) => (
            
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {props.keys.map((key)=>
              <TableCell component="th" scope="row" >
              
                {row[key]}
              </TableCell> )}
              <TableCell align="right"><button className="p-2 m-2 bg-red-600" onClick={(e,rows)=>deleteHandler(e,row)}>Delete</button></TableCell>

             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
