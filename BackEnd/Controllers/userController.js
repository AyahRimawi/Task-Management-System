const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// -------------------------

exports.register = async (req, res) => {
  //res.status(200).json(req.body);
  const { email, password } = req.body;
  const user = await User.createUser(email, password);
  res.status(201).json({ message: "User created", user });
};

// عودة ل كود عطا ف كود عام
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id }, "wesam123456789");
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

exports.view = async (req, res) => {
  res.status(200).json({ message: "You can see data :)" });
};
