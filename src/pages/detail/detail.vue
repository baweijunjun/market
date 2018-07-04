<template>
    <div class="det">
        <iframe class="iframe" :src="$route.query.url" frameborder="0"></iframe>
    </div>
</template>
<script>
import './detail.css'
    export default {
        mounted() {
            console.log(this.$route.query.url);
        }
    }
</script>
<style lang="" scoped>

</style>