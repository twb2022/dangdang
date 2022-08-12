<template id="my">
    <main>
        <div class="top">
            <router-link to="/index">
                <span style="margin-left:10px"><img src="img/arrow_left.png" alt=""></span>
            </router-link>
            <ul>
                <li>我的当当</li>
            </ul>
            <span><img src="img/menu.png" alt=""></span>
        </div>

        <div class="content">
            <header class="user-info">
                <div class="user-basic">
                    <!-- <router-link to="/login">
                        <span class="dlzc">登录/注册</span>
                    </router-link> -->
                    <div class="user">
                        <img src="img/1148535797681-1_e.jpg" alt="">
                        <div class="uname">
                            <p>这***些<img style="width:5vw" src="img/v0.png" alt=""></p> 
                            <p><span>余额 0.00</span><span>礼品卡 0.00</span><span>积分 0.00</span></p>
                        </div>
                        
                    </div>
                    <span class="user-main"></span>
                </div>
                <div class="user-stat">
                    <span >收藏的商品</span>
                    <span>
                        0<p>
                        关注的店铺
                    </p></span>
                    <span style="border:none">0
                        <p>我的足迹</p>
                    </span>
                </div>
            </header>
            <div class="order">
                <div>
                    <span><img src="img/dd.png" alt=""></span>
                    <span>我的订单</span>
                </div>
                <div>
                    <span>查看全部购买商品</span>
                    <span><img src="img/jump_arrow.png" alt=""></span>
                </div>
            </div>
            <div class="order-nav">
                <span><img src="img/fukuan-07.png" alt="">待付款</span>
                <span><img src="img/shouhuo-07.png" alt=""> 待收货</span>
                <span><img src="img/pd-return.png" alt="">退换货</span>
            </div>
            <div class="order svp">
                <div>
                    <span><img src="img/vip-1521514865.png" alt=""></span>
                    <span>会员中心</span>
                </div>
                    <span><img  src="img/jump_arrow.png" alt=""></span>
            </div>
            <div class="order">
                <div>
                    <span><img src="img/wd-012-02.png" alt=""></span>
                    <span>我的礼券</span>
                </div>
                    <span><img  src="img/jump_arrow.png" alt=""></span>
            </div>
            <div class="order">
                <div>
                    <span><img src="img/wd-012-03.png" alt=""></span>
                    <span>积分抵现</span>
                </div>
                    <span><img  src="img/jump_arrow.png" alt=""></span>
            </div>
            <div class="order">
                <div>
                    <span><img src="img/111.png" alt=""></span>
                    <span>我的电子书</span>
                </div>
                    <span><img  src="img/jump_arrow.png" alt=""></span>
            </div>
            <div class="order">
                <div>
                    <span><img src="img/wd-012-04.png" alt=""></span>
                    <span>我的礼品卡</span>
                </div>
                    <span><img  src="img/jump_arrow.png" alt=""></span>
            </div>
            <div class="order">
                <div>
                    <span><img src="img/wd-012-05.png" alt=""></span>
                    <span>收货地址</span>
                </div>
                    <span><img  src="img/jump_arrow.png" alt=""></span>
            </div>
            <div class="order kffk">
                <div>
                    <span><img src="img/wd-012-07.png" alt=""></span>
                    <span>客服反馈</span>
                </div>
                    <span><img  src="img/jump_arrow.png" alt=""></span>
            </div>

        </div>



        <!-- 猜你喜欢 -->
        <div class="box">
            <van-divider  default="fsdafs" style="padding:3vw 0px">
                <img width="5%" src="img/jj-fill.png" alt="">
                根据您的偏好猜您可能喜欢
            </van-divider>
            <!-- <div>
                <img src="jj-fill.png" alt="">根据您的偏好猜您可能喜欢
            </div> -->
            <ul >
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.src" alt="">
                    <p>{{item.jj}}</p>
                    <span class="zy">自营</span>
                    <span class="yhq">88囤书节</span>
                    <span class="yhq">券</span>
                    <p>
                        <b>￥{{item.je}}</b>
                    </p>
                </li>
            </ul>
        </div>

        <van-divider content-position="left">我是底线</van-divider>
    <van-divider content-position="right">我是底线</van-divider>
    </main>
         
</template>

<script>
export default{
    data(){
        return{
            list:[
                {
                    src:'img/tj1.jpg',
                    jj:'苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）',
                    je:'39.99'
                },
                 {
                    src:'img/tj2.jpg',
                    jj:'苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）',
                    je:'39.99'
                },
                 {
                    src:'img/tj3.jpg',
                    jj:'苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）',
                    je:'39.99'
                },
                 {
                    src:'img/tj4.jpg',
                    jj:'苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）',
                    je:'39.99'
                },
                 {
                    src:'img/sc3.jpg',
                    jj:'苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）',
                    je:'39.99'
                },
                {
                    src:'img/sc4.jpg',
                    jj:'苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）',
                    je:'39.99'
                },
                {
                    src:'img/sc5.jpg',
                    jj:'苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）',
                    je:'39.99'
                },
                {
                    src:'img/sc6.jpg',
                    jj:'苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）',
                    je:'39.99'
                },
                {
                    src:'img/sc7.jpg',
                    jj:'苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）',
                    je:'39.99'
                },
                {
                    src:'img/sc8.jpg',
                    jj:'苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）',
                    je:'39.99'
                },
            ]
    }
}
        
}
</script>

<style scoped>
*{
    margin:0px;
    padding: 0px;
    list-style: none;
}
.top{
  background: white;
    padding: 15px 0px;
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
}
.top img{
    width: 50%;
}
.top span{
    widows: 20%;
}
.user-basic{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vw;
    overflow: hidden;
    background:url(../../public/img/user-bg.jpg) no-repeat center center; ;
    background-size: 100% 100%;
}
.dlzc{
    color: white;
    padding: 3vw;
    border: 1px solid white;
    border-radius: 6vw;
}
.user{
    width:90%;
    height: 70%;
    color: white;
    display: flex;
}
.user img{
    width: 25%;
    border-radius: 5vw;
}
.uname{
    margin-left: 5px;
    font-size: 13px;
}
.uname span{
    margin-right: 3px;
}
.user-main{
    display: block;
    position: absolute;
    width: 18vw;
    height: 8.5vw;
    bottom: 0vw;
    right: 0vw;
    background-image: url(../../public/img/personal.png) ;
    background-size: 18vw 6vw;
    background-repeat: no-repeat;
}
.user-stat{
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 5vw 3vw;
     border-bottom: 1px solid #e5e5e5;
}
.user-stat span{
    width: 33%;
    border-right: 1px solid #e5e5e5;
}
.order{
    padding: 13px 10px;
    font-size: 13px;
    align-items: center;
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    justify-content: space-between;
}
.order img{
    width: 6vw;
    vertical-align: middle;
}
.order-nav{
    margin-top: 3vw;
    display: flex;
    border-bottom: 10px solid #e5e5e5;
    justify-content: space-around;
}
.order-nav span{
    text-align: center;
    width: 15%;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
}
.order-nav img{
    width: 60%;  
}
.order span{
    padding: 0px 5px;
}
.svp{
     border-bottom: 10px solid #e5e5e5;
}
.kffk{
     border-top: 10px solid #e5e5e5;
}
.box{
    width: 100vw;
    background: #e5e5e5;
}
.box li{
    font-size: 13px;
    width: 49%;
    background: white;
    margin-top: 2vw;
}
.box ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.box li img{
    width: 100%;
}
.box li p{
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.box span{
    padding: 1px;
    border-radius: 1vw;
    margin: 3px 2px;
}
.box .zy{
    color: red;
    border: 1px solid red;
}
.box .yhq{
    color: white;
    background: red;
}
</style>

