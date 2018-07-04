<template>
  <div id="app">
    <section >
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {}
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: .28rem;
    font-family: "微软雅黑"
  }
  body,
  html,
  #app {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  #app {
    display: flex;
    flex-direction: column;
    overflow-x:hidden;
  }
  section {
    width: 100%;
    height: 100%;
  }
</style>
