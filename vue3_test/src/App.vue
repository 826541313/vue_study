<template>
  <div class="app">
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="Note">
        <a-input
          v-decorator="[
            'note',
            { rules: [{ required: true, message: 'Please input your note!' }] }
          ]"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>