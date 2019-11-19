<template>
  <div class="login">
    <el-form ref="form" :model="map" class="login_form" label="right">
      <h3 class="demonstration ydf">娱都服管理后台登录</h3>
      <el-form-item label="账号">
        <el-input v-model="map.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="map.password" placeholder="密码"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-checkbox label="记住密码" v-model="ji_type" @change="jizhu" name="type"></el-checkbox>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="100">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: {
        username: "",
        password: ""
      },
      ji_type: false
    };
  },
  methods: {
    onSubmit() {
      this.axios.post('/yuwan/sys/login',{
        "map": this.map
      }).then(res => {
        // console.log(res)
        if(res.data.subMessage != '{0}接口请求成功'){
          this.$message.error(res.data.subMessage);
        }else{
          this.$router.push({path:'index',params: {username: this.map.username}})
        }
      })
    },
    jizhu(e){
      localStorage.jizhu = e
      if(e == true){
        localStorage.login = JSON.stringify(this.map)
      }else{
        localStorage.login = ''
      }
    }
  },
  created () {
    if(localStorage.login){
      this.map = eval('('+ localStorage.login +')')
    }
    if(localStorage.jizhu == 'true'){
      this.ji_type = true
      // console.log(this.ji_type)
    }
  }
};
</script>

<style scoped>
.login_form{
  width: 30vw;
  margin: 50px auto;
  box-shadow: 0 0 3vw 2vw #eee;
  padding: 5vw;
}
.ydf{
  text-align: center;
}
</style>