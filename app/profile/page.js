"use client";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="text-center mt-20">Loading...</p>;
  if (!session) return <p className="text-center mt-20">Please log in to view your profile.</p>;

  const user = session.user;

  return (
    <div className="bg-[#F0F1E7] min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center text-[#73A40D] mb-10">
          My Profile
        </h2>

        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 relative">
            <img
              src={user.image || "/default-avatar.png"}
              alt="Profile picture"

              className="rounded-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h3>
            <p className="text-gray-600">{user.email}</p>

            <div className="mt-6">
              <Link href="/profile/edit">
                <button className="px-5 py-2 rounded-full bg-[#94c13d] text-white hover:bg-[#7ca326] transition">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h4 className="text-xl font-semibold mb-4 text-gray-800">
            My Donations / Causes
          </h4>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-600">You haven’t made any donations yet.</p>
            {/* Replace this with a dynamic list of donations if available */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
