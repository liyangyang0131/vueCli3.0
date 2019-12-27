<template>
  <section class="ueditor">
    <script :id="id" type="text/plain"></script>
  </section>
</template>

<script lang="ts">
import "public/static/ueditor/ueditor.config.js";
import "public/static/ueditor/ueditor.all.js";
import "public/static/ueditor/lang/zh-cn/zh-cn.js";
export default {
  name: "UEditor",
  props: {
    // 自定义参数
    config: {
      type: Object
    },
    //不同编辑器必须不同的id
    id: {
      type: String
    },
    // message
    defaultMsg: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editor: null
    };
  },
  methods: {
    init() {
      const _this = this;
      this.editor = UE.getEditor(this.id, this.config); // 初始化UE
      this.editor.addListener("ready", function() {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
    },
    getUEContent() {
      // 获取内容方法
      return this.editor.getContent();
    },
    getUEContentTxt() {
      // 获取纯文本内容方法
      return this.editor.getContentTxt();
    }
  },
  mounted() {
    this.init();
  },
  destroyed() {
    this.editor.destroy();
  }
};
</script>

<style lang="scss" scoped>

</style>