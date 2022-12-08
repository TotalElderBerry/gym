import DataTable from "../../Components/DataTable"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@material-ui/core/Link';
import AddIcon from '@mui/icons-material/Add';
import records from '../../utils/records.js'
import MemberView from "../../Components/MemberView"



export default function AddMemberPage() {
	const tableStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    
	return(
		<div>
			<section style={tableStyle}>
				<MemberView />
			</section>
		</div>
	)
}