import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { logout as logoutApi } from "@/api/auth";
import { logout } from "@/store/slices/authSlice";

export default function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutApi,

    onSuccess: (response) => {
      localStorage.removeItem("accessToken");

      dispatch(logout());

      queryClient.clear();

      toast.success(response.message);

      navigate("/login", {
        replace: true,
      });
    },

    onError: (error: unknown) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message ?? "Logout failed");
        return;
      }

      toast.error("Logout failed");
    },
  });
}
