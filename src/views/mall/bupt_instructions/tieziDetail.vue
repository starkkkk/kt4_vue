<template>
  <div
    v-loading="loading"
    element-loading-text="请求处理中..."
    style="width: 100%"
  >
    <div
      style="padding: 1rem; background-color: rgba(135, 206, 250, 0.3)"
      :class="{ showmoretop: noshowmorebooltop }"
    >
      {{ tieziDetailDatas.W_content }}
    </div>
    <div style="text-align: right">
      <span
        v-if="noshowmorebooltop"
        style="text-align: right; color: #409eff"
        @click="noshowmoretop"
      >
        显示更多内容
        <i class="el-icon-arrow-down"></i>
      </span>
      <span
        v-else
        style="text-align: right; color: #409eff"
        @click="noshowmoretop"
      >
        收起
        <i class="el-icon-arrow-up"></i>
      </span>
    </div>

    <el-switch
      v-if="hexin"
      v-model="switchvalue"
      active-text="帖子数据"
      inactive-text="干预策略"
      @change="switchchange"
    ></el-switch>
    <div style="display: flex; justify-content: space-around">
      <div
        class="mingan"
        style="
          width: 30%;
          height: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <div
          id="leida"
          style="width: 100%; height: 80%; margin-bottom: 20px"
        ></div>
        <div
          v-for="(item, index) in zhishu1"
          :key="item"
          style="margin-bottom: 10px"
        >
          <el-button type="primary">{{ item }}</el-button>
          <el-button id="rightbutton" type="primary">
            {{ zhishu1_dengji[index] }}
          </el-button>
        </div>
      </div>
      <div
        class="mingan"
        style="
          width: 30%;
          height: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <div
          id="leidasentiment"
          style="width: 100%; height: 80%; margin-bottom: 20px"
        ></div>
        <div
          v-for="(item, index) in zhishu2"
          :key="item"
          style="margin-bottom: 10px"
        >
          <el-button type="primary">{{ item }}</el-button>
          <el-button id="rightbutton" type="primary">
            {{ zhishu2_dengji[index] }}
          </el-button>
        </div>
      </div>
      <div
        class="suqiumingan"
        style="
          width: 30%;
          height: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <div
          id="suqiu"
          style="width: 100%; height: 80%; margin-bottom: 20px"
        ></div>
        <div v-if="hexin">
          <el-button type="primary">核心诉求</el-button>
          <el-button id="rightbutton2" type="primary">{{ zhishu3 }}</el-button>
        </div>
      </div>
    </div>
    <!-- 弹框 -->
    <el-dialog
      width="60%"
      title="干预策略"
      :visible.sync="dialogFormVisible"
      @close="doclose"
    >
      <div style="display: flex; flex-direction: column">
        <div style="display: flex; justify-content: space-between">
          <div>
            采用
            <b>{{ celue }}</b>
            ,
            <b>{{ ganyudian }}</b>
            ,
            <b>{{ lidu }}</b>
          </div>
          <div>
            <el-button
              size="mini"
              style="background-color: red; color: #ffffff"
            >
              干预效果
            </el-button>
          </div>
        </div>
        <hr />
        <div :class="{ showmore: noshowmorebool }">
          <b>{{ celue }}</b>
          ：{{ strategy_introduction1 }}{{ strategy_introduction2 }}
        </div>
        <span
          v-if="noshowmorebool"
          style="text-align: right; color: #409eff"
          @click="noshowmore"
        >
          显示更多内容
          <i class="el-icon-arrow-down"></i>
        </span>
        <span
          v-else
          style="text-align: right; color: #409eff"
          @click="noshowmore"
        >
          收起
          <i class="el-icon-arrow-up"></i>
        </span>
        <div style="display: flex; justify-content: space-around">
          <img :src="Intervention_point_image" style="width: 59%" />
          <img :src="imageurl" style="width: 39%" />
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      dialogFormVisible: false,
      max1: 0,
      max2: 0,
      switchvalue: true,
      loading: true,
      tieziDetailDatas: "",
      jibie: ["不敏感", "一级", "二级", "三级", "四级"],
      mingan: [
        "政治敏感",
        "暴恐敏感",
        "经济敏感",
        "色情敏感",
        "民生敏感",
        "权力敏感",
      ],
      qinggan: [
        "惊喜敏感",
        "愤怒敏感",
        "焦虑敏感",
        "期待敏感",
        "憎恨敏感",
        "喜悦敏感",
        "热爱敏感",
        "悲伤敏感",
      ],
      fumianqingxu: ["愤怒敏感", "焦虑敏感", "憎恨敏感", "悲伤敏感"],
      zhishu1: [],
      zhishu1_dengji: [],
      zhishu2: [],
      zhishu2_dengji: [],
      zhishu3: "",
      hexin: false,

      // 干预对象类型
      personType: "",
      // 干预点
      ganyudian: "",
      // 干预策略
      celue: "",
      // 干预力度
      lidu: "",
      // 干预图像
      imageurl: "",
      //干预点图像
      Intervention_point_image: "",
      // 干预策略介绍
      strategy_introduction1: "",
      strategy_introduction2: "",
      // 是否隐藏更多策略详情
      noshowmorebool: true,
      noshowmorebooltop: true,
    };
  },
  // components: {

  // },
  mounted() {
    this.getdatas(this.$route.query.tieziid);
    this.personType = this.$route.query.personType;
  },
  methods: {
    // 开关状态改变
    switchchange(val) {
      if (this.personType == "倡导者") {
        if (this.zhishu1_dengji.indexOf("四级") != -1) {
          this.ganyudian = "干预点1";
          this.celue = "认知修正策略";
        } else if (this.zhishu1_dengji.indexOf("三级") != -1) {
          this.ganyudian = "干预点2";
          this.celue = "强化策略";
        } else {
          this.ganyudian = "干预点2";
          this.celue = "个体化策略";
        }
      } else if (this.personType == "支持者") {
        if (this.zhishu1_dengji.indexOf("四级") != -1) {
          this.ganyudian = "干预点4";
          this.celue = "公开承诺策略";
        } else if (this.zhishu1_dengji.indexOf("三级") != -1) {
          this.ganyudian = "干预点3";
          this.celue = "内容辩驳策略";
        } else if (this.zhishu1_dengji.indexOf("二级") != -1) {
          this.ganyudian = "干预点3";
          this.celue = "信息框架策略";
        } else if (this.zhishu1_dengji.indexOf("一级") != -1) {
          this.ganyudian = "干预点3";
          this.celue = "权戚亲近策略";
        } else {
          this.ganyudian = "干预点3";
          this.celue = "信息源调整策略";
        }
      } else if (this.personType == "扩散者") {
        if (this.zhishu1_dengji.indexOf("四级") != -1) {
          this.ganyudian = "干预点6";
          this.celue = "信息网络策略";
        } else if (this.zhishu1_dengji.indexOf("三级") != -1) {
          this.ganyudian = "干预点5";
          this.celue = "观点引导策略";
        } else if (this.zhishu1_dengji.indexOf("二级") != -1) {
          this.ganyudian = "干预点5";
          this.celue = "环境引导策略";
        } else if (this.zhishu1_dengji.indexOf("一级") != -1) {
          this.ganyudian = "干预点5";
          this.celue = "情境明确策略";
        } else {
          this.ganyudian = "干预点5";
          this.celue = "信息锚定策略";
        }
      }
      if (this.zhishu2_dengji.indexOf("四级") != -1) {
        this.lidu = "四级干预";
      } else if (this.zhishu2_dengji.indexOf("三级") != -1) {
        this.lidu = "三级干预";
      } else if (this.zhishu2_dengji.indexOf("二级") != -1) {
        this.lidu = "二级干预";
      } else if (this.zhishu2_dengji.indexOf("一级") != -1) {
        this.lidu = "一级干预";
      } else {
        this.lidu = "一级干预";
      }
      if (!val) {
        this.dialogFormVisible = true;
        var that = this;
        Axios.get("http://202.121.180.70:8109/strategyDetail", {
          params: {
            val: that.celue,
          },
        })
          .then(function (response) {
            that.strategy_introduction1 =
              response.data[0].strategy_introduction1;
            that.strategy_introduction2 =
              response.data[0].strategy_introduction2;
          })
          .catch(function (error) {
            console.log(error);
          });
        Axios.get("http://202.121.180.70:8109/getStrategyImg", {
          params: {
            point: that.ganyudian,
            intensity: that.lidu,
          },
        })
          .then(function (response) {
            that.imageurl = response.data[0].imgageurl;
            that.Intervention_point_image =
              response.data[0].intervention_point_image;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    doclose() {
      this.switchvalue = true;
    },

    // 点击隐藏更多策略介绍详情
    noshowmore() {
      this.noshowmorebool = !this.noshowmorebool;
    },
    noshowmoretop() {
      this.noshowmorebooltop = !this.noshowmorebooltop;
    },

    getdatas(val) {
      var zhishu1_1;
      var zhishu1_2;
      var zhishu1_3;
      var zhishu1_4;
      var zhishu1_5;
      var zhishu1_6;

      var zhishu2_1;
      var zhishu2_2;
      var zhishu2_3;
      var zhishu2_4;
      var zhishu2_5;
      var zhishu2_6;
      var zhishu2_7;
      var zhishu2_8;

      var daode;
      var gongli;

      var that = this;
      Axios.get("http://202.121.180.70:8109/selectTieziXiangqing", {
        params: {
          no: val,
        },
      })
        .then(function (response) {
          that.tieziDetailDatas = response.data;
          // 指数
          var zhishu1list = [];

          (zhishu1_1 = Math.round(response.data.政治敏感 * 100)),
            (zhishu1_2 = Math.round(response.data.暴恐敏感 * 100)),
            (zhishu1_3 = Math.round(response.data.经济敏感 * 100)),
            (zhishu1_4 = Math.round(response.data.色情敏感 * 100)),
            (zhishu1_5 = Math.round(response.data.民生敏感 * 100)),
            (zhishu1_6 = Math.round(response.data.权力敏感 * 100));
          zhishu1list.push(zhishu1_1);
          zhishu1list.push(zhishu1_2);
          zhishu1list.push(zhishu1_3);
          zhishu1list.push(zhishu1_4);
          zhishu1list.push(zhishu1_5);
          zhishu1list.push(zhishu1_6);

          var zhishu2list = [];
          (zhishu2_1 = Math.round(response.data.surprise * 100)),
            (zhishu2_2 = Math.round(response.data.anger * 100)),
            (zhishu2_3 = Math.round(response.data.anxiety * 100)),
            (zhishu2_4 = Math.round(response.data.expect * 100)),
            (zhishu2_5 = Math.round(response.data.hate * 100)),
            (zhishu2_6 = Math.round(response.data.joy * 100)),
            (zhishu2_7 = Math.round(response.data.love * 100)),
            (zhishu2_8 = Math.round(response.data.sorrow * 100));
          zhishu2list.push(zhishu2_1);
          zhishu2list.push(zhishu2_2);
          zhishu2list.push(zhishu2_3);
          zhishu2list.push(zhishu2_4);
          zhishu2list.push(zhishu2_5);
          zhishu2list.push(zhishu2_6);
          zhishu2list.push(zhishu2_7);
          zhishu2list.push(zhishu2_8);

          for (var i = 0; i < zhishu1list.length; i++) {
            var num = parseInt(zhishu1list[i] / 20);
            if (that.max1 < num) {
              that.max1 = num;
            }
            if (num > 0) {
              that.zhishu1.push(that.mingan[i]);
              that.zhishu1_dengji.push(that.jibie[num]);
            }
          }
          for (var j = 0; j < zhishu2list.length; j++) {
            var num2 = parseInt(zhishu2list[j] / 20);
            if (that.max2 < num2) {
              that.max2 = num2;
            }
            if (num2 > 0 && that.fumianqingxu.indexOf(that.qinggan[j]) != -1) {
              that.zhishu2.push(that.qinggan[j]);
              that.zhishu2_dengji.push(that.jibie[num2]);
            }
          }

          (daode = Math.round(response.data.道德诉求 * 100)),
            (gongli = Math.round(response.data.功利诉求 * 100));
          if (daode > gongli) {
            that.zhishu3 = "道德";
          } else {
            that.zhishu3 = "功利";
          }
          that.hexin = true;

          console.log(document.getElementById("leida"));
          let myChart = that.$echarts.init(document.getElementById("leida"));
          let myChartsentiment = that.$echarts.init(
            document.getElementById("leidasentiment")
          );
          let myChartsuqiu = that.$echarts.init(
            document.getElementById("suqiu")
          );
          var option = {
            title: {
              // text: '基础雷达图'
            },
            tooltip: {},
            legend: {
              // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
              // shape: 'circle',
              splitArea: {
                // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: {
                  // 分隔区域的样式设置。
                  color: [],
                  // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                },
              },

              name: {
                textStyle: {
                  color: "#fff",
                  backgroundColor: "#999",
                  borderRadius: 3,
                  padding: [3, 5],
                },
              },
              indicator: [
                {
                  name: "政治敏感",
                  max: 100,
                },
                {
                  name: "暴恐敏感",
                  max: 100,
                },
                {
                  name: "经济敏感",
                  max: 100,
                },
                {
                  name: "色情敏感",
                  max: 100,
                },
                {
                  name: "民生敏感",
                  max: 100,
                },
                {
                  name: "权力敏感",
                  max: 100,
                },
              ],
            },
            series: [
              {
                // name: '预算 vs 开销（Budget vs spending）',
                type: "radar",
                // areaStyle: {normal: {}},
                itemStyle: {
                  normal: {
                    color: "#4169E1", //改变折线点的颜色
                    lineStyle: {
                      color: "#4169E1", //改变折线颜色
                    },
                  },
                },
                data: [
                  {
                    value: [
                      zhishu1_1,
                      zhishu1_2,
                      zhishu1_3,
                      zhishu1_4,
                      zhishu1_5,
                      zhishu1_6,
                    ],
                    // name: '预算分配（Allocated Budget）'
                  },
                  // 	{
                  // 		value: [5000, 14000, 28000, 31000, 42000, 21000],
                  // 		name: '实际开销（Actual Spending）'
                  // }
                ],
              },
            ],
          };
          var optionsentiment = {
            title: {
              // text: '基础雷达图'
            },
            tooltip: {},
            legend: {
              // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
              // shape: 'circle',
              splitArea: {
                // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: {
                  // 分隔区域的样式设置。
                  color: [],
                  // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                },
              },
              name: {
                textStyle: {
                  color: "#fff",
                  backgroundColor: "#999",
                  borderRadius: 3,
                  padding: [3, 5],
                },
              },
              indicator: [
                {
                  name: "惊喜",
                  max: 100,
                },
                {
                  name: "愤怒",
                  max: 100,
                },
                {
                  name: "焦虑",
                  max: 100,
                },
                {
                  name: "期待",
                  max: 100,
                },
                {
                  name: "憎恨",
                  max: 100,
                },
                {
                  name: "喜悦",
                  max: 100,
                },
                {
                  name: "热爱",
                  max: 100,
                },
                {
                  name: "悲伤",
                  max: 100,
                },
              ],
            },
            series: [
              {
                // name: '预算 vs 开销（Budget vs spending）',
                type: "radar",
                // areaStyle: {normal: {}},
                itemStyle: {
                  normal: {
                    color: "#4169E1", //改变折线点的颜色
                    lineStyle: {
                      color: "#4169E1", //改变折线颜色
                    },
                  },
                },
                data: [
                  {
                    value: [
                      zhishu2_1,
                      zhishu2_2,
                      zhishu2_3,
                      zhishu2_4,
                      zhishu2_5,
                      zhishu2_6,
                      zhishu2_7,
                      zhishu2_8,
                    ],
                    // name: '预算分配（Allocated Budget）'
                  },
                  // 	{
                  // 		value: [5000, 14000, 28000, 31000, 42000, 21000],
                  // 		name: '实际开销（Actual Spending）'
                  // }
                ],
              },
            ],
          };
          var optionsuqiu = {
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: ["道德诉求", "功利诉求"],
            },

            yAxis: {
              type: "value",
            },
            series: [
              {
                data: [daode, gongli],
                type: "line",
                areaStyle: {
                  normal: {
                    color: "#FF4500", //改变区域颜色
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#FF4500", //改变折线点的颜色
                    lineStyle: {
                      color: "#FF4500", //改变折线颜色
                    },
                  },
                },
              },
            ],
          };

          myChart.setOption(option);
          myChartsentiment.setOption(optionsentiment);
          myChartsuqiu.setOption(optionsuqiu);
          that.loading = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.mingan .el-button--primary {
  background-color: #4169e1;
  border: 1px solid #4169e1;
}

.suqiumingan .el-button--primary {
  background-color: #ff4500;
  border: 1px solid #ff4500;
}

#rightbutton {
  background-color: #ffffff;
  color: #4169e1;
}

#rightbutton2 {
  background-color: #ffffff;
  color: #ff4500;
}

.showmore {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.showmoretop {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>
