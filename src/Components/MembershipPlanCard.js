import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Stack from '@mui/material/Stack';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Link from '@material-ui/core/Link';

import Button from '@mui/material/Button';
export default function MembershipPlanCard({price,size}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: size ==="md"?450:300,
          height: size ==="md"?500:400
        },
      }}
    >
      <Paper sx={{ borderRadius: 5,padding: 3}} elevation={2} >
        <Stack direction="column" sx={{height: "100%"}} justifyContent="space-between">

            <Stack sx={{margin: "10px 0"}} direction="row" spacing={1} justifyContent="center" alignItems="center">
              <LooksOneIcon sx={{fontSize: '5rem'}}/>
              <Stack>
                <Typography variant="h5" sx={{fontWeight: "bold"}}>Hello</Typography>
                <Typography variant="body1">{price} Pesos</Typography>
              </Stack>
            </Stack>

           
            <Divider sx={{marginBottom: "20px"}} />

             <Stack spacing={5} >

              <Stack direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
                 <CheckBoxIcon />
                 <Typography variant="body2">Est exercitation elit tempor enim.</Typography>
              </Stack>
            
               <Stack direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
                 <CheckBoxIcon />
                 <Typography variant="body2">Deserunt in ut culpa in. </Typography>
              </Stack>

               <Stack direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
                 <CheckBoxIcon />
                 <Typography variant="body2">Est exercitation elit tempor enim.</Typography>
              </Stack>

               <Stack direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
                 <Button variant="contained" component={Link} href="/admin/add-member" sx={{width: "100%%", flexGrow: 1,textDecoration: "none"}} disableElevation>
                    Choose Membership
                  </Button>
              </Stack>

            </Stack>


        </Stack>
      </Paper>
    </Box>
  );
}