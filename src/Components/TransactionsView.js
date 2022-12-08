import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HeaderGroup from "./HeaderGroup"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';

import transactions from "../utils/transactions"

function StyledType({isMonthly}){
  const style={
    width: "10rem",
    color: isMonthly?"#a01f3a":"#74bdbf",
    backgroundColor: isMonthly?"#f75e44":"#436da4",
    borderRadius: "50px",
    textAlign: "center"
  }

  const textStyle ={
    fontWeight: "bold",
    fontSize: "0.8rem"
  }
  return(
      <Stack sx={style}>
      {isMonthly?
        <Typography sx={textStyle}>Monthly Payment</Typography>
        :
        <Typography sx={textStyle}>Daily Payment</Typography>
      }
      </Stack>
  )
}


function Row({data}){
  const fullName = data.user.firstName + " " + data.user.lastName
  return(
    <TableRow>
              <TableCell align="left">
                <Stack  sx={{padding: '10px 0'}} spacing={2} direction="row" alignItems="center" justifyContent="flex-start">
                    <AccountCircleIcon />
                    <Typography>{fullName}</Typography>
                </Stack>
              </TableCell>
              <TableCell><StyledType isMonthly={data.payment.type === "daily"?false:true}/></TableCell>
              <TableCell>{data.payment.date}</TableCell>
              <TableCell>{data.amount}</TableCell>
    </TableRow>
  )
}

export default function BasicTable() {
  return (
      <div>
        <HeaderGroup lbl={"Transactions"} component=<TextField id="standard-basic" label="Search" variant="standard" /> />
          

          <TableContainer>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
              
              <TableHead>
                <TableRow>
                  <TableCell width="20%">Name</TableCell>
                  <TableCell width="20%">Type</TableCell>
                  <TableCell width="20%">Date</TableCell>
                  <TableCell width="20%">Amount</TableCell>
                </TableRow>
              </TableHead>
              
              <TableBody>
              {transactions.map((data)=>{
                return <Row data={data}/>
              })}
              </TableBody>

            </Table>
          </TableContainer>
      </div>
  );
}