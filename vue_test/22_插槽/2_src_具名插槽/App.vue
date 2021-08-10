<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="../public/生命周期 - 副本.png" alt="" />
      <a slot="footer" href="http:www.atguigu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http:www.atguigu.com">更多美食</a>
        <a href="http:www.atguigu.com">更多美食</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template slot:footer>
        <div class="foot">
          <a href="http:www.atguigu.com">美食</a>
          <a href="http:www.atguigu.com">美食</a>
          <a href="http:www.atguigu.com">更多</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
// 引入组件

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

video {
  width: 100%;
}

h4 {
  align-items: center;
}
</style>