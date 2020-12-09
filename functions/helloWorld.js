exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ hello: 'mic check, 1 2 3' })
  }
};
