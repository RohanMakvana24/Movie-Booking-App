import ErrorResponse from "../Middleware/ErrorResponse";
import UserModel from "../Model/UserModel";

/*    
⁡⁣⁢⁣Desc⁡   : ⁡⁣⁣⁢Ragister User⁡
⁡⁣⁢⁣Route⁡  : ⁡⁣⁣⁢POST /api/v1/auth⁡
⁡⁣⁢⁣Access⁡ : ⁡⁣⁣⁢Public⁡
*/
export const RagisterUser = async (req, res, next) => {
  try {
    const { email, passsword } = req.body;

    if (!email || !passsword) {
      return next(new ErrorResponse(400, "All Field are required"));
    }

    // ⁡⁢⁢⁢Check if Email Already Ragistered⁡ //
    const User = await UserModel.findOne({ email: email });
    if (!User) {
      return next(
        new ErrorResponse(400, "Email is already ragistered try another")
      );
    }

    // ⁡⁢⁢⁢Store⁡ //
  } catch (error) {
    console.log(error);
    next(new ErrorResponse(504, error.message));
  }
};
// ⁡⁣⁢⁡⁣⁢⁣-----------------⁡ # ⁡⁢⁣⁣End Ragister Section⁡ # ⁡⁣⁢⁣--------------------⁡ //
