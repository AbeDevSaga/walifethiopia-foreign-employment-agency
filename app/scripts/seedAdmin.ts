// scripts/seedAdmin.ts
import dbConnect from '@/app/lib/db';
import User from '@/app/models/user';
import bcrypt from 'bcryptjs';

async function seedAdmin() {
  try {
    await dbConnect();

    // Admin user data
    const adminData = {
      name: 'Admin User',
      email: 'admin@walifethiopia.com',
      password: 'admin123', // In production, use a more secure password
      role: 'admin' as const,
    };

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminData.email });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Hash the password
    adminData.password = await bcrypt.hash(adminData.password, 12);

    // Create the admin user
    const admin = new User(adminData);
    await admin.save();

    console.log('Admin user created successfully:', {
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    });
  } catch (error) {
    console.error('Error seeding admin:', error);
  } finally {
    process.exit(0);
  }
}

seedAdmin();