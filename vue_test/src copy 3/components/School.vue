<template>
  <div class="demo">
    <h2>学校姓名: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
export default {
  // el: '#root', // 组件定义时，一定不要写el配置项，因为最终所有的组件都要被个vm管理， 由vm决定服务于哪个容器。
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京昌平",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
/* 组件样式 */
.demo {
  background-color: orange;
}
</style>