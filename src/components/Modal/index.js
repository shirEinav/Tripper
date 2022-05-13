import React from 'react';
import reactDom from 'react-dom';
import { MdClose } from 'react-icons/md';
import * as S from './styles.css';
import Container from '../Container';
import FlagIcon from '../FlagIcon';

const Modal = ({ children, setIsModalOpen, modalTitle, modalFlagIcon }) => {
  const modalVariants = {
    visible: { opacity: 1, y: '0' },
    hidden: { opacity: 0, y: '100vh' },
  };

  return reactDom.createPortal(
    <S.ModalBackdrop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsModalOpen(false)}
    >
      <S.ModalWrapper
        role='dialog'
        aria-labelledby='model-title'
        aria-modal='true'
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={modalVariants}
        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        onClick={e => e.stopPropagation()}
      >
        <S.ModalHeader>
          {modalFlagIcon && (
            <Container style={{ $gap: '1rem' }}>
              <FlagIcon countryCode={modalFlagIcon} size='2.2rem' />
              <h2 id='model-title'>{modalTitle}</h2>
            </Container>
          )}
          {!modalFlagIcon && <h2 id='model-title'>{modalTitle}</h2>}
          <button type='button' onClick={() => setIsModalOpen(false)}>
            <MdClose />
          </button>
        </S.ModalHeader>
        <S.ModalInner>{children}</S.ModalInner>
      </S.ModalWrapper>
    </S.ModalBackdrop>,
    document.getElementById('portal')
  );
};

export default Modal;
