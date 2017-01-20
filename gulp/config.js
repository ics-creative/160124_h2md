let config = {};

const SRC_FOLDER = "src";

const CSS_FOLDER_NAME = "css";

const SASS_FOLDER_NAME = "sass";
const SASS_FILE_NAME = "style.scss";

const JS_FOLDER_NAME = "js";

const TS_FOLDER_NAME = "ts";
const TS_FILE_NAME = "main.ts";

const DIST_FOLDER = "dist";

module.exports = {
  srcFolder:    `${SRC_FOLDER}`,
  sassFolder:   `${SRC_FOLDER}/${SASS_FOLDER_NAME}`,
  sassFile:     [`${SRC_FOLDER}/${SASS_FOLDER_NAME}/*.scss`],
  cssFolder:    `${SRC_FOLDER}/${CSS_FOLDER_NAME}`,
  tsFolder:     `${SRC_FOLDER}/${TS_FOLDER_NAME}`,
  tsFile:       `${SRC_FOLDER}/${TS_FOLDER_NAME}/${TS_FILE_NAME}`,
  jsFolder:     `${SRC_FOLDER}/${JS_FOLDER_NAME}`,
  distFolder:   `${DIST_FOLDER}`
}

