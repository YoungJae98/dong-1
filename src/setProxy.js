const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api/account/login", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/account/isLoginCheck", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/account/logout", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/pledges/getPledge", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/pledges/setPledge", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/pledges/unsetPledge", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/community/getCommunity", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/community/writeCommunity", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/community/showCommunity", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/community/writeComments", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/community/getCommunityByUser", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/community/getCommentByUser", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/files/uploadFile", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/files/getFiles", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/files/deleteFile", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/community/deleteCommunity", {
      target: "http://www.sejongclubunion.com:3001/",
    }),
    proxy("/api/files/getFileData", {
      target: "http://www.sejongclubunion.com:3001/",
    })
  );
};
