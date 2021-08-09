<template>
  <div class="test">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
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
    add() {
      console.log(" add回调被调用了");
      this.number++;
    },
    sendStudentName() {
      // 触发Student组件实例身上的atguigu事件

      this.$emit("atguigu", this.name);
    },
    unbind() {
      this.$off("atguigu"); // 解绑一个自定义事件
      // this.$off(['atguigu,'demo']) // 解绑多个自定义事件
      // this.$off() // 解绑所有自定义事件
    },
    death() {
      this.$destroy(); //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效。
    },
  },
};
</script>

<style scoped>
.test {
  background-color: skyblue;
}
</style>