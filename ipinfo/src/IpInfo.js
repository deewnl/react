// src/IpInfo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IpInfo = () => {
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIpInfo = async () => {
      try {
        // Replace 'YOUR_ACCESS_TOKEN' with your actual IPinfo access token
        const response = await axios.get('https://ipinfo.io/json?token=c93dd4d3b908b0');
        setIpData(response.data);
      } catch (err) {
        setError('Failed to fetch IP information');
        console.error(err);
      }
    };

    fetchIpInfo();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!ipData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>IP Information</h1>
      <p><strong>IP:</strong> {ipData.ip}</p>
      <p><strong>City:</strong> {ipData.city}</p>
      <p><strong>Region:</strong> {ipData.region}</p>
      <p><strong>Country:</strong> {ipData.country}</p>
      <p><strong>Location:</strong> {ipData.loc}</p>
      <p><strong>Postal:</strong> {ipData.postal}</p>
      <p><strong>Timezone:</strong> {ipData.timezone}</p>
    </div>
  );
};

export default IpInfo;
