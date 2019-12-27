<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components:{Header}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main{
  padding:0 $left-right-padding;
  margin-top:$margin-top;
}
</style>
