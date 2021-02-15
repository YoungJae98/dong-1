const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api/account/login", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/account/isLoginCheck", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/account/logout", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/pledges/getPledge", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/getCommunity", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/writeCoummunity", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/showSuggestion", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/showPetition", {
      target: "http://localhost:3001/",
    })
  );
};
