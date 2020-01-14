import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ id, userId, message, timestamp }) => (
  <div>
    <div>{id}</div>
    <div>{userId}</div>
    <div>{message}</div>
    <div>{new Date(timestamp).toLocaleString()}</div>
  </div>
);

Message.propTypes = {
  id: PropTypes.string,
  userId: PropTypes.string,
  message: PropTypes.string,
  timestamp: PropTypes.string,
};

export default Message;
