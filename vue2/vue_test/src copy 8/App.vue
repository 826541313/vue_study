<template>
  <div class="app">
    <h1>{{ msg }}</h1>

    <!-- 通过父组件给了组件传递函数类型的props实现:子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student @atguigu.once="getStudentName" name="李四" sex="男" :age="18" /> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据（第二种写法，使用ref） -->
    <Student ref="student" />
  </div>
</template>

<script>
// 引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "你好啊！",
    };
  },
  components: {
    School,
    Student,
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名：", name);
    },
    getStudentName(name) {
      console.log("App收到了学生名：", name);
    },
  },
  mounted() {
    // this.$refs.student.$on("atguigu", this.getStudentName);
    this.$refs.student.$once("atguigu", this.getStudentName);
  },
};
</script>

<style>
.app {
  background-color: silver;
}
</style>