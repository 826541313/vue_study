<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h2>当前的求和为：{{ sum }}</h2>
  <button @click="sum++">点我x+1</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}k</h2>
  <h2 v-show="person.car">座驾信息：{{ person.car }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age += 1">增长年龄</button>
  <button @click="job.j1.salary += 1">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name += '!'">修改车名</button>
  <button @click="person.car.price++">改价</button>
</template>

<script>
import { reactive, toRefs, ref, toRaw, markRaw } from 'vue';

export default {
  name: 'Demo',

  setup() {
    let sum = ref(0);
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    });

    function addCar() {
      let car = { name: '奔驰', price: 40 };
      person.car = markRaw(car);
      // person.car = car;
    }

    function showRawPerson() {
      console.log(toRaw(person));
    }
    // 返回一个对象（常用）
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    };
  }
};
</script>