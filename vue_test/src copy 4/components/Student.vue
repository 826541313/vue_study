<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
  </div>
</template>

<script>
// 引入一个mixin
export default {
  // el: '#root', // 组件定义时，一定不要写el配置项，因为最终所有的组件都要被个vm管理， 由vm决定服务于哪个容器。
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