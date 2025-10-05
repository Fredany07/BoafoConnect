// data.js
import {
  Search,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
  Briefcase,
  Building2,
  LayoutDashboard,
  Plus,
  BookOpen,
  Eye,
  Video,
} from "lucide-react";

// ---------------------------
// Job Seeker Features (7 items)
// ---------------------------
export const jobSeekerFeatures = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description:
      "AI-powered algorithm matches you with relevant opportunities based on your skills and preferences.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description:
      "Create professional resumes with our intuitive builder and templates designed by experts.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "Connect directly with hiring managers and recruiters through our secure messaging platform.",
  },
  {
    icon: Award,
    title: "Skill Assessment",
    description:
      "Showcase your abilities with verified skill tests and earn badges that employers trust.",
  },
  {
    icon: Clock,
    title: "Application Tracking",
    description:
      "Monitor all your job applications in one place and stay updated on their status.",
  },
  {
    icon: BarChart3,
    title: "Career Insights",
    description:
      "Track your application progress, see which skills are in demand, and get tips to improve your profile.",
  },
  {
    icon: Users,
    title: "Job Alerts & Notifications",
    description:
      "Get instant notifications about new jobs that match your preferences so you never miss an opportunity.",
  },
];

// ---------------------------
// Employer Features (7 items)
// ---------------------------
export const employerFeatures = [
  {
    icon: Users,
    title: "Talent Pool Access",
    description:
      "Access our vast database of pre-screened candidates and find the perfect fit for your team.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track your hiring performance with detailed analytics and insights on candidate engagement.",
  },
  {
    icon: Shield,
    title: "Verified Candidates",
    description:
      "All candidates undergo background verification to ensure you're hiring trustworthy professionals.",
  },
  {
    icon: Clock,
    title: "Quick Hiring",
    description:
      "Streamlined hiring process reduces time-to-hire by 60% with automated screening tools.",
  },
  {
    icon: FileText,
    title: "Custom Job Posts",
    description:
      "Create job postings tailored to your company’s needs with templates and recommended content.",
  },
  {
    icon: MessageSquare,
    title: "Candidate Communication",
    description:
      "Easily reach out to applicants, schedule interviews, and manage conversations within the platform.",
  },
  {
    icon: Award,
    title: "Employer Branding",
    description:
      "Showcase your company culture and attract top talent by building a strong employer profile.",
  },
];

// ---------------------------
// Helpful Resources (7 items)
// ---------------------------
export const helpfulResources = [
  {
    icon: BookOpen,
    title: "Accessibility Center",
    description:
      "Resources and tools to make your job search and hiring process more accessible for everyone.",
  },
  {
    icon: Eye,
    title: "AdChoices",
    description:
      "Understand how ads are personalized and how you can manage your ad preferences.",
  },
  {
    icon: FileText,
    title: "Resume & Cover Letter Tips",
    description:
      "Guides and templates to help job seekers craft professional resumes and cover letters.",
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description:
      "Tips, sample questions, and resources to help candidates prepare for interviews.",
  },
  {
    icon: Video,
    title: "Career Development Hub",
    description:
      "Access online courses, certifications, and tutorials to grow skills and advance careers.",
  },
  {
    icon: Users,
    title: "Hiring Best Practices",
    description:
      "Guides for employers to attract top talent, streamline recruitment, and make better hiring decisions.",
  },
  {
    icon: BarChart3,
    title: "Salary & Market Insights",
    description:
      "Reports and tools that provide insights into salary ranges, industry trends, and job market data.",
  },
];

// ---------------------------
// Navigation Menu
// ---------------------------
export const NAVIGATION_MENU = [
  { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "post-job", name: "Post Job", icon: Plus },
  { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
  { id: "company-profile", name: "Company Profile", icon: Building2 },
];

// ---------------------------
// Categories
// ---------------------------
export const CATEGORIES = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "IT & Software", label: "IT & Software" },
  { value: "Customer-service", label: "Customer Service" },
  { value: "Product", label: "Product" },
  { value: "Operations", label: "Operations" },
  { value: "Finance", label: "Finance" },
  { value: "HR", label: "Human Resources" },
  { value: "Other", label: "Other" },
];

// ---------------------------
// Job Types
// ---------------------------
export const JOB_TYPES = [
  { value: "Remote", label: "Remote" },
  { value: "Full-Time", label: "Full-Time" },
  { value: "Part-Time", label: "Part-Time" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
];

// ---------------------------
// Salary Ranges
// ---------------------------
export const SALARY_RANGES = [
  "Less than $1000",
  "$1000 - $15,000",
  "More than $15,000",
];
