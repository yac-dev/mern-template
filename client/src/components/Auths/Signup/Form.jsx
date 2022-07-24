import React from 'react';
import { connect } from 'react-redux';

// mui
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PasswordIcon from '@mui/icons-material/Password';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import Autocomplete from '@mui/material/Autocomplete';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// utils
import options from './options';

const Form = (props) => {
  const renderCountryOptions = () => {
    const optionsList = options.countries.map((countryObject) => {
      return (
        <MenuItem
          key={countryObject.key}
          value={countryObject.value}
          onChange={(event) => props.setNationality(event.target.value)}
        >
          <img
            loading='lazy'
            width='20'
            src={`https://flagcdn.com/w20/${countryObject.flag}.png`}
            srcSet={`https://flagcdn.com/w40/${countryObject.flag}.png 2x`}
            alt=''
          />
          &nbsp;
          {countryObject.text}
        </MenuItem>
      );
    });

    return (
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={props.nationality}
        label='Nationality'
        onChange={(event) => props.setNationality(event.target.value)}
      >
        {optionsList}
      </Select>
    );
  };

  return (
    <Stack spacing={3} sx={{ padding: '5px' }}>
      <TextField
        id='outlined-basic'
        label='Name'
        variant='outlined'
        value={props.name}
        onChange={(event) => props.setName(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircleIcon />
            </InputAdornment>
          ),
        }}
      />
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

      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Nationality</InputLabel>
        {renderCountryOptions()}
      </FormControl>
      <TextField
        id='outlined-basic'
        label='Job'
        variant='outlined'
        value={props.job}
        onChange={(event) => props.setJob(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <EngineeringIcon />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default Form;
