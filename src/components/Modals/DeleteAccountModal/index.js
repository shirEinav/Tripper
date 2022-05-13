import React from 'react';
import styled from 'styled-components';
import useDeleteAccount from '../../../hooks/auth/useDeleteAccount';
import Button from '../../Button';
import Container from '../../Container';
import Loader from '../../Loader';
import Modal from '../../Modal';
import { ContentWrapper } from '../../Modal/styles.css';

const DeleteAccountModal = ({ isModalOpen, setIsModalOpen }) => {
  const { loading, deleteAccount } = useDeleteAccount();

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      modalTitle='Delete Account'
    >
      <ContentWrapper>
        <ModalText>Are you sure you want to delete your account?</ModalText>
        <Container style={{ $gap: '1rem' }}>
          <Button
            className='btn-primary btn-form'
            onClickHandler={deleteAccount}
          >
            {loading ? <Loader color='#fff' size='0.6rem' /> : 'Delete account'}
          </Button>
          <Button
            className='btn-secondary btn-form'
            onClickHandler={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
        </Container>
      </ContentWrapper>
    </Modal>
  );
};

const ModalText = styled.p`
  margin-bottom: 3.5rem;
  text-align: center;
`;

export default DeleteAccountModal;
