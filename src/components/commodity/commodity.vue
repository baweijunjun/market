<template>
    <div>
        <dl @click="goToDetail">
            <dt>
                  <img v-lazy="data.imageurl" alt="">
                </dt>
            <dd>
                <p>{{data.wname}}</p>
                <p>￥{{data.jdPrice}}<span class="iconfont icon-gouwuche" @click.stop="addCart()"></span></p>
            </dd>
            <Toast ref="toast" class="to"></Toast>
        </dl>
    </div>
</template>
<script>
    import Toast from '../.././plugins/index.js'
    import './commodity.css';
    import {
        getCookie
    } from '../.././utils/utils.js';
    export default {
        props: {
            data: {
                required: true,
                type: Object
            }
        },
        methods: {
            addCart() {
                this.$https.post('/api/shopcars', {
                    data: this.data
                }).then(res => {
                    console.log(res);
                })
                this.$refs.toast.active('添加成功')
            },
            //跳转到详情页
            goToDetail() {
                this.$router.push({
                    name: 'detail',
                    query: {
                        url: this.data.clickUrl
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>