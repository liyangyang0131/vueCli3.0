<template>
  <section class="demo">
    <ul class="step clearfix">
      <li class="item">1</li>
      <li class="triangle"></li>
      <li class="item">2</li>
      <li class="triangle"></li>
      <li class="item">3</li>
      <li class="triangle"></li>
    </ul>
  </section>
</template>
<script lang="ts">
export default {
    name:'Step',
}
</script>

<style lang="scss">
.demo{
  padding-top:20px;
  .clearfix:after{
    content:'';
    display:block;
    clear:both;
  }
  .step{
    text-align: center;
    color:#fff;
    line-height:40px;
    font-weight: bold;
    margin-bottom:30px;
    .item{
      float:left;
      width:40px;
      height:40px;
      background:blue;
      border-radius:50%;
      margin-right:10px;
    }
    .triangle{
      margin-top:10px;
      float:left;
      width:0;
      height:0;
      border-width:10px;
      border-style:solid;
      border-color:transparent transparent transparent #ccc;
    }
  }
}
</style>

