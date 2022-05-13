import React from 'react';
import { MdClose } from 'react-icons/md';
import { BtnWrapper, Button } from './styles.css';

const ClearInputBtn = ({ value, setValue, inputRef, setSuggestionIndex }) => {
  const onClearInputHandler = () => {
    setValue('');
    inputRef.current.focus();
    setSuggestionIndex && setSuggestionIndex(-1);
  };

  return (
    <BtnWrapper>
      <Button
        type='button'
        aria-label='Clear Input'
        onClick={onClearInputHandler}
        inputValue={value}
      >
        <MdClose />
      </Button>
    </BtnWrapper>
  );
};

export default ClearInputBtn;
