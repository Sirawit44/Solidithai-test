import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const LoginPage = lazy(()=> import('../Pages/LoginPage'))
const DashBoardPage = lazy(()=> import('../Pages/DashboardPage'))

const router = createBrowserRouter([
  {path: '/', element: <DashBoardPage/>},
  {path: '/login', element: <LoginPage/>}
]);

export default function Router(){
  return <RouterProvider router={router}/>
}