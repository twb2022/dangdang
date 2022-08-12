<template>
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
        <div class="main">
            <div class="loginbar">
                <div class="title">
                    <span :class="{'xz':isShow==true}" @click="chage()" >账号密码登录</span>
                    <span :class="{'xz':isShow1==true}" @click="chage1()">短信快捷登录</span>
                </div>
                <div class="tab_con" v-show="isShow">
                    <div class="input_line user">
                        <img width="width: 8vw;" src="img/user.png" alt="">
                        <input type="text" placeholder="请输入手机号/邮箱/昵称">
                    </div>
                    <div class="input_line pw">
                        <img width="width: 8vw;" src="img/pwd.png" alt="">
                        <input type="password" placeholder="请输入密码">
                        <!-- <input :type="istp==false?password:text" placeholder="请输入密码"> -->
                        <div @click="qhtp()">
                            <img :class="{'qhtp':istp==true}" class="dw" src="img/xs.png" alt="">
                        <img :class="{'qhtp':istp==false}" class="dw" src="img/yc.png" alt="">
                        </div>
                    </div>
                    <button class="dl">登录</button>
                </div>
                <!-- 验证码 -->
                <div class="tab_con" v-show="isShow1">
                    <div class="input_line user">
                        <img width="width: 8vw;" src="img/user.png" alt="">
                        <input type="text" placeholder="请输入手机号">
                    </div>
                    <button class="dl">验证码登录</button>
                </div>

                <div class="register_line">
                    <span>忘记密码？</span>
                    <router-link to="">
                        <span>立即注册</span>
                    </router-link>
                </div>
                <ul class="other_link">
                    <li>
                        <router-link to="">
                            <img src="img/qqdl.png" alt="">
                        </router-link>
                    </li>
                     <li>
                        <router-link to="">
                            <img src="img/zfbdl.png" alt="">
                        </router-link>
                    </li>
                     <li>
                        <router-link to="">
                            <img src="img/wbdl.png" alt="">
                        </router-link>
                    </li>
                </ul>
                <p class="bott">安全问题 <span style="color:black">|登录代表您已同意</span>《当当隐私政策》</p>
            </div>
        </div>
    </main>
</template>
<script>
import $ from 'jquery'

export default{
    data(){
        return{
            isShow:true,
            isShow1:false,
            istp:true,
        }
    },
    methods:{
        chage(){
            if(this.isShow!=true){
                this.isShow=!this.isShow
                this.isShow1=!this.isShow1
            }
        },chage1(){
            if(this.isShow1!=true){
                this.isShow1=!this.isShow1
                this.isShow=!this.isShow
            }
        },
        qhtp(){
            this.istp=!this.istp
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
.main{
    height: calc(100vh - 59px);
    padding: 0px 10vw;
    background: rgb(250 250 250);
}
.loginbar{
    padding-top: 9vw;
}
.title{
    display: flex;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
}
.title span{
    font-size: 5vw;
    font-weight: bolder;
    color: #ccc;
    padding: 3vw 0px;
}
.xz{
    border-bottom: 1vw solid black !important;
    color: black !important;
}
.input_line{
    display: flex;
    align-items: center;
    padding: 3vw 0;
    border-bottom: 1px solid #ccc;
}
.input_line input{
    font-size: 4vw;
    border: none;
    background: rgb(250 250 250);
}
.input_line img{
    width: 8vw;
}  
.pw{
    position: relative;
}
.dw{
    position: absolute;
    right: 0px;
    top: 20%;
    
}
.qhtp{
    display: none;
}
.dl{
    margin:6vw 0px ;
    border-radius: 3vw;
    color: white;
    height: 12vw;
    border: none;
    width: 100%;
    background-color: rgb(251,177,182);
    background: linear-gradient(to right,rgba(254,84,71,0.4),rgba(243,52,74,0.4) 100%);
}
.register_line{
    font-size: 13px;
    color: #f3344a;
    display: flex;
    justify-content: space-between;
}
.register_line a{
    color: #f3344a;
}
.other_link{
    margin-top: 6vw;
    display: flex;
    justify-content: space-between;
}
.bott{
    font-size: 12px;
    margin-top: 5vw;
    color: #ccc;
}
</style>