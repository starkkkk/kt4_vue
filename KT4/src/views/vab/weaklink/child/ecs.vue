<template>
  <div class="ecs">
    <div class="poi">
      <i class="el-icon-document"></i>
      <i class="el-icon-refresh"></i>
      <i class="el-icon-download"></i>
    </div>
    <div ref="main" class="ecs-ecs"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => {
        return null;
      },
    },
    data: {
      type: Array,
      default: () => {
        return null;
      },
    },
    dataa: {
      type: Array,
      default: () => {
        return null;
      },
    },
  },
  data() {
    return {};
  },
  watch: {
    data: {
      handler(newValue) {
        console.log(newValue);
        this.data = newValue;
        this.barData();
      },
    },
    dataa: {
      handler(newValue) {
        console.log(newValue);
        this.data2 = newValue;
        this.barData();
      },
    },
    deep: true, //对象内部属性的监听，关键
  },
  mounted() {
    this.barData();
  },
  methods: {
    barData() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.main);
      // 绘制图表
      var Option = {
        title: {
          text: this.title,
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.dataa,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["65%", "60%"],
            data: this.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(Option);
      //根据窗口的大小变动图表 --- 重点
      window.addEventListener("resize", () => {
        if (myChart) {
          myChart.resize();
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.ecs {
  width: 500px;
  height: 400px;
  position: relative;
}
.ecs-ecs {
  width: 500px;
  height: 400px;
}
.poi {
  width: 100px;
  position: absolute;
  top: 10px;
  right: 0;
}
.poi i {
  margin-right: 10px;
}
</style>