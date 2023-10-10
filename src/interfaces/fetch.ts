export interface IFetchResponse {
    isLoading: boolean;
    error: { code: number; msg: string };
    data: any;
}
export interface IFetch {
    (url: string, options: RequestInit, dependencies?: any[]): IFetchResponse;
}
