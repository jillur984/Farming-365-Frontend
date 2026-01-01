import Link from "next/link";

export default function signup() {
  return (
    <div
      style={{ backgroundImage: "url('/bg_signin.jpg')" }}
      className="min-h-screen  flex items-center justify-center bg-cover"
    >
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md text-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Farming-365
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <p className="text-sm text-gray-600 mt-4">
            <span className="px-3 text-[18px]">Already have an account?</span>
            <Link
              href="/login"
              className=" inline-flex items-center rounded-md bg-green-500 px-3 py-1.5 text-white font-medium
               hover:bg-green-600 transition-colors duration-200"
            >
              Login
            </Link>
          </p>

          <button
            type="button"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-all cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
