<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h1>当前求和10倍为：{{ $store.getters.bigSum }}</h1>
    <select v-model="num">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.num);
    },
    decrement() {
      this.$store.commit("JIAN", this.num);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.num);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.num);
    },
  },
  mounted() {
    console.log(this.$store.getters);
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
button {
  margin-left: 5px;
}
</style>