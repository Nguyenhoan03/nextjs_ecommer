
type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: HeadersInit;
  body?: any;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
  credentials?: RequestCredentials;
};


export async function fetcher<T>(url: string, options?: FetchOptions): Promise<T> {
  const response = await fetch(url, {
    method: options?.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
    cache: options?.cache || 'no-store',
    next: options?.next,
    credentials: options?.credentials || "include",
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error: ${response.status} - ${error}`);
  }

  return response.json();
}
