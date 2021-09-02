<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg += '！'">修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}k</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age += 1">增长年龄</button>
  <button @click="person.job.j1.salary += 1">涨薪</button>
</template>

<script>
import { ref, reactive, watch } from 'vue';

export default {
  name: 'Demo',

  setup() {
    let sum = ref(0);
    let msg = ref('你好啊');
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    });

    // watch([sum, msg], (newValue, oldValue) => {
    //   console.log('sum/msg变了', newValue, oldValue);
    // });

    // watch(msg, (newValue, oldValue) => {
    //   console.log('msg变了', newValue, oldValue);
    // });
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName;
    // });

    // watch(
    //   sum,
    //   (newValue, oldValue) => {
    //     console.log('sum变了', newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    // 监视reactive所定义的全部数据
    //    1.注意：此处无法正确的获取oldValue
    //    2.注意：强制开启了深度监视（deep配置无效）
    // watch(person, (newValue, oldValue) => {
    //   console.log('person变化', newValue, oldValue);
    // });

    // 监视reactive所定义的某个数据
    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     console.log('person变化', newValue, oldValue);
    //   }
    // );

    // 监视reactive所定义的某些数据
    // watch(
    //   [() => person.age,()=>person.name],
    //   (newValue, oldValue) => {
    //     console.log('person变化', newValue, oldValue);
    //   }
    // );

    // 特殊情况
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log('person变化', newValue, oldValue);
      },
      { deep: true }
    );

    // 返回一个对象（常用）
    return {
      sum,
      msg,
      person
    };
  }
};
</script>