const baseUrl = "https://localhost:5001";

class Client implements IClient {
    public async getAsync<TData = unknown>(path: string, query?: string): Promise<TData> {
        return await this.sendAsync({
            path: path,
            query: query,
            method: "GET"
        });
    }

    async sendAsync<TData = unknown>(request: IRequest): Promise<TData> {
        if (!request) {
            throw new Error("Request is must be not null");
        }

        if (request.path.length === 0 || !request.path) {
            throw new Error("Path is must be not null");
        }

        let response: Response;

        try {
            response = await fetch(baseUrl + request.path, {
                body: request.body,
                method: request.method,
                headers: request.headers
            });

            return response.json();
        } catch (e) {
            throw new Error(e.message);
        }

        if (!response.ok) {
            console.warn(`Request completed with error
            request: ${request.method} ${request.path}
            status: ${response.status}
            response: ${JSON.stringify(response)}`);

            return;
        }
    }
}

export const client: IClient = new Client();
