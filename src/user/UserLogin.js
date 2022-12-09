import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function UserLogin(){
	return(
		<div className = "container">	
	<div className = "form_part">
<div>
				<h1>Login to Your Account</h1>
			</div>
			
			<div>
				<h5>Login using your social network</h5>
				<div>
					<FacebookRoundedIcon/>
					<GoogleIcon/>
					<TwitterIcon/>
				</div>
 				
			<div><span>or</span></div>
			</div>
			<div>
				 <form>
					<div>
						<p>Name</p>
						<input type = "text"></input>
					</div>
					<div>
						<p>Password</p>
						<input type = "password"></input>
					</div>
					<div>
						<button type="button"> Sign In</button>
					</div>
				</form>
				<div>Forgot password? <a href="url">Click Here</a></div>  
			</div>
</div>
<div className = "SignUp_part">
	<div className = "sign_up">
	<h1>Didn't have an account?</h1>
	<h4>Sign up now</h4>
	<div><button type = "button">Sign Up</button></div>
	</div>
</div>
		</div>



	)
}