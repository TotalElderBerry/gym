import MembershipPlanCard from "../../Components/MembershipPlanCard"
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function MembershipPlanPage() {
  return (
    <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            zIndex: "10000"
          }}
    >
    <Typography variant="h2" align="center" mb="20px"> Select your Plan</Typography>
      <Stack direction="row" sx={{height: "100%"}} spacing={3} justifyContent="center" alignItems="center">
        <MembershipPlanCard price="700"/>
        <MembershipPlanCard price="1200" size="md"/>
        <MembershipPlanCard price="2100"/>
      </Stack>
      </Box>
  );
}