import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metricData: {
        metrics: [{ platform: 'FaceBook' }],
      },
      searchTerm: '',
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  componentDidMount() {
    fetch('https://ladder-api-app.herokuapp.com/api/v1/industries')
      .then(d => d.json())
      .then(d => {
        this.setState({
          metricData: d,
        });
      });
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="search">
        <header>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
          />
        </header>
        <div>
          {this.state.metricData.metrics
            .filter(metric =>
              `${metric.industry}`.toUpperCase().indexOf(
                this.state.searchTerm.toUpperCase()) >= 0,
            )
            .map(metric =>
              <div>
                {JSON.stringify(metric)}
              </div>,
            )};
        </div>
      </div>
    );
  }
}

export default App;
