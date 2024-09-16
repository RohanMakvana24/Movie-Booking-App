import ErrorResponse from "./ErrorResponse.js";

const HandleGlobalError = async (err, req, res, next) => {
  console.log(err);
  // ⁡⁢⁣⁢* Mongoose Bad Object Id *⁡⁡ //
  if (err.name == "CastError") {
    const Message = "Resource Not Found";
    return next(new ErrorResponse(500, Message));
  }

  // ⁡⁢⁣⁡⁢⁣⁢* Mongoose Dublicate Keys *⁡⁡ //
  if (err.code == 11000) {
    const Message = "Dublicate Field Value Entered";
    return next(new ErrorResponse(500, Message));
  }

  // ⁡⁢⁣⁢* Mongoose Validation Error *⁡⁡⁡ //
  if (err.name == "ValidationError") {
    let Messsages = [];
    Object.values(err.errors).forEach((er) => {
      Messsages.push({
        field: er.properties.path,
        message: er.message,
      });
    });
    return next(new ErrorResponse(500, Messsages));
  }

  res.status(500).json({
    success: false,
    message: "Somenthing Went Wrong",
  });
};

export default HandleGlobalError;
