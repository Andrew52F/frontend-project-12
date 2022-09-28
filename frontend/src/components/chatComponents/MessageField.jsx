import React, { useRef, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { ArrowRightSquare } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useFormik } from 'formik';

import { useChatApi } from '../providers/ChatApiProvider';

const MessageField = () => {
  const { t } = useTranslation();

  const currentChannelId = useSelector(state => state.channels.currentChannelId);
  const { username } = JSON.parse(localStorage.getItem('authtoken'));
  const { sendMessage } = useChatApi();

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: ({ body }) => {
      sendMessage({
        body,
        username,
        channelId: currentChannelId,
      }, formik.resetForm);
    },
  });

  return (
      <Form
        noValidate
        className="py-1 border rounded-2"
        onSubmit={formik.handleSubmit}
      >
        <Form.Group as={InputGroup} className="has-validation">
          <Form.Control
            onChange={formik.handleChange}
            value={formik.values.body}
            name="body"
            id="body"
            type="text"
            aria-label={t('ariaLabel')}
            ref={inputRef}
            className="border-0 p-0 ps-2"
            placeholder={t('placeholders.type_message')}
          />
          <Form.Label
            htmlFor="body"
            className="visually-hidden"
          >
            {t('new_message')}
          </Form.Label>
          <Button
            type="submit"
            variant="link"
            className="mb-1 text-dark"
            disabled={formik.isSubmitting}
          >
            <ArrowRightSquare size={20} />
            <span className="visually-hidden">{t('submit')}</span>
          </Button>
        </Form.Group>
      </Form>
  );
};

export default MessageField;