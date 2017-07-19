import React, { Component } from 'react';
import Metric from './components/Metric';
import './App.css';
import logo from './logo-on-light.svg';

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
      <div className="container">
        <div className="row">
          <header>
            <img src={logo} className="col-sm-6 col-sm-offset-3" alt="logo" />
            <input
              className="col-sm-8 col-sm-offset-2"
              onChange={this.handleSearchTermChange}
              value={this.state.searchTerm}
              type="text"
            />
          </header>
          <div>
            <table className="col-sm-8 col-sm-offset-2">
              <thead>
                <tr>
                  <th>Industry</th>
                  <th>Metric Name</th>
                  <th>Patform</th>
                </tr>
              </thead>
              <tbody>
                {this.state.metricData.metrics
                  .filter(
                    metric =>
                      `${metric.industry} ${metric.metricName} ${metric.platform}`
                        .toUpperCase()
                        .indexOf(this.state.searchTerm.toUpperCase()) >= 0,
                  )
                  .map(metric =>
                    <Metric
                      industry={metric.industry}
                      name={metric.metricName}
                      platform={metric.platform}
                    />,
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
