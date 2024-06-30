import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url, options = {}) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { ...options });
        const data = await response.json();

        setApiData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { apiData, loading };
};

export default useFetch;
