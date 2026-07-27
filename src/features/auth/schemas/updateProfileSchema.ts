import { z } from "zod";

export const updateProfileSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters."),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters."),

  phone: z.string().trim().min(10, "Phone number is required."),

  avatar: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string().url("Avatar must be a valid URL.").optional(),
  ),

  dateOfBirth: z.string().min(1, "Date of birth is required."),
});

export type UpdateProfileFormValues = z.infer<typeof updateProfileSchema>;
