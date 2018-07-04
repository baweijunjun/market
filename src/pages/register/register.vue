<template>
    <div class="reg">
        <h1>注册</h1>
        <p><label for="username">用户名</label><input v-model="username" type="text" id="username" placeholder="请输入手机号"></p>
        <p><label for="password">密码</label><input v-model="password" type="password" id="password" placeholder="请输入密码"></p>
        <p><label for="password-r">密码</label><input v-model="passwordr" type="password-r" id="password" placeholder="请重新输入密码"></p>
        <button @click="goToRegister">注册</button>
    </div>
</template>

<script>
import './register.css'
    export default {
        data() {
            return {
                username: "",
                password: "",
                passwordr: ""
            }
        },
        methods: {
            goToRegister() {
                if (!this.username || !this.password || !this.passwordr) {
                    alert('请填写所有信息')
                    return
                }
                let regPhone = /^1[3578]\d{9}$/;
                if (!regPhone.test(this.username)) {
                    alert('请输入正确的手机号')
                    return
                }
                let regPassword = /\d{6,}/;
                if (!regPassword.test(this.password)) {
                    alert('请输入格式正确的密码')
                    return
                }
                if (this.password !== this.passwordr) {
                    alert('前后密码输入不正确')
                    return
                }
                this.$router.push({
                    name: "login"
                })
                this.$https.post('/api/register', {
                    username: this.username,
                    password: this.password
                }).then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style lang="">

</style>