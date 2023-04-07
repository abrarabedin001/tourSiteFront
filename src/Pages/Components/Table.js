import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const deleteHandler =()=>{
  return 0;
}

export default function DenseTable(props) {
  let rows = props.Data;
  // console.log(rows)
 
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
                {console.log(row)}
                {row[key]}
              </TableCell> )}
              <TableCell align="right"><button className="p-2 m-2 bg-red-600" onClick={deleteHandler}>Delete</button></TableCell>

             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
