"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  background-color: transparent;
`;
export default function RegisterPage() {
  const [full_name, setFullName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ full_name, phone_number, email, password }),
    });

    if (res.ok) {
      router.push("/login"); // Redirect after successful registration
    } else {
      const data = await res.json();
      setError(data.error);
    }
  };
  console.log(error);
  return (
    <div className=" bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 h-screen flex items-center justify-center">
        <div className=" sm:w-[450px] w-full flex flex-col items-center justify-center bg-white shadow p-5 rounded-lg">
          <h2 className=" text-2xl text-primary font-medium mb-3">Register</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form
            onSubmit={handleRegister}
            className=" flex flex-col gap-3 w-full"
          >
            <Input
              type="text"
              placeholder="full name"
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className=" bg-primary p-2.5 rounded text-white w-full  hover:bg-primary/90"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div className="flex  items-center justify-center gap-2 mt-3 ">
            <p>Already have an account?</p>
            <Link href="/login" className="text-primary">
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
