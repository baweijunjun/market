<template>
    <div class='wrapBox'>
        <div class="headers">
            <li class="iconfont icon-shezhi" @click="signout"></li>
            <li @click="tips2">我的717商城</li>
            <li class="iconfont icon-xiaoxi" @click="tips3"></li>
        </div>
        <div class="banners">
            <div class="img">
             <img src="../../.././static/17.png" alt="">
            </div>
            <h2>路 飞</h2>
        </div>
        <div class="shops">
            <h1>我的店铺</h1>
        </div>
        <div class="wait">
            <li>
                <i class="iconfont icon-qianbao"></i>
                <span>待付款</span>
            </li>
            <li>
                <i class="iconfont icon-tian"></i>
                <span>代发货</span>
            </li>
            <li>
                <i class="iconfont icon-daishouhuo-01"></i>
                <span>待收货</span>
            </li>
            <li>
                <i class="iconfont icon-31"></i>
                <span>售后</span>
            </li>
            <li @click="order">
                <i class="iconfont icon-quanbudingdan-01"></i>
                <span>我的订单</span>
            </li>
        </div>
        <div class="lists">
            <p>
                <i class="iconfont icon-31"></i> 账户余额
            </p>
            <p  @click="address">
                <i class="iconfont icon-dizhi-01"></i> 地址管理
            </p>
            <p>
                <i class="iconfont icon-erji"></i> 我的客服
            </p>
        </div>
        <Toast ref="toast">Are you sure?</Toast>
    </div>
</template>

<script>
    import './user.css';
    export default {
        data() {
            return {}
        },
        methods: {
            signout() {
                this.$refs.toast.active('Are you sure?', {
                    timeout: 3000
                })
                this.$router.push({
                    name:"step"
                })
            },
            tips2() {
                this.$refs.toast.active('I am sure?')
            },
            tips3() {
                this.$refs.toast.active('ok?')
            },
            order() {
                this.$router.push({
                    name: "order"
                })
            },
            address(){
                 this.$router.push({
                    name:"address"
                })
            }
        }
    }
</script>

<style lang="">

</style>