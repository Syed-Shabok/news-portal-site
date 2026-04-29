"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleRegister = async (data) => {
    const { name, photoURL, email, password, acceptTerms } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoURL,
    });

    if (error) {
      console.log(error);
      return;
    }

    router.replace("/");

    // console.log(res, error);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-[85vh] bg-slate-100 rounded-lg">
      <div className="bg-base-100 p-10 rounded-lg w-[33%]">
        <h2 className="text-2xl text-center font-bold">
          Register your account
        </h2>

        <hr className="my-5 border border-gray-300" />

        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset my-3 h-25">
            <legend className="fieldset-legend text-lg">Your Name</legend>
            <input
              type="name"
              className="input w-full bg-gray-100 rounded-sm py-5"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-base">
                {errors.name.message}
              </span>
            )}
          </fieldset>

          <fieldset className="fieldset my-3 h-25">
            <legend className="fieldset-legend text-lg">Photo URL</legend>
            <input
              type="photoURL"
              className="input w-full bg-gray-100 rounded-sm py-5"
              placeholder="Enter your Photo URL"
              {...register("photoURL", { required: "Photo URL is required" })}
            />
            {errors.photoURL && (
              <span className="text-red-500 text-base">
                {errors.photoURL.message}
              </span>
            )}
          </fieldset>

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

          <fieldset className="fieldset relative my-3 h-25">
            <legend className="fieldset-legend text-lg">Password</legend>
            <input
              type={showPassword ? "text" : "password"}
              className="input w-full bg-gray-100 rounded-sm py-5"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-5 cursor-pointer"
            >
              {showPassword ? <LuEye size={16} /> : <LuEyeClosed size={16} />}
            </span>
            {errors.password && (
              <span className="text-red-500 text-base">
                {errors.password.message}
              </span>
            )}
          </fieldset>

          <fieldset className="fieldset bg-base-100 mt-5">
            <label className="label text-black">
              <input
                type="checkbox"
                className="checkbox"
                {...register("acceptTerms", {
                  required: "Accepting the Terms is Required",
                })}
              />
              Accept Terms & Conditions
            </label>
            {errors.acceptTerms && (
              <span className="text-red-500 text-base">
                {errors.acceptTerms.message}
              </span>
            )}
          </fieldset>

          <button className="btn btn-neutral w-full mt-5 p-5">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
