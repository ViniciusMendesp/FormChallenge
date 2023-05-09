import 'react-toastify/dist/ReactToastify.css';
import { Router } from "./Router"
import { ToastContainer } from "react-toastify"
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./context/authContext"

export function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Router/>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnHover
        />
      </AuthProvider>
    </BrowserRouter>  
  )
}


