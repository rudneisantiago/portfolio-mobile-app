import { getUserData } from "../../api/getUserData";
import { UserData } from "../../models/User";

export const fetchGetUserData = async (
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
) => {
  try {
    const userData = await getUserData();
    setUserData(userData);
  } catch (error) {
    console.log("Houve um erro ao carregar as informações de usuário:", error);
  }
};
