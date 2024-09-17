function ErrorResponse(status, message) {
  const error = Error(message);
  error.status = status;
  return error;
}

export default ErrorResponse;
