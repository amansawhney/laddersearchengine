import React, { Component } from 'react';
import Metric from './components/Metric';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import CircularProgress from 'material-ui/CircularProgress';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: 3,
      metricData: {
        metrics: [{}],
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
          loaded: 0,
          metricData: d,
        });
      });
  }


  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="row">
          <div className="card search">
            <input
              className="col-xs-10 col-xs-offset-1"
              onChange={this.handleSearchTermChange}
              value={this.state.searchTerm}
              type="text"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="row">
                <CSSTransitionGroup
                  transitionName="example"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}
                >
                  {this.state.metricData.metrics
                    .filter(
                      metric =>
                        `${metric.industry} ${metric.metricName} ${metric.platform} ${metric.metricName} ${metric.platform} ${metric.industry} ${metric.metricName} ${metric.industry} ${metric.platform} ${metric.metricName} ${metric.industry}`
                          .toUpperCase()
                          .replace(/\s/g, '')
                          .indexOf(
                            this.state.searchTerm
                              .toUpperCase()
                              .replace(/\s/g, ''),
                          ) >= 0 &&
                        this.state.metricData.metrics[0].updatedDate !=
                          undefined,
                    )
                    .map(metric =>
                      <Metric
                        key={metric.id}
                        metricName={metric.metricName}
                        metricRate={metric.metricRate}
                        sourceUrl={metric.sourceUrl}
                        updatedDate={metric.updatedDate}
                        platform={metric.platform}
                        industry={metric.industry}
                      />,
                    )}
                </CSSTransitionGroup>

                <CircularProgress thickness={this.state.loaded} />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
