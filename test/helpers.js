/*
    GLORY BE TO GOD,
    ISSUE BOT 9000, CSS PROJECT
    By Israel Mafabi Emmanuel
*/

const fs = require("fs");
const path = require("path");
const globalJsdom = require("global-jsdom");

const html = fs.readFileSync(
    path.resolve(__dirname, "..", "index.html"),
    "utf-8"
);

globalJsdom(html);