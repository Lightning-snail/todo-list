"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
const _sfc_main = {
  onShow() {
    common_vendor.index$1.setTabBarItem({
      index: 0,
      text: "首页"
    });
  },
  computed: {
    taskList() {
      return store_index.store.state.taskList;
    }
  },
  data() {
    return {
      value: "",
      options: [
        {
          text: "已完成",
          style: {
            backgroundColor: "#18bc37"
          }
        },
        {
          text: "删除",
          style: {
            backgroundColor: "#dd524d"
          }
        }
      ]
    };
  },
  methods: {
    dialogInputConfirm(val) {
      this.value = val;
      let obj = {
        id: (/* @__PURE__ */ new Date()).getTime(),
        content: val,
        isComplete: false
      };
      store_index.store.commit("addTask", obj);
    },
    addTask() {
      this.value = "";
      this.$refs.inputDialog.open();
    },
    taskClick(item, e, i) {
      if (e.index === 0) {
        let obj = {
          task: item,
          flag: true
        };
        store_index.store.commit("changeStatus", obj);
      } else if (e.index === 1) {
        store_index.store.commit("delTask", i);
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_uni_card2 + _easycom_uni_fab2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_uni_card + _easycom_uni_fab + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.taskList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.content),
        b: common_vendor.o((e) => $options.taskClick(item, e, index), item.id),
        c: "61775842-2-" + i0 + "," + ("61775842-1-" + i0),
        d: "61775842-1-" + i0 + "," + ("61775842-0-" + i0),
        e: item.id,
        f: !item.isComplete,
        g: "61775842-0-" + i0
      };
    }),
    b: common_vendor.p({
      ["right-options"]: $data.options
    }),
    c: common_vendor.p({
      ["is-shadow"]: "true"
    }),
    d: common_vendor.sr("fab", "61775842-3"),
    e: common_vendor.p({
      horizontal: "right",
      vertical: "bottom"
    }),
    f: common_vendor.o((...args) => $options.addTask && $options.addTask(...args)),
    g: common_vendor.sr("inputClose", "61775842-5,61775842-4"),
    h: common_vendor.o($options.dialogInputConfirm),
    i: common_vendor.p({
      mode: "input",
      title: "输入内容",
      value: $data.value,
      placeholder: "请输入内容"
    }),
    j: common_vendor.sr("inputDialog", "61775842-4"),
    k: common_vendor.p({
      type: "dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/sunquan/Documents/HBuilderProjects/todo-list/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
