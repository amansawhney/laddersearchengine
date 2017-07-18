import React from 'react';

const Metric = props =>
  <div>
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        {props.industry}
      </td>
      <td>
        {props.platform}
      </td>
    </tr>
  </div>;

export default Metric;
