<template>
  <div>
    <a-tag>Tag 1</a-tag>
    <a-tag><a href="https://github.com/vueComponent/ant-design">Link</a></a-tag>
    <a-tag closable @close="log">Tag 2</a-tag>
    <a-tag closable @close.prevent>Prevent Default</a-tag>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tag from 'ant-design-vue/lib/tag';
import 'ant-design-vue/lib/tag/style/css';
export default defineComponent({
  name: 'App',
  components: {
    ATag: Tag
  },
  setup() {
    const log = (e: MouseEvent) => {
      console.log(e);
    };

    return {
      log
    };
  }
});
</script>