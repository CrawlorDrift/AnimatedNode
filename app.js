const a = require("./public/a.js")

const express = require('express');
const app = express();
const host = "0.0.0.0", port = 3221;


app.get("/", (req, resp) => {
    // resp.send("hello,  world")
    resp.sendFile(__dirname + "/" + "index.html")
})

app.get("/a", (req, resp) => {
    resp.send(String(a.d()))
})

app.listen(port, () => {
    console.log('[*] Listening on %d ...:', port);
    console.log('[*] Index: http://%s:%d ...:', host, port);
})