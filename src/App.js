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
    this.setState({
      loaded: 0,
      metricData: {
        metrics: [
          {
            id: 1,
            metricName: 'Click Through Rate',
            metricRate: '1.24%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2017-07-15',
            sourceDateFrom: '2017-07-18',
            updatedDate: '2017-07-19T19:03:00.521Z',
            platform: 'Facebook',
            industry: 'Apparel',
          },
          {
            id: 2,
            metricName: 'Click Through Rate',
            metricRate: '0.80%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2016-11-01',
            sourceDateFrom: '2017-01-01',
            updatedDate: '2017-07-19T19:03:14.106Z',
            platform: 'Facebook',
            industry: 'Auto',
          },
          {
            id: 3,
            metricName: 'Click Through Rate',
            metricRate: '0.78%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2016-11-01',
            sourceDateFrom: '2017-01-01',
            updatedDate: '2017-07-19T19:03:28.232Z',
            platform: 'Facebook',
            industry: 'B2B',
          },
          {
            id: 4,
            metricName: 'Click Through Rate',
            metricRate: '1.16%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2016-11-01',
            sourceDateFrom: '2017-01-01',
            updatedDate: '2017-07-19T19:03:41.408Z',
            platform: 'Facebook',
            industry: 'Beauty',
          },
          {
            id: 5,
            metricName: 'Click Through Rate',
            metricRate: '0.62',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2016-11-01',
            sourceDateFrom: '2017-01-01',
            updatedDate: '2017-07-19T19:03:56.886Z',
            platform: 'Facebook',
            industry: 'Consumer Services',
          },
          {
            id: 6,
            metricName: 'Click Through Rate',
            metricRate: '0.73%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2016-11-01',
            sourceDateFrom: '2017-01-01',
            updatedDate: '2017-07-19T19:05:36.380Z',
            platform: 'Facebook',
            industry: 'Education',
          },
          {
            id: 7,
            metricName: 'Click Through Rate',
            metricRate: '0.47%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2016-11-01',
            sourceDateFrom: '2017-01-01',
            updatedDate: '2017-07-19T19:06:17.570Z',
            platform: 'Facebook',
            industry: 'Employment and Job Training',
          },
          {
            id: 8,
            metricName: 'Click Through Rate',
            metricRate: '0.56%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2016-11-01',
            sourceDateFrom: '2017-01-01',
            updatedDate: '2017-07-19T19:06:33.233Z',
            platform: 'Facebook',
            industry: 'Finance and Insurance',
          },
          {
            id: 9,
            metricName: 'Click Through Rate',
            metricRate: '1.01%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2016-11-01',
            sourceDateFrom: '2017-01-01',
            updatedDate: '2017-07-19T19:07:00.158Z',
            platform: 'Facebook',
            industry: 'Fitness',
          },
          {
            id: 10,
            metricName: 'Click Through Rate',
            metricRate: '0.70%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2016-11-01',
            sourceDateFrom: '2017-01-01',
            updatedDate: '2017-07-19T19:07:16.815Z',
            platform: 'Facebook',
            industry: 'Home Improvement',
          },
          {
            id: 11,
            metricName: 'Click Through Rate',
            metricRate: '0.83%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: '2016-11-01',
            sourceDateFrom: '2017-01-01',
            updatedDate: '2017-07-19T19:08:20.951Z',
            platform: 'Facebook',
            industry: 'Healthcare',
          },
          {
            id: 12,
            metricName: 'Click Through Rate',
            metricRate: '0.71%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: null,
            sourceDateFrom: null,
            updatedDate: '2017-07-20T14:15:28.520Z',
            platform: 'Facebook',
            industry: 'Industrial Services',
          },
          {
            id: 13,
            metricName: 'Click Through Rate',
            metricRate: '1.61%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: null,
            sourceDateFrom: null,
            updatedDate: '2017-07-20T14:19:42.520Z',
            platform: 'Facebook',
            industry: 'Legal',
          },
          {
            id: 14,
            metricName: 'Click Through Rate',
            metricRate: '1.59%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: null,
            sourceDateFrom: null,
            updatedDate: '2017-07-20T14:22:21.651Z',
            platform: 'Facebook',
            industry: 'Retail',
          },
          {
            id: 15,
            metricName: 'Click Through Rate',
            metricRate: '1.04%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: null,
            sourceDateFrom: null,
            updatedDate: '2017-07-20T14:24:31.435Z',
            platform: 'Facebook',
            industry: 'Technology',
          },
          {
            id: 16,
            metricName: 'Click Through Rate',
            metricRate: '0.90%',
            sourceUrl:
              'http://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks',
            sourceDateTo: null,
            sourceDateFrom: null,
            updatedDate: '2017-07-20T14:28:30.587Z',
            platform: 'Facebook',
            industry: ' Travel and Hospitality',
          },
          {
            id: 17,
            metricName: 'Click Through Rate',
            metricRate: '1.20%',
            sourceUrl: 'wordstream.com',
            sourceDateTo: '2017-07-11',
            sourceDateFrom: '2017-07-25',
            updatedDate: '2017-07-20T16:47:46.970Z',
            platform: 'Facebook',
            industry: 'Automotive',
          },
          {
            id: 18,
            metricName: 'Click Through Rate',
            metricRate: '1.77%',
            sourceUrl:
              'https://cdn2.hubspot.net/hubfs/234606/Nanigans%20-%20Q4%202016%20Global%20Facebook%20Advertising%20Benchmark%20Report.pdf?t=1499439383527&utm_campaign=GA-Report-Global%20FAB%202016%20Q4&utm_source=hs_automation&utm_medium=email&utm_content=40820782&_hsenc=p2ANqtz--DvZe5vRdba9a8tv1Dv0orwkDZSUC7BC0fiK3T1MLCerYS2YWKiTNSOxVzQ5PKUgoJgLGLtqPAkfbMWnmK6wusjzY43A&_hsmi=40820782',
            sourceDateTo: null,
            sourceDateFrom: null,
            updatedDate: '2017-07-20T19:19:02.576Z',
            platform: 'Facebook',
            industry: 'E-commerce',
          },
        ],
      },
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
              autoFocus
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
