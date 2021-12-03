<template>
  <div class="app">
    <Input autofocus/>
  </div>
</template>

<script>
// 引入组件
import { Input } from 'ant-design-vue';

export default {
  name: 'App',
  components: {
    Input
  },
  data() {
    return {};
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
};
</script>

<style scoped>
.app {
  margin-top: 20px;
}
</style>
