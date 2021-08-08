<template>
  <div class="demo">
    <h2 class="title">学校姓名: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京昌平",
    };
  },
};
</script>

<style lang="less">
/* 组件样式 */
.demo {
  background-color: orange;
  .title {
    background-color: palevioletred;
  }
}
</style>