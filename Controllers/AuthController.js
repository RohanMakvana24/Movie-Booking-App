import ErrorResponse from "../Middleware/ErrorResponse.js";
import UserModel from "../Model/UserModel.js";

/*    
⁡⁣⁢⁣Desc⁡   : ⁡⁣⁣⁢Ragister User⁡
⁡⁣⁢⁣Route⁡  : ⁡⁣⁣⁢POST /api/v1/auth⁡
⁡⁣⁢⁣Access⁡ : ⁡⁣⁣⁢Public⁡
*/
export const RagisterUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorResponse(400, "All Field are required"));
    }

    // ⁡⁢⁢⁢Check if Email Already Ragistered⁡ //
    const User = await UserModel.findOne({ email: email });
    if (User) {
      return next(
        new ErrorResponse(400, "Email is already ragistered try another")
      );
    }

    // ⁡⁢⁢⁢Store⁡ //
    const newUser = await UserModel.create({
      email: email,
      password: password,
    });

    // ⁡⁢⁢⁢Response⁡ //
    res.status(201).send({
      success: true,
      message: "User Ragistered Succefully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    next(new ErrorResponse(504, error.message));
  }
};
// ⁡⁣⁢⁡⁣⁢⁣-----------------⁡ # ⁡⁢⁣⁣End Ragister Section⁡ # ⁡⁣⁢⁣--------------------⁡ //
