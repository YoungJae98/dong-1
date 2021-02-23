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
    proxy("/api/pledges/setPledge", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/pledges/unsetPledge", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/getCommunity", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/writeCommunity", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/showCommunity", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/writeComments", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/getCommunityByUser", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/getCommentByUser", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/files/uploadFile", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/files/getFiles", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/files/deleteFile", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/community/deleteCommunity", {
      target: "http://18.217.248.102:3001/",
    }),
    proxy("/api/files/getFileData", {
      target: "http://18.217.248.102:3001/",
    })
  );
};
