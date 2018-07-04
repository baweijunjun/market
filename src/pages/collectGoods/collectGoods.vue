<template>
    <div class="collectGoods">
        <div class="collectGoodsOne">
            <li class="iconfont icon-xiangzuo"></li>
            <li>收货人</li>
            <li></li>
        </div>
        <div class="message">
            <input type="text" placeholder="收货人姓名" v-model="name">
            <input type="text" placeholder="手机号" v-model="phone">
            <div class="selectArea">
                <div class="ks-clear">
                    <div class="half">
                        <Multiselect @select="provChange" v-model="province" class="Must" :options="provlist" label="name" placeholder="请选择省份"></Multiselect>
                    </div>
                    <div class="half">
                        <Multiselect @select="cityChange" v-model="city" class="Must" :options="citylist" label="name" placeholder="请选择城市"></Multiselect>
                    </div>
                </div>
                <Multiselect v-model="area" :options="arealist" class="Must" placeholder="请选择地区"></Multiselect>
            </div>
            <div class="address">
                <input type="text" placeholder="详细地址" v-model="street">
            </div>
            <div class="redios"><input type="checkbox" class="checks">设为默认地址</div>
            <button @click="saveFn" class="btns">保存</button>
        </div>
        <Toast ref="toast" class="to"></Toast>
        <Toast ref="toasts" class="tos"></Toast>
        <Toast ref="toastss" class="toss"></Toast>
    </div>
</template>

<script>
    import {
        getCookie
    } from '../.././utils/utils.js';
    import Multiselect from 'vue-multiselect';
    import "vue-multiselect/dist/vue-multiselect.min.css";
    import axios from 'axios';
    import Toast from '../.././plugins/index.js';
    export default {
        data() {
            return {
                name: "",
                phone: "",
                province: "",
                city: "",
                area: "",
                provlist: [],
                citylist: [],
                arealist: [],
                street: ""
            }
        },
        created() {
            // console.log(this.$route.query);
            // console.log(decodeURI(this.$route.query.province));
            let {type, name, phone, province, city, area, street} = this.$route.query;
            if(type="edit"){
                this.name=name,
                this.phone=phone,
                this.province={name:decodeURI(province)},
                this.city={name:city},
                this.area=area,
                this.street=street
            }
            this.$https.get('/api/city').then(res => {
                this.provlist = res;
            })
        },
        methods: {
            provChange(a, b) {
                this.citylist = a.city
                this.city = ""
            },
            cityChange(a) {
                this.arealist = a.area
                this.area = ""
            },
            saveFn() {
                let data = {
                    province: this.province.name,
                    city: this.city.name,
                    area: this.area,
                    street: this.street,
                    phone: this.phone,
                    name: this.name
                }
                if (!data.province || !data.city || !data.area || !data.street || !/^1[3578]\d{9}$/.test(data.phone)) {
                    this.$refs.toast.active('请选择城市区信息')
                    this.$refs.toasts.active('请输入正确手机格式')
                } else {
                    this.$https.post('/api/addaddr', {
                        data
                    }).then(res => {
                        if (res.code == "1") {
                            this.$refs.toast.active('添加成功')
                        }
                    })
                    setTimeout(() => {
                        this.$router.push({
                            name: "address"
                        })
                    }, 2000)
                }
            }
        },
        components: {
            Multiselect
        }
    }
</script>

<style scoped>
    /* @import url("vue-multiselect/dist/vue-multiselect.min.css")*/
    @import url(./collectGoods.css)
</style>