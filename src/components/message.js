import React from 'react';
import PropTypes from 'prop-types';

const Message = props => <div>{JSON.stringify(props)}</div>;

Message.propTypes = {
  id: PropTypes.string,
  userId: PropTypes.string,
  message: PropTypes.string,
  timestamp: PropTypes.string,
};

export default Message;
