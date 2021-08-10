<template>
  <div id="app">
    <div class="container">
      <Search />
      <List />
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
// 引入组件

export default {
  name: "App",
  components: {
    Search,
    List,
  },
};
</script>