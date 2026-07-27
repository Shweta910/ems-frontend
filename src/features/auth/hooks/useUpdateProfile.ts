import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { type UseFormSetError } from "react-hook-form";
import axios from "axios";

import { updateProfile } from "@/api/auth";
import { setUser } from "@/store/slices/authSlice";

import type { UpdateProfileFormValues } from "../schemas/updateProfileSchema";

export default function useUpdateProfile(
  setError: UseFormSetError<UpdateProfileFormValues>,
) {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: updateProfile,

    onSuccess: ({ data, message }) => {
      // Update Redux with the latest user
      dispatch(setUser(data.user));

      toast.success(message);
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const apiErrors = error.response?.data?.errors;

        if (Array.isArray(apiErrors)) {
          apiErrors.forEach((err: { path: string[]; message: string }) => {
            setError(err.path[0] as keyof UpdateProfileFormValues, {
              type: "server",
              message: err.message,
            });
          });

          return;
        }

        toast.error(
          error.response?.data?.message ?? "Unable to update profile.",
        );

        return;
      }

      toast.error("Something went wrong.");
    },
  });
}
