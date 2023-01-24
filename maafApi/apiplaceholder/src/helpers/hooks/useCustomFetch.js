import { useEffect, useState } from 'react';
import axios from 'axios';

const useCustomFetch = (id) => {
  const url = ' https://jsonplaceholder.typicode.com/posts';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${url}/${id}`);

      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return { data, loading, error };
};
export default useCustomFetch;
