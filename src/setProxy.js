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
    proxy("/api/pledges/setPledge", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/pledges/unsetPledge", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/getCommunity", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/writeCommunity", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/showCommunity", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/writeComments", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/getCommunityByUser", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/getCommentByUser", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/getFiles", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/uploadFile", {
      target: "http://localhost:3001/",
    })
  );
};
