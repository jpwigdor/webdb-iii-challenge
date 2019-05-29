const server = require("./api/server.js");

const port = 4000;

server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhose:${port} ===\n`);
});
