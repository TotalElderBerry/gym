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
import Link from '@material-ui/core/Link';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import record from '../utils/records.js'

export default function MemberView() {
  const classes = useStyles();	
  const [records,setRecords] = useState(record.filter((p)=>p.isMember === false));
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(-1);
  const [selectedRecord, setSelectedRecord] = useState("");
  const [query,setQuery] = useState("")
  const [searchedItems, setSearchedItems] = useState(record.filter((p)=>p.isMember === false))
  const handleOpen = (row,name) => {
  	setSelectedRecord(name)
  	setCurrentRow(row)
  	setOpen(true);
  }
  const handleClose = () => setOpen(false);

	function handleChange(e){
		e.preventDefault()
		setQuery(e.target.value)

		const res = records.filter(rec => {
			if(e.target.value === "") {
				console.log("i am r")

				return records
			}
			return rec.firstName.toLowerCase().includes(query.toLowerCase()) 
		})
		if(e.target.value === "" && res.length !== 0) setSearchedItems(records)
		if(res.length !== 0) setSearchedItems(res)
		if(res.length === 0) setSearchedItems([])
	}


  return (
   <div style={{ minWidth: '100%' }}>
 
   	  <HeaderGroup lbl={"Queue"} component=<TextField id="standard-basic" label="Search" variant="standard" value={query} onChange={handleChange}/>	 />
      {console.log(query)}
      <DataGrid
      	autoHeight
      	className={classes.root}
      	disableColumnMenu
        rows={searchedItems}
        getRowId={(row) => row.id}	
        columns={generateColumns(records,setRecords,handleOpen,handleClose)}
        pageSize={records.length}
        rowsPerPage={[records.length]}
      />
      <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose} name={selectedRecord} records={records} setRecords={setRecords} cid={currentRow} setSearchedItems={setSearchedItems}/>
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 8,
  borderRadius: "4px"
};

function BasicModal({open, handleOpen, handleClose, name ,records,setRecords,cid,setSearchedItems}) {
 
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Stack direction="column" spacing={2} justifyContent="space-between" sx={{height: "100%"}}>
          <Typography id="modal-modal-title" variant="h5" component="h2" align="center" sx={{fontWeight: "800"}}>
            Delete Customer
          </Typography>
          <Stack direction="row" sx={{ mt: 2 }} spacing={1} justifyContent="center" alignItems="center">
          <Typography id="modal-modal-description"align="center">
            Are you sure you want to delete
          </Typography>
          <Typography sx={{fontWeight: "500"}}> {name} </Typography>
          <Typography> ? </Typography>
           </Stack>
           <Alert  severity="error">
	        <AlertTitle>Warning</AlertTitle>
	        By doing this, it will remove the customer in the queue. <strong>It cannot be undone!</strong>
	      </Alert>
	      <Stack direction="row" spacing={1} justifyContent="center">
				  <Button onClick={handleClose} variant="contained" sx={{width: "200px", bgcolor: "#627d98"}}>
			        Cancel
			      </Button>
			      <Button onClick={()=>{removeItem(records,setRecords,cid,handleClose,setSearchedItems)}} variant="contained" color="error" sx={{width: "200px"}}>
			        Delete
			      </Button>
	      </Stack>
	      </Stack>
        </Box>
      </Modal>
    </div>
  );
}


function generateColumns(records,setRecords,handleOpen,handleClose){
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
			{ field: 'click-edit', headerName: '', width: 130, sortable: false, renderCell: (params) => {
		      const onClick = (e) => {
		      	
		      };
		      
		      	return (
		      		<Button variant="contained" component={Link} href="/admin/walkin-payment" startIcon={<EditIcon />} >
			        Confirm
			      </Button>
		      	)
			  }
	
			},
	
			{ field: 'click-del', headerName: '', width: 120, sortable: false, renderCell: (params) => {
		      const onClick = (e) => {
			  
	
		      	handleOpen(params.row.id,params.row.firstName + " "+params.row.lastName)
		      	console.log("clicked")
		      };
		      
		      	return (
		      		<Button variant="outlined" onClick={onClick} startIcon={<DeleteIcon />} color="error">
				        Delete
				    </Button>
		      	)
			  }
	
			},
			
		]
		return columns
	}
	return []
}

function removeItem(records,setRecords,cid,handleClose,setSearchedItems){
	if(records.length > 0){
	      		        // const currentRow = params.row;
	      		        const eq = records.filter((d)=>{
	      		        	return d.id !== cid
	      		        })
	      		        console.log(eq)
	      		        setRecords(eq)
	      		        setSearchedItems(eq)
	      		}
	 handleClose()
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