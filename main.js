import { userPhotos } from "./userPhotos.js";
import { userComments } from "./userComments.js";
import fs from "fs";
import http from "http";

fs.writeFileSync('photos.txt', JSON.stringify(userPhotos))
fs.writeFileSync('comments.txt', JSON.stringify(userComments))

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const url = req.url;
    const method = req.method;
    if (method === 'GET') {
        if (url === '/photos') {
            const data = fs.readFileSync('photos.txt', 'utf-8');
            res.write(data)
            res.end()
        } else if (url === '/comments') {
            const data = fs.readFileSync('comments.txt', 'utf-8');
            res.write(data)
            res.end()
        }
    }
}).listen(4001, function () {
    console.log("server start at port 4001");
});