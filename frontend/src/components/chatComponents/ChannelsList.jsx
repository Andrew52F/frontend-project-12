import React from 'react';
import { Button, ButtonGroup, Col, Nav, Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getAllChannels, getCurrentChannelId } from '../../slices/selectors';
import { PlusSquare} from 'react-bootstrap-icons';
import { actions } from '../../slices/channelsSlice';

const ChannelsList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const channels = useSelector(state => getAllChannels(state));
  const currentChannelId = useSelector(state => getCurrentChannelId(state));

  return (
    <Col 
      md='2'
      className='col-4 border-end pt-5 px-0 bg-light'
    >
      <div className='d-flex justify-content-between mb-2 ps-4 pe-2'>
        <span>{t('chat.channels')}</span>
        <ButtonGroup
          vertical
          className='p-0'
        >
        <PlusSquare size={20} />
        <span className='visually-hidden'>+</span>
      </ButtonGroup>
      </div>
      <Nav 
        fill
        variant='pills'
        defaultActiveKey="1"
        className='px-2 flex-column'
      >
        {channels && currentChannelId && (
          channels.map(({id, name, removable}) => (
            
            <li key={id}>
              <Button
                variant={id === currentChannelId ? 'secondary' : 'light'}
                className='w-100 rounded-0 text-start'
                onClick={(e) => {dispatch(actions.setCurrentChannelId(id))}}
              >
                <span className='me-1'>#</span>{name}
              </Button>
            </li>
          ))
        )}
      </Nav>
    </Col>
  )
}
export default ChannelsList;