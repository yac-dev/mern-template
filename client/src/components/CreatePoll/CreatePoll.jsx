// main libraries
import React, { useState } from 'react';
import { connect } from 'react-redux';

// component
import DialogSlide from '../Utils/DialogSlide';
// import Form from './Form';
import BasicForm from './BasicForm';
import Options from './Options';

// ac
import { setCreatePollModal } from '../../actionCreators/modals';
import { createPoll } from '../../actionCreators/polls';

const CreatePoll = (props) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [photoOptions, setPhotoOptions] = useState(['', '']);
  // const [videoOptions, setVideoOptions] = useState(['', '']);

  const onClose = () => {
    setTitle('');
    setType('');
    props.setCreatePollModal(false);
  };

  const removeEmptyOption = () => {
    const copiedOptions = [...options];
    for (let i = 0; i < copiedOptions.length; i++) {
      if (copiedOptions[i] === '') {
        copiedOptions.splice(i, 1);
        i--;
      }
    }
    return copiedOptions;
  };

  const onSubmit = () => {
    const submittedOptions = removeEmptyOption();
    const formData = {
      creatorId: props.auth.data._id,
      title,
      type,
      options: submittedOptions,
    };

    props.createPoll(formData);
    console.log(formData);
    setTitle('');
    setType('');
    props.setCreatePollModal(false);
  };

  return (
    <>
      <DialogSlide
        modalOpen={props.modal.createPoll.isOpen}
        title='What is your curiosity?'
        onClose={onClose}
        onSubmit={onSubmit}
      >
        {/* <Form
          title={title}
          setTitle={setTitle}
          type={type}
          setType={setType}
          options={options}
          setOptions={setOptions}
        /> */}
        <BasicForm
          title={title}
          setTitle={setTitle}
          type={type}
          setType={setType}
          // options={options}
          // setOptions={setOptions}
          // photoOptions={photoOptions}
          // setPhotoOptions={setPhotoOptions}
        />
        <Options
          type={type}
          options={options}
          setOptions={setOptions}
          photoOptions={photoOptions}
          setPhotoOptions={setPhotoOptions}
        />
      </DialogSlide>
    </>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth, modal: state.modal };
};

export default connect(mapStateToProps, { setCreatePollModal, createPoll })(CreatePoll);
