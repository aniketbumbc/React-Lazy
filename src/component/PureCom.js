import React from 'react';

function PureCom(props) {
  console.log('Pure Com', props.number);
  return (
    <div>
      <h4> Pure Component</h4>
      <h3>{props.number}</h3>
    </div>
  );
}

export default PureCom;
