<template>
    <div class="order">
        <div class="orderOne">
            <li class="iconfont icon-xiangzuo"></li>
            <li>我的订单</li>
            <li class="iconfont icon-xiaoxi"></li>
        </div>
        <div class="orderTwo">
                <li v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
        </div>
        <div class="orderThree">
            <div v-for='(itemCon,index) in tabContents' v-show=" index == num">{{itemCon}}</div>
        </div>
    </div>
</template>

<script>
    import './order.css';
    export default {
        data() {
            return {
                tabs: ["全部", "待付款", "待发货","待收货","售后"],
                tabContents: ["内容一", "内容二", "内容三"],
                num: 1
            }
        },
        methods: {
            tab(index) {
                this.num = index;
            }
        }
    }
</script>

<style lang="">

</style>