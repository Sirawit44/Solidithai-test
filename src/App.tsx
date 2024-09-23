import AuthContextProvider from "./contexts/AuthContext"
import Router from "./routes"
import { Slide, ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <AuthContextProvider>
        <Router />
        <ToastContainer 
          position="bottom-right" 
          autoClose ={3000} 
          transition={Slide}
        />
      </AuthContextProvider>
    </>
  )
}

export default App
