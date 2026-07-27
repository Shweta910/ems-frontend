import { useQuery } from "@tanstack/react-query";

import { getProfile } from "@/api/auth";

export function useProfile(enabled: boolean) {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    enabled,

    retry: false,

    staleTime: 1000 * 60 * 10, // 10 minutes

    gcTime: 1000 * 60 * 30, // 30 minutes

    refetchOnWindowFocus: false,

    refetchOnReconnect: false,

    refetchOnMount: false,
  });
}
