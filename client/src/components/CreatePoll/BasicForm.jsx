import React from 'react';

// mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TranslateIcon from '@mui/icons-material/Translate';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicForm = (props) => {
  return (
    <Stack direction='column' spacing={2} sx={{ padding: '5px' }}>
      <TextField
        id='outlined-multiline-flexible'
        label='Poll title'
        multiline
        fullWidth
        maxRows={4}
        value={props.title}
        onChange={(event) => props.setTitle(event.target.value)}
      />
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small'>Poll type</InputLabel>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          label='Poll type'
          value={props.type}
          onChange={(event) => props.setType(event.target.value)}
        >
          <MenuItem value={'text'}>
            <TranslateIcon />
            &nbsp;text
          </MenuItem>
          <MenuItem value={'photo'}>
            <ImageIcon />
            &nbsp;photo
          </MenuItem>
          <MenuItem disabled value={'video'}>
            <YouTubeIcon />
            &nbsp; video
          </MenuItem>
          <MenuItem disabled value={'song(Not available now 🛠)'}>
            <MusicNoteIcon />
            &nbsp;song
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default BasicForm;
