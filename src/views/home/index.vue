<template>
  <div class="login-wrap">
    <!-- 侧边导航 -->
    <div class="aside-menu" :width="isCollapse ? '30px' : '200px'">
      <div class="title">
        <img
          class="headImg"
          src="../../assets/images/home/logo.5d3f0e4f.png"
          alt=""
        />
        <div class="title-right" v-if="!isCollapse">
          <div class="title-right-big">健康康复</div>
          <div class="title-right-small">智能管理云平台</div>
        </div>
      </div>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#028077"
        text-color="#F1F3F4"
        active-text-color="#ffffff"
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="iconfont icon-zhanghuxinxi"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="iconfont icon-rizhi"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <!-- 顶部导航 -->
      <div class="navbar">
        <!-- 展开/折叠 -->
        <div class="collapse-icon" @click="isCollapse = !isCollapse">
          <i class="iconfont icon-zhedie-zhankai" v-if="isCollapse"></i>
          <i class="iconfont icon-zhedie-shouqi" v-else></i>
        </div>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">账号管理</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {}
};
</script>
<style lang='less' scoped>
.login-wrap {
  display: flex;
  height: 100vh;
  .aside-menu {
    background-color: #028077;
    display: flex;
    flex-direction: column;
    transition: all 0.5s linear;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .title {
      height: 56px;
      display: flex;
      padding-left: 10px;
      align-items: center;
      overflow: hidden;
      .headImg {
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }
      .title-right {
        font-size: 14px;
        color: #fff;
        .title-right-small {
          font-size: 12px;
        }
      }
    }
  }
  .main {
    flex: 1;
    .navbar {
      display: flex;
      align-items: center;
      .collapse-icon {
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        &:hover {
          background-color: #f9f9f9;
        }
        .icon-zhedie-zhankai,
        .icon-zhedie-shouqi {
          color: #aaa;
        }
      }
    }
  }
  .iconfont {
    color: #fff;
    margin-right: 15px;
    font-size: 18px;
  }
  .el-menu {
    border: 0;
  }
}
</style>