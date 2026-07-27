import { Link } from "react-router-dom";

import ProfileForm from "../components/ProfileForm";
import { useProfile } from "../hooks/useProfile";

export default function ProfilePage() {
  const { data, isLoading } = useProfile(true);

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        Loading profile...
      </div>
    );
  }

  const user = data?.data.user;

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>

        <p className="mt-1 text-gray-500">
          Manage your personal information and account settings.
        </p>
      </div>

      {/* Profile Header */}
      <div className="rounded-xl bg-white p-6 shadow">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <img
            src={
              user?.avatar ||
              `https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}`
            }
            alt="Avatar"
            className="h-24 w-24 rounded-full border object-cover"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold">
              {user?.firstName} {user?.lastName}
            </h2>

            <p className="mt-1 text-gray-500">{user?.email}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                {user?.role}
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    user?.isVerified
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                  {user?.isVerified ? "Verified" : "Email Not Verified"}
                </span>
              </div>
            </div>
          </div>

          <Link
            to="/change-password"
            className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700">
            Change Password
          </Link>
        </div>
        {!user?.isVerified && (
          <div className="mt-5 rounded-lg border border-yellow-300 bg-yellow-50 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="font-semibold text-yellow-800">
                  Verify your email address
                </h4>

                <p className="text-sm text-yellow-700">
                  Your email address is not verified. Some features may remain
                  unavailable until verification is complete.
                </p>
              </div>

              <Link
                to="/verify-email-request"
                className="rounded-lg bg-yellow-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-yellow-600">
                Send Verification Email
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Personal Information */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-6 text-xl font-semibold">Personal Information</h3>

        <ProfileForm />
      </div>

      {/* Account Information */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h3 className="mb-4 text-xl font-semibold">Account Information</h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Account Created</p>

            <p className="font-medium">
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email Status</p>

            <p className="font-medium">
              {user.isVerified ? "Verified" : "Not Verified"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
