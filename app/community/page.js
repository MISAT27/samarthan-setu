import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NGO } from "@/models/NGO";
import dbConnect from "@/lib/mongodb"; 

export const metadata = {
  title: "Samarthan Setu - Community",
  description: "Discover NGOs and help support communities in need",
};

// 📦 This is a Server Component
export default async function Community() {
  await dbConnect();

  // Fetch all NGOs from MongoDB
  const ngos = await NGO.find({}).lean(); // 🧠 lean() makes it plain JSON objects

  return (
    <div className="bg-[#F0F1E7] min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#73A40D]">
          NGOs Needing Your Support
        </h2>

        <Link href="/add-ngo">Add NGO</Link>

        {ngos.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No NGOs found. Please check back later.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ngos.map((ngo) => (
              <div
                key={ngo._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                {/* If NGO has an image, otherwise fallback */}
                <Image
                  src={ngo.image || "/project/images/ngo-default.jpg"}
                  alt={ngo.name}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{ngo.name}</h3>
                  <p className="text-gray-700 mb-4">{ngo.summary}</p>

                  {/* Optional: If you have goal field, otherwise remove */}
                  {/* {ngo.goal && (
                    <div className="text-[#94c13d] font-bold mb-4">
                      Goal: ₹{ngo.goal}
                    </div>
                  )} */}

                  <Link href={`/donate/${ngo._id}`}>
                    <button className="px-6 py-2 bg-[#94c13d] text-white font-semibold rounded-full hover:bg-[#7ca326] transition duration-300">
                      Donate Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
