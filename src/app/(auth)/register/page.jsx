"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { name, photoURL, email, password, acceptTerms } = data;

    // console.log(name, photoURL, email, password, acceptTerms);
    console.log(data);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-[85vh] bg-slate-100 rounded-lg">
      <div className="bg-base-100 p-10 rounded-lg w-[33%]">
        <h2 className="text-2xl text-center font-bold">
          Register your account
        </h2>

        <hr className="my-5 border border-gray-300" />

        <form onSubmit={handleSubmit(handleLogin)}>
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

          <button className="btn btn-neutral w-full mt-5 p-5">Login</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
