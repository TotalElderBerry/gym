import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@material-ui/core/Link';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import {useRecords} from '../Controllers/RecordsContextProvider'
import {useRecords as recordfunction} from '../Controllers/RecordsContextProvider'

export default function MemberRenewalForm({isMember}) {
const{setSelectedRecord} = useRecords()


  const[cData,setCData] = React.useState({})



  const [num, setNum] = React.useState(0);
  const nums = Array.from(Array(10).keys())
  const [t,setT] = React.useState();
  const [i,setI] = React.useState({})
  const handleChange = (event) => {
    setNum(event.target.value);
  };

    React.useEffect(() => {
      let items = JSON.parse(localStorage.getItem('selectedR'));
      const timein = JSON.parse(localStorage.getItem('timein'));
      // items = {...items,timein: '12:09 am'}
      setT([timein])
      setCData(items);
      setI(items)

      // if(!timein){
      //   localStorage.setItem('timein', JSON.stringify(items));
      // }else{
      //    if (items) {
      //    setT(old => [...old,items])
      //   }
      // }
     

    }, []);

  const textStyle={
    p: 2,
    mt: 1,
    bgcolor: '#fcfcfc',
  }
  return (
    
    <Box
      component="row"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '10ch'  },
        maxwidth: '60%' ,
      }} display="flex"
  justifyContent="center"
  alignItems="center"
      noValidate
      autoComplete="off"
    >
    <Paper variant="outlined" sx={{p:2,width:'60%'}}>
    <Stack justifyContent="center" alignItems="center" spacing={2} 
      sx={{
        p:3
      }}
    >
      <Typography variant="h4" component="h4">
        {isMember === 'true'?"Monthly Membership":"Daily Walk-In"}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      </Typography>
    </Stack>
    

    <Divider />
    <Toolbar />
    <Box>
      <Typography sx={{ ml: 3,mb:2}} variant="overline">
          Contact Details
      </Typography>

      <Box sx={textStyle}>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography variant="body2" sx={{color: '#97999e'}}>
          Full Name 
        </Typography>
        <Typography variant="body2" sx={{color: '#97999e'}}>
          {cData.firstName} {cData.lastName}
        </Typography>
      </Stack>
      </Box>

      <Box sx={textStyle}>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography variant="body2" sx={{color: '#97999e'}}>
          Contact Number 
        </Typography>
        <Typography variant="body2" sx={{color: '#97999e'}}>
          0919xxxxxxxx
        </Typography>
      </Stack>
      </Box>
    </Box>
    
    <Toolbar />

    <Box>
      <Typography sx={{ ml: 3,mb:2}} variant="overline">
          Payment Details
      </Typography>
      <Box sx={textStyle}>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography variant="body2" sx={{color: '#93969a'}}>
          {isMember === 'true'?"Monthly Payment":"Walk-In Payment"}
        </Typography>
        <Typography variant="body2" sx={{color: '#93969a'}}>
          {isMember === 'true'?"800":"70"}
        </Typography>
      </Stack>

    <Divider />
      
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography variant="body2" sx={{color: '#93969a'}}>
          Number of Months
        </Typography>
        <Typography variant="body2" sx={{color: '#93969a'}}>
          1
        </Typography>
      </Stack>

      <Divider />
      
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography variant="body2" sx={{color: '#93969a'}}>
          Total 
        </Typography>
        <Typography variant="body2" sx={{color: '#93969a'}}>
          {isMember === 'true'?"800":"70"}
        </Typography>
      </Stack>
      </Stack>
      </Box>

     
    </Box>
    <Toolbar />
    <Stack sx={{ mt: 1 }} direction="row" alignItems="center" justifyContent="space-between">
    <Box>
        <Typography variant="body2" color="primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </Typography>
    </Box>
    <Button onClick={() => {
      // const temp = t.concat(cData)
      const temp = JSON.parse(localStorage.getItem('timein'));
      temp.push(JSON.parse(localStorage.getItem('selectedR')))
      setT(temp)
      setTimeout(()=>{
        console.log(t)
      },5000)

      localStorage.setItem('timein', JSON.stringify(temp));
    }} disableElevation component={Link} href="/admin/" sx={{ width: "20%" }} variant="contained">Pay</Button>    
    </Stack>
    </Paper>

    </Box>
  );
}