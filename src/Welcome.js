import React from 'react';

export default function Welcome(props) {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <button onClick={props.onButtonClick}>
        <h1>reverse name</h1>
      </button>
    </div>
  );
}
