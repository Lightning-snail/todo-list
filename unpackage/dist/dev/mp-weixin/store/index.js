"use strict";
const common_vendor = require("../common/vendor.js");
const store = new common_vendor.index.Store({
  state: {
    taskList: [
      {
        id: (/* @__PURE__ */ new Date()).getTime(),
        content: "今天下午6点去球场打球",
        isComplete: false
      }
    ]
  },
  mutations: {
    // 添加任务
    addTask(state, task) {
      state.taskList.push(task);
    },
    // 删除任务
    delTask(state, i) {
      state.taskList.splice(i, 1);
    },
    // 更改状态
    changeStatus(state, obj) {
      state.taskList.find((item) => item.id === obj.task.id).isComplete = obj.flag;
    }
  }
});
exports.store = store;
