import TextField from '@mui/material/TextField';
import DataTable from "../Components/DataTable"
import RevenueCard from "../Components/RevenueCard"
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import Link from '@material-ui/core/Link';

function ButtonGroup(){
	return (
	    		<TextField id="standard-basic" label="Search" variant="standard" />	
  	);
}



const buttonArray = [
	  
      <Button variant="contained" startIcon={<EditIcon />}>
        Edit
      </Button>,
      <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
        Delete
      </Button>
]

const buttonArrayQueue = [
		<Button variant="contained" component={Link} href="/walkin-payment" startIcon={<EditIcon />} >
        Confirm
      </Button>,
	  <Button variant="outlined" startIcon={<DeleteIcon />} color = "error">
        Delete
      </Button>
      
      
]

export default function HomePage() {
	const tableStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexGrow: "1"
    };

    const container = {
    	display: "flex"
    }

	return(
		<div style={container}>
			<Grid container spacing={2}>
			<Grid item lg={3} md={4}>
	          <RevenueCard />
	        </Grid>
				<Grid item lg={9} md={8}>	
					<section style={tableStyle}>
						<DataTable lbl={"Queue"} count={5} component=<ButtonGroup /> buttons={buttonArrayQueue}/>
							<Toolbar />
						<DataTable lbl={"Time In"} count={10} component=<ButtonGroup /> />
					</section>
		        </Grid>
			
			</Grid>
		</div>
	)
}