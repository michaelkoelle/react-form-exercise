import UserForm from '@/components/form/UserForm';
import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

const Page = () => (
  <Grid2 container direction='column' spacing={3} mt='1rem'>
    <Grid2>
      <Typography variant='h3' fontWeight='bold'>
        React-Form Exercise
      </Typography>
    </Grid2>
    <Grid2>
      You can find the task description <a href='/task'>here</a>.
    </Grid2>
    <Grid2>
      <UserForm />
    </Grid2>
  </Grid2>
);

export default Page;
