const http = require("http");

const products = require("./data/products.json");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(products));
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
