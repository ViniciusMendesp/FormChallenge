import { api, setAuthentication } from "../index";
import { IUser, ILogIn } from "../../interface/auth.interface";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export async function logInApi({ email, password }: ILogIn) {
  try {
    const { data } = await api.post<IUser>("/login", { email, password });

    setAuthentication(data.token);
    window.localStorage.setItem("auth-key", JSON.stringify(data));

    console.log(data, "data");

    return data;
  } catch (error) {
    console.error(error);
    const err = error as AxiosError;

    if (err.isAxiosError) {
      switch (err.response?.status) {
        case 401:
          throw new Error("Email ou senha inválidos!");
        case 400:
          throw new Error("Email ou senha inválidos!");
        case 500:
          throw new Error("Erro inesperado!");
        default:
          throw new Error(err.response?.statusText);
      }
    }
    throw new Error(err.message);
  }
}
