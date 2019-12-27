<template>
  <section class="example">
    <UEditor class="ueStyle" :defaultMsg="defaultMsg" :config="config" id="UEcontainer" ref="ue"></UEditor>
  </section>
</template>

<script lang="ts">
import UEditor from "@/components/UEditor.vue";
export default {
  name: "UE",
  components: { UEditor },
  data() {
    return {
      defaultMsg: "",
      config: {
        UEDITOR_HOME_URL: "/static/ueditor/",
        serverUrl: "", // 上传和操作请求的后台api接口
        toolbars: [["fullscreen", "source", "undo", "redo", "bold"]],
        initialFrameWidth: 1000,
        initialFrameHeight: 500,
        autoHeightEnabled: false, // 不可自动长高
        autoFloatEnabled: false, // 保持toolbar的位置不动
        enableAutoSave: false, // 关闭自动保存
        wordCount: false, // 是否开启字数统计
        elementPathEnabled: false, // 是否启用元素路径
        initialStyle: "body{font-size:16px;font-family:微软雅黑}",
        // ************以下搭配使用
        pasteplain: true, // 是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
        // 纯文本粘贴模式下的过滤规则
        filterTxtRules: function() {}
        // ************
      }
    };
  },
  methods: {
    init():void {
      this.defaultMsg = "初始化内容";
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.example {
  padding-top:20px;
}
</style>