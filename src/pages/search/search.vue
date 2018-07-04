<template>
    <div class="searchs">
        <input type="text" placeholder="请输入搜索内容" @input="search" v-model="keywords">
        <ul v-html="htmls">
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                keywords: "",
                htmls:"",
            }
        },
        methods: {
            search() {
                this.$http.get(`https://m.gome.com.cn/index.php?ctl=index&act=keywordsPromptNew&keystr=${this.keywords}dotime=17951828`).then(res => {
                    this.htmls=res.data;
                })
            }
        }
    }
</script>

<style lang="">
   .searchs{
       width:100%;
       height:100%;
   }
   .searchs input{
       width:100%;
       height:0.7rem;
       text-align:center;
       border:none;
   }
</style>