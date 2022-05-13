import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/auth/useSignup';
import AuthFormWrapper from '../../components/AuthFormWrapper';
import { LinkWrapper } from '../../components/AuthFormWrapper/styles.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

const Signup = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const { loading, errState: errors, attemptSignup } = useSignup();

  const onSubmitSignupHandler = e => {
    e.preventDefault();
    if (loading) return;
    attemptSignup(emailValue, passwordValue, nameValue);
  };

  return (
    <AuthFormWrapper hasGoogleLogin error={errors.form}>
      <h1>Sign Up</h1>
      <LinkWrapper>
        Already have an account? <Link to='/login'>Login</Link>
      </LinkWrapper>
      <form onSubmit={onSubmitSignupHandler} noValidate>
        <Input
          type='text'
          id='signup-name'
          label='Name'
          errorMessage={errors.name}
          value={nameValue}
          setValue={setNameValue}
          maxLength={30}
        />
        <Input
          type='email'
          id='signup-email'
          label='Email'
          errorMessage={errors.email}
          value={emailValue}
          setValue={setEmailValue}
        />
        <Input
          type='password'
          id='signup-password'
          label='Password'
          errorMessage={errors.password}
          value={passwordValue}
          setValue={setPasswordValue}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          maxLength={25}
        />
        <Button
          type='submit'
          style={{ $fontSize: '1.6rem' }}
          className='btn-primary btn-form'
        >
          {loading ? <Loader size='0.6rem' color='#fff' /> : 'Sign up'}
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default Signup;
