import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import NotFound from "../Pages/NotFoundPage";
import { useAuth } from "../contexts/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";

// Lazy load pages
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const DashBoardPage = lazy(() => import('../Pages/DashboardPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage'));
const DetailPage = lazy(() => import('../Pages/DetailPage'));



export default function Router() {
  const { isAuthenticated } = useAuth();

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <DashBoardPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/users/:id', 
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <DetailPage />
        </ProtectedRoute>
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
    {
      path: '*',
      element: <NotFound/>
    }
  ]);

  return <RouterProvider router={router} />;
}
