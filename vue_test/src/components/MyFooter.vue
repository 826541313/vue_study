<template>
  <div class="todo-footer" v-show="length">
    <label>
      <input
        type="checkbox"
        :checked="this.doneLength === this.length"
        @change="checkAll"
      />

      <!-- <input type="checkbox" v-model="this.doneLength === this.length" /> -->
    </label>
    <span>
      <span>已完成{{ doneLength }}</span> / 全部{{ length }}
    </span>

    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["doneLength", "length", "checkAllTodo", "clearAllTodo"],
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked);
    },
    clearAll() {
      this.clearAllTodo();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>