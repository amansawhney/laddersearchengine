import React from 'react';
import '../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css';

const Metric = props =>
  <div className="card">
    <div className="row">
      <div className="col-sm-5 col-sm-offset-1">
        <h1 className="pull-left">
          {props.metricName}
        </h1>
      </div>
      <div className="col-sm-5">
        <h1 className="pull-right">
          {props.metricRate}
        </h1>
      </div>
      <div className="col-sm-5 col-sm-offset-1">
        <h4 className="pull-left">
          {props.industry}
        </h4>
      </div>
      <div className="col-sm-5">
        <h4 className="pull-right">
          {props.platform}
        </h4>
      </div>
      <div className="col-sm-10 col-sm-offset-1 bottom-align-text">
        <h4 className="text-center ">
          Updated On:
          <span> {String(props.updatedDate).slice(0, 10)}</span>
        </h4>
      </div>
    </div>
  </div>;

export default Metric;
