import { RequestInit } from "next/dist/server/web/spec-extension/request";

export async function api<T>(
  path: string,
  method: "GET" | "POST",
  params: T,
  cache: "no-store" | "force-cache"
) {
  let url = `${process.env.NEXT_PUBLIC_API_PATH}${path}`;

  const requestOptions: RequestInit = {
    method: method,
    cache: cache,
  };

  if (method === "GET" && params) {
    const queryParams = new URLSearchParams({ ...params });
    url += `?${queryParams.toString()}`;
  }

  if (method === "POST") {
    requestOptions.headers = {
      "Content-Type": "application/json",
    };
    requestOptions.body = JSON.stringify(params);
  }

  const res = await fetch(url, requestOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
