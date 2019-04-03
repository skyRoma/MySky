const winston = require('../config/winston');
const httpCodes = require('../config/httpCodes');
const { NotFound } = require('../errors');
const env = process.env.NODE_ENV || 'development';

function handleError(error, req, res, next) {
  if (!error) {
    next();
  }

  let errorStatusCode = httpCodes.INTERNAL_SERVER_ERROR;

  const errorObj = {
    message: 'Internal Server Error',
  };

  if (env === 'development') {
    errorObj.message = error.message;
    errorObj.stack = error.stack;
  }

  if (error instanceof NotFound) {
    errorStatusCode = httpCodes.NOT_FOUND;
    errorObj.message = 'Not Found';
  }

  if (error.status === httpCodes.BAD_REQUEST) {
    errorStatusCode = httpCodes.BAD_REQUEST;
    errorObj.message = error.message;
  }

  if (errorStatusCode === httpCodes.INTERNAL_SERVER_ERROR) {
    winston.error(error);
  }

  res.status(errorStatusCode).send(errorObj);
}

// TODO: don't forget about removing Promise.resolve()
function handleSuccess(actionFn) {
  return (req, res, next) =>
    actionFn(req, res)
      .then(actionResult => {
        let successStatusCode = httpCodes.OK;

        if (req.method === 'GET' && !actionResult) {
          throw new NotFound();
        }

        const resultObj = {
          result: actionResult,
        };

        if (req.method === 'DELETE' || req.method === 'PUT') {
          successStatusCode = httpCodes.NO_CONTENT;
          resultObj.result = {};
        }
        return res.status(successStatusCode).send(resultObj);
      })
      .catch(next);
}

module.exports = {
  handleError,
  handleSuccess,
};
