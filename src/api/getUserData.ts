import { UserData } from "../models/User";

export const getUserData = async (): Promise<UserData> => {
  const response = await fetch("https://api.github.com/users/rudneisantiago");
  const data: UserData = await response.json();
  return data;
};
