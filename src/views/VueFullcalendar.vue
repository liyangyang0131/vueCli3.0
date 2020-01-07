<template>
  <section class="vueFullcalendar">
    <FullCalendar  id="fullcalendar"
      :events="monthData"
      :config="config"
      @view-render="viewRender"
      @event-selected="eventClick"
      @day-click="dayClick"
      @more-click="moreClick"
    ></FullCalendar>
  </section>
</template>

<script lang="ts">
import FullCalendar from "public/static/vue-full-calendar/components/FullCalendar.vue";
import "public/static/fullcalendar/dist/fullcalendar.css";
import moment from "moment";
import $ from 'jquery'

export default {
  name: "VueFullcalendar",
  components: { FullCalendar },
  data() {
    return {
      config: {
        firstDay: 0,
        locale: "zh-cn",
        defaultView: "month",
        timeFormat:"HH:mm",
        header: {
          left: "prev",
          center: "title",
          right: "next"
        },
        editable: false,
        titleFormat: "YYYY-MM",
        eventLimit: 3,
        eventLimitText: "更多",
        height:600
      },
      monthData: [
        {
          title: "背景颜色", // 事件内容
          start: "2019-10-11", // 事件开始时间
          end: "2019-10-11", // 事件结束时间
          className:['red']  // 事件的样式   class名（由后台返回数据）
        },
        {
          title: "aaa", // 事件内容
          start: "2019-10-11", // 事件开始时间
          end: "2019-10-11", // 事件结束时间
          cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
        },
        {
          title: "bbb", // 事件内容
          start: "2019-10-11", // 事件开始时间
          end: "2019-10-11", // 事件结束时间
          cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
        },
        {
          title: "ccc", // 事件内容
          start: "2019-10-11", // 事件开始时间
          end: "2019-10-11", // 事件结束时间
          cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
        },
        {
          title: "ddd", // 事件内容
          start: "2019-10-11", // 事件开始时间
          end: "2019-10-11", // 事件结束时间
          cssClass: "red" // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
        },
        {
          title: "sssss",
          start: "2019-10-25",
          end: "2019-10-25",
          cssClass: "blue"
        },
        {
          title: "dddddddd",
          start: "2019-10-09",
          end: "2019-10-09",
          cssClass: "blue"
        },
        {
          title: "cccccc",
          start: "2019-10-20",
          end: "2019-10-20",
          cssClass: "red"
        },
        {
          title: "aaaaaa",
          start: "2019-10-01",
          end: "2019-10-01",
          cssClass: "red"
        },
        {
          title: "bbbbbb",
          start: "2019-10-05",
          end: "2019-10-05",
          cssClass: "blue"
        }
      ],
      
    };
  },
  methods: {
    viewRender(event:any, jsEvent:any) {
      console.log("viewRender", event, jsEvent,event.title);
      // let lastRowEle = $('.fc-row').last();
      // let len = lastRowEle.find('.fc-content-skeleton').find('.fc-other-month').length
      // if(len === 7){
      //   lastRowEle.remove();
      //   $('#fullcalendar').fullCalendar('render');
      // }
    },
    // 点击事件  // 点击当天的事件，可自己定义事件
    eventClick(event:any, jsEvent:any, pos:any) {
      console.log("eventClick", event, jsEvent, pos);
    },
    // 点击当天  // 点击当月的事件，可自己定义事件
    dayClick(day:any, jsEvent:any) {
      console.log("dayClick", day, jsEvent);
    },
    // 查看更多
    moreClick(data:any, events:any, MonthView:any) {
      console.log("moreCLick", data, events, MonthView);
    },

  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.vueFullcalendar {
  padding-top: 20px;
}
</style>
<style lang="scss">
  .vueFullcalendar{s
    .fc-button{
      border:unset;
      background:unset;
      box-shadow:unset;
      border-radius: unset;
    }
    .red {
      background-color: red;
      border-color:red;
    }
  }
</style>
