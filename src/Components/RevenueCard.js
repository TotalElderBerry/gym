import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import InsightsIcon from '@mui/icons-material/Insights';
export default function RevenueCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 150,
          mt: '68px'
        },
      }}
    >
      <Paper elevation={0} sx={{p: 2,backgroundColor:"primary.main"}}>
        <Stack direction="column" spacing={3}>

            <Stack spacing={2} direction="row" justifyContent="space-around">
                <Stack spacing={0} sx={{ml: -5}}>
                 <Typography variant="h5" color="white" sx={{fontWeight: 'bold'}}>
                  Revenue
                </Typography>
                <Typography variant="body1" sx={{color: 'white'}}>
                  10,000 Pesos
                </Typography>
                </Stack>
            <Box
                  sx={{
                    '& > :not(style)': {
                      ml: 6,
                      width: 48,
                      height: 48,
                    },
                  }}
                >
              <InsightsIcon sx={{color: 'white',width: '100%',
                      height: '100%'}}/>
              </Box>
            </Stack>
            <Stack spacing={1} flexGrow="1">
              <Divider sx={{bgcolor: 'white'}}/>
              <Stack direction="row" justifyContent="flex-end" alignItems="flex-end">
                 <Typography variant="body2" color="white">
                    View Full Details
                  </Typography>
              </Stack>
            </Stack>
        </Stack>
      </Paper>
     
    </Box>
  );
}