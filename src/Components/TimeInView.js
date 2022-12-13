import React, {useState, useEffect} from 'react';

import { DataGrid } from '@mui/x-data-grid';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HeaderGroup from "./HeaderGroup"
import ButtonContainer from "./ButtonContainer"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import {useRecords} from '../Controllers/RecordsContextProvider'


import record from '../utils/records.js'


export default function TimeInView() {
	const {selectedRecord, timeIn} = useRecords()
	console.log(selectedRecord)
	const temp = selectedRecord
  const classes = useStyles();	
  const [records,setRecords] = useState(timeIn);

  useEffect(() => {

	  const items = JSON.parse(localStorage.getItem('timein'));
	  console.log(items)
	  if (items) {
	   setRecords(items);
	  }else{
	  	const temp = record.filter((r) => r.isMember === true)

	  	localStorage.setItem('timein', JSON.stringify(temp));
	  	setRecords(temp)
	  }
	}, []);
  // if(temp !== null || temp !== undefined) setRecords(r=> r.push({temp}))
  return (
   <div style={{ minWidth: '100%' }}>
 
   	  <HeaderGroup lbl={"Time-In"} component=<TextField id="standard-basic" label="Search" variant="standard" />	 />
      <DataGrid
      	autoHeight
      	className={classes.root}
      	disableColumnMenu
        rows={records}
        getRowId={(r) => r.id}	
        columns={generateColumns(records,setRecords)}
        pageSize={15}
        rowsPerPage={[15]}
      />
    </div>
  );
}


function createData(
  id: number,
  fName: string,
  lName: string,
  contactNumber: string,
  membership: string,
) {
  return { id, fName, lName, contactNumber, membership };
}



function generateColumns(records,setRecords){
	if(records.length > 0){
		const keys = Object.keys(records[0])
	
		const columns = [
		 	{ field: 'id', headerName: 'ID', width: 90 },
			{ field: keys[1], headerName: 'First name', width: 150 },
		  	{ field: keys[2], headerName: 'Last name', width: 150 },
		  	{ field: keys[3], headerName: 'Contact Number', width: 150 },
		  	{ field: keys[4], headerName: 'Membership', width: 130, renderCell: (params) => {
		      	return (
		      		<LabelCard isMember={params.row.isMember} />	
		      	)
			  } },
			
		  	{ field: 'timein', headerName: 'Time In', width: 150 },
			
		]
		return columns}
		return []
}


const groupStyle = {
	padding: "10px"
}

const btnGroupStyle = {
	padding: "0"
}

const useStyles = makeStyles({
    root: {
        '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
            outline: 'none',
        },
    }
});



function LabelCard({isMember}){
	const st = isMember?'primary.main':'#ffc300'
	return(
		<Stack sx={{
			width: '90%',
			height: '80%',
			backgroundColor: st,
			direction: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 5
		}}>
			<Typography variant="body1" color="white" sx={{fontWeight: 'bold'}}>
		  		{isMember === true?"Member":"Daily"}
		  	</Typography>
		</Stack>
	)
}