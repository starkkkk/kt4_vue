
<template>
  <div class="permissions-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card shadow="hover">
          <div slot="header"></div>
          <div class="lodash-content">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-divider content-position="left">
                  <h2>基于背景图的影响力传播评估</h2>
                </el-divider>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-card shadow="hover">
                  <div slot="header">
                    <span
                      class="mt-25 mb-25"
                      style="font-size: 16px; line-height: 30px"
                    >

                      <h3>功能描述</h3>
                      我们提出了一种综合传播范围及背景图的影响力评估方法，建立大规模实时网络下的影响力评估增量模型。
                      本模型希望确定一个影响力量化指标并提出一种针对敏感言论的具体的影响力发展模型。将影响力的发展变化过程定义为一个符合一定规律的随机点过程，基于训练拟合后的模型解释影响力发展，
                      最终要求模型的发展与真实变化的相对均方误差在20%以内。

                      <h3>应用场景</h3>
                      原始数据集被我们分为80%的训练集与20%的测试集，通过训练集梯度下降的过程计算优化有关参数，之后基于测试集表现评估模型对该场景下敏感言论的影响力发展变化情况。
                      具体的，我们选用了某14天内的HK事件部分敏感言论参与度发展变化的时序数据，我们选取了其中几条传播范围比较大的信息，模型拟合的参与度发展与其真正的参与度发展对比图如下所示：

                      <h3>整体模型</h3>
                      由于传统传播模型可以很好的完成对影响力发展具有充分可解释性的建模，因此结合深度模型中优化参数的思想，我们对传统模型进行了丰富和补充，
                      通过训练加强泊松过程（Reinforcement Possion
                      Process）模型对事件传播的时间序列数据进行拟合，最终基于上述模型和真实传播数据完成评估分析。
                      此外，影响力的量化指标有很多，针对此次选用的敏感言论数据集，最终选用用户参与度（原创、评论、转发等行为）作为评估指标。



                    </span>
                    <!--                <img src="../figure/qian.png" width="631" height="604" />-->
                  </div>
                  <!-- 三张折线图的标题 -->
                  <h2>结果展示</h2>
                  <el-row>
                    <el-col :span="24">
                      <div class="grid-content bg-purple-dark">
                        <h3 style="text-align: center">
                          Comparision of Sensitive Information Influence
                          Development Between RPP Model and Real Data
                        </h3>
                      </div>
                    </el-col>
                  </el-row>

                  <!-- 三张图表 -->
                  <el-row>
                    <el-col :span="8">
                      <div class="myEcharts">
                        <div
                          id="chart-user_1"
                          style="width: 500px; height: 400px"
                        ></div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="Echarts">
                        <div
                          id="chart-user_2"
                          style="width: 500px; height: 400px"
                        ></div>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="Echarts">
                        <div
                          id="chart-user_3"
                          style="width: 500px; height: 400px"
                        ></div>
                      </div>
                    </el-col>
                  </el-row>


                  <!-- example标签 -->
                  <el-row>

                    <el-col :span="8">
                      <h3 style="text-align: center">Example a</h3>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content bg-purple-light">
                        <h3 style="text-align: center">Example b</h3>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="grid-content bg-purple">
                        <h3 style="text-align: center">Example c</h3>
                      </div>
                    </el-col>
                  </el-row>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span
              class="mt-25 mb-25"
              style="font-size: 16px; line-height: 30px"
            >

              我们在训练集上拟合训练了RPP（Reinforcement Possion
              Process）模型，模型在测试集上的表现如上图所示，
              其中分别选择了参与度或影响力在不同数据量大小情况下的3个例子（1000以上，100~1000，100以内），可以看到RPP量化评估模型的表现总体是比较优异的，
              尤其是对参与度比较大的敏感言论传播的拟合评估，模型能够很好的反映其发展变化。
              <br />
              <br />
            </span>
                  </el-col>

                  <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="Echarts">
                      <div
                        id="chart-user"
                        style="width: 500px; height: 500px"
                      ></div>
                    </div>
                  </el-col> -->

                  <!-- <img src="../figure/beijintu.png" width="1216" height="530" /> -->
                </el-card>

                <!-- <el-card shadow="hover">
                  <el-row :gutter="20">
                    <el-col :span="6">
                      <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple"></div>
                    </el-col>
                  </el-row>
                  <style>
                    .el-row {
                      margin-bottom: 20px;
                      &:last-child {
                        margin-bottom: 0;
                      }
                    }
                    .el-col {
                      border-radius: 4px;
                    }
                    .bg-purple-dark {
                      background: #99a9bf;
                    }
                    .bg-purple {
                      background: #d3dce6;
                    }
                    .bg-purple-light {
                      background: #e5e9f2;
                    }
                    .grid-content {
                      border-radius: 4px;
                      min-height: 36px;
                    }
                    .row-bg {
                      padding: 10px 0;
                      background-color: #f9fafc;
                    }
                  </style>
                </el-card> -->
              </el-col>

              <!--          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">-->
              <!--            <el-card shadow="hover">-->
              <!--              <div slot="header">-->
              <!--                <span>添加引导策略后网络状态图</span>-->

              <!--              </div>-->
              <!--              <img src="../figure/1.png" width="631" height="604">-->
              <!--            </el-card>-->
              <!--          </el-col>-->
            </el-row>
          </div>

        </el-card>
      </el-col>

<!--      <el-card shadow="hover">-->
        <!--    <el-divider content-position="left">-->
        <!--      <h3>阻断节点热度展示</h3>-->
        <!--    </el-divider>-->
        <!--    <br />-->

        <!--      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
        <!--        <el-table :data="tableData" style="width: 100%">-->
        <!--          <el-table-column prop="name" label="姓名" width="180"></el-table-column>-->
        <!--          <el-table-column prop="ID" label="账号" width="180"></el-table-column>-->
        <!--          <el-table-column prop="day1" label="第一天热度"></el-table-column>-->
        <!--          <el-table-column prop="day2" label="第二天热度"></el-table-column>-->
        <!--          <el-table-column prop="day3" label="第三天热度"></el-table-column>-->
        <!--          <el-table-column prop="day4" label="第四天热度"></el-table-column>-->
        <!--          <el-table-column prop="day5" label="第五天热度"></el-table-column>-->
        <!--          <el-table-column prop="day6" label="第六天热度"></el-table-column>-->
        <!--          <el-table-column prop="day7" label="第七天热度"></el-table-column>-->
        <!--          <el-table-column prop="day8" label="第八天热度"></el-table-column>-->
        <!--          <el-table-column prop="day9" label="第九天热度"></el-table-column>-->
        <!--          <el-table-column prop="day10" label="第十天热度"></el-table-column>-->
        <!--          <el-table-column prop="day11" label="第十一天热度"></el-table-column>-->
        <!--          <el-table-column prop="day12" label="第十二天热度"></el-table-column>-->
        <!--          <el-table-column prop="day13" label="第十三天热度"></el-table-column>-->
        <!--          <el-table-column prop="day14" label="第十四天热度"></el-table-column>-->

        <!--        </el-table>-->
        <!--      </el-col>-->
<!--      </el-card>-->
    </el-row>
  </div>
</template>

<script>
import { getList } from "@/api/blacklist";
import { mapGetters } from "vuex";
import { tokenTableName } from "@/config/settings";
import JsonEditor from "@/components/JsonEditor";
export default {
  name: "Permissions",
  components: {
    JsonEditor,
  },
  data() {
    return {
      YQ_data: [
        {
          variety: "数据集一",
          variety_value: "香港事件数据集-twitter",
          id: 1,
        },
        {
          variety: "数据集二",
          variety_value: "香港事件数据集-微博",
          id: 2,
        },
      ],
      form: {
        account: "",
      },
      tableData: [],
      res: [],
      selected: [],
      // currentsel:this.selectModel(id),
    };
  },
  computed: {
    ...mapGetters({
      username: "user/username",
      permissions: "user/permissions",
    }),
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.form.account = this.username;
    this.myEcharts();
  },
  methods: {
    selectModel(id) {
      let obj = {};
      obj = this.YQ_data.find((item) => {
        return item.id === id; //筛选出匹配数据
      });
    },
    handleChangePermission() {
      localStorage.setItem(tokenTableName, `${this.form.account}-accessToken`);
      location.reload();
    },
    fetchData() {
      getList().then(({ data }) => {
        this.tableData = data;
      });
    },
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("chart-user_1"));
      var myChart_2 = this.$echarts.init(
        document.getElementById("chart-user_2")
      );
      var myChart_3 = this.$echarts.init(
        document.getElementById("chart-user_3")
      );
      // 指定图表的配置项和数据
      var option_1 = {
        // title: { text: "Example a" },
        tooltip: { trigger: "axis" },
        legend: {
          data: ["RPP", "Real Data"],
        },
        grid: { left: "8%", right: "10%", bottom: "2%", containLabel: true },
        toolbox: { feature: { saveAsImage: {} } },
        xAxis: {
          type: "category",
          name: "Time", // x轴名称
          nameTextStyle: { fontWeight: 600, fontSize: 12 },
          boundaryGap: false,
          axisLabel: {
            rotate: 0, // 旋转角度
            interval: 1, //设置X轴数据间隔几个显示一个，为0表示都显示
          },
          data: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ],
        },
        yAxis: {
          type: "value",
          name: "Participation\n(Influence)",
          nameTextStyle: { fontWeight: 600, fontSize: 12 },
        },
        series: [
          {
            name: "RPP",
            type: "line",
            stack: "总量",
            data: [
              63.2547918770038,
              317.6828868325,
              761.935268443639,
              1378.19806363331,
              2144.4899988728,
              3039.71681949958,
              4045.02032418482,
              5143.98329691701,
              6322.46356140089,
              7568.32306771366,
              8871.14789987668,
              10221.9925109933,
              11613.1573784234,
            ],
            // name: "Participation(Influence)", // y轴名称
          },
          {
            name: "Real Data",
            type: "line",
            stack: "总量",
            data: [
              136,
              676,
              1957,
              2601,
              2770,
              3410,
              3994,
              5708,
              6298,
              6580,
              8212,
              11875,
              12678,
            ],
          },
        ],
      };
      var option_2 = {
        // title: { text: "example a" },
        tooltip: { trigger: "axis" },
        legend: {
          data: ["RPP", "Real Data"],
        },
        grid: { left: "8%", right: "10%", bottom: "2%", containLabel: true },
        toolbox: { feature: { saveAsImage: {} } },
        xAxis: {
          type: "category",
          name: "Time", // x轴名称
          nameTextStyle: { fontWeight: 600, fontSize: 12 },
          boundaryGap: false,
          axisLabel: {
            rotate: 0, // 旋转角度
            interval: 1, //设置X轴数据间隔几个显示一个，为0表示都显示
          },
          data: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ],
        },
        yAxis: {
          type: "value",
          name: "Participation\n(Influence)",
          nameTextStyle: { fontWeight: 600, fontSize: 12 },
        },
        series: [
          {
            name: "RPP",
            type: "line",
            stack: "总量",
            data: [
              17.5885865356249,
              108.957253166508,
              268.49446057477,
              489.802999242837,
              764.989088204742,
              1086.47748730304,
              1447.49595422397,
              1842.14883842221,
              2265.35748774821,
              2712.76295969941,
              3180.62547224607,
              3665.73255511294,
              4165.31920266087,
            ],
            // name: "Participation(Influence)", // y轴名称
          },
          {
            name: "Real Data",
            type: "line",
            stack: "总量",
            data: [
              169,
              284,
              401,
              521,
              750,
              995,
              1196,
              1915,
              2443,
              2815,
              3861,
              4406,
              4524,
            ],
          },
        ],
      };
      var option_3 = {
        // title: { text: "example a" },
        tooltip: { trigger: "axis" },
        legend: {
          data: ["RPP", "Real Data"],
        },
        grid: { left: "8%", right: "10%", bottom: "2%", containLabel: true },
        toolbox: { feature: { saveAsImage: {} } },
        xAxis: {
          type: "category",
          name: "Time", // x轴名称
          nameTextStyle: { fontWeight: 600, fontSize: 12 },
          boundaryGap: false,
          axisLabel: {
            rotate: 0, // 旋转角度
            interval: 1, //设置X轴数据间隔几个显示一个，为0表示都显示
          },
          data: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ],
        },
        yAxis: {
          type: "value",
          name: "Participation\n(Influence)",
          nameTextStyle: { fontWeight: 600, fontSize: 12 },
        },
        series: [
          {
            name: "RPP",
            type: "line",
            stack: "总量",
            data: [
              -7.33912081732964,
              -4.97933241555017,
              -0.858947763170298,
              4.85681172003911,
              11.9640725021929,
              20.2671880392035,
              29.5912508988474,
              39.7839934789942,
              50.7142488831448,
              62.2694382334319,
              74.3529737762593,
              86.8818866955531,
              99.7847648926285,
            ],
            // name: "Participation(Influence)", // y轴名称
          },
          {
            name: "Real Data",
            type: "line",
            stack: "总量",
            data: [8, 12, 13, 17, 18, 21, 37, 40, 66, 67, 76, 101, 106],
          },
        ],
      };
      myChart.setOption(option_1);
      myChart_2.setOption(option_2);
      myChart_3.setOption(option_3);
    },
  },
};
</script>
