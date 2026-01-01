"use client"

import Link from "next/link";
import { useState } from "react";
import { setToken } from "@/app/redux/slice/authSlice";
import { useDispatch } from "react-redux";

export default function Login() {

   // ✅ Add useState for email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await fetch(
        "https://farming-365-backend.onrender.com/api/user/login",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      if (data.token) {
    dispatch(setToken(data.token)); // store token globally
  }

    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong");
    }
  }

 
  
  

  return (
    <div  style={{ backgroundImage: "url('/bg_signin.jpg')" }} className="min-h-screen  flex items-center justify-center bg-cover">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md text-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Farming-365</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
             value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button onClick={handleLogin}
            type="button"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-all cursor-pointer"
          >
            Sign In
          </button>
          <p className="text-sm text-gray-600 mt-4">
            <span className="px-3 text-[18px]">Dont have an account?</span>
            <Link
              href="/signup"
              className=" inline-flex items-center rounded-md bg-green-500 px-3 py-1 text-white font-medium
               hover:bg-green-600 transition-colors duration-200"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
