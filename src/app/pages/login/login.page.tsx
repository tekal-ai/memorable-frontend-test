import { LogoUI } from "src/domain/brand/logo.ui";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { Navigate } from "react-router-dom";
import { ButtonUI } from "src/app/ui/buttons/button.ui";
import { useRequestFeature } from "src/app/features/operations/request.feature";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { toast } from "react-hot-toast";
import { LoadingPage } from "src/app/features/operations/features/loadings/pages/loading.page";

interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

const defaultValues: FormValues = {
  email: "",
  password: "",
  remember: false,
};

export default function Login() {
  const { register, handleSubmit } = useForm({ defaultValues });
  const { login, user } = useSessionFeature();
  const { sendRequest, isLoading } = useRequestFeature();

  const onSubmit = useCallback(
    async ({ email, password }: FormValues) => {
      console.log({email, password})
      await sendRequest({
        request: login({ email, password }),
        id: "login",
        onError: (errors) => {
          const currentError = errors[0];
          if (!currentError) return;
          if (currentError.message === "CONTRACT_NOT_VALID") {
            toast.error("Contract expired");
          }
          if (currentError.extensions?.code === "TOO_MANY_REQUEST") {
            toast.error(
              `Too many failed login attempts. Please try again in ${currentError.extensions?.timeWindow} minutes`,
            );
          }
          if (currentError.extensions?.code === "TOO_MANY_REQUEST") {
            toast.error(
              `Too many failed login attempts. Please try again in ${currentError.extensions?.timeWindow} minutes`,
            );
          }
          if (currentError.extensions?.code === "UNAUTHORIZED") {
            toast.error("Wrong username or password");
          }
          toast.error(`Server error: "${currentError?.message}"`, {
            id: "server-error",
            duration: 4000,
          });
        },
      });
    },
    [login],
  );

  if (user === undefined) {
    return <LoadingPage />;
  }

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="h-screen">
      <div className="animFadeIn flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <LogoUI style={{ height: "34px" }} />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    {...register("email", { required: true })}
                    className="w-full"
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSubmit(onSubmit)();
                      }
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    {...register("password", { required: true })}
                    className="w-full"
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSubmit(onSubmit)();
                      }
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                  <Checkbox
                    {...register("remember")}
                    id="remember"
                    onChange={(e) => setValue("remember", e.target.checked)}
                  >
                    Remember me
                  </Checkbox>
                </div> */}

                <div className="text-sm">
                  <a
                    href="/login"
                    className="text-brand-600 hover:text-brand-500 hidden font-medium"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <ButtonUI
                  isLoading={isLoading("login")}
                  block={true}
                  onClick={handleSubmit(onSubmit)}
                >
                  Sign in
                </ButtonUI>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
