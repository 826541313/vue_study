import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            name: '主页',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    beforeEnter: (to, from, next) => {
                        if (to.path === '/home/news' || to.path === '/home/message') {
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('学校名不对，无权限查看')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'xiaoqi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            // props: {
                            //     a: 1, b: 'hello'
                            // }
                            // props: true

                            props($route) {
                                return { id: $route.query.id, title: $route.query.title }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.path === '/home/news' || to.path === '/home/message') {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('学校名不对，无权限查看')
//         }
//     } else {
//         next()
//     }
// })

export default router