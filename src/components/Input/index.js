// Dependencies
import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// Styled
import { Wrapper, InputElement, Label } from './styles';

const Input = ({ className, defaultValue, label, name, type }) => {
  const [value, setValue] = useState(defaultValue);
  const setInputValue = e => setValue(e.target.value);

  return (
    <Wrapper className={className}>
      <InputElement
        defaultValue={defaultValue}
        name={name}
        onChange={setInputValue}
        placeholder={label}
        type={type}
      />
      <Label className={classnames({ filled: value.length > 0 })}>
        {label}
      </Label>
    </Wrapper>
  );
};

Input.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
