import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Modal from '@mui/material/Modal';

import MemberRenewalForm from ".././Components/MemberRenewalForm"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',	
  width: "50%",
};

 function BasicModal({open,handleOpen,handleClose}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
      <MemberRenewalForm  isMember="false"/>
        </Box>
      </Modal>
    </div>
  );
}

function BasicSelect() {
	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Gender</InputLabel>
				<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={age}
				label="Gender"
				onChange={handleChange}
				>
					<MenuItem value={10}>Male</MenuItem>
					<MenuItem value={20}>Female</MenuItem>
				</Select>
			</FormControl>
		</Box>
		);
}

function BasicDatePicker() {
	const [value, setValue] = React.useState(null);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
		<DatePicker
		label="Birth Date"
		value={value}
		onChange={(newValue) => {
			setValue(newValue);
		}}
		renderInput={(params) => <TextField {...params} />}
		/>
		</LocalizationProvider>
		);
	}

	export default function WalkInFormPage() {
		  const [open, setOpen] = React.useState(false);
		  const handleOpen = () => setOpen(true);
		  const handleClose = () => setOpen(false);

		return (
		<Container maxWidth="xl" sx={{display: "flex", justifyContent: "center", height: "100vh", alignItems: "center"}}>
			<Box sx={{ height: '80vh'}} >
				<Stack>
				
					<Stack>
						<Typography variant="h3" align="center" m={3} sx={{color:"#161e42", fontWeight: "300"}}>Walk In</Typography>
					</Stack>  

					<Stack direction="row" spacing={1}>
						<Stack sx={{width:"60%"}} spacing= {3}>
						<Stack>
							<Typography variant="overline"  sx={{color:"#161e42", fontWeight: "300"}}>Contact Information</Typography>
							<Stack mt={2} direction="column" spacing={2} >

								<Stack direction="row" spacing={1} alignItems="stretch">
									<TextField id="outlined-basic" fullWidth label="First Name" variant="outlined" /> 
									<TextField id="outlined-basic" fullWidth label="Last Name" variant="outlined" /> 
								</Stack>

								<Stack direction="row" spacing={1} alignItems="stretch">
									<TextField id="outlined-basic" fullWidth label="Phone Number" variant="outlined" /> 
									<BasicSelect />
								</Stack>


								<Stack direction="row" spacing={1} alignItems="stretch">
									<TextField id="outlined-basic" fullWidth label="Email" variant="outlined" /> 
									<BasicDatePicker />
								</Stack>
							</Stack>
							</Stack>


							<Stack>
							<Typography variant="overline"  sx={{color:"#161e42", fontWeight: "300"}}>In Case of Emergency</Typography>
							<Stack mt={2} direction="column" spacing={2} >

								<Stack direction="row" spacing={1} alignItems="stretch">
									<TextField id="outlined-basic" fullWidth label="First Name" variant="outlined" /> 
									<TextField id="outlined-basic" fullWidth label="Last Name" variant="outlined" /> 
								</Stack>

								<Stack direction="row" spacing={1} alignItems="stretch">
									<TextField id="outlined-basic" fullWidth label="Phone Number" variant="outlined" /> 
									<TextField id="outlined-basic" fullWidth label="Relationship" variant="outlined" /> 

								</Stack>


								<Stack direction="row" spacing={1} alignItems="stretch">
									<TextField id="outlined-basic" fullWidth label="Email" variant="outlined" /> 
									<BasicDatePicker />
								</Stack>
							</Stack>
							</Stack>
						</Stack>




					<Box sx={{ width: '40%', display: "flex", justifyContent: "center" }} >
						<Paper sx={{width: "80%", padding: "50px", bgcolor: "#f2f6fe", display: "flex",flexDirection: "column", justifyContent: "space-between"}}>
							<Stack mb={4}>
								<Typography variant="subtitle1" sx={{fontWeight: "light", color:"#74849c"}}>SUBSCRIBE TO</Typography>
								<Typography variant="h4" sx={{color: "#1b3046"}}>WalkIn Subscription</Typography>

							</Stack>

							<Stack spacing={1}>
								<Stack>
									<Stack direction="row" alignItems="center" justifyContent="space-between">
									<Typography variant="body1" sx={{fontWeight: "500"}}>Daily Payment</Typography>
									<Typography variant="subtitle1" sx={{fontWeight: "500", color: "#e22082"}}>70</Typography>
									</Stack>
									<Typography variant="overline" sx={{marginTop: "-5px", color: "#74849c"}}>Daily</Typography>

								</Stack>

								<Stack>
									<Stack direction="row" alignItems="center" justifyContent="space-between">
									<Typography variant="body1" sx={{fontWeight: "500"}}>Application Fee</Typography>
									<Typography variant="subtitle1" sx={{fontWeight: "500", color: "#e22082"}}>0</Typography>
									</Stack>
									<Typography variant="overline" sx={{marginTop: "-5px", color: "#74849c"}}>One-Time Payment</Typography>

								</Stack>
							</Stack>
							<Toolbar />
							<Divider />
							<Stack>
								<Stack direction="row" alignItems="center" justifyContent="space-between">
								<Typography variant="h5" sx={{fontWeight: "700"}}>Total</Typography>
								<Typography variant="h5" sx={{fontWeight: "700", color: "#e22082"}}>70</Typography>
								</Stack>
							</Stack>
							<Toolbar />

							<Stack>
								<Stack sx={{ margin: "auto 0"}}  direction="row" alignItems="center" justifyContent="center">
								 <FormGroup sx={{ margin: "0"}}>
							      <FormControlLabel control={<Checkbox />} label={<Typography variant="subtitle1" sx={{fontSize: "13px", lineHeight: "13px"}}>Cillum adipisicing <span sx={{color: "#e22082"}}>laborum tempor voluptate laboris occaecat</span> labore voluptate aliqua sed.</Typography>} />
							    </FormGroup>
								</Stack>
							</Stack>
				<Button variant="contained" onClick={handleOpen} sx={{bgcolor: "#e22082"}}>Subscribe</Button>
						</Paper>

					</Box>
					</Stack>

				</Stack>
			</Box>
			<BasicModal open={open} handleClose={handleClose} handleOpen={handleOpen}/>
		</Container>
		);
	}