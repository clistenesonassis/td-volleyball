const jsonServer = require("json-server");
const { BffIbge } = require("./bff-ibge");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const delayMiddleware = (req, res, next) => setTimeout(next, 2000);

const PORT = 3333;

server.use(middlewares);
server.use(delayMiddleware);

new BffIbge().config(server);

server.listen(PORT, () => {
  console.log("JSON Server is running... > PORT: ", PORT);
});
