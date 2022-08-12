<template>
    <main style="#eff4fa;" >
        <div class="ssk">
        <van-search
  show-action
  shape="round"
  placeholder="请输入搜索关键词"
>
<template #action>
            <img style="width: 30px;
    margin-right: 4px;" src="img/menu.png" alt="">
        </template>
  <template #left>
           <router-link to="/index">
             <img src="img/arrow_left.png" alt="">
           </router-link>
        </template>
</van-search>
        </div>

<van-tree-select height="calc(100vh - 34px)" :items="items" :main-active-index.sync="active" style="margin-top: 34px;">
  <template #content>
        <div v-if="active === 0">
            <van-swipe class="my-swipe" :autoplay="3000" 
            style="margin-left:10px"
            indicator-color="white" whidth="277" height="104">
            <van-swipe-item><img width="277px" src="img/2022080116465347059.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img width="277px" src="img/yuan10jian-1603873516.jpg" alt=""></van-swipe-item>
            </van-swipe>

            <div class="top my">
                <div class="top1">
                    <h3>进入当当书城</h3>
                    <span>特价低至1.9折</span>
                    <span>></span>
                </div>
                <div class="top2">
                    <h3>进入童书馆</h3>
                    <span>精选少儿读物</span>
                    <span>></span>
                </div>
            </div>

            <div class="bd my">
                <h3>榜单</h3>
                <van-grid :column-num="3" icon-size="55px">
                <van-grid-item icon="img/20220701105614826.png" text="总榜" />
                <van-grid-item icon="img/202207011056204830.png" text="新书榜" />
                <van-grid-item icon="img/kid-1565680692.png" text="童书榜" />
                </van-grid>
            </div>
            <div class="picture_text_b my">
                <h3 class="ios">
                    <span>小说></span>
                    <span style="font-size: 12px;font-weight: normal;margin-right: 10px;">畅销榜></span>
                </h3>
                <ul class="box">
                    <li>社会</li>
                    <li>侦探/悬疑/推理</li>
                    <li>校园</li>
                    <li>穿越/重生/架空</li>
                    <li>历史</li>
                    <li v-show="isShow">官场</li>
                    <li v-show="isShow">武侠</li>
                    <li v-show="isShow">古代言情</li>
                    <li v-show="isShow">军事</li>
                    <li v-show="isShow">都市</li>
                    <li v-show="isShow">财经</li>
                    <li v-show="isShow">近现代小说</li>
                    <li v-show="isShow">中国古典小说</li>
                    <li v-show="isShow">外国小说</li>
                    <li v-on:click="chage()" v-if="isShow==false">展开
                        <img style="height:15px; transform: rotate(180deg);" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                    </li>
                    <li v-on:click="chage()" v-if="isShow==true">收起
                        <img style="height:15px;" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                    </li>
                    
                </ul>
            </div>
            <div class="picture_text_b my">
                <h3 class="ios">
                    <span>文学></span>
                    <span style="font-size: 12px;font-weight: normal;margin-right: 10px;">畅销榜></span>
                </h3>
                <ul class="box">
                    <li>中国当代随笔</li>
                    <li>文集</li>
                    <li>名家作品</li>
                    <li>纪实文学</li>
                    <li>中国古诗词</li>
                    <li v-show="isShow1">官场</li>
                    <li v-show="isShow1">武侠</li>
                    <li v-show="isShow1">古代言情</li>
                    <li v-show="isShow1">军事</li>
                    <li v-show="isShow1">都市</li>
                    <li v-show="isShow1">财经</li>
                    <li v-show="isShow1">近现代小说</li>
                    <li v-show="isShow1">中国古典小说</li>
                    <li v-show="isShow1">外国小说</li>
                    <li v-on:click="chage1()" v-if="isShow1==false">展开
                        <img style="height:15px; transform: rotate(180deg);" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                    </li>
                    <li v-on:click="chage1()" v-if="isShow1==true">收起
                        <img style="height:15px;" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                    </li>
                </ul>
            </div>
                    <div class="picture_text_b my">
                <h3 class="ios">
                    <span>动画/幽默></span>
                    <span style="font-size: 12px;font-weight: normal;margin-right: 10px;">畅销榜></span>
                </h3>
                <ul class="box">
                    <li>中国当代随笔</li>
                    <li>文集</li>
                    <li>名家作品</li>
                    <li>纪实文学</li>
                    <li>中国古诗词</li>
                    <li v-show="isShow2">官场</li>
                    <li v-show="isShow2">武侠</li>
                    <li v-show="isShow2">古代言情</li>
                    <li v-show="isShow2">军事</li>
                    <li v-show="isShow2">都市</li>
                    <li v-show="isShow2">财经</li>
                    <li v-show="isShow2">近现代小说</li>
                    <li v-show="isShow2">中国古典小说</li>
                    <li v-show="isShow2">外国小说</li>
                    <li v-on:click="chage2()" v-if="isShow2==false">展开
                        <img style="height:15px; transform: rotate(180deg);" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                    </li>
                    <li v-on:click="chage2()" v-if="isShow2==true">收起
                        <img style="height:15px;" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                    </li>
                </ul>
            </div>
            
        </div>
      
        <div v-if="active === 1">
        <van-swipe class="my-swipe" :autoplay="3000" 
        style="margin-left:10px"
        indicator-color="white" whidth="277" height="104">
        <van-swipe-item><img width="277px" src="https://img60.ddimg.cn/upload_img/00796/1/yuan10jian-1603873516.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img width="277px" src="https://img60.ddimg.cn/upload_img/00796/1/yuan10jian-1603873516.jpg" alt=""></van-swipe-item>
        </van-swipe>

        <div class="top my">
            <div>
                <h3>进入当当书城</h3>
                <p>精选绘本、儿童科普、儿童文学</p>
            </div>
        </div>

        <div class="bd my">
            <h3>榜单</h3>
            <van-grid :column-num="3" icon-size="55px">
            <van-grid-item icon="https://img60.ddimg.cn/2022/7/1/20220701105614826.png" text="文字" />
            <van-grid-item icon="https://img60.ddimg.cn/2022/7/1/20220701105614826.png" text="文字" />
            <van-grid-item icon="https://img60.ddimg.cn/2022/7/1/20220701105614826.png" text="文字" />
            <van-grid-item icon="https://img60.ddimg.cn/2022/7/1/20220701105614826.png" text="文字" />
            <van-grid-item icon="https://img60.ddimg.cn/2022/7/1/20220701105614826.png" text="文字" />
            <van-grid-item icon="https://img60.ddimg.cn/2022/7/1/20220701105614826.png" text="文字" />
            </van-grid>
        </div>
        <div class="picture_text_b my rm">
            <h3 class="ios">
                <span>热门书单</span>
                <span style="font-size: 12px;font-weight: normal;margin-right: 10px;">更多精彩书单></span>
            </h3>
            <p>跟着绘本学数学</p>
            <p>凯迪克奖作品合集</p>
            <p>让孩子学会躲避危险 儿童安全教育看这里</p>
        </div>

        <!--  -->
        <div class="picture_text_b my">
            <h3 class="ios">
                <span>小说></span>
                <span style="font-size: 12px;font-weight: normal;margin-right: 10px;">畅销榜></span>
            </h3>
            <ul class="box">
                <li>社会</li>
                <li>侦探/悬疑/推理</li>
                <li>校园</li>
                <li>穿越/重生/架空</li>
                <li>历史</li>
                <li v-show="isShow">官场</li>
                <li v-show="isShow">武侠</li>
                <li v-show="isShow">古代言情</li>
                <li v-show="isShow">军事</li>
                <li v-show="isShow">都市</li>
                <li v-show="isShow">财经</li>
                <li v-show="isShow">近现代小说</li>
                <li v-show="isShow">中国古典小说</li>
                <li v-show="isShow">外国小说</li>
                <li v-on:click="chage()" v-if="isShow==false">展开
                    <img style="height:15px; transform: rotate(180deg);" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                </li>
                <li v-on:click="chage()" v-if="isShow==true">收起
                    <img style="height:15px;" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                </li>
                
            </ul>
        </div>
        <div class="picture_text_b my">
            <h3 class="ios">
                <span>文学></span>
                <span style="font-size: 12px;font-weight: normal;margin-right: 10px;">畅销榜></span>
            </h3>
            <ul class="box">
                <li>中国当代随笔</li>
                <li>文集</li>
                <li>名家作品</li>
                <li>纪实文学</li>
                <li>中国古诗词</li>
                <li v-show="isShow1">官场</li>
                <li v-show="isShow1">武侠</li>
                <li v-show="isShow1">古代言情</li>
                <li v-show="isShow1">军事</li>
                <li v-show="isShow1">都市</li>
                <li v-show="isShow1">财经</li>
                <li v-show="isShow1">近现代小说</li>
                <li v-show="isShow1">中国古典小说</li>
                <li v-show="isShow1">外国小说</li>
                <li v-on:click="chage1()" v-if="isShow1==false">展开
                    <img style="height:15px; transform: rotate(180deg);" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                </li>
                <li v-on:click="chage1()" v-if="isShow1==true">收起
                    <img style="height:15px;" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                </li>
            </ul>
        </div>
                <div class="picture_text_b my">
            <h3 class="ios">
                <span>动画/幽默></span>
                <span style="font-size: 12px;font-weight: normal;margin-right: 10px;">畅销榜></span>
            </h3>
            <ul class="box">
                <li>中国当代随笔</li>
                <li>文集</li>
                <li>名家作品</li>
                <li>纪实文学</li>
                <li>中国古诗词</li>
                <li v-show="isShow2">官场</li>
                <li v-show="isShow2">武侠</li>
                <li v-show="isShow2">古代言情</li>
                <li v-show="isShow2">军事</li>
                <li v-show="isShow2">都市</li>
                <li v-show="isShow2">财经</li>
                <li v-show="isShow2">近现代小说</li>
                <li v-show="isShow2">中国古典小说</li>
                <li v-show="isShow2">外国小说</li>
                <li v-on:click="chage2()" v-if="isShow2==false">展开
                    <img style="height:15px; transform: rotate(180deg);" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                </li>
                <li v-on:click="chage2()" v-if="isShow2==true">收起
                    <img style="height:15px;" src="http://search.m.dangdang.com/images/ddcategory_arrow-new.png?v=20180205" alt="">
                </li>
            </ul>
        </div>
        
        </div>

        <div v-if="active === 2">
            <div class="bd my">
            <h3>热门品牌</h3>
            <van-grid :column-num="3" icon-size="55px">
            <van-grid-item icon="https://img63.ddimg.cn/upload_img/00265/yg4161/huawei-3.png" text="华为" />
            <van-grid-item icon="https://img63.ddimg.cn/upload_img/00265/yg4161/huawei-3.png" text="华为" />
            <van-grid-item icon="https://img63.ddimg.cn/upload_img/00265/yg4161/huawei-3.png" text="华为" />
            <van-grid-item icon="https://img63.ddimg.cn/upload_img/00265/yg4161/huawei-3.png" text="华为" />
            <van-grid-item icon="https://img63.ddimg.cn/upload_img/00265/yg4161/huawei-3.png" text="华为" />
            <van-grid-item icon="https://img63.ddimg.cn/upload_img/00265/yg4161/huawei-3.png" text="华为" />
      
            </van-grid>
        </div>
        </div>
  </template>
</van-tree-select>
       
       <van-divider>我也是有底线的</van-divider>
       <van-divider>我也是有底线的</van-divider>
    </main>
    
</template>
<style>

</style>
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.ssk{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    z-index: 1000;
}
.ssk img{
        width: 12px;
    margin-right: 30px;
    margin-left: 20px;
}

.van-sidebar-item {
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.van-sidebar-item--select::before{
    background: white;
text-align: center;
}
  /* .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  } */
  .my{
    margin-left: 10px;
    margin-top: 10px;
    background: #f7faff;
    font-size: 12px;
  }
.top{
    display: flex;
    justify-content: space-between;
    padding: 10px;

}

.top1{
    width: 48%;
}
.top2{
    width: 48%;
}
.ios{
    display: flex;
    justify-content: space-between;
}
.box{
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
}
.box li{
    width: 32.9%;
    text-align: center;
    line-height: 40px;
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
}
.rm p{
    padding: 15px 10px;
   border-bottom: 1px solid #f0f0f0;
}
</style>


<script>
export default {
  data() {
    return {
        images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
      active: 0,
      items: [{ text: '图书' }, { text: '童书' }, { text: '手机数码' }, { text: '电子书' }, { text: '创意玩具' }, { text: '食品' }, { text: '电脑办公' }, { text: '女装' }, { text: '母婴玩具' }, { text: '男装' }, { text: '运动户外' }, { text: '男女鞋' }, { text: '家用电器' }, { text: '童书' }, { text: '电子书' }, { text: '手机数码' }, { text: '创意玩具' }, { text: '食品' }, { text: '电脑办公' }, { text: '女装' }, { text: '母婴玩具' }, { text: '男装' }, { text: '运动户外' }, { text: '男女鞋' }, { text: '家用电器' }],

        isShow:false,
        isShow1:false,
        isShow2:false
    };
  },
  methods:{
    chage(){
        this.isShow=!this.isShow
    },
    chage1(){
        this.isShow1=!this.isShow1
    },
    chage2(){
        this.isShow2=!this.isShow2
    },
  }
};
</script>
