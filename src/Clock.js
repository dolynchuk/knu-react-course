import React from 'react';

export default class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  interval = null;

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = new Date();
      this.setState({
        date: date,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>{this.state.date.toLocaleString()}</h1>;
  }
}
