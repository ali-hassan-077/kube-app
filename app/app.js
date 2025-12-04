const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.end("Hello from Kubernetes!");
});

server.listen(port, () => {
  console.log("Server running on port 8080");
});
