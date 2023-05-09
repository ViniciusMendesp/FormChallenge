import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { logInApi } from "../services/auth/"
import { IUser, IAuthContext } from "../interface/auth.interface";
import { AxiosError } from "axios";

export const AuthContext = createContext({} as IAuthContext) 

interface IAuthProviderProps {
 children: ReactNode
} 

export function AuthProvider({children}: IAuthProviderProps ) {
  const [user, setUser] = useState<IUser | undefined>();

 async function logIn(email: string, password: string): Promise<IUser | undefined> {
  

    try{
      const response = await logInApi({email, password}) 
      // passar setUser(response.user)

      if (!response) {
        toast.error("usuario ou senha invalido")
      }
      // setUser({})
      console.log(response, "response")

      // colocar um toast de sucesso, chamar o Router, router.push(/initial) // useffect no contexto 
      return response
    } catch (error){
      const err = error as AxiosError;
      toast.error(err.message || "Ops, Algo deu errado!")
    }
  }

  return (
    <AuthContext.Provider value={{logIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)