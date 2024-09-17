import ErrorResponse from "../Middleware/ErrorResponse.js";
const ValidateBody = (schema) => {
  function func(req, res, next) {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(new ErrorResponse(400, error.message));
    }
    next();
  }
  return func;
};

export default ValidateBody;
