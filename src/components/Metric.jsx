import React from 'react';
import '../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css';

const Metric = props =>
  <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1">
    <div className="card">
      <div className="row">
        <div className="col-xs-9 name">
          <h2 className="pull-left">
            {props.metricName}
          </h2>
        </div>
        <div className="col-xs-3">
          <h2 className="pull-right">
            <strong>
              {props.metricRate}
            </strong>
          </h2>
        </div>
        <div className="col-xs-6">
          <h4 className="pull-left">
            {props.industry}
          </h4>
        </div>
        <div className="col-xs-6">
          <h4 className="pull-right">
            {props.platform}
          </h4>
        </div>
        <div className="col-xs-10 col-xs-offset-1 bottom-align-text">
          <h4 className="text-center ">
            Updated On:
            <span> {String(props.updatedDate).slice(0, 10)}</span>
            <br />
            <a href={props.sourceUrl}> Source</a>
          </h4>
        </div>
      </div>
    </div>
  </div>;

export default Metric;
