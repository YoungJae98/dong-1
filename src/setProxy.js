const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api/account/login", {
<<<<<<< HEAD
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/account/isLoginCheck", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/account/logout", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/pledges/getPledge", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/pledges/setPledge", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/pledges/unsetPledge", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/community/getCommunity", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/community/writeCommunity", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/community/showCommunity", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/community/writeComments", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/community/getCommunityByUser", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/community/getCommentByUser", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/files/uploadFile", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/files/getFiles", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/files/deleteFile", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/community/deleteCommunity", {
      target: "http://sejongclubunion.com:3001/",
    }),
    proxy("/api/files/getFileData", {
      target: "http://sejongclubunion.com:3001/",
=======
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
    proxy("/api/files/uploadFile", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/files/getFiles", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/files/deleteFile", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/community/deleteCommunity", {
      target: "http://localhost:3001/",
    }),
    proxy("/api/files/getFileData", {
      target: "http://localhost:3001/",
>>>>>>> 55e7dcf040cf4281d5574404c4673fae65db0f8d
    })
  );
};
