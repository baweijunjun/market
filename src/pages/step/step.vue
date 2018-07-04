<template>
    <div class="set_box">
        <div class="exit_box">
            <div class="set_title">
                <span class="iconfont icon-xiangzuo"></span>
                <h3>设置</h3>
            </div>
            <div class="set_list">
                <div class="set_tou">
                    <span>我的头像</span>
                    <div class="tou_box">
                        <p class="tou_img">
                            <img :src="url">
                            <input type="file" class="file-input" @change="fileUpload">
                        </p>
                        <span class="iconfont icon-angle-right"></span>
                    </div>
                </div>
                <div class="set_username">
                    <span>用户名</span>
                    <div class="tou_box">
                        <span>路飞</span><span class="iconfont icon-angle-right"></span>
                    </div>
                </div>
                <div class="set_username">
                    <span>我的二维码名片</span>
                    <div class="tou_box">
                        <span>路飞</span><span class="iconfont icon-angle-right"></span>
                    </div>
                </div>
            </div>
            <div class="exit_login">
                <button @click="exitLogin">退出登录</button>
            </div>
        </div>
        <Toast ref="toast" class="to"></Toast>
    </div>
</template>
<script>
 import {
        delCookie,
        getCookie,
    } from '../.././utils/utils.js'
    export default {
        data() {
            return {
                url:""
            };
        },
        methods: {
            fileUpload(e) {
                let fd = new FormData();
                fd.append('img',e.target.files[0])
                console.log(fd);
                this.$https.post('/api/upload',fd).then(res=>{
                    console.log(res)
                    this.url = res.url
                })
            },
            exitLogin() {
                this.$refs.toast.active('退出成功，即将返回')
                setTimeout(() => {
                    this.$router.push({
                        name: "first"
                    })
                }, 2000)
            }
        }
    };
</script>
<style scoped>
    @import url(./step.css)
</style>


