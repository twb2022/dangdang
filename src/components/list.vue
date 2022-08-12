<template>
    <main id="wrap">
        <!-- 搜索框 -->
        <div class="ssk">
        <van-search show-action shape="round" placeholder="请输入搜索关键词">
            <template #action>
                <router-link to="/order">
                    <p style="margin-right: 20px; margin-left: 20px;">筛选</p>
                </router-link>
            </template>
            <template #left>
                <router-link to="/index">
                    <img src="img/arrow_left.png" alt="">
                </router-link>
            </template>
            </van-search>
            <ul class="tbox">
                <li class="cuent">默认</li>
                <li>销量</li>
                <li>价格</li>
                <li>好评</li>
                <li>出版时间</li>
            </ul>
        </div>

        <!-- 查找推荐 -->
        <div class="czbox">
            <p>您是不是要找：</p>
            <ul class="item">
                <li>幸福小鸡</li>
                <li>幸福小鸡</li>
                <li>幸福小鸡</li>
                <li>幸福小鸡</li>
                <li>幸福小鸡</li>
                <li>幸福小鸡</li>
            </ul>
        </div>
        <div class="main">
            <section>
                <span>查看</span><span class="a">全部大促</span><span>商品</span>
            </section>

            <div class="product" v-for="(item,index) in list" :key="index">
                <img :src="item.src" alt="">
                
                <div class="detail" >
                    <p class="name mo">
                        <span style="color:red"> {{item.bname}}</span>
                             {{item.jj}}
                    </p>
                    <p> {{item.zz}}</p>
                    <div class="touch mo" >
                        <span >自营</span><span>88囤书节</span><span>每满100-50</span><span>拼团</span>
                    </div>
                    <div class="price_con mo">
                        <span class="s1">￥ {{item.jg}}</span><span style="text-decoration: line-through;"> {{item.yjg}}</span><span>5.0折</span>
                    </div>
                    <div class="shop_title mo"> 
                        <p >99.9%好评(2196人)</p>
                        <p> {{item.dp}}</p>
                    </div>
                </div>
            </div>
        </div>


        <!-- 返回头部 -->
        <div class="fh" @click="fh()">
            <img style="width:80%" src="img/gotop.png" alt="">
        </div>
    </main>
    
</template>
    
<script>
export default {
    data(){
        return{
            list:[
                {
                    src:'img/29346294-1_h_6.jpg',
                    bname:'小企鹅去旅行',
                    jj:'系列套装 共四册 工藤纪子3-4-5-6周岁儿童早教启蒙绘本图画书籍亲子阅读宝宝睡前故事幼儿园读物坐飞机火车',
                    zz:'(日)工藤纪子 著 彭懿',
                    jg:66,
                    yjg:99,
                    dp:'博库网旗舰店'
                },
                {
                    src:'img/11117625782-1_h_1.jpg',
                    bname:'小企鹅去旅行',
                    jj:'系列套装 共四册 工藤纪子3-4-5-6周岁儿童早教启蒙绘本图画书籍亲子阅读宝宝睡前故事幼儿园读物坐飞机火车',
                    zz:'(日)工藤纪子 著 彭懿',
                    jg:66,
                    yjg:99,
                    dp:'博库网旗舰店'
                },{
                    src:'img/11117625782-1_h_1.jpg',
                    bname:'小企鹅去旅行',
                    jj:'系列套装 共四册 工藤纪子3-4-5-6周岁儿童早教启蒙绘本图画书籍亲子阅读宝宝睡前故事幼儿园读物坐飞机火车',
                    zz:'(日)工藤纪子 著 彭懿',
                    jg:66,
                    yjg:99,
                    dp:'博库网旗舰店'
                },{
                    src:'img/29346294-1_h_6.jpg',
                    bname:'小企鹅去旅行',
                    jj:'系列套装 共四册 工藤纪子3-4-5-6周岁儿童早教启蒙绘本图画书籍亲子阅读宝宝睡前故事幼儿园读物坐飞机火车',
                    zz:'(日)工藤纪子 著 彭懿',
                    jg:66,
                    yjg:99,
                    dp:'博库网旗舰店'
                },
                {
                    src:'img/11117625782-1_h_1.jpg',
                    bname:'小企鹅去旅行',
                    jj:'系列套装 共四册 工藤纪子3-4-5-6周岁儿童早教启蒙绘本图画书籍亲子阅读宝宝睡前故事幼儿园读物坐飞机火车',
                    zz:'(日)工藤纪子 著 彭懿',
                    jg:66,
                    yjg:99,
                    dp:'博库网旗舰店'
                },{
                    src:'img/11117625782-1_h_1.jpg',
                    bname:'小企鹅去旅行',
                    jj:'系列套装 共四册 工藤纪子3-4-5-6周岁儿童早教启蒙绘本图画书籍亲子阅读宝宝睡前故事幼儿园读物坐飞机火车',
                    zz:'(日)工藤纪子 著 彭懿',
                    jg:66,
                    yjg:99,
                    dp:'博库网旗舰店'
                },
            ],
            
         
        }
        
    },

}
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.ssk{
    /* position: fixed;
    top: 0px;
    left: 0px; */
    width: 100vw;
    z-index: 1000;
}
.ssk img{
    width: 12px;
    margin-right: 30px;
    margin-left: 20px;
}
.tbox{
    display: flex;
    padding: 20px 0px;
    border-bottom: 1px solid #e4e4e4;
    justify-content: space-between;
}
.tbox li{
    font-size: 13px;
    width: 25%;
    text-align: center;
}
.cuent{
    color: red;
}
.czbox{
    padding: 10px;
    background: rgb(235, 235, 235);
    font-size: 13px;
}
.czbox li{
    text-align: center;
    padding: 10px;
    margin-top: 10px;
    width: 26%;
    background: white;
    color: #9b9b9b;
    border-radius: 5px;
}
.item{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
section{
    margin-top: 10px;
    font-size: 12px;
    color: red;
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px solid red;
}
section .a{
    background: red ;
    color: white;
    margin: 0px 5px;
    border-radius: 20%;
}
.product{
    width: 100vw;
    display: flex;
}
.product img{
    width: 33%;
}
.detail{
    color: #999;
    padding: 20px 0px;
    margin-left: 10px;
    font-size: 14px;
    border-bottom: 1px solid #e4e4e4;
}
.detail .name{
    color:black;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.mo{
    margin: 3px 0px;
}
.touch span{
    font-size: 12px;
    background: red;
    color: white;
    margin-right: 3px;
}
.s1{
    color: red;
    font-size: 14px;
    
}
.price_con span{
    margin-right: 3px;
}
.shop_title{
    display: flex;
    justify-content: space-between;
}
.fh{
    position: fixed;
    bottom: 10%;
    right: 3%;
}
</style>