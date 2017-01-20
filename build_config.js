/**
 * ビルドの設定ファイル
 *
 * @author ICS-Kano
 */
/** ソースフォルダ */
const SRC_FOLDER = "./src";

/** Sassフォルダ */
const SASS_FOLDER = `${SRC_FOLDER}/sass`;
/** 変換対象のSassファイル */
const SASS_FILES = `${SASS_FOLDER}/**.scss`;
/** 変換後のCSS格納フォルダ */
const CSS_FOLDER = `${SRC_FOLDER}/css`;

/** TypeScriptフォルダ */
const TS_FOLDER = `${SRC_FOLDER}/ts`;

/** TypeScriptファイルのエントリーファイル */
const TS_ENTRY_FILES_NAME = {
  "demo01": "demo01.ts",
  "demo02": "demo02.ts",
  "demo03": "demo03.ts"
};

/** 変換後のJS格納フォルダ */
const JS_FOLDER = `${SRC_FOLDER}/js`;

/** リリースファイルの格納フォルダ */
const DIST_FOLDER = "dist";

// TypeScrptのエントリーファイルの作成
let tsEntryFiles = {};
for (let tsKey in TS_ENTRY_FILES_NAME) {
  const key = tsKey;
  const tsFile = `${TS_FOLDER}/${TS_ENTRY_FILES_NAME[tsKey]}`;
  tsEntryFiles[key] = tsFile;
}

// moduleとしてexportする
module.exports = {
  srcFolder: SRC_FOLDER,
  sassFolder: SASS_FOLDER,
  sassFile: SASS_FILES,
  cssFolder: CSS_FOLDER,
  tsFolder: TS_FOLDER,
  tsEntryFiles: tsEntryFiles,
  jsFolder: JS_FOLDER,
  distFolder: DIST_FOLDER
}

