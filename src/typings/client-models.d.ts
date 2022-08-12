interface IClient {
    sendAsync<TData = unknown>(request: IRequest): Promise<TData>;
    getAsync<TData = unknown>(path: string, query?: string): Promise<TData>;
}

interface IRequest {
    path: string;
    query?: string;
    body?: string;
    headers?: { [key: string]: string };
    method: "GET" | "POST";
}
