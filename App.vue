<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    {{ ruleForm.username }}
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    {{ ruleForm.passworld }}
    <el-form-item label="密码" prop="passworld">
      <el-input type="password" v-model="ruleForm.passworld"></el-input>
    </el-form-item>
    <el-form-item>
      <button type="submit" @click="submitForm">提交</button>
    </el-form-item>
  </el-form>
</template>

<script>
import elForm from './component/form.vue';
import elFromItem from './component/form-item.vue';
import elInput from './component/form-input.vue';
export default {
  name: 'App',
  components: { 'el-form': elForm, 'el-form-item': elFromItem, 'el-input': elInput },
  data() {
    return {
      ruleForm: {
        passworld: '',
        username: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名' },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
          },
        ],
        passworld: [{ required: true, message: '请输入密码' }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style></style>
