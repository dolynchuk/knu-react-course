import React from 'react';
import UserDataForm from './UserDataForm';
import Clock from './Clock';
import Welcome from './Welcome';

class App extends React.Component {
  state = {
    name: 'Max',
    doShowClock: true,
  };

  handleClockToggle = () => {
    this.setState({
      doShowClock: !this.state.doShowClock,
    });
  };

  handleNameReverse = () => {
    this.setState({
      name: [...this.state.name].reverse().join(''),
    });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <UserDataForm name={this.state.name} onChange={this.handleNameChange} />
        <Welcome
          name={this.state.name}
          onButtonClick={this.handleNameReverse}
        />
        {this.state.doShowClock && <Clock />}
        <button onClick={this.handleClockToggle}>
          <h1>toggle clock</h1>
        </button>
      </div>
    );
  }
}

export default App;
