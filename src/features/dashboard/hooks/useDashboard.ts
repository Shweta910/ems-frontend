import { useQuery } from "@tanstack/react-query";

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],

    queryFn: async () => ({
      totalEmployees: 124,
      activeEmployees: 118,
      totalDepartments: 8,
      pendingLeaves: 14,
    }),
  });
}
