import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { object, string} from 'yup';
import {
  Formik, Form,
} from 'formik';
import {
  Container, Col, Card, Row,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import loginAvatarImg from '../../assets/loginAvatar.jpeg';
import TextField from '../TextField';
import { useAuth } from '../providers/AuthProvider';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { onLogin } = useAuth();
  const [ authError, setAuthError ] = useState();

  const initialValues = {
    username: '',
    password: '',
  };
  const validationSchema = object({
    username: string().required(t('fieldErrors.field_is_required')),
    password: string().required(t('fieldErrors.field_is_required')),
  });
  const handleSubmit = async (values) => {
    console.log(values)
    try {
      await onLogin(values);
      navigate('/');
    }
    catch (e) {
      switch (Number(e.message)) {
        case 0: setAuthError(t('auth_errors.connection'))
        break;
        case 401: setAuthError(t('auth_errors.unauthorized'))
        break;
        case 500: setAuthError(t('auth_errors.server_lost'))
          break;
        default: setAuthError(t('auth_errors.unknown'))
      }
    }
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
                    <h1 className='text-center mb-4'>{t('authorization.login')}</h1>
                    <TextField
                      name='username'
                      placeholder={t('placeholders.username_ph')}
                      // error и errorMessage разделены для изменения стиля инпута без появления текста ошибки для submit ошибок
                      error={authError || errors.username}
                      errorMessage={errors.username}
                      touched={touched.username}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    <TextField
                      name='password'
                      placeholder={t('placeholders.password_ph')}
                      error={authError || errors.password}
                      errorMessage={authError || errors.password}
                      touched={touched.password}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    <button
                      className='w-100 mb-3 btn btn-outline-primary'
                      type='submit'
                    >
                      {t('authorization.login')}
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
                  <Link to={'/signup'}> Регистрация</Link>
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