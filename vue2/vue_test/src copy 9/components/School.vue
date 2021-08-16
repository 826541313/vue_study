<template>
  <div class="demo">
    <h2>学校姓名: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "尚硅谷",
      address: "北京昌平",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style scoped>
/* 组件样式 */
.demo {
  background-color: orange;
}
</style>