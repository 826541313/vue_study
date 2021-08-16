<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和10倍为：{{ bigSum }}</h1>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
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
import { mapState } from "vuex";
import { mapGetters } from "vuex";

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
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。 (对象写法)
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}) ,

    //借助mapState生成计算属性，从state中读取数据。( 数组写法)
    ...mapState(["sum", "school", "subject"]),

    // ...mapGetters({ bigSum: "bigSum" }),

    ...mapGetters(["bigSum"]),
  },
  mounted() {
    const x = mapState({ he: "sum" });
    console.log(x);
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