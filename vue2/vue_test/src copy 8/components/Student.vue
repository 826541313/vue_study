<template>
  <div class="test">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      // 触发Student组件实例身上的atguigu事件

      this.$emit("atguigu", this.name);
    },
  },
};
</script>

<style scoped>
.test {
  background-color: skyblue;
}
</style>