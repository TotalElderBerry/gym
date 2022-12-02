import TextField from '@mui/material/TextField';
import DataTable from "../Components/DataTable"

function ButtonGroup(){
	return (
	    		<TextField id="standard-basic" label="Search" variant="standard" />	
  	);
}


export default function HomePage() {
	const tableStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };


	return(
		<div>
			<section style={tableStyle}>
				<DataTable lbl={"Time In"} component=<ButtonGroup />/>
			</section>
		</div>
	)
}