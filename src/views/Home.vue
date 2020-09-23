<template>
  <div class="home">

    <img alt="Vue logo" src="../assets/logo.png">
<!--    <h1>{{this.$store.state.users.data}}</h1>-->
    <b-button @click="test">click</b-button>
    username: {{$store.state["users/username"]}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    test(){
      console.log(this.$store.state.users.username)
      console.log(localStorage.getItem('username'))
    }
  }
}
</script>
