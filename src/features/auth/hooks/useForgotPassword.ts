import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { forgotPassword } from "@/api/auth";

interface ErrorResponse {
  message: string;
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: forgotPassword,

    onSuccess: (response) => {
      toast.success(response.message);

      console.log(response.data.resetLink);
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message ?? "Something went wrong");
    },
  });
}
