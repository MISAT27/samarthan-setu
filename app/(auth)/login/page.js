'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InputText from '@/components/InputText';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";


export default function LoginPage() {

  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    if (res.ok) router.push("/");
    else alert("Invalid credentials");
  };

  return (
<div className="flex h-screen">
<div className="hidden sm:flex w-1/2 bg-black text-white flex-col justify-center items-start px-8 md:px-16 relative">
  <div className="absolute inset-0 bg-lime-700 opacity-60 z-0" style={{background:"url('./assets/login-img.jpg')"}}></div>
  <div className="relative z-10">
    <h1 className="text-4xl font-bold mb-2">Hi <span className="text-teal-300">THERE!</span></h1>
    <p className="text-2xl mb-4">Welcome back to our <span className="font-bold">COMMUNITY.</span></p>
    <p className="text-[#ffff00cc] text-2xl md:text-4xl mt-10">"LET’S SPREAD SOME HAPPINESS"</p>
  </div>
</div>

<div className="w-full sm:w-1/2 bg-white flex flex-col justify-center items-center px-6 sm:px-10 py-10">
  <div className="w-full max-w-md">
    <h2 className="text-3xl font-bold mb-6 relative">
      <span className="absolute -left-4 top-0 h-full border-l-4 border-red-500 mr-2"></span>
      Login
    </h2>
    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
      <InputText
        placeholder="Enter Email"
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        icon={UserIcon}
        
      />
      <InputText
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        icon={LockClosedIcon}
      />
      <button
        type="submit"
        className="mt-4 bg-gradient-to-r from-blue-600 to-green-400 text-white py-3 rounded-md font-semibold hover:shadow-md transition outline-0"
      >
        Login
      </button>
    </form>
    <p className="mt-4 text-sm">
      Don't have an account? <Link href="/signup" className="text-blue-600 font-semibold">Sign Up</Link>
    </p>
    <div className="text-center my-4 font-semibold text-gray-500">- OR -</div>
    <div className="flex justify-center gap-6 mt-2">

    <button type="button" onClick={() => signIn("google", { callbackUrl: "/" })} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-3 py-2 border border-gray-300">
            <div className="flex items-center justify-center">
              <Image src="/google_icon.png" alt="Google" width={24} height={24} className="cursor-pointer"/>
      
            <span className="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>
      {/* <Image src="instagram-icon.png" alt="Instagram" width={40} height={40} className="cursor-pointer"/> */}
    </div>
  </div>
</div>

</div>
  );
}
