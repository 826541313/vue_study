<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      msg: "你好啊",
      sex: "男",
    };
  },
};
</script>

<style scoped>
.test {
  background-color: skyblue;
}
</style>