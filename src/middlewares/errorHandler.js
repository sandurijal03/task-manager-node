import { CustomAPIError } from '../errors/customError';

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: `Something went wrong` });
};

export default errorHandler;
