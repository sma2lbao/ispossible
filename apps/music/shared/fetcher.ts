export type Method = "POST" | "PUT" | "DELETE";

export function createFetcher() {
  return (url: string, init?: RequestInit) => {
    return fetch(url, {
      ...init,
      method: "GET",
    }).then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    });
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createMutater<ExtraArg = unknown, Data = any>(
  method: Method = "POST"
) {
  return (endpoint: string, opts: Readonly<{ arg: ExtraArg }>): Promise<Data> =>
    fetch(endpoint, {
      method,
      body: JSON.stringify(opts.arg),
    }).then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    });
}
