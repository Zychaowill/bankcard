<template lang="html">
  <div id="home">
    <div class="container">
      <h2>请选择您需要的业务</h2>
      <div class="row">
        <div class="buttons">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#search">
            <i class="glyphicon glyphicon-search"></i>查询余额
          </button>
          <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deposit">
            <i class="glyphicon glyphicon-arrow-up"></i>实时存款
          </button>
          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#withdraw">
            <i class="glyphicon glyphicon-arrow-down"></i>实时取款
          </button>
          <button type="button" class="btn btn-default" @click="exit">
            <i class="glyphicon glyphicon-off"></i>退出
          </button>
        </div>
      </div>
      <!-- <div class="overlay">
      </div> -->
    </div>

    <!-- 查询余额模态框 -->
    <div class="modal fade" id="search" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
              <span class="sr-only"></span>
            </button>
            <h4 class="modal-title" id="myModalLabel">查询余额</h4>
          </div>
          <div class="modal-body">
            <p class="text-center">您的余额还剩{{ money }}元</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 实时存款模态框 -->
    <div class="modal fade" id="deposit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
              <span class="sr-only"></span>
            </button>
            <h4 class="modal-title" id="myModalLabel">实时存款</h4>
          </div>
          <div class="modal-body">
            <form class="form-hotizontal" role="form">
              <div class="form-group relative">
                <label for="depositCount" class="col-sm-2 control-label">存款数</label>
                <div class="col-sm-10">
                  <input type="text" v-model="money" class="form-control" id="depositCount"
                    placeholder="请输入小于100,000大于0的数字, 不能有空格, 小数将会被向下取整" />
                  <div class="alert alert-warning absolute" id="warnDeposit" role="alert"></div>
                  <div class="alert alert-danger absoute" id="errorDeposit" role="alert">
                    请输入小于100,000大于0的数字, 不能有空格</div>
									<div class="alert alert-success absoute" id="success" role="alert"></div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="saveMoney">存款</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 实时取款模态框 -->
    <div class="modal fade" id="withdraw" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
              <span class="sr-only"></span>
            </button>
            <h4 class="modal-title" id="myModalLabel">实时取款</h4>
          </div>
          <div class="modal-body">
            <form class="form-hotizontal" role="form">
              <div class="form-group relative">
                <label for="withdrawCount" class="col-sm-2 control-label">取款数</label>
                <div class="col-sm-10">
                  <input type="text" v-model="money" class="form-control" id="withdrawCount"
                    placeholder="请输入小于100,000大于0的数字, 不能有空格, 小数将会被向下取整" />
                  <div class="alert alert-warning absolute" id="warnDraw" role="alert"></div>
                  <div class="alert alert-danger absoute" id="errorDraw" role="alert">
                    请输入小于100,000大于0的数字, 不能有空格</div>
									<div class="alert alert-success absoute" id="success" role="alert"></div>
                  <div class="alert alert-danger absolute" id="more" role="alert"></div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="getMoney">取款</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'home',
  data () {
    return {
      money: 0,
      apiUrl: 'http://localhost:8080/'
    };
  },
  methods: {
    selectMoney () {
      this.$http.get(this.apiUrl).then((response) => {

      });
    },
    saveMoney () {
      this.$http.post(this.apiUrl).then((response) => {

      });
    },
    getMoney () {
      this.$http.put(this.apiUrl).then((reponse) => {

      });
    },
    exit () {
      this.$router.push('/Login');
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container
  h2
    text-align: center
    color: #FFF
    margin-bottom: 20px
  .row
    .buttons
      width: 475px
      background-color: rgba(0, 0, 0, 0.7)
      margin: 0 auto
      &:after
        content: "."
        display: block
        height: 0
        visibility: hidden
        clear: both
      button
        width: 90%
        margin: 15px 20px
</style>
<style scoped lang="css" rel="stylesheet/css">
.modal:nth-child(n + 1) .modal-body {
  height: 79px;
}

#warnDeposit,
#errorDeposit,
#success,
#warnDraw,
#errorDraw,
#more {
  display: none;
  width: 94%;
  padding: 10px;
}

.relative {
  /*position: relative;*/
}

.absolute {
  /*position: absolute;*/
}

@media screen and (max-width: 768px) {
  #warnDeposit,
  #errorDeposit,
  #success,
  #warnDraw,
  #errorDraw,
  #more {
    width: 96%;
  }
  .buttons {
    width: 100%;
  }
}
</style>
