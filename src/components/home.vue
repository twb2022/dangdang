<template>
    <main>
        <router-view></router-view>
        <van-tabbar v-model="active" route active-color="#ee0a24" inactive-color="#000" class="box">
            <van-tabbar-item replace to="/index">
            <span>首页</span>
            <template #icon="props" >
            <img :src="props.active ? icon.active : icon.inactive" />
            </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/order">
            <span>分类</span>
            <template #icon="props" >
            <img :src="props.active ? icon.order : icon.order" />
            </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/details">
            <span>值得买</span> 
            <template #icon="props" >
            <img :src="props.active ? icon.cart1 : icon.cart" />
            </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/cart">
            <span>购物车</span>
            <template #icon="props" >
            <img :src="props.active ? icon.shop : icon.shop" />
            </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/my" icon="friends-o">我的当当</van-tabbar-item>
        </van-tabbar>
        
    </main>
</template>
<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
    .box{
       
       background: white;
    }
</style>


<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: 'img/homep.png',
        inactive: 'img/homep2.png',
        shop:'img/购物车空.png',
        order:'img/进度查询.png',
        cart1:'img/手提袋 (1).png',
        cart:'img/手提袋.png',
      },
    };
  },
};
</script>