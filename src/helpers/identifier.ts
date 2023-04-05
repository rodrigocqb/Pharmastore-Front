import { v4 as uuid } from "uuid";

export function getIdentifier(): string {
  return localStorage.getItem("user") || uuid();
}
