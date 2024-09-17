import ErrorResponse from "../Middleware/ErrorResponse.js";
import UserModel from "../Model/UserModel.js";

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
    await UserModel.create({
       email : email,
       password : passsword
    })

    // ⁡⁢⁢⁢Response⁡ // 
    res.status(201).send({
      success : true,
      message : "User Ragistered Succefully"
    })


  } catch (error) {
    console.log(error);
    next(new ErrorResponse(504, error.message));
  }
};
// ⁡⁣⁢⁡⁣⁢⁣-----------------⁡ # ⁡⁢⁣⁣End Ragister Section⁡ # ⁡⁣⁢⁣--------------------⁡ //
