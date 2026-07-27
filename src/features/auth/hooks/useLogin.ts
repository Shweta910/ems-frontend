import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { login } from "@/api/auth";
import { loginSuccess } from "@/store/slices/authSlice";

interface ErrorResponse {
  success: boolean;
  message: string;
}

export function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,

    onSuccess: (response) => {
      const { user, accessToken } = response.data;

      dispatch(
        loginSuccess({
          user,
          accessToken,
        }),
      );

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success(response.message);

      navigate("/dashboard");
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data?.message ?? "Invalid email or password");
    },
  });
}
