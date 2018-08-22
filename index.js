const PeerServer = require('peer').PeerServer;
const server = PeerServer({port: process.env.PORT || 4000, path: '/server'});
console.log("Running to port:" + process.env.PORT);