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
          <div className="row">
            {this.state.metricData.metrics
              .filter(
                metric =>
                  `${metric.industry} ${metric.metricName} ${metric.platform}`
                    .toUpperCase()
                    .replace(/\s/g, '')
                    .indexOf(
                      this.state.searchTerm.toUpperCase().replace(/\s/g, ''),
                    ) >= 0,
              )
              .map(metric =>
                <Metric
                  metricName={metric.metricName}
                  metricRate={metric.metricRate}
                  sourceUrl={metric.sourceUrl}
                  updatedDate={metric.updatedDate}
                  platform={metric.platform}
                  industry={metric.industry}
                />,
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
