export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  avatar: string | null;
  dateOfBirth: string | null;
  role: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta: null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginData {
  user: User;
  accessToken: string;
}

export type LoginResponse = ApiResponse<LoginData>;

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
}

export interface RegisterData {
  user: User;
}

export type RegisterResponse = ApiResponse<RegisterData>;

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
