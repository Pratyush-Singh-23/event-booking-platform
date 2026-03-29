"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CalendarDays } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await response.json();
      
      if (!response.ok) {
        throw new Error(resData.message || "Something went wrong");
      }
      
      router.push("/login");
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] flex-col justify-center py-12 sm:px-6 lg:px-8 relative z-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <Link href="/" className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity">
          <CalendarDays className="h-10 w-10 text-white" />
          <span className="text-3xl font-bold tracking-tight text-white">EventSphere</span>
        </Link>
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Create an account
        </h2>
        <p className="mt-2 text-center text-sm text-neutral-400">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-white hover:underline transition-all">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-neutral-900/50 border border-neutral-800 px-6 py-12 shadow-2xl sm:rounded-2xl sm:px-12 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
          <form className="space-y-6" onSubmit={registerUser}>
            <Input
              label="Full Name"
              type="text"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <Input
              label="Email address"
              type="email"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <Input
              label="Password"
              type="password"
              required
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />

            {error && <div className="text-sm text-red-500 text-center bg-red-950/30 p-3 rounded-md border border-red-900">{error}</div>}

            <div>
              <Button type="submit" className="w-full text-base h-11" disabled={loading}>
                {loading ? "Creating account..." : "Sign up"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
}
