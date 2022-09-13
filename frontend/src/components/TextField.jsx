/* eslint-disable react/prop-types */
import React from 'react';
import { FormGroup, FloatingLabel } from 'react-bootstrap';
import { Field } from 'formik';

function TextField(props) {
  const {
    name, placeholder, error, handleChange, handleBlur, touched,
  } = props;
  return (
    <FormGroup className='mb-3'>
      <FloatingLabel
        controlId='nickname'
        label={placeholder}
        className='mb-3'
      >
        <Field
          className={`form-control ${error && touched[name] && 'is-invalid'}`}
          name={name}
          id={name}
          type={name === 'password' || name === 'confirmPassword' ? 'password' : null}
          required
          placeholder='ник'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error && touched[name] && (<div className='invalid-tooltip'>{error}</div>) }
      </FloatingLabel>
    </FormGroup>
  );
}
export default TextField;
