import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { register } from "@/api/auth";

interface ErrorResponse {
  success: boolean;
  message: string;
}

export function useRegister() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,

    onSuccess: (response) => {
      toast.success(response.message);

      navigate("/login");
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data?.message ?? "Registration failed");
    },
  });
}
