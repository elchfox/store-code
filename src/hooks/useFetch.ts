import { useEffect, useState } from "react";
import config from "../utils/config";
import { FetchState } from "../types/IFetch";


const useFetch = <T>(url: string, params?: Record<string,unknown>): FetchState => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null | unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const localData = localStorage.getItem(url);
        if (localData) {
          setData(JSON.parse(localData));
        } else {
          const response = await fetch(`${config.baseUrl}${url}`);
          const res = await response.json()
          if (response.status !== 200) {
            throw new Error("Failed to fetch data");
          }
          setData(res);
          localStorage.setItem(url, JSON.stringify(res.products));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
