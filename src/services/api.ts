import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export type RequestPromise = Promise<AxiosResponse<any, any>>;

export async function get(url: string) {
  const promise = instance.get(url);
  return promise as RequestPromise;
}

export async function post(url: string, data: any) {
  const promise = instance.post(url, data);
  return promise as RequestPromise;
}

export async function deleteReq(url: string) {
  const promise = instance.delete(url);
  return promise as RequestPromise;
}
