import React, { Component } from 'react';
import { connect } from 'react-redux';

import { subscribeToMessageFromServer, sendMessage } from '../../actions/sockets';


class ChatComponent extends Component {

  componentDidMount() {
    this.props.subscribeToMessageFromServer();
  }


  render() {
    return (
      <div>
        <button onClick={() => this.props.sendMessage('Hello')}>Hello</button>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//
// }
export default connect(null, { subscribeToMessageFromServer, sendMessage })(ChatComponent);
