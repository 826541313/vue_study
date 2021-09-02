<template>
  <div class="app">
    <h3>我是App组件（祖）</h3>
    <Child />
  </div>
</template>

<script>
import Child from './components/Child';
export default {
  components: { Child },
  name: 'App'
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>