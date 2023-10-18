<template>
  <div class="multiple">
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h1>基于竞争传播热度消减</h1>
        </el-divider>
        <el-card shadow="hover">
          <div class="lodash-content">
            <h2 class="mt-25 mb-25">模型原理:</h2>
            <span style="font-size: 18px; line-height: 30px">
              <div>
                <span>通过使用</span>
                <b>粒子群优化(PSO)算法</b>
                <span>，对</span>
                <b>一定时间段内</b>
                <span>的社交网络语料内容进行竞争力判断</span>
                <span>，得到不同社交语料分类之间的</span>
                <b>竞争关系</b>
                <span>，通过针对分类为依据的社交网络引导手段</span>
                <span>，完成不同分类之间社交网络的引导策略库功能。</span>
                <br />
                <br />

                <span>多元竞争模块通过对</span>
                <b>给定时间窗口</b>
                <span>内的</span>
                <b>正文集合</b>
                <span>进行分析统计可以得到该时</span>
                <span>间段内社交网络不同种类文本之间的</span>
                <b>相互竞争关系</b>
                <span>，使用竞争矩阵进行表示。我们将社交网络中的文本分为</span>
                <b>15类</b>
                <span>，通过对社交网络中文本</span>
                <span>内容进行分析和计算，最终得到的</span>
                <b>竞争矩阵</b>
                呈现为15*15的实数矩阵形式。
                <br />
                <br />
                <span>竞争矩阵中</span>
                <b>数值越大</b>
                <span>，表示纵轴对应类别对横轴对应类别</span>
                <b>热度抢占强度越大</b>
                <span>，在热度消减过程中，对抢占强度大的</span>
                <span>目标投放类别进行引导，即可获得更好的消减效果。</span>
                <br />
              </div>
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-tabs type="border-card">
      <div class="three">
        <!--  -->
        <div style="flex: 1">
          <!-- <div ref="main" class="ec"></div> -->
          <div
            style="width: 80%; height: 80%; margin: 0 auto; margin-top: 20px"
          >
            <img
              src="../../../../public/images/tutu.png"
              style="width: 100%; height: 100%"
              alt=""
            />
          </div>
        </div>
        <div style="flex: 1">
          <div class="lodash-content">
            <h2 class="mt-25 mb-25" style="margin-left: 10px">时间窗口:</h2>
            <span style="font-size: 18px; line-height: 30px">
              <div style="margin-left: 70px">2017年8月20日 - 2017年8月27日</div>
            </span>
            <h2 class="mt-25 mb-25" style="margin-left: 10px">引导目标:</h2>
            <span style="font-size: 18px; line-height: 30px">
              <div style="margin-left: 70px">
                国内（具体事件：十九大）
              </div>
            </span>
            <h2 class="mt-25 mb-25" style="margin-left: 10px">具体描述:</h2>
            <span style="font-size: 18px; line-height: 30px">
              <div style="margin-left: 70px">
                分析该时间窗口内对微博进行的多元竞争矩阵的计算，针对国内领域（十九大）进行YQ引导，竞争矩阵计算结果表示应在社会类新闻下进行（具体事件：“天鸽”台风事件）。
              </div>
            </span>
          </div>
        </div>
      </div>
      <div class="three">
        <!--  -->
        <div style="flex: 1; position: relative">
          <!-- 日期 -->
          <!-- <p>请选择时间，有效时间: 2020年1月21日-2020年9月28日</p> -->
          <h3 style="widht: 100%; height: 20px; text-align: center">
            基于竞争传播热度消减的竞争矩阵示意图
          </h3>
          <div class="block">
            <el-date-picker
              v-model="value1"
              :clearable="true"
              type="date"
              placeholder="有效时间: 2020年1月21日-2020年9月28日"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd HH:mm:ss"
              style="width: 340px"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>

          <div ref="main" class="ec"></div>
          <div class="ri">
            <div class="ri-top">
              <el-select
                v-model="value"
                style="margin: 40px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  @click.native="fff"
                ></el-option>
              </el-select>
            </div>
            <div class="ri-bottom">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>当前领域前三名</span>
                </div>
                <div
                  v-for="(item, index) in thres"
                  v-show="index < 3"
                  :key="index"
                  class="text item"
                >
                  {{ "第" + (index + 1) + "名" }}
                  {{ dayss[index] + item }}
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </el-tabs>
  </div>
</template>

<script>
import { getMultiple } from "@/api/multiple.js";
export default {
  name: "",
  data() {
    return {
      data: [],
      value1: "",
      info: {
        stockDate: "", //日期
      },
      pickerOptions: {
        // disabledDate是一个函数,参数是当前选中的日期值,这个函数需要返回一个Boolean值,
        disabledDate: (time) => {
          // 如果函数处理比较简单,可以直接在这里写逻辑方法
          // return time.getTime() < Date.now() - 8.64e7

          // 如果函数里处理的数据比较麻烦,也可以单独放在一个函数里,避免data数据太臃肿
          return this.dealDisabledDate(time);
        },
      }, // 日期设置对象
      big: "",
      small: "",
      options: [
        {
          value: "0",
          label: "汽车",
        },
        {
          value: "1",
          label: "财经",
        },
        {
          value: "2",
          label: "科技",
        },
        {
          value: "3",
          label: "健康",
        },
        {
          value: "4",
          label: "体育",
        },
        {
          value: "5",
          label: "旅游",
        },
        {
          value: "6",
          label: "教育",
        },
        {
          value: "7",
          label: "文化",
        },
        {
          value: "8",
          label: "军事",
        },
        {
          value: "9",
          label: "社会",
        },
        {
          value: "10",
          label: "国内",
        },
        {
          value: "11",
          label: "国际",
        },
        {
          value: "12",
          label: "房产",
        },
        {
          value: "13",
          label: "娱乐",
        },
        {
          value: "14",
          label: "时尚",
        },
      ],
      value: "",
      dayss: [],
      thres: [],
    };
  },
  watch: {
    data: {
      handler(newValue) {
        console.log(newValue);
        this.data = newValue;
        if (this.value != "") {
          this.serch(this.value);
        }

        this.barData();
      },
    },
    value1: {
      handler(newValue) {
        console.log(newValue);
        this.value1 = newValue;
        this.comparedate("2020-1-21", this.value1);
      },
    },
  },
  created() {
    var str = "2020-01-21"; // 日期字符串
    str = str.replace(/-/g, "/"); // 将-替换成/，因为下面这个构造函数只支持/分隔的日期字符串
    var date = new Date(str); // 构造一个日期型数据，值为传入的字符串
    var time = date.getTime();
    this.small = time;
    var str2 = "2020-09-28"; // 日期字符串
    str2 = str2.replace(/-/g, "/"); // 将-替换成/，因为下面这个构造函数只支持/分隔的日期字符串
    var date2 = new Date(str2); // 构造一个日期型数据，值为传入的字符串
    var time2 = date2.getTime();
    this.big = time2;

    getMultiple("").then((res) => {
      //  this.data=res
      for (let i = 0; i < res.length; i++) {
        for (let a = 0; a < res.length; a++) {
          this.data.push([i, a, res[i][a].toFixed(2)]);
        }
      }
      console.log(this.data);
    });
  },

  mounted() {
    //   var date = new Date();
    //   date .getYear(); //获取当前年份(2位)
    //   date .getMonth(); //获取当前月份(0-11,0代表1月)
    //   date .getDate(); //获取当前日(1-31)
    //   this.value1=date.getYear()+date.getMonth()+this.data.getDate()
    this.barData();
  },
  methods: {
    fff() {
      this.serch(this.value);
      // console.log(this.value);
    },
    // 单独处理时间的函数
    dealDisabledDate(time) {
      // time.getTime是把选中的时间转化成自1970年1月1日 00:00:00 UTC到当前时间的毫秒数
      // Date.now()是把今天的时间转化成自1970年1月1日 00:00:00 UTC到当前时间的毫秒数,这样比较好比较
      // return的值,true是不可以操作选择,false可以操作选择,比如下面这个判断就只能选择今天之后的时间

      return time.getTime() > this.big || time.getTime() < this.small;

      // 这里减8.64e7的作用是,让今天的日期可以选择,如果不减的话,今天的日期就不可以选择,判断中写<= 也是没用的,一天的毫秒数就是8.64e7
      // return time.getTime() <= Date.now()
      // return time.getTime() < Date.now() - 8.64e7
    },
    comparedate(date1, date2) {
      var oDate1 = new Date(date1);
      var oDate2 = new Date(date2);
      var oDate3 = new Date("2020-09-28");
      if (oDate1.getTime() > oDate2.getTime() || oDate2.getTime() > oDate3) {
        this.$message({
          message: `该模块不包含该时间段内的数据,
          
            有效时间2020年1月21日-2020年9月28日`,
          type: "warning",
        });
      } else {
        getMultiple(this.value1).then((res) => {
          this.data = [];
          for (let i = 0; i < res.length; i++) {
            for (let a = 0; a < res.length; a++) {
              this.data.push([i, a, res[i][a].toFixed(2)]);
            }
          }
          console.log(this.data);
        });
      }
    },
    serch(num) {
      let arr = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i][1] == num) {
          arr.push(this.data[i][2]);
        }
      }
      console.log(arr);
      let news = "";
      let newss = "";
      let day = [
        "汽车",
        "财经",
        "科技",
        "健康",
        "体育",
        "旅游",
        "教育",
        "文化",
        "军事",
        "社会",
        "国内",
        "国际",
        "房产",
        "娱乐",
        "时尚",
      ];
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
          if (Math.abs(arr[j]) > Math.abs(arr[j + 1])) {
            news = arr[j];
            newss = day[j];
            arr[j] = arr[j + 1];
            day[j] = day[j + 1];
            arr[j + 1] = news;
            day[j + 1] = newss;
          }
        }
      }
      this.thres = arr;
      this.dayss = day.reverse();
      console.log(arr);
      console.log(arr.reverse());
      console.log(day);
      // this.thres = arr
      //   .sort(function (a, b) {
      //     return a - b;
      //   })
      //   .reverse();
      // console.log(this.thres);
    },
    barData() {
      var echarts = require("echarts");

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.main);
      // var data = [

      //     ]

      var hours = [
        "汽车",
        "财经",
        "科技",
        "健康",
        "体育",
        "旅游",
        "教育",
        "文化",
        "军事",
        "社会",
        "国内",
        "国际",
        "房产",
        "娱乐",
        "时尚",
      ];
      var days = [
        "汽车",
        "财经",
        "科技",
        "健康",
        "体育",
        "旅游",
        "教育",
        "文化",
        "军事",
        "社会",
        "国内",
        "国际",
        "房产",
        "娱乐",
        "时尚",
      ];
      // var data1 = [];
      // 绘制图表
      myChart.setOption({
        backgroundColor: "#67ade2",
        // dataZoom: [

        //         {
        //             id: 'dataZoomY',
        //             type: 'slider',
        //             yAxisIndex: [0],
        // 			startValue:0,
        // 			endValue:10,
        //             filterMode: 'empty'
        //         }
        //     ],
        tooltip: {
          position: "top",
          formatter: function (params) {
            // console.log(params);
            return (
              "微博类别：" +
              days[params.value[1]] +
              "<br/>" +
              "目标投放类别：" +
              params.name +
              "<br/>" +
              "热度抢占值" +
              params.data[2]
            );
          },
        },
        animation: false,
        grid: {
          left: "3%",
          right: "12%",
          bottom: "8%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: hours,
          axisLine: {
            lineStyle: {
              color: "#FFFFFF",
            },
          },
          axisLabel: {
            interval: 0,
            rotate: 40,
          },
          splitLine: {
            show: false,
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ["rgba(0, 101, 175, 0)", "rgba(17, 110, 189, 0.2)"],
            },
          },

          name: "目标投放类别",
        },
        yAxis: {
          type: "category",
          data: days,
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisLabel: {
            interval: 0,
            rotate: 40,
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ["rgba(0, 101, 175, 0)", "rgba(17, 110, 189, 0.2)"],
            },
          },
          name: "微博类别",
        },
        visualMap: {
          min: 1,
          max: 100,

          orient: "horizontal",
          left: "center",
          bottom: "1%",
          text: ["较高", "热度抢占强度:      较低"], // 文本，默认为数值文本
          color: ["#20a0ff", "#D2EDFF"],
          calculable: false,
          color: ["red", "rgb(134, 171, 135)"],
        },
        series: [
          {
            name: "Punch Card",
            type: "heatmap",
            data: this.data,
            label: {
              normal: {
                show: true,
              },
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowColor: "rgba(120, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
    //处理默认选中当前日期
    getNowTime() {
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month = now.getMonth(); //得到月份
      var date = now.getDate(); //得到日期
      var hour = " 00:00:00"; //默认时分秒 如果传给后台的格式为年月日时分秒，就需要加这个，如若不需要，此行可忽略
      month = month + 1;
      month = month.toString().padStart(2, "0");
      date = date.toString().padStart(2, "0");
      var defaultDate = `${year}-${month}-${date}${hour}`;
      console.log(defaultDate);
      return defaultDate;
      //    this.$set(this.info, "stockDate", defaultDate);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.multiple {
  width: 100%;
  height: 100%;
}
.el-tabs--border-card {
  height: 100%;
  width: 100%;
}
>>> .el-tabs__nav {
  margin-left: 10px;
  margin-top: 10px;
}
>>> .el-tabs__nav-scroll {
  background: #eef2f4;
  border-bottom: 1px solid #cccccc;
}
>>> .el-tabs--top .el-tabs__item.is-top {
  /* background: #71b1d2; */
  margin-right: 10px;
  /* color: white; */
}
>>> .el-tabs__item .is-top .is-active {
  border-bottom: 0;
  background: white;
}
>>> .el-tabs__content {
  width: 100%;
  height: 95%;
  padding: 0;
}
.three {
  width: 98%;
  height: 96%;
  margin: 10px;
  border: 1px solid #cccccc;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: initial;
}
.three::-webkit-scrollbar {
  width: 5px;
  height: 10px;

  background-color: #eeeeee;
}
.three::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #eeeeee;
}

.three::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #9fd2f7;
}
.el-tab-pane {
  width: 100%;
  height: 100%;
}
.ecs {
  width: 33.2%;
  height: 420px;
  float: left;
  border: 1px solid #cccccc;
  background: #f5f8f4;
}
.ecs-title {
  width: 100%;
  height: 30px;
  line-height: 34px;
  font-weight: bold;
  overflow: hidden;
}
.ecs-title-content {
  width: 80%;
  height: 100%;
  float: left;
  text-align: center;
}
.ecs-title-content span {
  padding-left: 80px;
}
.ecs-content {
  width: 20%;
  height: 100%;
  float: left;
}
.ecs-content i {
  padding-right: 10px;
  font-size: 18px;
}
.ecs-ecs {
  width: 400px;
  height: 500px;
}
.yxl {
  width: 90%;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
  margin-top: 10px;
  color: white;
  background: #71b1d2;
}
.xl {
  width: 90%;
  height: 300px;
  margin-left: 10px;
}
.xl li {
  list-style: none;
  text-align: left;
  line-height: 38px;
  padding-left: 10px;
}
.xl i {
  color: #71b1d2;
}
.zhibiao {
  width: 90%;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
  margin-top: 10px;
  color: white;
  background: mediumseagreen;
}
.ec {
  width: 930px;
  height: 600px;
  margin-left: 100px;
}
.block {
  width: 100%;
  height: 100px;
  margin: 0 auto;
}
>>> .el-date-editor {
  margin: 0 auto;
  margin-top: 20px;
  margin-left: 39%;
}
.ri {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 99%;
  border: 1px solid #ccc;
}
.ri-top {
  width: 100%;
  height: 100px;
}
.ri-bottom {
  width: 100%;
  height: 84%;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 98%;
  height: 100%;
}
</style>
