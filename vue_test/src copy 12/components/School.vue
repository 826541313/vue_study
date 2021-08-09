<template>
  <div class="demo">
    <h2>学校姓名: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京昌平",
    };
  },
  mounted() {
    this.pubId = pubsub.subscribe("hello", (msg, data) => {
      console.log("有人发布了hello消息，hello消息的回调执行了，值是：", data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
/* 组件样式 */
.demo {
  background-color: orange;
}
</style>