import React from 'react';

const Metric = props =>
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
  </tr>;

export default Metric;
