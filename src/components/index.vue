<template>
    <main id="wrap">
        <div class="search">
            <div>
                <img src="img/ddlogo.png" alt="">
            </div>
            <div class="ssk"><van-search  placeholder="请输入搜索关键词" /></div>
            <div>
                <router-link to="/order">
                    <img style="height:48px" src="img/flimg.png" alt="">
                </router-link>
            </div>
        </div>
        <!-- 轮播图 -->
        <div>
        <div class="swipe">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" whidth="387" height="114">
            <van-swipe-item><img src="img/lp1.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="img/lp2.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="img/lp3.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="img/lp4.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="img/lp5.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="img/lp6.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="img/lp7.png" alt=""></van-swipe-item>
            <van-swipe-item><img src="img/lp8.jpg" alt=""></van-swipe-item>
            </van-swipe>
        </div>
        <router-link to="/list">
            <div class="yh"></div>
        </router-link>
        </div>
        
        <van-swipe @change="onChange" class="swipe2" :show-indicators="false" height="160">
            <!-- 第一屏 -->   
        <van-swipe-item>
            <div class="menu">
            <div id="box1">
            <ul class="box">
                <li v-for="(item,index) in list" :key="index">
                <img :src="item.src" alt="">
                </li>
            </ul>
            </div>
            <ol id="list">
                <li class="current"></li>
                <li></li>
            </ol>
        </div>
        </van-swipe-item>
        <van-swipe-item>
        <div class="menu">
        <!-- 第二屏 -->
            <div id="box2">
            <ul class="box">
                <li v-for="(item,index) in list2" :key="index">
                <img :src="item.src" alt="">
                </li>
            </ul>
            </div>
            <ol id="list">
                <li class="current"></li>
                <li></li>
            </ol>
        </div>
        </van-swipe-item>
        </van-swipe>
    
        <!-- 热销推荐 -->
        <div class="tag1">
            <van-row class="tag1img">
            <van-col span="5.5">图书畅销榜</van-col>
            <van-col span="5"><img src="img/tjt1.png" alt=""></van-col>
            <van-col span="5.5" style="margin-left:10%">新书上架</van-col>
            <van-col span="5"><img src="img/tjt2.png" alt=""></van-col>
            </van-row>
           
        <van-grid icon-size="74px">
        <van-grid-item icon="img/tj1.jpg" text="乡土中国" />
        <van-grid-item icon="img/tj2.jpg" text="苏东坡传（林" />
        <van-grid-item icon="img/tj3.jpg" text="越过人生的刀" />
        <van-grid-item icon="img/tj4.jpg" text="西洋菜（凯" />
        </van-grid>
        </div>
        <div class="tag2">
            <van-row class="tag1img">
            <van-col span="5">今日抢购</van-col>
            <van-col span="7">
                <van-count-down :time="time">
                <template #default="timeData">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                </template>
                </van-count-down>
            </van-col>
            <van-col span="6" style="margin-left:20%"><span>查看更多</span>></van-col>
            </van-row>

            <van-grid icon-size="54px">
        <van-grid-item icon="img/qg1.jpg" text="￥9.9" />
        <van-grid-item icon="img/qg2.jpg" text="￥25.9" />
        <van-grid-item icon="img/qg3.jpg" text="￥12.9" />
        <van-grid-item icon="img/qg4.jpg" text="￥36.8" />
        </van-grid>
        </div>

        <!-- 热销推荐滑动 -->
        <div class="tag3">
            <van-row class="tag1img">
            <van-col span="5">品牌抢购</van-col>
            <van-col span="7"><img style="width:70%" src="img/ppt.png" alt=""></van-col>
            <van-col span="3" style="margin-left:30%"><span></span></van-col>
            </van-row>
        </div>
            <div class="huahua">
                <ul class="huadon">
                <li><img src="img/pp2.jpg" alt="">
                </li>
               <li><img src="img/pp1.jpg" alt="">
                </li><li><img src="img/pp3.jpg" alt="">
                </li><li><img src="img/pp4.jpg" alt="">
                </li><li><img src="img/pp5.jpg" alt="">
                </li>
                <li><img style="width: 17.3vw;" src="img/pp7.png" alt="">
                </li>
               
                </ul>
            </div>
            <van-divider style="font-size: 18px;color: black;margin: 16px 0;">当当书城</van-divider>

            <div class="tag4">
                <van-row>
                <van-col span="6" >
                    <span style="font-size: 15px;display: block;">品质好书</span>
                    <span style="font-size: 12px;">2021主编推荐</span>
                    <img src="img/sc1.jpg" alt="">
                </van-col>
                <van-col span="6">
                    <span style="font-size: 15px;display: block;">阅读童年</span>
                    <span style="font-size: 12px;">2021重磅推荐</span>
                    <img src="img/sc2.jpg" alt="">
                </van-col>
                <van-col span="6">
                    <span style="font-size: 15px;display: block;">冰雪童年</span>
                    <span style="font-size: 12px;">欢乐过大年</span>
                    <img src="img/sc3.jpg" alt="">
                </van-col>
                <van-col span="6">
                    <span style="font-size: 15px;display: block;">经济趋势</span>
                    <span style="font-size: 12px;">好书精选</span>
                    <img src="img/sc4.jpg" alt="">
                </van-col>
                <van-col span="6" class="twbs">
                    <span style="font-size: 15px;display: block;">文学艺术</span>
                    <span style="font-size: 12px;">每满100减50</span>
                    <img src="img/sc5.jpg" alt="">
                </van-col>
                <van-col span="6" class="twbs">
                    <span style="font-size: 15px;display: block;">精选童书</span>
                    <span style="font-size: 12px;">每满100减50</span>
                    <img src="img/sc6.jpg" alt="">
                </van-col>
                <van-col span="6" class="twbs">
                    <span style="font-size: 15px;display: block;">畅读经典</span>
                    <span style="font-size: 12px;">每满100减50</span>
                    <img src="img/sc7.jpg" alt="">
                </van-col>
                <van-col span="6" class="twbs">
                    <span style="font-size: 15px;display: block;">经济新态势</span>
                    <span style="font-size: 12px;">每满100减50</span>
                    <img src="img/sc8.jpg" alt="">
                </van-col>
                </van-row>
            </div>

                <div class="wntj">
                    <div @click="chage()">
                        <h3>为你推荐</h3>
                        <span :class="{'cuent':isShow==true}">猜你喜欢</span>
                    </div>
                    <div @click="chage1()">
                        <h3>精品书单</h3>
                        <span :class="{'cuent':isShow1==true}">高赞精选</span>
                    </div>
                </div>

                <!--  -->
            <div class="main" v-show="isShow">
                <div class="tit">
                <div class="titimg">
                    <img src="img/wntj1.jpg" alt="">
                </div>
                <p>借势：以弱胜强的128条黄金法则（借大势，成大事！广告界鬼才金枪大叔20年实战经验！每句话都很值钱，读了就是赚了！）</p>
                <span>自营</span><span>新品</span><span>预售</span>
                <div class="jg">
                    <h5>￥49.99</h5>
                    <span>找相似</span>
                </div>
            </div>
            <div class="tit">
                <div class="titimg">
                    <img src="img/wntj2.jpg" alt="">
                </div>
                <p>三体：全三册 刘慈欣代表作，亚洲“雨果奖”获奖作品！</p>
                <span>自营</span><span>88囤书节</span><span>新品</span><span>预售</span>
                <div class="jg">
                    <h5>￥49.99</h5>
                    <span>找相似</span>
                </div>
            </div>
            <div class="tit">
                <div class="titimg">
                    <img src="img/wntj3.jpg" alt="">
                </div>
                <p>苏东坡传（林语堂纪念典藏精装版，东方甄选董宇辉动情推荐）</p>
                <span>自营</span><span>新品</span><span>预售</span>
                <div class="jg">
                    <h5>￥41.99</h5>
                    <span>找相似</span>
                </div>
            </div>
            <div class="tit">
                <div class="titimg">
                    <img src="img/wntj4.jpg" alt="">
                </div>
                <p>【良品铺子-猪肉脯100g】零食小吃特产肉干网红休闲食品小包装</p>
                <span>自营</span><span>券</span>
                <div class="jg">
                    <h5>￥49.99</h5>
                    <span>找相似</span>
                </div>
            </div>
            <div class="tit">
                <div class="titimg">
                    <img src="img/wntj5.jpg" alt="">
                </div>
                <p>红星照耀中国 青少版 八年级上册 人民文学出版社 团购电话4001066666转6</p>
                <span>自营</span><span>新品</span><span>预售</span>
                <div class="jg">
                    <h5>￥49.99</h5>
                    <span>找相似</span>
                </div>
            </div>
            <div class="tit">
                <div class="titimg">
                    <img src="img/wntj6.jpg" alt="">
                </div>
                <p>朗文·外研社·新概念英语1英语初阶学生用书（全新版附扫码音频）</p>
                <span>自营</span><span>新品</span><span>预售</span>
                <div class="jg">
                    <h5>￥49.99</h5>
                    <span>找相似</span>
                </div>
            </div>
        </div>

          <div class="main" v-show="isShow1">
            <div class="tit" v-for="(item,index) in jpsd" :key="index">
                <div class="titimg">
                    <img :src="item.src" alt="">
                    <span class="qq">5本书</span>
                </div>
                <h6>{{item.pc}}</h6>
                
                <div class="tt jg">
                    <h5><img :src="item.tx" alt=""> 晓沐晨语</h5>
                    <span>{{item.yd}}人阅读</span>
                </div>
            </div>
        </div>
        <div class="fh" @click="fh()">
            <img style="width:50%" src="img/gotop.png" alt="">
        </div>
        <van-divider dashed>我也是有底线的</van-divider>
        <van-divider dashed>我也是有底线的</van-divider>

    </main>
</template>
<!-- <script src="js/vue.js"></script> -->
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            list:[
                {
                    src:'img/l1.png'
                },
                {
                   src:'img/l2.png'
                },
                {
                   src:'img/l3.png'
                },
                {
                    src:'img/l4.png'
                },
                {
                    src:'img/l5.png'
                },
                {
                    src:'img/l6.png'
                },
                {
                    src:'img/l7.png'
                },
                {
                   src:'img/l8.png'
                },
                {
                    src:'img/l9.png'
                },
                {
                    src:'img/l10.png'
                },
            ],
            list2:[
                {
                    src:'img/l11.png'
                },
                {
                   src:'img/l12.png'
                },
                {
                   src:'img/l13.png'
                },
                {
                    src:'img/l14.png'
                },
                {
                    src:'img/l15.png'
                },
                {
                    src:'img/l16.png'
                },
                {
                    src:'img/l17.png'
                },
                {
                   src:'img/l18.png'
                },
                {
                    src:'img/l19.png'
                },
                {
                    src:'img/l20.png'
                },
            ],
            jpsd:[
                {
                    src:'img/authoring-238276810_e744cafcff944acda6c5b85b632a77f1.jpg',
                    pc:'5本书告别情绪勒索，拥有健康人际关系',
                    tx:'img/5841509619649-1_e.jpg',
                    yd:'3090'
                },
                {
                    src:'img/authoring-325540258_b322b12eeb1b4bfb95e955fc113242bd.jpg',
                    pc:'职场书单推荐：工作党必读的5本好书',
                    tx:'img/5841509619649-1_e.jpg',
                    yd:'31090'
                },
                {
                    src:'img/15518314061045-1238_q.jpg',
                    pc:'知乎高赞，年轻人发展必读好书',
                    tx:'img/5841509619649-1_e.jpg',
                    yd:'630690'
                },
                {
                    src:'img/authoring-238276810_e744cafcff944acda6c5b85b632a77f1.jpg',
                    pc:'5本书告别情绪勒索，拥有健康人际关系',
                    tx:'img/5841509619649-1_e.jpg',
                    yd:'3090'
                },
                {
                    src:'img/authoring-325540258_b322b12eeb1b4bfb95e955fc113242bd.jpg',
                    pc:'职场书单推荐：工作党必读的5本好书',
                    tx:'img/5841509619649-1_e.jpg',
                    yd:'31090'
                },
                {
                    src:'img/15518314061045-1238_q.jpg',
                    pc:'知乎高赞，年轻人发展必读好书',
                    tx:'img/5841509619649-1_e.jpg',
                    yd:'630690'
                },
            ],
             time: 2 * 60 * 60 * 1000,
             isShow:true,
             isShow1:false,
             current: 0,
        }
        

    },
    methods:{
        chage(){
            
           if(this.isShow==true){
            console.log()
           }else{
            this.isShow=!this.isShow
            this.isShow1=!this.isShow1
           }
        },
        chage1(){
            if(this.isShow1==true){
                console.log()
            }else{
                this.isShow=!this.isShow
                this.isShow1=!this.isShow1
            }
           
        },
        onChange(index) {
         this.current = index;
        },
        fh(){
      $(window).scrollTop(0)
        },
        
    }
}
</script>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
     #wrap{
    width: 100%;
    background: #f6f6f6;
    }
    .search{
        width: 100%;
        height: 13vw;
        display: flex;
        justify-content: space-around;
        align-content: center;
        background: white;
        overflow: hidden;
    }
    .search img{
        width: 40px; 
    }
    .ssk{
        width: 70%;
    }
    .ssk van-search{
        border-radius: 20%;
    }
    /* 轮播图 */
    .my-swipe .van-swipe-item {  
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    margin-top: 10px;
  }
  .swipe{
    width: 100%;
    height: 124px;
    background: url(../../public/img/swipe2back.jpg)  no-repeat;
    background-size:100% 100%;
  }
  .swipe img{
    width: 387px;
  }
  .yh{
    width: 100%;
    height: 75px;
    background: url(../../public/img/swipeback.jpg);
    background-size:100% 100%;
  }
  .menu{
    width:100%;
    height: 100%;
    position: relative;
    margin-top: 10px;
    background: white;
    overflow: hidden;
    /* padding: 10px 20px; */

    /* justify-content: flex-start; */
  }
    .box{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    #box1{
        /* display: none; */
    }
    #box2{
        width: 100%;
        background: white;
    }
    .box li{
        width: 20%;
    }
    .box li img{
       height: 66px;
    }
    #list{
        overflow: hidden;
        position: absolute;
        bottom: 14px;
         left: 45%;
        z-index: 1000000;
    }
    #list li{
        z-index: 1000000;
        float: left;
        margin:3px 3px;
        width:4px;
        height: 2px;
        background:#ccc;
    }
     #list .current{
        width:20px;
        background: black;
    }
    .tag1{
        width: 96vw;
        padding: 0px 2vw;
    }
    .tag1img img{
        margin-left: 5px;
        width: 100%;
    }
    .tag1img{
        font-size: 4vw;
        padding: 5px 0px;
        background-image: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(255, 247, 247) 100%);
    }
    .tag2{
        width: 96vw;
        padding: 0px 2vw;
    }
    .tag1img span{
        font-size: 3vw;
    }
    /* 今日抢购 时间倒计时*/
    .colon {
        display: inline-block;
        margin: 0 4px;
        color: #ee0a24;
      }
      .block {
        display: inline-block;
        width: 22px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-color: #ee0a24;
      }
      .tag3{
        width: 96vw;
        padding: 0px 2vw;
        /* overflow: auto; */
      }
      .tag3 .tag1img span{
        display: inline-block;
        width: 20px;
        height: 1px;
        background: #ccc;
    }
    .huahua{
        overflow: auto;
        padding: 0px 2vw;
    }
    .huadon{
        display: flex;
    }
    .huadon li{
        /* width: 50vw; */
    }
    .huadon img{
    /* width:76px; */
    width: 30VW;
    }
    .huadon p{
    width: 30px;
    font-size: 11px;
    color: #828282;
    line-height: 12px;
    white-space: normal;
    background: white;
    }
    .tag4{
        padding: 0px 2vw;
        border-radius: 10px;
        background: white;
    }
    .tag4 img{
        width: 79px;
    }

    .main{
        display: flex;
        padding: 0px 4vw;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .tit{
        background: white;
        width:49%;
        border-radius: 10px;
        padding-bottom: 4vw;
        margin-top: 10px;
    }
    .titimg img{
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .titimg{
        position: relative;
    }
    .qq{
        position: absolute;
        bottom: 0px;
        left: 20px;
        padding: 2px;
        color: white !important;
        background-color: #debe8d;
        border: none !important;
    }
    .main p{
        font-size: 12px;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .main span{
        margin-left: 5px;
        color: red;
        font-size: 12px;
        border: 1px solid red;
    }
    .jg{
        display: flex;
        justify-content: space-between;
    }
    .jg span{
        border-radius: 30px;
        color: #ccc;
        font-size: 12px;
        border: 1px solid #ccc;
        padding: 2px 2px;
    }
    .jg img{
        width: 20px;
        border-radius: 50%;
    }
    .tt{
        margin-top: 5px;
    }
    .tt span{
        color: black;
        border: none;
    }
    .wntj{
        
        display: flex;
        padding: 10px 15vw;
        justify-content: space-between;
    }
    .wntj span{
        font-size: 12px;
        border-radius: 10px;
        padding: 2px;
        color: #ccc;
    }
    .cuent{
        color: white !important;
        background: #d7b27a;
    }
  .twbs{
    margin-top: 10px;
  }
    .fh{
    position: fixed;
    bottom: 10%;
    right: -5%;
}

</style>
