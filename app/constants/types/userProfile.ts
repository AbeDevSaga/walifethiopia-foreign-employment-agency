import ProfileImage from "@/public/profiles/profile 1.jpg";
import { TUser } from "../type";

export const profile: TUser = {
    name: "Amanuel Daniel",
    role: "admin",
    profileImage: ProfileImage,
    email: "admin@gmail.com",
    phone: "0919755719",
    password: "12345678",
    createdAt: new Date("2023-01-01T00:00:00Z"),
    updatedAt: new Date("2023-01-01T00:00:00Z"),
};