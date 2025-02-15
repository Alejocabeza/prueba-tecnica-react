import { DataResponse, ResultResponse } from "@/interfaces/response";
import { moviesService } from "@/services/movies.service";
import { useCallback, useEffect, useState } from "react";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callApi = useCallback(
    async (
      apiCall: (params: {
        id?: string;
        filters?: { [key: string]: string };
        search?: string;
        page?: number;
      }) => Promise<any>,
      params?: {
        id?: string;
        filters?: { [key: string]: string };
        search?: string;
        page?: number;
      }
    ) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await apiCall(params ?? {});
        return response.data;
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { callApi, isLoading, error };
};

export const useApiFindAllMovies = ({ page }: { page?: number }) => {
  const [data, setData] = useState<DataResponse | undefined>(undefined);
  const { callApi, isLoading, error } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callApi(moviesService.findAll, { page });
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [callApi, page]);

  return { data, isLoading, error };
};

export const useApiFindOneMovie = (id: string) => {
  const [data, setData] = useState<ResultResponse | undefined>(undefined);
  const { callApi, isLoading, error } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callApi(moviesService.findOne, { id });
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [callApi, id]);

  return { data, isLoading, error };
};

export const useApiSearchMovie = ({
  search,
  page,
}: {
  search?: string;
  page?: number;
}) => {
  const [data, setData] = useState<DataResponse | undefined>(undefined);
  const { callApi, isLoading, error } = useApi();

  useEffect(() => {
    if (!search) return;
    const fetchData = async () => {
      try {
        const data = await callApi(moviesService.searchMovie, { search, page });
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [callApi, search, page]);

  return { data, isLoading, error };
};
