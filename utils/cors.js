const cors = (body) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, x-amz-date, x-amz-security-token, x-amz-user-agent, x-api-key, access-control-allow-origin, access-control-allow-methods",
    "Access-Control-Allow-Methods": "OPTIONS, GET, PUT, POST, DELETE",
  };
  if (body && body.statusCode) {
    return {
      ...body,
      headers: {
        ...body.headers,
        headers,
      },
    };
  } else {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(body),
    };
  }
};

const handler = () => {
  return Promise.resolve(cors({}));
};

const corsModule = (module.exports = cors);
corsModule.handler = handler;
