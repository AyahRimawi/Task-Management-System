// سيرفر خاص في ربطته مع ال front
// const express = require("express");
// const pg = require("pg");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// require("dotenv").config();

// const app = express();

// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// const PORT = 5000;
// const DATABASE = process.env.DATABASE;
// const client = new pg.Client(DATABASE);

// client.connect().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is Running on port ${PORT}`);
//   });
// });

// // تقديم ملفات الواجهة الأمامية من مجلد `dist`
// app.use(express.static(path.join(__dirname, "../frontend/dist")));

// // تقديم ملف index.html لجميع الطلبات
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
// });

// app.post("/sendData", (req, res) => {
//   let data = req.body.test;
//   let numbur = req.body.numbur;
//   let sqlSend = "insert into test (id , name) values ($1 , $2)";
//   let dataSql = [numbur, data];

//   client.query(sqlSend, dataSql).then(() => {
//     console.log("Data sended");
//   });
// });

// const express = require("express");
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");

// const app = express();

// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

// const JWT_SECRET = "this is jsonwebtoken secret from my app";
// app.get("/", (req, res, next) => {
//   let token = jwt.sign(
//     {
//       name: "aya",
//       age: 27,
//     },
//     JWT_SECRET,
//     {
//       expiresIn: "1h",
//     }
//     );
//     res.json({
//         token: token
//     })
// });

// app.post("/", (req, res, next) => {
//     let token = req.header('Authorization')
//     console.log(token);
    
//     jwt.verify(token, JWT_SECRET);
// });

// app.listen(5000, () => {
//   console.log(`Server is Running`);
// });
