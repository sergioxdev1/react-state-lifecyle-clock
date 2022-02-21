import React, { Component } from 'react';
import Title1 from './Title1';

export default class LifeCycle extends Component {
  /************************************************* CONSTRUCTOR */
  constructor(props) {
    super(props);
    console.log(0, '** Component are LIFECYCLE initialized **');

    this.state = {
      dateDay: new Date().toLocaleDateString(),
      dateHour: new Date().toLocaleTimeString(),

      visible: false,
    };

    this.timer = null;
  }
  /****************************************** metodo para iniciar + Montaje SetState */
  startHour = () => {
    this.timer = setInterval(() => {
      this.setState({
        visible: true,

        dateHour: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };
  /************************************************************* metodo para detener */
  stopHour = () => {
    clearInterval(this.timer);
    this.setState({
      visible: false,
    });
  };
  /********************************************************* revisa que este montado */
  componentDidMount() {
    console.log(1, '** The component LIFECYCLE did mount **');
  }
  /****************************************** permite ver los props y state anterior */
  componentDidUpdate(prevProps, prevState) {
    console.log(2, '** The component LIFECYCLE did update **');
    //console.log(2, prevProps);
    //console.log(2, prevState);
  }

  /***************************************************************/
  render() {
    console.log(4, '** Component are LIFECYCLE:TIME rendered **');
    return (
      <>
        {this.state.visible && <Title1 />}

        <div align="center">
          <h2>Life Cycle Example</h2>
          <h3>{this.state.dateHour}</h3>
          <h4>{this.state.dateDay}</h4>
          <button onClick={this.startHour} style={{ margin: 5 }}>
            START
          </button>

          <button onClick={this.stopHour} style={{ margin: 5 }}>
            STOP
          </button>
        </div>
      </>
    );
  }
}
