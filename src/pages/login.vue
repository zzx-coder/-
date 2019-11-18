<template>
  <div class="login">
    <el-form
      :model="numberValidateForm"
      ref="numberValidateForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item >
        <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
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
      }
    };
  }
};
</script>

<style scoped>
</style>