import VueRouter from 'vue-router'
import index from '../../components/index.vue'
import home from '../../components/home.vue'
import my from '../../components/my.vue'
import login from '../../components/login.vue'
import cart from '../../components/cart.vue'
import order from '../../components/order.vue'
import list from '../../components/list.vue'
import details from '../../components/details.vue'
var router = new VueRouter({
    
    routes:[
        {
            path:'/',
            component:home,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/my',
                    component:my
                },
                
                {
                    path:'/order',
                    component:order
                },
                {
                    path:'/list',
                    component:list
                },
            ],
            redirect:'/index'
        },
        {
            path:'/cart',
            component:cart
        },
        {
            path:'/details',
            component:details
        },
        {
            path:'/login',
            component:login
        },

    ]
})
export default router;