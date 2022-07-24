import React, { useState } from 'react';
import { connect } from 'react-redux';

// component
import DialogSlide from '../../Utils/DialogSlide';
import Form from './Form';

// ac
import { setSignupModal } from '../../../actionCreators/modals';
import { signup } from '../../../actionCreators/auth';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [job, setJob] = useState('');

  const onClose = () => {
    setName('');
    setEmail('');
    setPassword('');
    setNationality('');
    setJob('');
    props.setSignupModal(false);
  };

  const onSubmit = () => {
    const formData = {
      name,
      email,
      password,
      nationality,
      job,
    };
    console.log(formData);
    props.signup(formData);
    // after signup
    setName('');
    setEmail('');
    setPassword('');
    setNationality('');
    setJob('');
    props.setSignupModal(false);
  };

  return (
    <DialogSlide modalOpen={props.modal.signup.isOpen} title='Signup' onClose={onClose} onSubmit={onSubmit}>
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        nationality={nationality}
        setNationality={setNationality}
        job={job}
        setJob={setJob}
      />
    </DialogSlide>
  );
};

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { setSignupModal, signup })(Signup);
