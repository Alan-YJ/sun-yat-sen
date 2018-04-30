<template>
  <div>
    <el-card class="box-card" >
        <div slot="header" class="clearfix">
            <span>场馆简介</span>
        </div>
        <el-menu  :collapse='true' default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" >
            <el-submenu :index="index" v-for='(item,index) in venueList' :key='"item"+item.site_no+index'>
                <template slot="title"  class='group'>
                    <div class='group-name'>{{item.title}}</div>
                    <i class="el-icon-arrow-right"></i>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for='subitem in item.items' :key='subitem.item.site_no' index="1-1" @click='checkInfo(subitem)'>{{subitem.item.title}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-card>
    
  </div>
</template>
<script>
import Axios from "axios";
import Venue from "common/js/venue";
export default {
  data() {
    return {
      venueList: null,
      venue: []
    };
  },
  created() {
    // Axios.get("http://localhost:3000/inventoryList").then(res => {
    //   if (res.data.code == 0) {
    //     this.venueList = res.data.data;
    //     console.info(this.venueList)
    //   }
    // });
    this.$nextTick(() => {
      this._getVenues();
    });
  },
  computed: {},
  methods: {
    _getVenues() {
      Axios.get("http://localhost:3000/inventory")
        .then(res => {
          if (res.data.code == 0) {
            this.venue = res.data.data;
            this._normalizeVenue(this.venue);
          }
        })
        .catch(err => {
          throw Error(err);
        });
    },
    //初始化左侧栏的显示数据，如果数据和接口数据不一致，修改此处即可
    _normalizeVenue(list) {
      let map = {};
      list.forEach((item, index) => {
        if (map[item.direction] == undefined) {
          map[item.direction] = {
            title: this.getDirectionName(item.direction),
            items: []
          };
        }
        map[item.direction].items.push({
          item
        });
      });
      this.venueList = map;
    },
    getDirectionName(num) {
      switch (num) {
        case "south":
          return "南校区";
        case "north":
          return "北校区";
        case "east":
          return "东校区";
        case "west":
          return "西校区";
        default:
          return "珠海校区";
      }
    },
    handleClose() {},
    handleOpen() {},
    checkInfo(item) {
      this.$router.push({ path: `/Venue/${item.item.site_no}` });
    }
  }
};
</script>
<style lang="sass" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) 
    min-height: 400px
    .group-name
        display : inline-block
  .el-menu--collapse
    width: 100%
  .group-name
    display: inline-block
    width: 80%
  .text 
    font-size: 14px
  .item 
    margin-bottom: 18px
  .clearfix:before,
  .clearfix:after 
    display: table
    content: ""
  .clearfix:after 
    clear: both
  .box-card 
    width: 100%
  .el-icon-arrow-right
    
  
</style>
