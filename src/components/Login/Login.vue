<template lang="html">
  <div id="login" class="container my-container">
    <h1>银行卡存取款系统</h1>
    <div class="row" v-if="show">
      <div class="my-border" id="logContainer">
        <h2 class="text-center">登录</h2>
        <form class="form-horizontal" id="loginForm">
          <div class="form-group relative">
            <label for="idCard" class="col-sm-3 control-label">身份证号:</label>
            <div class="col-sm-9">
                <input type="text" v-model="user.idCard" class="form-control" id="idCard" placeholder="身份证号" />
            </div>
            <div class="alert alert-danger absolute" id="idError" role="alert">请输入正确的18位身份证号</div>
            <div class="alert alert-danger absolute" id="nofound" role="alert">此身份证号并没有注册，请先注册!</div>
          </div>
          <div class="form-group relative">
            <label for="password" class="col-sm-3 control-label">密码:</label>
            <div class="col-sm-9">
              <input type="password" v-model="user.password" class="form-control" id="password" placeholder="密码" />
            </div>
            <div class="alert alert-danger absolute" id="passError" role="alert">密码至少由6位字符组成且不能含有空格</div>
            <div class="alert alert-danger absolute" id="nopass" role="alert">密码错误，请重新输入!</div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default" @click="register">注册</button>
              <button type="button" class="btn btn-primary" @click="login" id="go">登录</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row" v-if="hidden">
      <div class="my-border" id="regContainer">
        <h2 class="text-center">注册</h2>
        <form class="form-horizontal" id="registerForm">
          <div class="form-group relative">
            <label for="regIdCard" class="col-sm-3 control-label">身份证号:</label>
            <div class="col-sm-9">
                <input type="text" v-model="user.idCard" class="form-control" id="regIdCard" placeholder="身份证号" />
            </div>
            <div class="alert alert-danger absolute" id="regIdError" role="alert">请输入正确的18位身份证号</div>
            <div class="alert alert-danger absolute" id="repeat" role="alert">此身份证号已经注册过!</div>
          </div>
          <div class="form-group relative">
            <label for="regPassword" class="col-sm-3 control-label">密码:</label>
            <div class="col-sm-9">
              <input type="password" v-model="user.password" class="form-control" id="regPassword" placeholder="密码" />
            </div>
            <div class="alert alert-danger absolute" id="regPassError" role="alert">密码至少由6位字符组成且不能含有空格</div>
          </div>
          <div class="form-group relative">
            <label for="conPassword" class="col-sm-3 control-label">确认密码:</label>
            <div class="col-sm-9">
              <input type="password" v-model="conPassword" class="form-control" id="conPassword" placeholder="确认密码" />
            </div>
            <div class="alert alert-danger absolute" id="conPassError" role="alert">两次输入密码不一致!</div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default" @click="back">返回</button>
              <button type="button" class="btn btn-primary" @click="doRegister" id="regGo">注册</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import $ from 'jquery';
import '../../assets/jscript/login';

export default {
  name: 'login',
  data () {
    return {
      user: {
        idCard: '',
        password: ''
      },
      conPassword: '',
      show: true,
      hidden: false,
      apiUrl: 'http://localhost:8080/'
    };
  },
  mounted () {
    this.initEvent();
  },
  methods: {
    initEvent () {

    },
    login () {
      this.$router.push('/Home');
    },
    register () {
      togglePanel();
      this.user = {idCard: '', password: ''};
      [this.show, this.hidden] = [this.hidden, this.show];
    },
    doRegister () {
      this.$http.post(this.apiUrl, this.user).then((response) => {

      });
    },
    back () {
      this.user = {idCard: '', password: ''};
      this.conPassword = '';
      [this.show, this.hidden] = [this.hidden, this.show];
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.my-container
  color: #FFF
  h1
    font-size: 34px
    text-align: center
    color: #FFF
  .my-border
    width: 475px
    margin: 30px auto
    border-radius: 5px
    padding: 30px
    background-color: rgba(0, 0, 0, 0.7)
    overflow: hidden
    &:hover
      background-color: rgba(0, 0, 0, 0.9)
</style>
<style scoped lang="css" rel="stylesheet/css">
.relative {
  position: relative
}
.absolute {
  position: absolute
}
#idError,
#passError,
#regIdError,
#regPassError,
#conPassError,
#repeat,
#nofound,
#nopass {
	display: none;
	width: 69%;
	padding: 10px;
	top: -100%;
	left: 28%;
	z-index: 1;
}

button {
  width: 100px;
  float: right;
  margin-left: 5px;
}

@media screen and (max-width: 768px) {
  .my-border {
    width: 100%;
  }
  #idError,
  #passError,
  #regIdError,
  #regPassError,
  #conPassError,
  #repeat,
  #nofound,
  #nopass {
    width: 100%;
    left: 0;
    top: -30%;
  }
}
</style>
