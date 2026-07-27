export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    PROFILE: "/auth/me",
    REFRESH: "/auth/refresh-token",

    CHANGE_PASSWORD: "/auth/change-password",
    UPDATE_PROFILE: "/auth/profile",

    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",

    SEND_VERIFICATION_EMAIL: "/auth/send-verification-email",
    VERIFY_EMAIL: "/auth/verify-email",
  },

  EMPLOYEES: {
    LIST: "/employees",
    CREATE: "/employees",
  },

  ROLES: {
    LIST: "/roles",
  },

  PERMISSIONS: {
    LIST: "/permissions",
  },
} as const;
