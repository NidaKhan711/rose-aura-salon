"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") {
      router.push("/admin");
    }
  }, [router]);

  const handleLogin = () => {
    setLoading(true);
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("auth", "true");
      localStorage.setItem("adminName", "Admin Rose");
      router.push("/admin");
    } else {
      alert("Invalid credentials! Use: admin@gmail.com / admin123");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-accent">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Rose Aura</h1>
          <p className="text-gray-500 mt-2">Admin Portal</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="admin@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="••••••"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-secondary transition duration-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400 border-t border-accent pt-4">
          <p>Demo Credentials:</p>
          <p className="font-mono">admin@gmail.com / admin123</p>
        </div>
      </div>
    </div>
  );
}