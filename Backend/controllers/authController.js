// controllers/authController.js (ESM)
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "60d" });
};

// @desc Register new user
export const register = async (req, res) => {
  try {
    // ✅ FIX: Destructure the 'resume' field from req.body
    const { name, email, password, avatar, role, resume } = req.body; 
    
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // The 'resume' variable is now correctly defined here
    const user = await User.create({ name, email, password, role, avatar, resume });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role,


      token: generateToken(user._id),
      companyName: user.companyName || '',
      companyDescription: user.companyDescription || '',
      companyLogo: user.companyLogo || '',
      resume: user.resume || '',
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
      avatar: user.avatar || '',
      companyName: user.companyName || '',
      companyDescription: user.companyDescription || '',
      companyLogo: user.companyLogo || '',
      resume: user.resume || '',
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get logged-in user
export const getMe = async (req, res) => {
  res.json(req.user);
};