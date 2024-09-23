import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const LoginPage = lazy(()=> import('../Pages/LoginPage'))
const DashBoardPage = lazy(()=> import('../Pages/DashboardPage'))
const AdminPage = lazy(()=> import('../Pages/AdminPage'))
const RegisterPage = lazy(()=> import('../Pages/RegisterPage'))


const router = createBrowserRouter([
  {path: '/', element: <DashBoardPage/>},
  {path: '/login', element: <LoginPage/>},
  {path: '/admin', element: <AdminPage />},
  {path: '/register', element: <RegisterPage />},

]);

export default function Router(){
  return <RouterProvider router={router}/>
}