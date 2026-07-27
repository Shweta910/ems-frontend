import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { logout, setInitialized, setUser } from "@/store/slices/authSlice";

import { useProfile } from "@/features/auth/hooks/useProfile";

export default function AuthInitializer() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("accessToken");

  const { data, isSuccess, isError, isFetched } = useProfile(!!token);

  useEffect(() => {
    if (!token) {
      dispatch(setInitialized(true));
      return;
    }

    if (isSuccess) {
      dispatch(setUser(data.data.user));
      dispatch(setInitialized(true));
    }

    if (isError) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      dispatch(logout());
      dispatch(setInitialized(true));
    }
  }, [token, isSuccess, isError, isFetched, data, dispatch]);

  return null;
}
