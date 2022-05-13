import React, { useState } from 'react';
import { MdContentCopy, MdCheckCircle } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as S from './styles.css';
import useAuthContext from '../../../hooks/auth/useAuthContext';
import Modal from '../../Modal';
import { ContentWrapper } from '../../Modal/styles.css';

const ShareMapModal = ({ isModalOpen, setIsModalOpen }) => {
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const { user } = useAuthContext();
  const { pathname } = useLocation();

  const url = window.location.href.replace(pathname, `/maps/${user.uid}`);

  const onCopyClickHandler = () => {
    navigator.clipboard.writeText(url);
    setShareLinkCopied(true);

    setTimeout(() => {
      setShareLinkCopied(false);
    }, 2000);
  };

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      modalTitle='Share your map'
    >
      <ContentWrapper>
        <S.CopyLabel id='copy-input-label' htmlFor='copy-input'>
          Copy your map's link:
        </S.CopyLabel>
        <S.CopyInputWrapper>
          <S.CopyInput
            type='text'
            id='copy-input-label'
            value={url}
            tabIndex='-1'
            readOnly
          />
          <S.CopyButton onClick={onCopyClickHandler} aria-label='Copy map url'>
            <MdContentCopy />
          </S.CopyButton>
        </S.CopyInputWrapper>
      </ContentWrapper>
      <AnimatePresence>
        {shareLinkCopied && (
          <S.CopySuccessMessage
            role='alert'
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <MdCheckCircle /> <p>Link Copied</p>
          </S.CopySuccessMessage>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default ShareMapModal;
