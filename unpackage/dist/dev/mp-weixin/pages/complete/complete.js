"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
const _sfc_main = {
  onShow() {
    common_vendor.index$1.setTabBarItem({
      index: 1,
      text: "已完成"
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
          text: "激活",
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
    taskClick(item, e, i) {
      if (e.index === 0) {
        let obj = {
          task: item,
          flag: false
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
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2 + _easycom_uni_card2)();
}
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.taskList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.content),
        b: common_vendor.o((e) => $options.taskClick(item, e, index), item.id),
        c: "245da959-2-" + i0 + "," + ("245da959-1-" + i0),
        d: "245da959-1-" + i0 + "," + ("245da959-0-" + i0),
        e: item.id,
        f: item.isComplete,
        g: "245da959-0-" + i0
      };
    }),
    b: common_vendor.p({
      ["right-options"]: $data.options
    }),
    c: common_vendor.p({
      ["is-shadow"]: "true"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/sunquan/Documents/HBuilderProjects/todo-list/pages/complete/complete.vue"]]);
wx.createPage(MiniProgramPage);
