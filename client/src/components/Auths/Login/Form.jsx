import React from 'react';

// mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import PasswordIcon from '@mui/icons-material/Password';

const Form = (props) => {
  return (
    <Stack spacing={3} sx={{ padding: '5px' }}>
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        value={props.email}
        onChange={(event) => props.setEmail(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <MailIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id='outlined-basic'
        label='Password'
        variant='outlined'
        value={props.password}
        onChange={(event) => props.setPassword(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <PasswordIcon />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default Form;
