const errors = require("../../utils/errors");
const { getResultFromOpenAI } = require("../../utils/helpers");

module.exports = (event) => {
  let path = event.requestContext.http.path;
  console.log(path);

  const getResult = async (body) => {
    const { systemPrompt, userInput } = body;
    try {
      if (!systemPrompt || !userInput) {
        return errors[400]({ error: "Invalid JSON" });
      }
      return getResultFromOpenAI(systemPrompt, userInput);
    } catch (err) {
      console.log(err);
      return errors[400]({ error: "Invalid JSON" });
    }
  };

  switch (path) {
    case `/aiWrapper`:
      return getResult(event?.body);

    default:
      return errors[404]();
  }
};
