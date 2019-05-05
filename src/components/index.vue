<template>
  <div class="index">
    <h1>随心工具集合</h1>
    <el-card class="box-card" v-for="(item,index) in list" :key="index">
      <router-link :to="item.path">
        <div>
          <p class="title">{{item.name}}</p>
          <p>{{item.info}}</p>
        </div>
      </router-link>
    </el-card>
  </div>
</template>

<script>


  export default {
    name: "index",
    data() {
      return {
        list: [
          {
            name: '电影实时票房',
            path: '/dy',
            info: '24小时更新电影票房，查看最新的排名'
          },
          {
            name: '歌曲搜索',
            path: '/music',
            info: '搜索热门歌曲，部分可下载收费音乐'
          }
        ]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  body {
    background: #fff;
  }

  .index {
    padding: 20px;
    margin-top: 50px;

    h1 {
      text-align: center;
    }
    .title{
      font-weight: bold;
    }
    p{
      padding: 10px;
    }
  }

  .box-card {
    display: inline-block;
    width: 250px;
    margin: 20px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #333;
  }
</style>
