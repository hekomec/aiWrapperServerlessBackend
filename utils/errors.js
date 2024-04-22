module.exports = {
  400: (msg) => ({
    statusCode: 400,
    body: JSON.stringify(msg),
  }),
  401: (msg) => ({
    statusCode: 401,
    body: JSON.stringify(msg),
  }),
  403: (msg) => ({
    statusCode: 403,
    body: JSON.stringify(msg),
  }),
  404: (msg) => ({
    statusCode: 404,
    body: JSON.stringify(msg),
  }),
  500: () => ({
    statusCode: 500,
    body: JSON.stringify({
      error: "Unexpected error",
    }),
  }),
  501: () => ({
    statusCode: 501,
    body: JSON.stringify({
      error: "Not yet implemented",
    }),
  }),
};
