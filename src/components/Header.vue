<template>
    <section class="header">
        <div class="left">
            <div class="logo"></div>
        </div>
       <div class="right">
            <ul class="clearfix">
                <router-link tag="li" v-for='(item,index) in menus' :key='index' :to='item.href'>
                    <span>{{item.title}}</span>
                </router-link>
            </ul>
       </div>
    </section>
</template>

<script lang="ts">
export default {
    name:'Header',
    data(){
        return{
            menus:[
                {name:'UE',title:'百度富文本',href:'/UE'},
                {name:'VueFullcalendar',title:'VueFullcalendar',href:'/VueFullcalendar'},
                {name:'Fullcalendar',title:'jQueryFullcalendar',href:'/Fullcalendar'},
                {name:'Step',title:'Step',href:'/Step'},
                {name:'iView',title:'iView',href:'/IView'},
                {name:'ElementUI',title:'ElementUI',href:'/ElementUI'}
            ]
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
    .header{
        width:100%;
        position:fixed;
        top:0;
        left:0;
        z-index:9999;
        display:flex;
        padding:5px $left-right-padding;
        background-color:#edf6ff;
        border:1px solid #e8eaec;
        .left{
            width:80px;
            // padding-right:100px;
            .logo{
                width:40px;
                height:40px;
                background:url('../assets/images/logo.png') center center no-repeat;
                background-size: cover;
            }
        }
        .right{
            flex:1;
            ul{
                // display:flex;
                width:100%;
                text-align: center;
                font-size:18px;
                line-height: 40px;
                li{
                    // flex:1;
                    width:10%;
                    margin:0 8px;
                    float:left;
                    cursor: pointer;
                }
                .router-link-active{
                    border-bottom:2px solid #ff9370;
                }
            }  
            
        }
        
    }
</style>