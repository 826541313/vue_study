<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "你好啊",
    };
  },
  props: ["name", "sex", "age"],
  methods: {
    sendStudentName() {
      this.$bus.$emit("hello", this.name);
    },
  },
};
</script>

<style scoped>
.test {
  background-color: skyblue;
}
</style>