// src/lib/apiUtils.js

import apilist from "./apilist";

export const fetchData = async (endpoint, options = {}) => {
  try {
    const url = apilist[endpoint]; // Use the apilist to get the full endpoint URL
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};
