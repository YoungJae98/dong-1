const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api/login", {
      target: "http://localhost:3001/",
    })
  );
};
