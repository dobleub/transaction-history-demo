import { useEffect, useState, useCallback } from "react";

import { IFetchResponse } from "@interfaces/fetch";
import { IErrorResponse } from "@interfaces/common";

const useFetch = (
    url: string,
    options: RequestInit,
    dependencies: any[] = [],
): IFetchResponse => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<IErrorResponse>({ code: 0, msg: "" });
    const [data, setData] = useState<any>(null);

    const fetchData = useCallback(async () => {
        if (!url || url.includes("undefined")) {
            setIsLoading(false);
            setError({ code: 0, msg: "" });
            return;
        }

        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError({ code: response.status, msg: response.statusText });
            return;
        }

        setData(data);
        setIsLoading(false);
        setError({ code: 0, msg: "" });
    }, [url, options]);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dependencies]);

    return { isLoading, error, data };
};

export default useFetch;
