<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="showName">点我提示学生姓名</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
export default {
  // el: '#root', // 组件定义时，一定不要写el配置项，因为最终所有的组件都要被个vm管理， 由vm决定服务于哪个容器。
  name: "Student",
  data() {
    return {
      msg: "你好啊",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },

  // 简单声明接收
  // props: ["name", "sex", "age"],

  //接收的同时对数据进行类型限制
  /* props:{
    name : String,
    age : Number,
    sex : String
  } */

  // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制

  props: {
    name: {
      type: String,
      required: true, // 名字是必传的
    },
    age: {
      type: Number,
      default: 99, // 默认值
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>