import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { changePassword } from "@/api/auth";

interface ErrorResponse {
  message: string;
}

export function useChangePassword() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: changePassword,

    onSuccess: (response) => {
      toast.success(response.message);

      setTimeout(() => {
        navigate("/profile", {
          replace: true,
        });
      }, 1500); // Allows the user to read the success toast
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message ?? "Unable to change password.");
    },
  });
}
