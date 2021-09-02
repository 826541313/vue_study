<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <Demo />
</template>

<script>
import Demo from './components/Demo.vue';

export default {
  components: { Demo },
  name: 'App'
};
</script>