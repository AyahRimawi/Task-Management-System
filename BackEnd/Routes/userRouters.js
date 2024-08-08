
const express = require("express");
// هي خاصية مدمجة في مكتبة express ومجرد ما جبتها عندي صار الوقت اعملها exports لأنها عبارة coustum module
const router = express.Router();

// بتذكر لما شرحت ال module وحكيت ممكن اعمل وحدة خاصة في بس بعطيها مسار ثابت وهاد الي صار هون 
// عملت module خاصة في واعطيتها path واضح وصريح وهلأ داخل هاد ال module رح تلاقي اني عامل الها exports
const userController = require("../Controllers/userController");

// نفس الفكرة بعمل module خاصة في لل auth
// const auth = require("../middlewares/auth");

// هلأ انا استخدمت post ل data بكل بساطة حسب الطريقة الي انا الي طلبت منها بال front يجيب ال data
// المسار الي اعطيته بال front هون حددته بدقة 
//هون بحكيله داخل ال userController روح على function الي هو اسمه register 
router.post("/register", userController.register);

router.post("/login", userController.login);

// router.post("/view", auth, userController.view);

module.exports = router;
