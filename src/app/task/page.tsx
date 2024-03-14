import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

const Page = () => (
  <Grid2 container direction='column' spacing={3} mt='1rem'>
    <Grid2>
      <Typography variant='h3' fontWeight='bold'>
        Task Description
      </Typography>
    </Grid2>
    <Grid2>
      Only edit <i>/src/components/form/UserForm.tsx</i>
    </Grid2>
    <Grid2>
      <Typography>
        1. <strong>Design a User Registration Form</strong> with the following fields using
        Material-UI (<a href='https://mui.com/material-ui/'>https://mui.com/material-ui/</a>
        ) components:
        <br />
        - First- and last name (TextField)
        <br />
        - Email (TextField with email validation)
        <br />
        - Password (TextField with password masking)
        <br />
        - Confirm Password (TextField with password masking)
        <br />
        - Gender (Radio Buttons with options: Male, Female, Other)
        <br />
        - Date of Birth (Date Picker)
        <br />
        - Bio (Multiline TextField with a max character limit of 500 characters)
        <br />
        - Submit Button (Button)
        <br />
        - Reset Button (Button)
        <br />
      </Typography>
    </Grid2>
    <Grid2>
      <Typography>
        2. <strong>Form Validations:</strong>
        <br />
        - All fields except Bio are required.
        <br />
        - Email should be in a valid format.
        <br />
        - Password and Confirm Password fields should match.
        <br />
        - The date of birth should not allow future dates.
        <br />
      </Typography>
    </Grid2>
    <Grid2>
      <Typography>
        3. <strong>On Form Submission:</strong>
        <br />- Submit the data to the endpoint &quot;/api/register&quot; using a POST request
        <br />- Display a snackbar (useSnackbar hook -{' '}
        <a href='https://github.com/iamhosseindhv/notistack'>
          https://github.com/iamhosseindhv/notistack
        </a>
        ) indicating the form submission status.
        <br />
      </Typography>
    </Grid2>
    <Grid2>
      <Typography>
        4. <strong>Styling & Theme:</strong>
        <br />
        - Customize the Material-UI theme to change the primary color of your application.
        <br />
        - Ensure the form is mobile-responsive.
        <br />
      </Typography>
    </Grid2>
    <Grid2>
      <Typography>
        5. <strong>Code Quality:</strong>
        <br />
        - Your components should be modular.
        <br />
        - Ensure proper usage of React Hooks if needed.
        <br />
        - Your code should be clean, readable, and commented where necessary.
        <br />
      </Typography>
    </Grid2>
    <Grid2>
      <Typography>
        6. <strong>Bonus (Optional):</strong>
        <br />
        - Add client-side form validation logic to give real-time feedback (e.g., showing an error
        message under a text field if it is left blank).
        <br />- Enhance the UX by adding a progress spinner inside the submission button during the
        mock submission.
      </Typography>
    </Grid2>
  </Grid2>
);

export default Page;
