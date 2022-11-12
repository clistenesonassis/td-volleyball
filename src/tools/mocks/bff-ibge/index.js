const getBrazilStates = require("./get-brazil-states.json");
const getCitiesBrazilByState = require("./get-cities-brazil-by-state.json");

class BffIbge {
  constructor() {}

  config(server) {
    this.loadGets(server);
  }

  loadGets(server) {
    server.get("/api/v1/localidades/estados", (req, res) =>
      res
        .status(getBrazilStates.success.status)
        .json(getBrazilStates.success.content)
    );

    server.get("/api/v1/localidades/estados/:id/distritos", (req, res) =>
      res
        .status(getCitiesBrazilByState.success.status)
        .json(getCitiesBrazilByState.success.content)
    );
  }
}

module.exports = { BffIbge };
