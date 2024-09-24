import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
// import ProtectedRoute from "../components/protectRoute";

// Lazy load pages
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const DashBoardPage = lazy(() => import('../Pages/DashboardPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage'));

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: (

        <DashBoardPage />

    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
