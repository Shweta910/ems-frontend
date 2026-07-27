import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { resetPassword } from "@/api/auth";

interface ErrorResponse {
  message: string;
}

export function useResetPassword() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: resetPassword,

    onSuccess: (response) => {
      toast.success(response.message);

      navigate("/login", {
        replace: true,
      });
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message ?? "Unable to reset password.");
    },
  });
}
