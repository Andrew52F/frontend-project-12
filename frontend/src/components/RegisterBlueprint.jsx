/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import { object, string } from 'yup';
import {
  Formik, Form,
} from 'formik';
import {
  Container, Col, Card, Row,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import loginAvatarImg from '../assets/loginAvatar.jpeg';
import TextField from './TextField';

function Login() {
  const { t } = useTranslation();
  const initialValues = {
    nickname: '',
    password: '',
  };
  const validationSchema = object({
    nickname: string().required(t('fieldErrors.field_is_required')).matches(/^[\S]{3,20}$/, t('fieldErrors.field_wrong_length')),
    password: string().required(t('fieldErrors.field_is_required')).min(6, t('fieldErrors.field_too_short')),
  });
  const handleSubmit = async (values) => {
    const response = await axios.post('/api/v1/login', values);
    console.log(response);
  }

  return (
    <Container fluid className='h-100'>
      <Row className='justify-content-center align-content-center h-100'>
        <Col md={8} xxl={6} className='coll-12'>
          <Card className='shadow-sm'>
            <Card.Body className='row p-5'>
              <Col
                md={6}
                className='d-flex align-items-center justify-content-center'
              >
                <img
                  className='rounded-circle'
                  src={loginAvatarImg}
                  alt='Login avatar'
                />
              </Col>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnBlur
                onSubmit={handleSubmit}
              >
                {({
                  errors, touched, handleChange, handleBlur,
                }) => (
                  <Form className='col-12 col-md-6 mt-3 mt-mb-0'>
                    <h1 className='text-center mb-4'>{t('authorization.log_in')}</h1>
                    <TextField
                      name='nickname'
                      placeholder={t('placeholders.nickname_ph')}
                      error={errors.nickname}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    <TextField
                      name='password'
                      placeholder='Пароль'
                      error={errors.password}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    <button
                      className='w-100 mb-3 btn btn-outline-primary'
                      type='submit'
                    >
                      {t('authorization.log_in')}
                    </button>
                  </Form>
                )}
              </Formik>
            </Card.Body>
            <Card.Footer className='p-4'>
              <div className='text-center'>
                <span>
                  Нет аккаунта?
                  {' '}
                  <a href='/signup'>Регистрация</a>
                </span>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
