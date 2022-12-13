import * as React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function UserLogin(){
	  const [open, setOpen] = React.useState(false);
		  const handleOpen = () => setOpen(true);
		  const handleClose = () => setOpen(false);

	const style ={
		margin: "10px 0"
	}
	return(
		<div className = "my-container">	
	<div className = "form_part">
	<div className = "form_container">
			<div>
				<h1>Login to Your Account</h1>
			</div>
			
			<div>
				<h3>Login using your social network</h3>
				<div>
					<FacebookRoundedIcon/>
					<GoogleIcon/>
					<TwitterIcon/>
				</div>
 				
			<div><span>or</span></div>
			</div>

			<div>
				 <form>
					<div className="form-group" style={style}>
						<input type = "text" placeholder = "Name" className="form-control" ></input>
					</div>
					<div className="form-group" style={style}>
						<input type = "password" placeholder = "Password" className="form-control" ></input>
					</div>
					<div>
						<button type="button" className="btn btn-primary" onClick={handleOpen}> Sign In</button>
					</div>
				</form>
				<div>Forgot password? <a href="url">Click Here</a></div>  
				<div>Logged In as Walked In Guest? <a href="/form">Click Here</a></div>  
			</div>
			</div>
</div>
<div className = "SignUp_part">
	<div className = "sign_up">
	<h1>Didn't have an account?</h1>
	<h4>Sign up now</h4>
	<div><a type = "button" className="btn btn-primary" href="/admin/add-member">Sign Up</a></div>
	</div>
</div>
	<BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
		</div>

  

	)
}

function BasicModal({open,handleOpen,handleClose}) {
	const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',	
  backgroundColor: "white",
  width: "50%",
  align: "center",
  p: 4,
  borderRadius: "5px",
  textAlign: "center"
};	
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
      	<h1 style={{textAlign: "center"}}>
      		Thank you for logging In. Enjoy your workout! 
      	</h1>
		<button type="button" className="btn btn-primary" onClick={handleClose}>Continue</button>

        </Box>
      </Modal>
    </div>
  );
}