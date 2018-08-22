const PeerServer = require('peer').PeerServer;
const server = PeerServer({port: process.env.OPENSHIFT_NODEJS_PORT || 5000, path: '/server'});
console.log("Running to port:" + process.env.OPENSHIFT_NODEJS_PORT || 5000);