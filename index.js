const PeerServer = require('peer').PeerServer;
const server = PeerServer({port: 4000, path: '/server'});
console.log("Running to port:" + 4000);