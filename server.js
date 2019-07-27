const express = require("express");
const serveStatic = require("serve-static");
var history = require("connect-history-api-fallback");
const path = require("path");
const app = express();
var staticFileMiddleware = serveStatic(path.join(__dirname, "dist"));
app.use(staticFileMiddleware);
app.use(history({ verbose: true }));
app.use(staticFileMiddleware);
app.get("/", function(req, res) {
  res.render(path.join(__dirname + "/"));
});
const port = process.env.PORT || 80;
app.listen(port);
