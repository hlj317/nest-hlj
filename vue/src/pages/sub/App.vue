<!-- @format -->
<template>
    <div class="wrapper">
        <h1>{{color}}</h1>
        <button @click="change">改变值</button>
        <h1>{{obj.name}}</h1>
        <h1>{{obj.age}}</h1>
        <button @click="changeObj">改变对象了哈哈哈哈</button>
        <HelloWorld></HelloWorld>
    </div>
</template>

<script lang="ts">
import { ref, watch, reactive,onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    components: { HelloWorld },
    setup () {
        let color=ref(<string>('red'));
        let n = 0;
        let change = ()=>{
            color.value = 'green' + (++n);
            console.log("aaa");
        }
        let obj = reactive({
            name:"hlj",
            age:50
        })
        let changeObj = ()=>{
            obj.name = 'ppt';
            obj.age = 32;
        }
        return {
            color,
            change,
            obj,
            changeObj
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
