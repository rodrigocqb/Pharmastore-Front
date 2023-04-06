import { v4 as uuid } from "uuid";

export function getIdentifier(): string {
  const identifier = localStorage.getItem("user");
  if (!identifier) {
    const newIdentifier = uuid();
    localStorage.setItem("user", newIdentifier);
    return newIdentifier;
  }
  return identifier;
}
