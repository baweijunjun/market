<template>
    <div class="wrap" @scroll="onScrollFn" ref="wrap">
        <header>
            <ul>
                <li>717</li>
                <li @click="go"><input type="text" placeholder="请输入您要购买的商品"></li>
                <li>我的店铺</li>
                <li>消息</li>                 
            </ul>
        </header>
        <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../.././static/2.jpg"></div>
                <div class="swiper-slide"><img src="../../.././static/3.jpg"></div>
                <div class="swiper-slide"><img src="../../.././static/4.jpg"></div>
                <div class="swiper-slide"><img src="../../.././static/5.jpg"></div>
            </div>
        </div>
        <div class="conation">
            <dl>
                <dt><img src="../../.././static/9.png"></dt>
                <dd>家乡味道</dd>
            </dl>
            <dl>
                <dt><img src="../../.././static/10.png"></dt>
                <dd>进口食品</dd>
            </dl>
            <dl>
                <dt><img src="../../.././static/11.png"></dt>
                <dd>牛奶乳品</dd>
            </dl>
            <dl>
                <dt><img src="../../.././static/12.png"></dt>
                <dd>茶果冲饮</dd>
            </dl>
            <dl>
                <dt><img src="../../.././static/13.png"></dt>
                <dd>休闲零食</dd>
            </dl>
            <dl>
                <dt><img src="../../.././static/14.png"></dt>
                <dd>米面粮油</dd>
            </dl>
            <dl>
                <dt><img src="../../.././static/15.png"></dt>
                <dd>调味调料</dd>
            </dl>
            <dl>
                <dt><img src="../../.././static/16.png"></dt>
                <dd>酒水饮料</dd>
            </dl>
        </div>
        <div class="touTiao">
            <div class="swiper-wrapper">
                <li class="swiper-slide bs1">
                    <dl>
                        <dt>商城动态</dt>
                        <dd>
                            <p>商圈头条|全北京独一家丝绸摒弃淋！超高颜值cry你的小心心！12441浏览</p>
                        </dd>
                    </dl>
                </li>
                <li class="swiper-slide bs1">
                    <dl>
                        <dt>商城动态</dt>
                        <dd>
                            <p>绿色无公害 无污染 无添加 天然有机蔬菜源头吃的放心，健康第一，安全保证，确保蔬菜新鲜</p>
                        </dd>
                    </dl>
                </li>
            </div>
        </div>
        <div class="day">
            <li>天天特惠 每天都有惊喜</li>
            <li>更多 > </li>
        </div>
        <div ref="list">
            <li v-for="item in list" class="common" :key="item.wareId">
                <Commondity v-bind:data="item"></Commondity>
            </li>
        </div>
        <p>正在为您加载中...</p>
        <Footer/>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.css';
    import Commondity from '../.././components/commodity/commodity.vue'
    import Footer from '../.././components/footer/footer.vue'
    import './first.css';
    import jsonp from '../.././utils/jsonp.js';
    export default {
        data() {
            return {
                list: [],
                canIQuery: true,
                add: 1
            }
        },
        components: {
            Commondity,
            Footer
        },
        methods: {
            go() {
                //搜索页
                this.$router.push({
                    name: "search"
                });
            },
            onScrollFn() {
                let winH = this.$refs.wrap.offsetHeight;
                let docH = this.$refs.list.offsetHeight + this.$refs.swiper.offsetHeight
                let scrollH = this.$refs.wrap.scrollTop;
                this.add++;
                console.log(this.add)
                console.log(winH, docH, scrollH)
                if (docH - winH - scrollH < 30 && this.canIQuery) {
                    console.log('地步')
                    this.canIQuery = false
                    this.$http(`/index/recommend.action?page=${this.add}`).then(res => {
                        this.list = [...this.list, ...JSON.parse(JSON.parse(res).recommend).wareInfoList]
                        this.canIQuery = true
                    })
                }
            },
        },
        mounted() {
            new Swiper(this.$refs.swiper, {
                loop: true,
                autoplay: true,
                speed: 200,
            });
            new Swiper('.touTiao', {
                loop: true,
                direction: 'vertical',
                autoplay: true,
            });
            this.$https('/index/recommend.action?page=1').then(res => {
                this.list = JSON.parse(JSON.parse(res).recommend).wareInfoList
                console.log(this.list);
            })
        }
    }
</script>

<style lang="">

</style>