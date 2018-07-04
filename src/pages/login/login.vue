<template>
    <div class="regs">
        <h1>登陆</h1>
        <p><label for="username">用户名</label><input type="text" v-model="username" id="username" placeholder="请输入手机号"></p>
        <p><label for="password">密码</label><input type="password" v-model="password" id="password" placeholder="请输入密码"></p>
        <button @click="goToLogin">登录</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            goToLogin() {
                if (!this.username || !this.password) {
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
                this.$https.post('/api/login', {
                    username: username,
                    password: password
                }).then(res => {
                    if (res.code == 1) {
            
                    } else {
                         this.$router.push({
                            name: 'user'
                        })
                        
                    }
                })
            }
        }
    }
</script>



<style lang="">
    .regs {
        width: 100%;
        height: 100%;
    }
    p {
        margin-top: 70px;
        border-bottom: 1px solid #ccc;
        line-height: 80px;
    }
    label {
        width: 15%;
        display: inline-block;
        text-align: center;
    }
    input {
        width: 85%;
        border: none;
        text-align: center;
    }
    button {
        width: 60%;
        margin: 0 20%;
        text-align: center;
        border: none;
        background: none;
        margin-top: 50px;
        padding: 25px 0;
        background: #FC4141;
        color: #fff;
        border-radius: 100px;
    }
</style>