// main libraries
import React from 'react';

// mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TranslateIcon from '@mui/icons-material/Translate';

// component
import Option from './TextOption';

const TextOptions = (props) => {
  const renderOptions = () => {
    const optionsList = props.options.map((option, index) => {
      return (
        <>
          <Option index={index} options={props.options} setOptions={props.setOptions} />
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
        onClick={() => props.setOptions((previousState) => [...previousState, ''])}
        startIcon={<AddIcon />}
      >
        Add more
      </Button>
    </Stack>
  );
};

export default TextOptions;
