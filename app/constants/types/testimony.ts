import profile1 from "@/public/profiles/profile 1.jpg";
import profile2 from "@/public/profiles/profile 1.jpg";
import { TTestimony } from "../type";

export const testimonyData: TTestimony[] = [
  {
    quote: "Walif Ethiopia helped me place 12 qualified nurses in Germany within 3 months. Their vetting process saves me countless hours.",
    name: "Alemayehu Kebede",
    role: "Recruitment Agent",
    company: "Global Talent Solutions",
    profileImage: profile1,
    color: "primary",
    rating: 5
  },
  {
    quote: "The training program transformed my hospitality skills. I went from unemployed to a supervisor position in Dubai within 6 months.",
    name: "Tigist Worku",
    role: "Hotel Supervisor",
    company: "Grand Hyatt Dubai",
    profileImage: profile2,
    color: "secondary",
    rating: 4
  },
  {
    quote: "As an agent, the dashboard analytics help me track candidate progress and optimize my placement strategy effectively.",
    name: "Daniel Assefa",
    role: "Senior Agent",
    company: "EthioJobs International",
    color: "neutral",
    rating: 5
  },
  // Add more testimonials as needed
];