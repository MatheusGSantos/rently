import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { StyledCheckbox } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Checkbox: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.checked;
      },
      setValue: (ref, value) => {
        ref.current.checked = value;
      },
      clearValue: (ref) => {
        ref.current.checked = 'false';
      },
    });
  }, [fieldName, registerField]);

  return <StyledCheckbox type="checkbox" ref={inputRef} {...rest} />;
};

export default Checkbox;
