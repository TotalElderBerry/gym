import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { AccountCircle } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Item({handleClose}){
		return(
			<MenuItem onClick={handleClose}>
			
			<Stack direction="row" spacing={1}>
				<CheckCircleIcon />
				<Typography>Commodo labore.</Typography>
			</Stack>
			</MenuItem>
		)
}

export default function NotifBar({anchorEl,handleClose}) {
		


	return(
		 <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                elevation={0}
              >
              
                <Item handleClose={handleClose} />
                <Item handleClose={handleClose} />
                <Item handleClose={handleClose} />
                <Item handleClose={handleClose} />
                <Item handleClose={handleClose} />
              

         </Menu>
	)
}