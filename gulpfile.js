// 設定ファイル
const config = require("./build_config");
const taskName = require("./gulp/taskName");

const requireDir = require('require-dir');
requireDir("./gulp", {recurse: true});
