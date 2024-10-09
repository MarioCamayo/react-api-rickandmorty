import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setData(result.results);
        // setInfo(result.info.next)
        // console.log(info);
      } catch (err) {
        setError(err.message); // Captura el mensaje de error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error }; // Devuelve los datos, el estado de carga y el error
};

export default useFetchData;
