<template>
  <section class="fullcalendar">
    <!-- dayGridMonth,timeGridWeek,timeGridDay,listWeek -->
    <FullCalendar ref="fullCalendar"
      :events="monthData"
      defaultView="dayGridMonth"
      :header="{
        left: 'prev',
        center: 'title',
        right: 'next'
      }"
      locale="zhCn"
      timeFormat='YYYY/MM'
      eventLimit = '3'
      eventLimitText="更多"
      height='600'
      :plugins="calendarPlugins"
      @dateClick="handleDateClick"
      @eventClick="handleEventClick"
       />
  </section>
</template>

<script>
import FullCalendar from 'public/static/@fullcalendar/vue'
import dayGridPlugin from 'public/static/@fullcalendar/daygrid/main'
import zhCn from 'public/static/@fullcalendar/core/locales/zh-cn.js'

export default {
    name:'Fullcalendar',
    components:{FullCalendar},
    data(){
        return{
            calendarPlugins: [ dayGridPlugin ],
            monthData: [
              {
                title: "eeeeeeeee", // 事件内容
                start: "2019-09-11", // 事件开始时间
                end: "2019-09-11", // 事件结束时间
                classNames:['red']
                // backgroundColor: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
              },
              {
                title: "aaa", // 事件内容
                start: "2019-09-11", // 事件开始时间
                end: "2019-09-11", // 事件结束时间
                // cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
              },
              {
                title: "bbb", // 事件内容
                start: "2019-09-11", // 事件开始时间
                end: "2019-09-11", // 事件结束时间
                // cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
              },
              {
                title: "ccc", // 事件内容
                start: "2019-09-11", // 事件开始时间
                end: "2019-09-11", // 事件结束时间
                // cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
              },
              {
                title: "ddd", // 事件内容
                start: "2019-09-11", // 事件开始时间
                end: "2019-09-11", // 事件结束时间
                // cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
              },
              {
                title: "sssss",
                start: "2019-09-25",
                end: "2019-09-25",
                // cssClass: "blue"
              },
              {
                title: "dddddddd",
                start: "2019-09-09",
                end: "2019-09-09",
                // cssClass: "blue"
              },
              {
                title: "cccccc",
                start: "2019-09-20",
                end: "2019-09-20",
                // cssClass: "red"
              },
              {
                title: "aaaaaa",
                start: "2019-09-01",
                end: "2019-09-01",
                // cssClass: "red"
              },
              {
                title: "bbbbbb",
                start: "2019-09-05",
                end: "2019-09-05",
                // cssClass: "blue"
              }
            ],
        }
    },
    methods:{
      handleDateClick(arg) {
        alert(arg.date)
      },
      handleEventClick({el,event,jsEvent,view}){
        console.log(event);
      }
    },

}
</script>

<style lang="scss">
@import 'public/static/@fullcalendar/core/main.css';
@import 'public/static/@fullcalendar/daygrid/main.css';
.fullcalendar{
  padding-top:20px;
  .red{
    background-color:red;
    border-color:red;
  }
}
</style>

