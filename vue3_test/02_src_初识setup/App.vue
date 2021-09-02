<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>我是App组件</h1>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
export default {
  name: 'App',
  setup() {
    let name = '张三';
    let age = 18;

    function sayHello() {
      alert(`我叫${name}，我${age}岁了，你好啊！`);
    }
    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello
    };

    // 返回一个函数（渲染函数）
    // return () => h('h1', '尚硅谷');
  }
};
</script>