import React from 'react';

function UserDataForm(props) {
  return (
    <div>
      <div>
        <input
          value={props.name}
          onChange={props.onChange}
          style={{
            fontSize: 20,
          }}
        />
      </div>
    </div>
  );
}

export default UserDataForm;
