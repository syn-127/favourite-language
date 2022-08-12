import React from 'react';

function UserInput({ username, handleChange }) {
  return (
    <form onSubmit="">
      <div id="Input">
        <h2>
          {' '}
          Username:
          <input type="text" id="Username" name="Username" placeholder="Enter Github Username" value={username} onChange={handleChange} />
          <button type="submit">Submit</button>
        </h2>
      </div>
    </form>
  );
}
export default UserInput;
