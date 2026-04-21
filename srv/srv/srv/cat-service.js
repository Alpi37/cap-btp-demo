module.exports = (srv) => {
    srv.on('hello', () => "Hello from BTP Transported App!")
    srv.on('hello', () => "Hello again for the second commit");
};