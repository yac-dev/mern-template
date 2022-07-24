import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const TextOption = (props) => {
  const [optionValue, setOptionValue] = useState('');

  const onChangeItem = (index, event) => {
    setOptionValue(event.target.value);
    props.options[index] = event.target.value;
    props.setOptions(props.options);
  };

  return (
    <>
      <TextField
        value={optionValue}
        onChange={(event) => onChangeItem(props.index, event)}
        key={props.index}
        fullWidth
        label={`option${props.index + 1}`}
        id='fullWidth'
      />
    </>
  );
};

export default TextOption;
