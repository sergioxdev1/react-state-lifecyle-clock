import React, { Component } from 'react';

export default class Title1 extends Component {
  constructor(props) {
    super(props);
  }
  /************************************************************** desmontaje */
  componentWillUnmount() {
    console.log(3, '** The component did unmount (KILL) **');
  }

  render() {
    return (
      <h4 align="center" style={{ color: 'white', background: 'green' }}>
        TIMER ON
      </h4>
    );
  }
}
