import React from 'react';
import '../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css';

const Metric = props =>
  <div className="col-sm-4">
    <div className="card">
      <div className="row">
        <h1 className="text-left">
          {props.industry}
          <small className="text-right">
            {props.name}
          </small>
        </h1>
      </div>
      <h3>
        {props.platform}
      </h3>
    </div>
  </div>;

export default Metric;
