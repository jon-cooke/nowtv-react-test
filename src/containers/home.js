import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadMessages } from '../action-creators/messages';
import Message from '../components/message';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    return (
      <div>
        {this.props.messages.map(message => (
          <Message key={message.id} {...message} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadMessages }, dispatch);

Home.propTypes = {
  loadMessages: PropTypes.func,
  messages: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
