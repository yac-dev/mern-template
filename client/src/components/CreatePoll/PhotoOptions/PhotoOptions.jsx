// main libraries
import React from 'react';

// mui
import PhotoOption from './PhotoOption';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddIcon from '@mui/icons-material/Add';

const PhotoOptions = (props) => {
  const renderOptions = () => {
    const optionsList = props.photoOptions.map((option, index) => {
      return (
        <>
          <PhotoOption index={index} photoOptions={props.photoOptions} setPhotoOptions={props.setPhotoOptions} />
        </>
      );
    });

    return <>{optionsList}</>;
  };

  return (
    <Stack spacing={2}>
      {renderOptions()}
      <Button
        variant='contained'
        onClick={() => props.setPhotoOptions((previousState) => [...previousState, ''])}
        startIcon={<AddIcon />}
      >
        Add more
      </Button>
    </Stack>
  );
};

export default PhotoOptions;
