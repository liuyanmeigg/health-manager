<template>
  <div class="login-wrap">
    <!-- 头部 -->
    <div class="top">
      <span class="title">严重精神障碍患者服药管理</span>
      <div class="tip">云平台</div>
    </div>
    <div class="main">
      <!-- 登录 -->
      <div class="login-box">
        <span class="login-box-title">用户登录</span>
        <el-form :model="form" class="form" :rules="rules" ref="loginForm">
          <el-form-item class="form-item" prop="name">
            <el-input v-model="form.name" placeholder="请输入登录账号">
              <template slot="prefix">
                <i class="iconfont icon-denglu"></i> </template
            ></el-input>
          </el-form-item>
          <el-form-item class="form-item" prop="password">
            <el-input
              v-model="form.password"
              placeholder="请输入登录密码"
              show-password
            >
              <template slot="prefix"
                ><i class="iconfont icon-denglumima-"></i></template
            ></el-input>
          </el-form-item>
          <el-form-item class="form-item">
            <button
              class="login-btn"
              @click.prevent="login"
              :disabled="isLogining"
              :class="{ disabled: isLogining }"
            >
              登录
            </button>
          </el-form-item>
        </el-form>
        <a
          class="download"
          href="../../../public/新建 Microsoft Word 文档.docx"
          download="新建 Microsoft Word 文档.docx"
          >谷歌浏览器下载</a
        >
      </div>
      <!-- 滑块验证 -->
      <el-dialog
        class="slide-box"
        width="350px"
        center
        :visible.sync="slideVerify"
      >
        <!-- <slide-verify
          class="slide-verify"
          ref="slideblock"
          @again="onAgain"
          @success="onSuccess"
          :slider-text="text"
          :accuracy="accuracy"
          @fail="onFail"
        ></slide-verify> -->
        <slide-verify
          ref="slideblock"
          @success="onSuccess"
          @again="onAgain"
          @fulfilled="onFulfilled"
          @fail="onFail"
          @refresh="onRefresh"
          :slider-text="text"
          :imgs="imgs"
          :accuracy="accuracy"
        ></slide-verify>
      </el-dialog>
    </div>
    <footer>技术支持：北京福乐云数据科技有限公司 客服电话：4006-12320-7</footer>
  </div>
</template>

<script>
import img0 from '@/components/SlideVerify/assets/img.jpg';
import img1 from '@/components/SlideVerify/assets/img1.jpg';
import img2 from '@/components/SlideVerify/assets/img2.jpg';
import img3 from '@/components/SlideVerify/assets/img3.jpg';
import img4 from '@/components/SlideVerify/assets/img4.jpg';
import img5 from '@/components/SlideVerify/assets/img5.jpg';
export default {
  name: 'Login',
  data() {
    return {
      // 表单
      form: {
        name: 'admin',
        password: '123456'
      },
      // 滑块
      text: '向右滑动->',
      // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
      accuracy: 4,
      imgs: [img0, img1, img2, img3, img4, img5],
      slideVerify: false,
      slideVerifyLoading: true,
      isLogining: false,
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      }
    };
  },
  watch: {
    slideVerify: function (newval, oldval) {
      if (!newval) {
        this.$refs.slideblock.reset();
        this.msg = '';
      }
    }
  },
  methods: {
    // 登录验证
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (!valid) return;
        this.slideVerify = true;
      });
    },
    // 滑块
    onSuccess() {
      if (this.form.name == 'admin' && this.form.password == '123456') {
        this.isLogining = true;
        this.$message({
          message: '验证通过，正在登录...',
          type: 'success',
          duration: '1000'
        });
        setTimeout(() => {
          this.$router.push('/home');
        }, 2000);
      } else {
        this.isLogining = false;
        this.$message.error('账号或密码错误，请重新操作');
      }
      this.slideVerify = false;
    },
    onAgain() {
      // 刷新
      this.$refs.slideblock.reset();
    },
    handleClick() {
      this.$refs.slideblock.reset();
    },
    onFail() {
      this.$message.error('验证失败请重新操作');
    },
    onFulfilled() {},
    onRefresh() {}
  }
};
</script>
<style lang="less" scoped>
.login-wrap {
  width: 100%;
  .top {
    display: flex;
    height: 70px;
    padding: 0 30px;
    align-items: center;
    .title {
      font-size: 18px;
      color: #333f5e;
      letter-spacing: 0.9px;
      font-weight: 600;
    }
    .tip {
      margin-left: 10px;
      width: 50px;
      height: 20px;
      background: #028077;
      text-align: center;
      font-size: 13px;
      border-radius: 5px;
      color: #ffffff;
    }
  }
  // 登录
  .main {
    height: 70vh;
    background-image: url(@/assets/images/login/login_bg.png);
    position: relative;
    .login-box {
      position: absolute;
      right: 90px;
      top: 50%;
      transform: translateY(-50%);
      width: 345px;
      height: 400px;
      opacity: 0.9;
      background: #ffffff;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .login-box-title {
        font-size: 16px;
        color: #333f5e;
        letter-spacing: 0.8px;
        text-align: center;
        font-weight: 600;
        margin-bottom: 50px;
      }
      .form {
        .form-item {
          display: flex;
          // justify-content: space-between;
          width: 261px;
          height: 42px;
          padding: 0 5px;
          border: 1px solid #cfd7e1;
          border-radius: 8px;
          background: #ffffff;
          &:last-child {
            padding: 0;
            border: 0;
          }
          .login-btn {
            width: 261px;
            height: 42px;
            background: #00948a;
            border: 1px solid #028077;
            border-radius: 8px;
            font-size: 14px;
            color: #ffffff;
            letter-spacing: 7px;
            font-weight: 600;
            cursor: pointer;
            &.disabled {
              background-color: #999;
              border: 0;
              cursor: not-allowed;
            }
          }
        }
      }
      .download {
        font-size: 12px;
        color: #00948a;
        letter-spacing: 0.6px;
        font-weight: 600;
        border-bottom: 1px solid transparent;
        &:hover {
          cursor: pointer;
          border-bottom: 1px solid #00948a;
        }
      }
    }
    // 滑块
    .slide-box {
      position: absolute;
      .tips-words {
        position: absolute;
        bottom: 70px;
        left: 50%;
        transform: translateX(-50%);
      }
      /deep/ .slide-verify-refresh-icon {
        right: 27px;
        top: -42px;
      }
      /deep/.el-dialog__close {
        font-size: 23px;
      }
    }
  }
  footer {
    margin-top: 20px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    color: #999;
  }
}
</style>
<style>
::v-deep .form-item .el-input-group__prepend {
  border: 0;
}
</style>