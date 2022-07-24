import React, { useState } from 'react';
import { connect } from 'react-redux';

// component
import DialogSlide from '../../Utils/DialogSlide';
import Form from './Form';

// ac
import { setLoginModal } from '../../../actionCreators/modals';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClose = () => {
    setEmail('');
    setPassword('');
    props.setLoginModal(false);
  };
  const onSubmit = () => {
    console.log(email, password);
    setEmail('');
    setPassword('');
    props.setLoginModal(false);
  };

  return (
    <DialogSlide modalOpen={props.modal.login.isOpen} title='Login' onClose={onClose} onSubmit={onSubmit}>
      <Form email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
    </DialogSlide>
  );
};

const mapStateToProps = (state) => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, { setLoginModal })(Login);
