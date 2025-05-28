// require("ts-node/register");
// require("dotenv").config({ path: ".env.local" });
// const mongoose = require("mongoose");
// const User = require("../models/user").default;

// async function seedAdmin() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);

//     const adminData = {
//       name: "Admin User",
//       email: "admin@walifethiopia.com",
//       password: "admin123",
//       role: "admin",
//     };

//     const existingAdmin = await User.findOne({ email: adminData.email });
//     if (existingAdmin) {
//       await User.deleteOne({ email: adminData.email });
//       console.log("Existing admin deleted");
//     }

//     const admin = new User(adminData);
//     await admin.save();

//     console.log("Admin created:", {
//       _id: admin._id,
//       name: admin.name,
//       email: admin.email,
//       role: admin.role,
//       createdAt: admin.createdAt,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//   } finally {
//     await mongoose.disconnect();
//     process.exit(0);
//   }
// }

// seedAdmin();
