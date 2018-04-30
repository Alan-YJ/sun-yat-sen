<template>
  <div class='venue-wrapper'>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class='is-link' :to='{path:"/"}'>首页</el-breadcrumb-item>
      <el-breadcrumb-item >场馆简介</el-breadcrumb-item>
      </el-breadcrumb>
      <div class='content-wrapper'>
        <keep-alive>
            <SliderLeft class='slider'></SliderLeft>
        </keep-alive>
        <keep-alive>
            <router-view class='content'></router-view>
        </keep-alive>
      </div>
  </div>
</template>
<script>
import SliderLeft from "./slideLeft";
export default {
  components: {
    SliderLeft
  }
};
</script>
<style lang="sass" scoped>
    .venue-wrapper
        margin: 0 auto
        width: 998px
        .el-breadcrumb
            margin-top: 15px
            .is-link
                color: #000
                cursor: pointer
                &:hover
                    color: red
        .content-wrapper
            display: flex
            margin-top: 15px
            .slider
                width: 175px
            .content
                margin-left: 15px
                flex: 1
</style>
