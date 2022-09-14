import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from './AuthProvider';
const Header = () => {
  const {authToken, onLogout} = useAuth();
  return (
    <Navbar
      bg='white'
      expand='lg'
      variant='light'
      className='shadow-sm'
    >
      <Container>
      <Navbar.Brand>Hexlet Chat</Navbar.Brand>
      {authToken && (
      <Button
        onClick={onLogout}
      >
        Выйти
      </Button>
      )}
      </Container>
    </Navbar>
  )
}
export default Header;