import React from 'react';

function Kosar(props) {
  return (
    <tr>
      <td>{props.kosaram.title}</td>
      <td>{props.kosaram.description}</td>
      <td>{props.kosaram.price}</td>
    </tr>
  );
}

export default Kosar;
