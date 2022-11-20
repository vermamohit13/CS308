const router = require("express").Router();
const {
    login,
    register,
    logout,
} = require("../controllers/userController")

router.post("/login", login);
router.post("/register", register);
router.get("/logout/:id", logOut);

module.exports = router;
