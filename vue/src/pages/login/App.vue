<!-- @format -->
<template>
<div class="wrapper">
    <div class="user">
        <span>用户名</span>
        <input type="text" v-model="username" />
    </div>
    <div class="password">
        <span>密码</span>
        <input type="password" v-model="password" />
    </div>
    <div class="register-btn">
        <button @click="registerBtn()">注册</button>
    </div>
</div>
</template>

<script lang="ts">
import { Vue, Options, prop } from "vue-class-component";
import { ref, watch, reactive,onMounted } from "vue";
import { apiGetUserInfo } from '@/api/user.ts'

export default {
    setup () {
        let username=ref();
        let password=ref();
        let registerBtn = ()=>{
            const param = {
                name:username.value,
                password:password.value,
                sex:1
            }
            apiGetUserInfo(param).then((res:any) => {
                if (res && res.name) {
                    alert("注册成功");
                }
            })
        }
        return {
            username,
            password,
            registerBtn
        }
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a {
  .b {
    font-size: 100px;
  }
}
</style>
