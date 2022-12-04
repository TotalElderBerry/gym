import DataTable from "../Components/DataTable"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@material-ui/core/Link';
import AddIcon from '@mui/icons-material/Add';
function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
	  <TextField id="standard-basic" label="Search" variant="standard" />	
      
      <Button variant="outlined" startIcon={<AddIcon />}>
        Add Member
      </Button>
    </Stack>
  );
}

const buttonArrayQueue = [
		<Button variant="contained" component={Link} href="/renew" startIcon={<EditIcon />} >
        Renew
      </Button>
]

export default function AddMemberPage() {
	const tableStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    
	return(
		<div>
			<section style={tableStyle}>
				<DataTable lbl={"Current Members"} component=<IconLabelButtons /> buttons={buttonArrayQueue}/>
			</section>
		</div>
	)
}