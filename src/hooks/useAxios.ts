import { moviesService } from "@/services/movies.service";
import { useCallback, useEffect, useState } from "react";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = useCallback(async (apiCall: () => Promise<any>) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiCall();
      return response;
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { callApi, isLoading, error };
};

export const useApiFindAllMovies = () => {
  const [data, setData] = useState<any[]>([]);
  const { callApi, isLoading, error } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callApi(moviesService.findAll);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [callApi]);

  return { data, isLoading, error };
};
