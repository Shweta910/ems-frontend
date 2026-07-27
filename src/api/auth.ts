import api from "./axios";
import { API_ENDPOINTS } from "./endpoints";

import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@/features/auth/types/auth";

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const { data } = await api.post(API_ENDPOINTS.AUTH.LOGIN, payload);
  return data;
}

export async function register(
  payload: RegisterRequest,
): Promise<RegisterResponse> {
  const { data } = await api.post(API_ENDPOINTS.AUTH.REGISTER, payload);

  return data;
}

export async function forgotPassword(email: string) {
  const { data } = await api.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, {
    email,
  });

  return data;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
}

export async function resetPassword(payload: ResetPasswordPayload) {
  const { data } = await api.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, payload);

  return data;
}

export async function sendVerificationEmail() {
  const { data } = await api.post(API_ENDPOINTS.AUTH.SEND_VERIFICATION_EMAIL);

  return data;
}

export async function verifyEmail(token: string) {
  const { data } = await api.get(
    `${API_ENDPOINTS.AUTH.VERIFY_EMAIL}?token=${encodeURIComponent(token)}`,
  );

  return data;
}

export async function getProfile() {
  const { data } = await api.get(API_ENDPOINTS.AUTH.PROFILE);

  return data;
}

export async function logout() {
  const { data } = await api.post(API_ENDPOINTS.AUTH.LOGOUT);

  return data;
}

export interface UpdateProfilePayload {
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  dateOfBirth?: string;
}

export async function updateProfile(payload: UpdateProfilePayload) {
  const { data } = await api.patch(API_ENDPOINTS.AUTH.UPDATE_PROFILE, payload);

  return data;
}

export async function changePassword(payload: ChangePasswordRequest) {
  const { data } = await api.patch(API_ENDPOINTS.AUTH.CHANGE_PASSWORD, payload);

  return data;
}
