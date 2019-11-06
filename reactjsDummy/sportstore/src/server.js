const express = require("express");
const jsonServer = require("json-server");
const chokidar = require("chokidar");
const cors = require("cors");
const auth = require("./authMiddleware");
const history = require("connect-history-api-fallback");

const fileName = process.argv[2] || "./data.js";
const port = process.argv[3] || 3500;

let router = undefined;

const app = express();

const createServer = () => {
  delete require.cache[require.resolve(fileName)];
  setTimeout(() => {
    router = jsonServer.router(
      fileName.endsWith(".js") ? require(fileName)() : fileName
    );
  }, 100);
};

createServer();

app.use(history());
app.use("/", express.static("./build"));
app.use(cors());
app.use(jsonServer.bodyParser);
app.use(auth)
app.use("/api", (req,res, next) => router(req,res,next));

chokidar.watch(fileName).on("change", () => {
    console.log("Reloading web service ..");
    createServer();
    console.log("Reloading web service data has completed ..");
});

app.listen(port, () => console.log(`Web service running on port ${port}`));

