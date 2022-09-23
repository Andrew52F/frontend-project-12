import React from 'react';
import nfAvatar from '../../assets/nfAvatar.svg';

function NotFoundPage() {
  return (
    <div className='text-center'>
      <img
        className='img-fluid mh-25 col-4'
        src={nfAvatar}
        alt='Not found page avatar'
      />
      <h1 className='h4 text-muted'>Страница не найдена</h1>
      <p className='text-muted'>
        Но вы можете перейти
        <a href='/'> на главную страницу</a>
      </p>
    </div>
  );
}
export default NotFoundPage;
