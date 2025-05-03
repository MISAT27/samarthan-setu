"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function AddNGOPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    focusArea: "",
    summary: "",
    darpanId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted NGO Data:", formData);
    try {
      const res = await fetch("/api/add-ngo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert(data.message);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          focusArea: "",
          summary: "",
          darpanId: "",
        });
        setStep(1); // Go back to Step 1
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
    // Send data to backend here
  };

  return (
    <div className="bg-[#F0F1E7] min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#73A40D]">
          Add a New NGO
        </h2>

        {/* Progress Bar */}
        <div className="relative w-full mb-8">
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r from-[#73A40D] to-[#94c13d] transition-all duration-300`}
              style={{ width: step === 1 ? "50%" : "100%" }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2 px-1">
            <span className={step === 1 ? "font-semibold text-[#73A40D]" : ""}>Step 1</span>
            <span className={step === 2 ? "font-semibold text-[#73A40D]" : ""}>Step 2</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">NGO Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94c13d]"
                    placeholder="Enter NGO Name"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Contact Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94c13d]"
                    placeholder="Enter Email Address"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Contact Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94c13d]"
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-3 rounded-full bg-[#94c13d] text-white font-semibold hover:bg-[#7ca326] transition"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94c13d]"
                    placeholder="Enter City, State"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Focused Area</label>
                  <select
                    name="focusArea"
                    value={formData.focusArea}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94c13d]"
                  >
                    <option value="">Select Focus Area</option>
                    <option value="Food">Food</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Women Empowerment">Women Empowerment</option>
                    <option value="Environment">Environment</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Summary</label>
                  <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94c13d]"
                    rows={4}
                    placeholder="Briefly describe the NGO's mission..."
                  ></textarea>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Darpan ID</label>
                  <input
                    type="text"
                    name="darpanId"
                    value={formData.darpanId}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#94c13d]"
                    placeholder="Enter Darpan Registration ID"
                  />
                </div>
                
                <div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-lime-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-lime-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept Terms and Conditions</label>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-8 py-3 rounded-full border border-[#94c13d] text-[#94c13d] font-semibold hover:bg-[#94c13d] hover:text-white transition"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-8 py-3 rounded-full bg-[#94c13d] text-white font-semibold hover:bg-[#7ca326] transition"
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
}
