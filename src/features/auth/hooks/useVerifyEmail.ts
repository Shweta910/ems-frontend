import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { verifyEmail } from "@/api/auth";

interface ErrorResponse {
  message: string;
}

export function useVerifyEmail() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: verifyEmail,

    onSuccess: (response) => {
      toast.success(response.message);

      setTimeout(() => {
        navigate("/login", {
          replace: true,
        });
      }, 1500);
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message ?? "Verification failed.");
    },
  });
}
