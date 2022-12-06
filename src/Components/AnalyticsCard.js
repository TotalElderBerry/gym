import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
export default function AnalyticsCard(){
	const paperStyle={
		width: "300px",
		height: "150px",
		padding: "30px 40px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		backgroundColor: "#0093E9",
		backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",

	}

	return(
		<Paper sx={paperStyle}  elevation={5}>
			<Stack>
				<AutoGraphIcon sx={{width: "50%",height: "50%",color: "white"}}/>
			</Stack>
			<Stack spacing={0}>
				<Typography variant="overline" color="white">Hello1</Typography>
				<Typography variant="h4" color="white">10,000</Typography>
				<Typography variant="subtitle1" color="white">Hello3</Typography>
			</Stack>

		</Paper>
	)
}