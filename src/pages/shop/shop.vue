<template>
    <div class="box">
        <div class="boxOne">
            <li>
                <</li>
                    <li>购物车</li>
                    <li @click="editFunc">{{edit}}</li>
        </div>
        <Shopcar v-for="(item,index) in data" v-bind:data="item" class="list"></Shopcar>
        <div class="bottom">
            <div class="bottomLeft">
                <input type="checkbox" class="check" v-model="checkall">
                <span>全选</span>
            </div>
            <div class="bottomRight">
                <div class="allPrice">
                    <span>合计<b>${{total}}</b></span><br>
                </div>
                <div class="countent">
                    <button @click="deleat">{{type}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getCookie,
        bus
    } from '../.././utils/utils.js';
    import './shop.css'
    import Shopcar from './shopcar.vue';
    export default {
        data() {
            return {
                data: [],
                checkall: false,
                total: 0,
                type: '结算',
                edit: '编辑',
                list: {}
            }
        },
        components: {
            Shopcar
        },
        created() {
            this.$https('/api/shoplist').then(res => {
                this.data = res;
            })
        },
        mounted() {
            bus.$on('goodsCheaked', (data) => {
                this.list[data.name] = data.price
                this.sumup()
            })
        },
        methods: {
            sumup() {
                this.total = Object.values(this.list).reduce((init, item) => {
                    return init + item
                }, 0)
            },
            editFunc() {
                if (this.edit == '编辑') {
                    this.type = '删除'
                    this.edit = '完成'
                } else {
                    this.type = '结算'
                    this.edit = '编辑'
                }
            },
            deleat() {
                if (this.type == '结算') {
                    //跳转支付平台
                } else {
                    if (confirm('您确定要删除吗？')) {
                        let arr = []
                        for (let i in this.list) {
                            if (this.list[i] != 0) {
                                arr.push(i)
                            }
                        }
                        this.$https.post('/api/shopcar/del', {
                           
                        }).then(res => {
                            console.log(res)
                        })
                    }
                }
            }
        }
    }
</script>

<style lang="">

</style>


