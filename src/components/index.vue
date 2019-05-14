<template>
  <div class="index">
    <h1>随心工具集合</h1>
    <div  class="box-card" v-for="(item,index) in list" :key="index">
      <el-card>
        <router-link :to="item.path">
          <div>
            <img :src="item.src" alt="" width="70" height="70">
            <p class="title">{{item.name}}</p>
            <p>{{item.info}}</p>
          </div>
        </router-link>
      </el-card>
    </div>

  </div>
</template>

<script>
  import pf from'../assets/pf.png'
  import gq from'../assets/gq.png'

  export default {
    name: "index",
    data() {
      return {
        list: [
          {
            name: '电影实时票房',
            path: '/dy',
            info: '24小时更新电影票房，查看最新的排名',
            src: pf
          },
          {
            name: '歌曲搜索',
            path: '/music',
            info: '搜索热门歌曲，部分可下载收费音乐',
            src: gq
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
    div{
      text-align: center;
      img{
        border-radius: 10px;
      }
    }
  }

  .box-card:hover{
    transform: translate3d(0,-.3rem,0);
    transition: all .3s ease;
    .el-card{
      background-color: #4293f4!important;
      p{
        color: #fff;
      }
    }
  }

  @media screen and (max-width:620px){
    .box-card {
      display: block;
      margin: 20px auto;
    }
  }
</style>
