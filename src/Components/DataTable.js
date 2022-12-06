import {useState, useEffect} from 'react';

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
export default function DataTable({lbl,count,component,buttons,record}) {
  const classes = useStyles();	
  const [records,setRecords] = useState(record);
  return (
   <div style={{ minWidth: '100%' }}>
  
   	  <HeaderGroup lbl={lbl} component={component} />
      <DataGrid
      	autoHeight
      	className={classes.root}
      	disableColumnMenu
        rows={records}
        getRowId={(row) => row.id}	
        columns={generateColumns(records,{buttons})}
        pageSize={count}
        rowsPerPage={[{count}]}
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
  timeIn: string,
) {
  return { id, fName, lName, contactNumber, membership, timeIn };
}

function createMultipleData(){
	let data = [];
	for(let i = 0; i < 15; i++){
		data.push(createData(i,'Jack', 'Sparrow', '091919191999', 'Monthly Member', '12:09 am'))
	}

	return data
}

const rows = createMultipleData()


function generateColumns(records,{buttons}){
	const keys = Object.keys(records[0])

	const columns = [
	 	{ field: 'id', headerName: 'ID', width: 90 },
		{ field: keys[1], headerName: 'First name', width: 150 },
	  	{ field: keys[2], headerName: 'Last name', width: 150 },
	  	{ field: keys[3], headerName: 'Contact Number', width: 150 },
		{ field: keys[4], headerName: 'Membership', width: 130, renderCell: (params) => {
	      	console.log(params)
	      	return (
	      		<LabelCard isMember={params.row.isMember} />	
	      	)
		  } },
		{ field: 'timeIn', headerName: 'Time-In', width: 130 },
		{ field: 'click-del', headerName: '', width: 300, sortable: false, renderCell: (params) => {
	      const onClick = (e) => {
	        const currentRow = params.row;
	        return alert(JSON.stringify(currentRow, null, 4));
	      };
	      
	      	return (
	      		<ButtonContainer buttons={buttons}/>	
	      	)
		  }

		}
	]
	return columns
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
	console.log(st)
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