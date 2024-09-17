import express from "express";
import { RagisterSchema } from "../validation/auth/UserValidation.js";
import { RagisterUser } from "../Controllers/AuthController.js";
import ValidateBody from "../decoration/validateBody.js";
const AuthRoute = express.Router();

// GET : ⁡⁢⁣⁣Ragister Page⁡ 🎯 //
AuthRoute.get("/ragister-page", (req, res) => {
  res.render("index");
});
// P͟O͟S͟T : ⁡⁢⁣⁣Ragister API⁡ 🎯 //
AuthRoute.post("/ragister", ValidateBody(RagisterSchema), RagisterUser);

export default AuthRoute;
