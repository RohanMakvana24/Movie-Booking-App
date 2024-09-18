import express from "express";
import { LoginSchema, RagisterSchema } from "../validation/auth/UserValidation.js";
import { RagisterUser } from "../Controllers/AuthController.js";
import ValidateBody from "../decoration/validateBody.js";
const AuthRoute = express.Router();

// GET : ⁡⁢⁣⁣Ragister Page⁡ 🎯 //
AuthRoute.get("/ragister-page", (req, res) => {
  res.render("index");
});
// P͟O͟S͟T : ⁡⁢⁣⁣Ragister API⁡ 🎯 //
AuthRoute.post("/ragister", ValidateBody(RagisterSchema), RagisterUser);

// POST : ⁡⁢⁣⁣Login API⁡ 🐱‍🏍 //
AuthRoute.post("/login" , ValidateBody(LoginSchema) )

export default AuthRoute;
