// app/donate/[ngos]/page.js (or .tsx if using TypeScript)

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DonateForm from "@/components/DonateForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function DonatePage({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const { ngos } = await params;
  console.log("working ",ngos)

  return (
    <>
      <Navbar />
      <DonateForm />
      <Footer />
    </>
  );
}
