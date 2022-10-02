import React from 'react';
import { useNavigate } from 'react-router-dom';
import nfAvatar from '../../assets/nfAvatar.svg';
import { useTranslation } from 'react-i18next';

function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className='text-center'>
      <img
        className='img-fluid h-25'
        src={nfAvatar}
        alt='Not found page avatar'
      />
      <h1 className='h4 text-muted'>{t('nf_page.page_nf')}</h1>
      <p className='text-muted'>
        {t('nf_page.go_to_main_page.text')}
        <a href='/' onClick={navigate('/')}> {t('nf_page.go_to_main_page.link')}</a>
      </p>
    </div>
  );
}
export default NotFoundPage;