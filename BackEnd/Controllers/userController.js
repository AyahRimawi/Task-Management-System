const User = require("../Models/userModel");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// -------------------------

// const register = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     // const userExists = await User.findByEmail(email);
//     // if (userExists) {
//     //   return res.status(409).json("User already exists");
//     // }

//     const newUser = await User.createUser(name, email, password);
//     // const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: "1h" });
//     // res.status(200).json({ token });
//       res.status(200).json({ message: "User created", newUser });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json("Server error");
//   }
// };

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await User.createUser(name, email, password);
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    console.error("Registration error:", err); // تسجيل الأخطاء بالكامل
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


// const register = async (req, res) => {
//   //res.status(200).json(req.body);
//   const {name, email, password } = req.body;
//   const user = await User.createUser (name, email, password);
//   res.status(201).json({ message: "User created", user });
// };

//  const login = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findByEmail(email);
//   if (user && (await bcrypt.compare(password, user.password))) {
//     const token = jwt.sign({ id: user.id }, "wesam123456789");
//     res.json({ token });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// };

// exports.view = async (req, res) => {
//   res.status(200).json({ message: "You can see data :)" });
// };


module.exports = { register };