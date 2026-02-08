"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="font-display text-xl md:text-2xl font-bold mb-8 md:mb-12 block">
          maykar<span className="text-orange">.</span>
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">welcome back</h1>
        <p className="font-mono text-sm text-gray-500 mb-8">sign in to your account</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-mono text-sm font-bold mb-2 block">email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="font-mono text-sm font-bold mb-2 block">password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 p-4 font-mono text-sm focus:border-orange focus:outline-none transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange text-white font-mono text-sm px-6 py-4 hover:bg-[#cc3d00] transition-colors"
          >
            sign in
          </button>
        </form>

        <p className="font-mono text-sm text-gray-500 mt-6 text-center">
          don't have an account?{" "}
          <Link href="/signup" className="text-orange hover:underline">
            sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
