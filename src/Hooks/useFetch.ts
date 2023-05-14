import { useState, useEffect } from "react";

type useFetchState<T> = {
  state: "idle" | "loading" | "error" | "success";
  data: null | T;
  error: null | Error;
};

export const useFetch = <T>(url: string) => {
  const [fetchState, setFetchState] = useState<useFetchState<T>>({
    state: "idle",
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchState((oldValue) => ({ ...oldValue, state: "loading" }));
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setFetchState({
            data: json,
            state: "success",
            error: null,
          });
        } else {
          setFetchState({
            data: null,
            state: "error",
            error: new Error(response.statusText),
          });
        }
      } catch (error: any) {
        setFetchState({
          data: null,
          state: "error",
          error: error as Error,
        });
      }
    };

    fetchData();
  }, [url]);

  return fetchState;
};
