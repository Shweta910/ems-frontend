import { createBrowserRouter } from "react-router-dom";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";
import VerifyEmailPage from "@/features/auth/pages/VerifyEmailPage";
import SendVerificationEmailPage from "@/features/auth/pages/SendVerificationEmailPage";
import ProfilePage from "@/features/auth/pages/ProfilePage";
import ChangePasswordPage from "@/features/auth/pages/ChangePasswordPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },

  {
    element: <ProtectedRoute />,

    children: [
      {
        element: <DashboardLayout />,

        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/change-password",
            element: <ChangePasswordPage />,
          },
          {
            path: "/verify-email-request",
            element: <SendVerificationEmailPage />,
          },
          {
            path: "/verify-email",
            element: <VerifyEmailPage />,
          },
        ],
      },
    ],
  },
]);
