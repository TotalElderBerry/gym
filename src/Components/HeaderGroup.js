
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function HeaderGroup({lbl,component}){
	const groupStyle = {
		padding: "10px"
	}

	return (
	<div style={groupStyle}>
	    
	    	<Stack direction="row" spacing={1} justifyContent="space-between" alignItems="flex-end">

				<Typography variant="h5" component="h5">
				  {lbl}
				</Typography>

	    		{component}
		    </Stack>
		   

    </div>
  );
}