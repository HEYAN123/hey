// 版本号定义

// 版本阶段
const PERIOD = {
  ALPHA: "alpha", // 实现功能为主
  BASE: "base", // 消除bug
  RC: "rc", // 成熟版本
  RELEASE: "release", // 正式版本
};

// 主版本号
const MAIN = "0"; // 功能模块/整体架构发生较大改动
// 子版本号
const CHILD = "1"; // 功能有增加或变化
// 阶段版本号
const STAGE = "0"; // bug修复或小的变动
// 日期版本号
const DATE = "200119"; // 修改的日期

exports.VERSION = `${MAIN}.${CHILD}.${STAGE}.${DATE}_${PERIOD.ALPHA}`;
