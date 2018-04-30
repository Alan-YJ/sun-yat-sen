<template>
  <div v-if='site_info!=null'>
    <div class='header'>
      <!-- 这里应该是可以点击跳转到订阅页面 -->
      <div class='avatar'>
        <img :src="site_info.pic">
      </div>
      <router-link :to='"/Venue/"+site_info.site_no'>{{site_info.title}}</router-link>
      <span>{{site_info.desc}}</span>
    </div>
    <div class='content-info'>
      <div>{{site_info.desc}}</div>
      <img :src="pic" v-for='(pic,index) in site_info.pic' :key='"pic"+index'>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      site_id: 0,
      site_info: null
    };
  },
  watch: {
    $route(to, form) {
      this.showInfo();
    }
  },
  created() {
    this.showInfo();
  },
  computed: {},
  methods: {
    showInfo() {
      let id = this.$route.params.id;
      Axios.get(`http://localhost:3000/inventory?site_no=${id}`).then(res => {
        this.site_info = res.data.data[0];
      });
    }
  }
};
</script>
<style lang="sass" scoped>
    .content
      margin-bottom: 50px
      padding: 18px 20px
      width: 100%
      border: 1px solid #ebeef5
      background-color: #fff
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
      .header
        height: 50px
        width: 100%
        font-size: 12px
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        line-height: 43px
        a
          margin-left: 5px
          color: blue
          text-decoration: none
        .avatar
          width: 50px 
          height: 50px
          line-height: 50px
          float: left
          img
            width: 50px
      .content-info
        margin-left: 50px  
        font-size: 22px
        line-height: 32px
            
</style>
