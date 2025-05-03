// models/NGO.js
import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  focusArea: { type: String, required: true },
  summary: { type: String, required: true },
  darpanId: { type: String, required: true },
  createdBy: { type: String, required: true }, // Save User email or ID
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

export const NGO = mongoose.models.NGO || mongoose.model("NGO", ngoSchema);
