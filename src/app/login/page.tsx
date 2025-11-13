"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [formState, setFormState] = useState<"signup" | "signin">("signin");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen p-4  flex items-center justify-center bg-[#896790]px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-[#E6E8D2] rounded-3xl shadow-xl overflow-hidden">

        {/* Left Section */}
        <div className="p-10 flex flex-col justify-center">
          <Image src="/wellnestlogo.svg" width="100" height="100" alt="logo" />

          <h1 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
            {formState === "signin" ? "Welcome back" : "Create an account"}
          </h1>

          <p className="text-gray-600 mt-3">
            {formState === "signin"
              ? "New here?"
              : "Already have an account?"}
            <button
              onClick={() =>
                setFormState(formState === "signin" ? "signup" : "signin")
              }
              className="md:ml-2 text-[#896790] cursor-pointer font-semibold hover:underline"
            >
              {formState === "signin" ? "Sign up" : "Sign in"}
            </button>
          </p>

          {/* FORM */}
          <div className="mt-10 space-y-5">

            {formState === "signup" && (
              <div>
                <label className="font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full mt-1 text-black bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none transition"
                />
              </div>
            )}

            <div>
              <label className="font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 text-black bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none transition"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Password</label>
              <div className="flex items-center border border-gray-300 bg-gray-50 rounded-xl px-4 py-3 mt-1 focus-within:ring-2 focus-within:ring-teal-500">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="flex-1 bg-transparent outline-none text-black"
                />
                <button onClick={() => setShowPassword(!showPassword)}>
                  <Image
                    src={showPassword ? "/close_eye.svg" : "/open_eye.svg"}
                    width={25}
                    height={25}
                    alt="toggle password visibility"
                  />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full cursor-pointer bg-[#896790] hover:bg-[#ae9ab3] text-white font-semibold rounded-xl py-3 mt-4 transition">
              {formState === "signin" ? "Sign In" : "Sign Up"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-2">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Google Button */}
            <button
              onClick={() =>
                signIn()
              }
              className="w-full border text-black cursor-pointer border-gray-300 bg-slate-100 hover:bg-gray-100 rounded-xl py-3 font-medium flex items-center justify-center gap-3 transition"
            >
              <Image src="/google.svg" width={25} height={25} alt="Google" />
              {formState === "signin" ? "Continue with Google" : "Sign up with Google"}
            </button>
          </div>
        </div>

        {/* Right Section: Illustration */}
        <div className="hidden md:flex bg-[#E6E8D2] relative">
          <Image
            src="/login-intro-2.png"
            alt="welcome illustration"
            fill
            className="object-contain  p-8 rounded-3xl"
          />

          <div className="absolute top-10 left-10 text-[#896790] font-semibold text-3xl drop-shadow">
            <p>Get started</p>
            <p>right now.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
