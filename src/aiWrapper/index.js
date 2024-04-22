"use strict";

const cors = require("../../utils/cors");
const Post = require("./post");

const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (event.body) {
    try {
      event.body = JSON.parse(event.body);
    } catch (err) {
      console.log(err);
      return errors[400]({ error: "Invalid JSON" });
    }
  }

  const { method } = event.requestContext.http;

  switch (method) {
    case "POST":
      return Post(event).then(cors);

    default:
      return { error: "Not Found" };
  }
};

module.exports = { handler };
