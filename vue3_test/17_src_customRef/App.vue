<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { customRef, ref } from 'vue';

export default {
  name: 'App',
  setup() {
    function myRef(value) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            track();
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger();
            }, 500);
          }
        };
      });
    }

    // let keyWord = ref('hello');
    let keyWord = myRef('hello');
    return {
      keyWord
    };
  }
};
</script>