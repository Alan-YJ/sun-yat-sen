<template>
  <div id="app">
    <header>
      Header
    </header>
    <router-view/>
    <footer>
      Footer
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import "./common/css/reset.css";
  header,footer {
    height:140px;
    line-height:140px;
    text-align:center;
    color:white;
    font-size:48px;
    background-color:#005824
  }
</style>

