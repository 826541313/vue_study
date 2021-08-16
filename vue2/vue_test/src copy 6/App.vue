<template>
  <div>
    <School />
    <Student name="李四" sex="男" :age="18" />
  </div>
</template>

<script>
// 引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>