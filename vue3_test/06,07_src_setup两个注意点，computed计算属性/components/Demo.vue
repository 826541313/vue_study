<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>我是App组件</h1>
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  <span>全名：{{ person.fullName }}</span>
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    });

    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName;
    // });

    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName;
      },
      set(value){
          const nameArr = value.split('-')
          person.firstName 
      }
    });

    // 返回一个对象（常用）
    return {
      person
    };
  }
};
</script>