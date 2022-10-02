/* eslint-disable react/prop-types */
import React from 'react';
import { FormGroup, FloatingLabel } from 'react-bootstrap';
import { Field } from 'formik';

function TextField(props) {
  const {
    name, placeholder, error, errorMessage, handleChange, handleBlur, touched,
  } = props;
  
  return (
    <FormGroup className='mb-3'>
      <FloatingLabel
        controlId='nickname'
        label={placeholder}
        className='mb-3'
      >
        <Field
          className={`form-control ${error && touched && 'is-invalid'}`}
          name={name}
          id={name}
          type={name === 'password' || name === 'passwordConfirmation' ? 'password' : null}
          required
          placeholder='ник'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error && touched && errorMessage && (<div className='invalid-tooltip'>{errorMessage}</div>) }
      </FloatingLabel>
    </FormGroup>
  );
}
TextField.defaultProps = {
  focus: false
};

export default TextField;
