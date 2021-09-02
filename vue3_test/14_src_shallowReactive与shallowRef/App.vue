<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo" />
</template>

<script>
import { ref } from 'vue';

import Demo from './components/Demo.vue';

export default {
  components: { Demo },
  name: 'App',
  setup() {
    let isShowDemo = ref(true);
    return {
      isShowDemo
    };
  }
};
</script>