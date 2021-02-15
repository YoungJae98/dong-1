const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api/account/login", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/account/isLoginCheck", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/account/logout", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/pledges/getPledge", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/getCommunity", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/writeCoummunity", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/showSuggestion", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/showPetition", {
      target: "http://18.217.248.102:3001/",
    })
  );
};
