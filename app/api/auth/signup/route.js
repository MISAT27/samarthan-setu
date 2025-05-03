import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { name, email, password } = await req.json();
  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: "User exists" }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return new Response(JSON.stringify({ message: "User created" }), { status: 201 });
}
