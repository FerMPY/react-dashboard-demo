type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

class ApiError extends Error {
  response?: Response;
  status?: number;

  constructor(message: string, response?: Response) {
    super(message);
    this.name = "ApiError";
    this.response = response;
    this.status = response?.status;
  }
}

class Api {
  baseUrl!: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  create(props: { baseUrl: string }) {
    this.baseUrl = props.baseUrl;
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      throw new ApiError(
        `HTTP error: ${response.status} ${response.statusText}`,
        response,
      );
    }
    return response;
  }

  private logError(error: unknown): void {
    if (error instanceof ApiError) {
      console.error(`API Error: ${error.message}`);
      if (error.response) {
        console.error(`Status: ${error.status}, Response: ${error.response}`);
      }
    } else if (error instanceof Error) {
      console.error(`Unexpected Error: ${error.message}`);
    } else {
      console.error("Unknown error occurred:", error);
    }
  }

  async get(url: string, config?: RequestInit) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, { ...config });
      return this.handleResponse(response);
    } catch (error) {
      this.logError(error);
      throw error;
    }
  }

  async put(url: string, data: JSONValue, config: RequestInit) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        headers: {
          "Content-Type": "application/json",
        },
        ...config,
        method: "PUT",
        body: JSON.stringify(data),
      });
      return this.handleResponse(response);
    } catch (error) {
      this.logError(error);
      throw error;
    }
  }

  async post(url: string, data: JSONValue, config: RequestInit) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        headers: {
          "Content-Type": "application/json",
        },
        ...config,
        body: JSON.stringify(data),
        method: "POST",
      });
      return this.handleResponse(response);
    } catch (error) {
      this.logError(error);
      throw error;
    }
  }

  async delete(url: string, config: RequestInit) {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        ...config,
        method: "DELETE",
      });
      return this.handleResponse(response);
    } catch (error) {
      this.logError(error);
      throw error;
    }
  }
}

const baseUrl =
  import.meta.env.MODE === "development" ? "http://localhost:3001" : "";
export const api = new Api(baseUrl);
