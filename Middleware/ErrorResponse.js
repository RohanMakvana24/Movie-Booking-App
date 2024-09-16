const ErrorResponse = async (status, message) => {
  try {
    const error = new Error(message);
    error.status = status;
    return error;
  } catch (error) {
    console.log(`Error in Custome Error : `, error);
    throw error;
  }
};

export default ErrorResponse;
