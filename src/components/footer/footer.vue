<template>
    <footer>
        <ol>
            <li>
                <router-link to="/">
                    <img src="../../.././static/3.png" alt="">
                    <p class="s">首页</p>
                </router-link>
            </li>
            <li>
                <router-link to="/collt">
                    <img src="../../.././static/5.png" alt="">
                    <p class="s">分类</p>
                </router-link>
            </li>
            <li>
                <router-link to="/shop">
                    <img src="../../.././static/6.png" alt="">
                    <p class="s">购物车</p>
                </router-link>
            </li>
            <li>
                <router-link to="/user">
                    <img src="../../.././static/4.png" alt="">
                    <p class="s">我的</p>
                </router-link>
            </li>
        </ol>
    </footer>
</template>


<script>
import './footer.css'
</script>

<style scoped>

</style>