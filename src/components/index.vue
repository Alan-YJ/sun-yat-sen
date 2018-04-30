<template>
  <div class='wrapper'>
      首页
      <router-link to='/Venue'>场馆简介</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
}
</script>
<style lang='sass' scoped>
    .wrapper
        display flex
        width: 998px
        margin: 0 auto
        padding: 5px
        
    
    
</style>
