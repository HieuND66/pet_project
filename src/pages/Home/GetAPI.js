import React from 'react'
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./Home";


export default function GetAPI(props) {
  const [results, setResults] = useState(null);

  const accessToken = useContext(AuthContext);

  useEffect(() => {
    if (accessToken === null) return;
    const fetchPets = async () => {
      const petResults = await fetch(
        "https://api.petfinder.com/v2/animals?location=24558",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const json = await petResults.json();
      console.log(json);
      setResults(json.animals);
    };
    fetchPets();
  }, [accessToken]);
  if (results === null) return null;
  return 
  <div>
    GetAPI
  </div>
};


