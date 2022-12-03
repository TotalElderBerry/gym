import * as React from 'react';

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


function generateColumns({buttons}){
	console.log(buttons)
	const columns = [
	 	{ field: 'id', headerName: 'ID', width: 90 },
		{ field: 'fName', headerName: 'First name', width: 150 },
	  	{ field: 'lName', headerName: 'Last name', width: 150 },
	  	{ field: 'contactNumber', headerName: 'Contact Number', width: 150 },
		{ field: 'membership', headerName: 'Membership', width: 130 },
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

export default function DataTable({lbl,count,component,buttons}) {
  const classes = useStyles();	
  return (
   <div style={{ minWidth: '70%' }}>
   	  <HeaderGroup lbl={lbl} component={component} />
      <DataGrid
      	autoHeight
      	className={classes.root}
      	disableColumnMenu
        rows={rows}
        columns={generateColumns({buttons})}
        pageSize={count}
        rowsPerPage={[{count}]}
      />
    </div>
  );
}