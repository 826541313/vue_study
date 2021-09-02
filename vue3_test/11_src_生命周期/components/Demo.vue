<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue';

export default {
  name: 'Demo',

  // beforeCreate() {
  //   console.log('---beforeCreate---');
  // },
  // created() {
  //   console.log('---created---');
  // },
  // beforeMount() {
  //   console.log('---beforeMount---');
  // },
  // mounted() {
  //   console.log('---mounted---');
  // },
  // beforeUpdate() {
  //   console.log('---beforeUpdate---');
  // },
  // updated() {
  //   console.log('---updated---');
  // },
  // beforeUnmount() {
  //   console.log('---beforeUnmount---');
  // },
  // unmounted() {
  //   console.log('---unmounted---');
  // },

  setup() {
    let sum = ref(0);

    // 返回一个对象（常用）
    return {
      sum
    };
  }
};
</script>