import { Suspense } from 'react';
import AuthContextProvider from "./contexts/AuthContext"
import Router from "./routes"
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "./components/common";


function App() {

  return (
    <>
      <AuthContextProvider>
        <Suspense fallback={<Spinner/>}>
          <Router />
          <ToastContainer 
            position="bottom-right" 
            autoClose ={3000} 
            transition={Slide}
            limit={1}
          />
        </Suspense>
      </AuthContextProvider>
    </>
  )
}

export default App
