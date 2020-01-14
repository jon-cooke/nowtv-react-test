import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ user, message, timestamp }) => {
  const [showEmail, setShowEmail] = React.useState(false);
  return (
    <div onMouseOver={() => setShowEmail(true)} onMouseOut={() => setShowEmail(false)}>
      <div>
        <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} width={100} height={100} />
        {message}
      </div>
      <div>{new Date(timestamp).toLocaleString()}</div>
      {showEmail && <div>{user.email}</div>}
    </div>
  );
};

const userType = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

Message.propTypes = {
  id: PropTypes.string,
  user: PropTypes.shape(userType),
  message: PropTypes.string,
  timestamp: PropTypes.string,
};

export default Message;
