<template>
  <div>
    <Count />
  </div>
</template>

<script>
// 引入组件

import Count from "./components/Count.vue";

export default {
  name: "App",
  components: {
    Count,
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>