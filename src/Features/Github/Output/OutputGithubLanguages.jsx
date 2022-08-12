import React, { useState } from 'react';
import GithubAPI from '../API/GithubApiRequest';
import UserInput from '../Input/UserInput';

// Handle Username Change

function OutputFavouriteLange() {
  const [username, setUser] = useState(null);
  const handleChange = (event) => {
    setUser(event.target.value);
  };

  // Output

  return (
    <div id="Card">
      <UserInput value={username} onChange={handleChange} />
      <div id="Output">
        <h2>Favourite Language: </h2>
        <GithubAPI />
      </div>
    </div>
  );
}
export default OutputFavouriteLange;
