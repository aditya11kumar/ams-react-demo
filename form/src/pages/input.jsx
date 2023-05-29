/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */

// eslint-disable-next-line import/newline-after-import
import React from 'react';
function InputComponent(props) {
  const { name, value, onChange, type, pattern, maxlength,
  } = props;
  return (
    <div>
      <input id={name} type={type} value={value} pattern={pattern} maxLength={maxlength} onChange={onChange} />
    </div>
  );
}
export default InputComponent;
