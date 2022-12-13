import * as React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function UserLogin(){
	  const [open, setOpen] = React.useState(false);
	  const [isWrongPassword,setIsWrongPassword] = React.useState(false);
	  const [name,setName] = React.useState("")
	  const [pw,setPassword] = React.useState("")
		const handleOpen = () => {
			if(name === "user" && pw === "user"){
						setIsWrongPassword(false)
						setOpen(true);
						setName("");
						setPassword("")
			}else{
				setIsWrongPassword(true)
			}
		}
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
				 <form>
					<div className="form-group" style={style}>
						<input type = "text" value={name} placeholder = "Name" className="form-control" onChange={((e)=>setName(e.target.value))} ></input>
					</div>
					<div className="form-group" style={style}>
						<input type = "password" value={pw} placeholder = "Password" className="form-control" onChange={((e)=>setPassword(e.target.value))}></input>
					</div>
					<div style={{textAlign:"right"}}>
					<a href="url" style={{textAlign:"right",margin: "10px 0"}}>Forgot password?</a>
					</div>
					<div style={style}>
						<button type="button" style={{width: "100%"}} className="btn btn-primary" onClick={handleOpen}> Sign In</button>
					</div>
				</form>
				{
					isWrongPassword ? <div class="alert alert-danger" role="alert">
				  Account not found				</div>:<></>
				}
				<div>Logged In as Walked In Guest? <a href="/form">Click Here</a></div>  
			</div>
			</div>
</div>
<div className = "SignUp_part">
	<div className = "sign_up">
	<h1>Didn't have an account?</h1>
	<h4>Sign up now</h4>
	<div><a type = "button" className="btn btn-primary" href="/admin/select">Sign Up</a></div>
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