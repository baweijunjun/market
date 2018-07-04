<template>
    <div class="Bigbox">
        <div class="ColltOne">
            <li><input type="text" placeholder="请输入您想要购买的宝贝" @click="search"></li>
        </div>
        <div class="ColltLeft">
            <aside>
                <p @click="getData('17951827')"><span>热门分类</span></p>
                <p @click="getData('17951828')"><span>手机数码</span></p>
                <p @click="getData('17951829')"><span>电脑办公</span></p>
                <p @click="getData('17951830')"><span>电视影音</span></p>
                <p @click="getData('17951831')"><span>空调冰洗</span></p>
                <p @click="getData('17951832')"><span>厨房卫浴</span></p>
                <p @click="getData('17951833')"><span>生活电器</span></p>
                <p @click="getData('17951834')"><span>食品酒水</span></p>
                <p @click="getData('17951835')"><span>美妆个护</span></p>
                <p @click="getData('17951836')"><span>母婴玩具</span></p>
                <p @click="getData('17951837')"><span>医疗保健</span></p>
                <p @click="getData('17951838')"><span>服饰鞋帽</span></p>
                <p @click="getData('17951839')"><span>运动户外</span></p>
                <p @click="getData('17951840')"><span>箱包奢品</span></p>
                <p @click="getData('17951841')"><span>钟表首饰</span></p>
            </aside>
        </div>

        <div class="ColltRight">
           <div v-for="(item,index) in list.secondLevelCategories" :key="item.index">
            <div class="floor">
             <p class="title">{{item.goodsTypeName}}</p>
             <dl v-for="v in item.goodsTypeList" :key="v.goodsTypeId">
               <dt><img :src="v.goodsTypeImgUrl"></dt>
               <dd>{{v.goodsTypeName}}</dd>
             </dl>
            </div>
           </div>
           </div>
        </div>

    </div>
</template>

<script>
    import './collt.css'
    export default {
        data() {
            return {
                list:[]
            }
        },
        methods: {
            getData(cid) {
                console.log(cid)
                this.$http.get(`https://m.gome.com.cn/index.php?ctl=goods_class&act=ajaxGetClassList&cid=${cid}`).then(response => {
                   this.list = response.data;
                   console.log(this.list);
                }, response => {
                    console.log("error");
                });
            },
            search(){
                this.$router.push({
                    name:"search"
                })
            }
        }
    }
</script>
<style lang="" scoped>

</style>