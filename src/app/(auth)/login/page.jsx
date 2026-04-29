"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    console.log(data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-[85vh] bg-slate-100 rounded-lg">
      <div className="bg-base-100 p-10 rounded-lg w-[33%]">
        <h2 className="text-2xl text-center font-bold">
          Login to your account
        </h2>

        <hr className="my-5 border border-gray-300" />

        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset my-3 h-25">
            <legend className="fieldset-legend text-lg">Email address</legend>
            <input
              type="email"
              className="input w-full bg-gray-100 rounded-sm py-5"
              placeholder="Enter your email address"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-base">
                {errors.email.message}
              </span>
            )}
          </fieldset>

          <fieldset className="fieldset my-3 h-25">
            <legend className="fieldset-legend text-lg">Password</legend>
            <input
              type="password"
              className="input w-full bg-gray-100 rounded-sm py-5"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 text-base">
                {errors.password.message}
              </span>
            )}
          </fieldset>

          <button className="btn btn-neutral w-full mt-5 p-5">Login</button>
        </form>

        <p className="mt-5 text-center">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
