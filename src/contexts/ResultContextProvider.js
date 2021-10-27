import React,  {createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
  const [results, setResults] = useState ([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`,{
      method:'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': 'c8ca60d4c7msh7adc58209160d39p1708a5jsn2287cd086652'
      }
    });

    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  }
  return(
    <ResultContext.Provider value={{getResults, results, searchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  );
}

export const useResultContext= () => useContext(ResultContext);