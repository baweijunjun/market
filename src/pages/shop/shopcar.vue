<template>
    <div class="main">
        <div>
            <input type="checkbox" class="check" @click="flag=!flag">
            <ul v-for="data in data">
                <img :src="data.imageurl">
                <div class="listRight">
                    <p class="text">{{data.wname}}</p>
                    <p>￥{{data.jdPrice}}</p>
                    <div class="hun">
                        <li>
                            <span @click="sum('-')">-</span>
                            <span>{{count}}</span>
                            <span @click="sum('+')">+</span>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
    import {
        getCookie,
        bus
    } from '../.././utils/utils.js'
    export default {
        props: {
            data: {
                required: true,
                type: Object,
            }
        },
        data() {
            return {
                count: 1,
                flag: false,
            }
        },
        methods: {
            sum(flag) {
                if (flag == "+") {
                    ++this.count;
                } else {
                    if (this.count <= 1) return;
                    --this.count;
                }
            }
        },
        watch: {
            flag(n, o) {
                bus.$emit("goodsCheaked", { //自定义事件，挂在bus实例上
                    price: n ? this.count * this.data.data.jdPrice : 0
                })
            },
            data(n, o) {
                bus.$emit("goodsCheaked", { //自定义事件，挂在bus实例上
                    price: this.flag ? this.count * this.data.data.jdPrice : 0
                })
            }
        },
    }
</script>

<style lang="">

</style>