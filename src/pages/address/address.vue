<template>
    <div class="adr_box">
        <div class="address_title">
            <span class="iconfont icon-xiangzuo"></span>
            <h3>收货地址</h3>
        </div>
        <div class="address_no" v-show="data.length==0">
            <h3 class="adr_h3">没有添加地址</h3>
        </div>
        <div class="address_list" v-for="(item,index) in data" :key="index">
            <div class="adr_top">
                <p class="adr_user"><span>{{item.data.name}}</span><span>{{item.data.phone}}</span></p>
                <h3 class="user_adr">{{item.data.province}} {{item.data.city}} {{item.data.area}} {{item.data.street}}</h3>
            </div>
            <div class="edit">
                <label for=""><input type="checkbox" class="moren" />默认</label>
                <p>
                    <span @click="editFn(item.data)">编辑</span>
                    <span>删除</span>
                </p>
            </div>
        </div>
        <div class="adr_btn">
            <button @click="adrFn" class="buts">+新增地址</button>
        </div>
    </div>
</template>
<script>
    import {
        getCookie
    } from '../.././utils/utils.js';
    import './address.css';
    export default {
        data() {
            return {
                data: ""
            };
        },
        created() {
            this.$https.get("/addr/addrlist").then(res => {
                this.data = res;
                console.log(this.data)
            });
        },
        methods: {
            editFn(data) {
                this.$router.push({
                    name: "collectGoods",
                    query: {
                        type: "edit",
                        name: data.name,
                        phone: data.phone,
                        province: encodeURI(data.province),
                        city:data.city,
                        area:data.area,
                        street:data.street
                    }
                })
            },
            adrFn() {
                this.$router.push({
                    name: "collectGoods",
                    query: {
                        type: "add",
                    }
                });
            },
        }
    };
</script>
<style scoped>

</style>


