import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/auth/useLogin';
import AuthFormWrapper from '../../components/AuthFormWrapper';
import { LinkWrapper } from '../../components/AuthFormWrapper/styles.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { loading, errState: errors, attemptLogin } = useLogin();

  const onSubmitLoginHandler = e => {
    e.preventDefault();
    if (loading) return;
    attemptLogin(emailValue, passwordValue);
  };

  return (
    <AuthFormWrapper hasGoogleLogin error={errors.form}>
      <h1>Login</h1>
      <LinkWrapper>
        Don't have an account yet? <Link to='/signup'>Sign Up</Link>
      </LinkWrapper>
      <form onSubmit={onSubmitLoginHandler} noValidate>
        <Input
          type='email'
          id='login-email'
          label='Email'
          errorMessage={errors.email}
          value={emailValue}
          setValue={setEmailValue}
        />
        <Input
          type='password'
          id='login-password'
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
          {loading ? <Loader size='0.6rem' color='#fff' /> : 'Login'}
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default Login;
