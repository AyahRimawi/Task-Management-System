const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// -------------------------
const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received registration request:", { name, email });

  try {
    console.log("Attempting to create user");

    const userExists = await User.findByEmail(email);
    if (userExists) {
      return res.status(409).json("User already exists");
    }

    const newUser = await User.createUser(name, email, password);
    console.log("User created successfully:", newUser);

    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token, message: "User created", newUser });
    // res.status(200).json({ message: "User created", newUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
};

// const register = async (req, res) => {
//   const { name, email, password } = req.body;
//   console.log("Received registration request:", { name, email });

//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//         console.log("Attempting to create user");

//     const user = await User.createUser(name, email, password);
//         console.log("User created successfully:", user);

//     res.status(201).json({ message: "User created", user });
//   } catch (err) {
//     console.error("Registration error:", err); // تسجيل الأخطاء بالكامل
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

// const register = async (req, res) => {
//   //res.status(200).json(req.body);
//   const {name, email, password } = req.body;
//   const user = await User.createUser (name, email, password);
//   res.status(201).json({ message: "User created", user });
// };

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request with:", { email, password });

  const userValid = await User.findByEmail(email);
  console.log("User found:", userValid);

  if (userValid && (await bcrypt.compare(password, userValid.password))) {
    const token = jwt.sign({ id: userValid.id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

view = async (req, res) => {
  res.status(200).json({ message: "You can see data :)" });
};

module.exports = { register, login, view };
