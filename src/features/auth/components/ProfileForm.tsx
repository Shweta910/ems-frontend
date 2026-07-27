import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { RootState } from "@/store";
import { setUser } from "@/store/slices/authSlice";

import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";

import {
  updateProfileSchema,
  type UpdateProfileFormValues,
} from "../schemas/updateProfileSchema";

import useUpdateProfile from "../hooks/useUpdateProfile";

export default function ProfileForm() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateProfileSchema),

    mode: "all",
    reValidateMode: "onChange",

    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      avatar: "",
      dateOfBirth: "",
    },
  });

  const { mutate, isPending } = useUpdateProfile(setError);

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
        phone: user.phone ?? "",
        avatar: user.avatar ?? "",
        dateOfBirth: user.dateOfBirth?.split("T")[0] ?? "",
      });
    }
  }, [user, reset]);

  const onSubmit = (values: UpdateProfileFormValues) => {
    mutate(values, {
      onSuccess: (response) => {
        dispatch(setUser(response.data.user));
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput
          label="First Name"
          {...register("firstName")}
          error={errors.firstName?.message}
        />

        <FormInput
          label="Last Name"
          {...register("lastName")}
          error={errors.lastName?.message}
        />

        <FormInput
          label="Phone"
          {...register("phone")}
          error={errors.phone?.message}
        />

        <FormInput
          label="Date of Birth"
          type="date"
          {...register("dateOfBirth")}
          error={errors.dateOfBirth?.message}
        />

        <div className="md:col-span-2">
          <FormInput
            label="Avatar URL"
            {...register("avatar")}
            error={errors.avatar?.message}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormInput label="Email" value={user?.email ?? ""} readOnly />

        <FormInput label="Role" value={user?.role ?? ""} readOnly />
      </div>

      {/* <div className="rounded-lg bg-slate-100 p-4">
        <p className="text-sm text-gray-600">Account Created</p>

        <p className="font-medium">
          {user?.createdAt
            ? new Date(user.createdAt).toLocaleDateString()
            : "-"}
        </p>
      </div> */}

      <div className="flex justify-end">
        <SubmitButton loading={isPending} disabled={!isDirty || !isValid}>
          Save Changes
        </SubmitButton>
      </div>
    </form>
  );
}
