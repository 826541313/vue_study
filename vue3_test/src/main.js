// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';

//创建应用实例对象——app( 类似于之前Vue2中的vm，但appl比vm 更“轻”)

const app = createApp(App)

app.use(Antd)

// console.log(app);
app.mount('#app')

// createApp(App).mount('#app')