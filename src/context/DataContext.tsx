import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface DataContextProps {
  data: any[];
  loading: boolean;
  error: string | null;
}

export const DataContext = createContext<DataContextProps>({
  data: [],
  loading: false,
  error: null,
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
