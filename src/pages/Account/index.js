import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MdCheck } from 'react-icons/md';

import * as S from './styles.css';
import useAuthContext from '../../hooks/auth/useAuthContext';
import useUpdateAccount from '../../hooks/auth/useUpdateAccount';
import AuthFormWrapper from '../../components/AuthFormWrapper';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import DeleteAccountModal from '../../components/Modals/DeleteAccountModal';

const Account = () => {
  const { user } = useAuthContext();

  const [nameValue, setNameValue] = useState(user.displayName);
  const [emailValue, setEmailValue] = useState(user.email);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const {
    loading: updateLoading,
    error: updateError,
    success,
    setSuccess,
    attemptUpdateAccount,
  } = useUpdateAccount();

  const onSaveChangesHandler = e => {
    e.preventDefault();
    if (updateLoading) return;
    attemptUpdateAccount(emailValue, nameValue);
  };

  return (
    <>
      <header className='inner-page-header'>
        <h1>Account</h1>
      </header>
      <AuthFormWrapper error={updateError.message}>
        <form onSubmit={onSaveChangesHandler} noValidate>
          <AnimatePresence>
            {success && (
              <S.SuccessMessage
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                role='alert'
              >
                <MdCheck />
                Changes saved!
              </S.SuccessMessage>
            )}
          </AnimatePresence>
          <Input
            type='text'
            id='account-name'
            label='Name'
            value={nameValue}
            setValue={setNameValue}
            maxLength={30}
            isError={updateError.input === 'name'}
            onChange={() => setSuccess(false)}
          />
          <Input
            type='email'
            id='account-email'
            label='Email'
            value={emailValue}
            setValue={setEmailValue}
            isError={updateError.input === 'email'}
            onChange={() => setSuccess(false)}
          />

          <S.BtnWrapper>
            <Button type='submit' className='btn-primary btn-form'>
              {updateLoading ? (
                <Loader size='0.6rem' color='#fff' />
              ) : (
                'Save changes'
              )}
            </Button>
            <Button
              className='btn-secondary btn-form'
              onClickHandler={() => setDeleteModalOpen(true)}
            >
              Delete account
            </Button>
          </S.BtnWrapper>
        </form>
      </AuthFormWrapper>
      <AnimatePresence>
        {deleteModalOpen && (
          <DeleteAccountModal
            isModalOpen={deleteModalOpen}
            setIsModalOpen={setDeleteModalOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Account;
