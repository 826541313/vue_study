<template>
  <div class="app">
    <h3>我是App组件（祖）</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
// import Child from './components/Child';
const Child = defineAsyncComponent(() => import('./components/Child.vue'));
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