import React, { useEffect, useState } from 'react';

export default function GithubAPI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Grab URL Query params for API post from User Input
  const queryParams = new URLSearchParams(window.location.search);
  const username = queryParams.get('Username');

  useEffect(
    () => {
      const getData = async () => {
        try {
          const response = await fetch(
            `https://api.github.com/users/${username}/repos`,
          );
          if (!response.ok) {
            throw new Error(
              `the status code is: ${response.status}`,
            );
          }
          const actualData = await response.json();
          setData(actualData);
          setError(null);
        } catch (err) {
          setError(err.message);
          setData(null);
        } finally {
          setLoading(false);
        }
      };
      getData();
    },
    [username],
  );

  return (
    <div id="API">
      <h2>Github Repos</h2>
      {loading && <div>A moment please...</div>}
      {error && (
      <div>
        There is a problem fetching the data
        {error}
      </div>
      )}
      <ul>
        {data
                && data.map(({ name, language }) => (
                  <li key={name}>
                    <h3>
                      {name}
                      {' '}
                      :
                      {' '}
                      {language}
                    </h3>
                  </li>
                ))}
      </ul>
    </div>
  );
}
