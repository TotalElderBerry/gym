import AnalyticsCard from "../Components/AnalyticsCard";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { Line } from "react-chartjs-2";
import DataTable from "../Components/DataTable"
import TextField from '@mui/material/TextField';

function ButtonGroup(){
	return (
	    		<TextField id="standard-basic" label="Search" variant="standard" />	
  	);
}

	const data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
];

function Graph(){


	return(
		 <div className="chart-container">
		      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
		      <Line
		         data={{
       labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
       datasets: [
          {
              label: "# of Calories Lost",
             
              data: [200, 300, 1300, 520, 2000, 350,150],
              fill: false,
              borderWidth:4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor:'green',
              responsive:true
            },
          ],
        }}
		      />
	    </div>
	)

}

function BasicSelect() {
  const [age, setAge] = React.useState('Daily');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value + "");
  };

  return (
    <Box>
       <FormControl size="small" sx={{ m: 1, minWidth: 120,height: 60  }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={10}>Daily</MenuItem>
          <MenuItem value={20}>Monthly</MenuItem>
          <MenuItem value={30}>Yearly</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default function RevenuePage () {
	return(
		<Stack spacing={2}>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="h5">Revenue</Typography>
				<BasicSelect />
			</Stack>
			<Stack direction="row" spacing={2} alignItems="center">
				<AnalyticsCard />
				<AnalyticsCard />
				<AnalyticsCard />
			</Stack>
			<Stack sx={{marginTop: 10}}>
			<DataTable lbl={"Recent Transactions"} count={5} component=<ButtonGroup /> />
			</Stack>
		</Stack>
	)
}