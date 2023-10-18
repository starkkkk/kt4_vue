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
                  <h2>基于信息传播模型的时空传播预测</h2>
                </el-divider>
                <!-- <el-card> -->
                <!-- 基于信息传播模型的传播预测方法：该方法将实时状态指标、传播规律和时空特征作为先验知识输入到经典的信息传播模型，实现对特定信息传播的时空预测。
                状态指标：五阶段的演化状态（发生、扩散、爆发、震荡、回落）。传播规律：三方面的传播热度（关注度、回复数、转发数）。 -->
                <!-- </el-card> -->
              </el-col>

              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-card shadow="hover">
                  <div slot="header">
                    <span
                      class="mt-25 mb-25"
                      style="font-size: 16px; line-height: 30px"
                    >
                      <h3>功能描述</h3>
                      本研究实现了一种基于信息传播模型的传播预测方案，该方法将实时状态指标、传播规律和时空特征作为先验知识输入到经典的信息传播模型，实现对敏感舆情宏观态势的量化和对特定信息传播的时空预测。
                      状态指标：五阶段的演化状态（发生、扩散、爆发、震荡、回落）。传播规律：三方面的传播热度（关注度、回复数、转发数）。

                       <h3>应用场景</h3>
                      我们采用了2019年9-10月香港暴力事件话题的Twitter数据集，完整验证集中的每一条数据都是针对的这一话题。我们剔除网络中的不活跃用户，保留参与程度高的用户。
                      经过预处理的网络数据集中共包含3298个节点，46747条连边，节点表示twitter用户，连边表示转发、评论等关系。
                      通过统计每个用户在14天内对该话题的原创发帖、评论内容以和转发操作来进行衡量该事件（该话题）的每日转发数、回复数以及关注度。

                      <h3>方案概述</h3>
                      利用经典的传染病模型，将整个传播系统中的节点分为健康节点、传播节点和免疫节点，来分析社交网络中信息传播的基本规律。同时考虑到微博信息的传播还与人在获取信息以后的真实情感、
                      决策、信息互动模式有关，就需要基于事件的传播热度对SIR模型进行适应性调整。更为具体地，在构建SIR模型时，我们采用半监督学习的方式对SIR模型中的重要参数进行拟合，
                      使得该传播预测模型符合当前的舆情事态发展。训练得到完整的SIR模型后，对缺失的过去时间的传播数据进行填补，并预测将来的传播发展态势，从而得到完整的事件传播态势评估和预测。
                      最终根据态势指标体系，划分出该事件传播过程的五阶段的演化状态：发生、扩散、爆发、震荡和回落。

                    </span>
                  </div>
                  <el-row>
                    <h2>结果展示</h2>
                    <!-- 两张图表的标题 -->
                    <el-row>
                      <el-col :span="12">
                        <div class="grid-content bg-purple-dark">
                          <h2 style="text-align: center">传播规律图</h2>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="grid-content bg-purple-dark">
                          <h2 style="text-align: center">预测结果图</h2>
                        </div>
                      </el-col>
                    </el-row>

                    <!-- 两张图表 -->
                    <el-col :span="12">
                      <div class="Echarts">
                        <div
                          id="chart-user_1"
                          style="width: 700px; height: 500px"
                        ></div>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="Echarts">
                        <div
                          id="chart-user_2"
                          style="width: 700px; height: 500px"
                        ></div>
                      </div>
                    </el-col>
                  </el-row>

                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span
              class="mt-25 mb-25"
              style="font-size: 16px; line-height: 30px"
            >

              我们基于14天关于HK事件的Twitter数据集进行构建预测模型。首先对数据集进行处理和分析，得出该事件的传播规律，其三方面的传播热度如上面左图所示；
              我们根据14天中易感人群S(t),感染人群I(t),以及恢复人群R(t)的动态变化，拟合信息传播的SIR模型，得出的预测模型如上面右图所示。结果图中展示了一共30天的SIR曲线，
              分别经历了五阶段的演化状态（发生、扩散、爆发、震荡、回落）。0-3天是发生时期，4-7天是扩散，8-15天是爆发，16-20天会有震荡，20天之后就是回落。
              其中我们的14天的真实数据集处于第2天到第15天，其演化规律正好符合传播规律的热度图。
              <br />
              <br />
            </span>
                  </el-col>
                </el-card>
              </el-col>

              <!-- <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-card shadow="hover">
                  <div slot="header">
                    <h3>传播规律图</h3>
                  </div>

                  <div class="Echarts">
                    <div
                      id="chart-user_1"
                      style="width: 700px; height: 500px"
                    ></div>
                  </div>
                </el-card>
              </el-col> -->
              <!-- <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-card shadow="hover">
                  <div slot="header">
                    <h3>预测结果图</h3>
                  </div>

                  <div class="Echarts">
                    <div
                      id="chart-user_2"
                      style="width: 700px; height: 500px"
                    ></div>
                  </div>
                </el-card>
              </el-col> -->
            </el-row>
          </div>

          <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-card shadow="hover">
              <el-divider content-position="left">
                <h3>预测结果说明</h3>
              </el-divider>
              <el-card shadow="hover">
                <div slot="header">
                  <span
                    class="mt-25 mb-25"
                    style="font-size: 16px; line-height: 22px"
                  >
                    我们基于14天关于HK事件的Twitter数据集进行构建预测模型。首先对数据集进行处理和分析，得出该事件的传播规律，其三方面的传播热度如上面左图所示：
                    我们根据14天中易感人群S(t),感染人群I(t),以及恢复人群R(t)的动态变化，拟合信息传播的SIR模型，得出的预测模型如下图所示。结果图中展示了一共30天的SIR曲线，
                    分别经历了五阶段的演化状态（发生、扩散、爆发、震荡、回落）。0-3天是发生时期，4-7天是扩散，8-15天是爆发，16-20天会有震荡，20天之后就是回落。
                    其中我们的14天的真实数据集处于第2天到第15天，其演化规律正好符合传播规律的热度图。
                  </span>
                </div>
              </el-card>

              <br />
              <br />
            </el-card>
          </el-col> -->
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
  created() {},
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
      // 指定图表的配置项和数据
      var option_1 = {
        // title: {
        //   text: "Retweet,comment and popular",
        // },

        legend: {
          type: "plain", //----图例类型，默认为'plain'，当图例很多时可使用'scroll'
          top: "5%", //----图例相对容器位置,top\bottom\left\right
          selected: {
            retweet: true,
            comment: true,
            popular: true, //----图例选择,图形加载出来会显示选择的图例，默认为true
          },
        },
        color: ["#ffdf25", "#36a9ce", "#d0e17d"],

        tooltip: {
          trigger: "axis",

          axisPointer: {
            type: "shadow",
          },
        },

        grid: { left: "5%", right: "10%", bottom: "5%", containLabel: true },

        xAxis: [
          {
            show: true,
            type: "category",

            // axisTick: { show: false },
            name: "Day",

            nameTextStyle: { fontWeight: 600, fontSize: 12 },

            data: [
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
              "13",
              "14",
            ],
          },
        ],

        yAxis: [
          {
            type: "value",
            name: "Num",

            nameTextStyle: { fontWeight: 600, fontSize: 12 },
          },
        ],

        series: [
          {
            name: "retweet",

            type: "bar",

            barGap: 0,

            data: [
              67770,
              58441,
              66299,
              74361,
              80995,
              139286,
              128345,
              167934,
              150738,
              116713,
              178077,
              194432,
              171678,
              213522,
            ],
          },

          {
            name: "comment",

            type: "bar",

            data: [
              8078,
              5988,
              6663,
              6666,
              6787,
              8843,
              9467,
              13030,
              13718,
              9980,
              13507,
              16203,
              13907,
              19509,
            ],
          },

          {
            name: "popular",

            type: "bar",

            data: [
              92607,
              79415,
              88967,
              98650,
              105558,
              175634,
              162349,
              215048,
              189393,
              149942,
              220694,
              238877,
              213511,
              268095,
            ],
          },
        ],
      };
      var option_2 = {
        title: {
          text: "SIR",

          x: "center",

          y: "top",

          textAlign: "left",
        },
        tooltip: { trigger: "axis" },
        legend: {
          data: ["S", "ST", "I", "IT", "R", "RT"],
          left: "center",
          top: "5%",
        },
        grid: { left: "5%", right: "10%", bottom: "5%", containLabel: true },
        toolbox: { feature: { saveAsImage: {} } },

        xAxis: {
          min: -2,
          max: 30,

          type: "value",
          name: "Day", // x轴名称
          nameTextStyle: { fontWeight: 600, fontSize: 12 },
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        yAxis: {
          min: -0.1,
          max: 1.1,
          type: "value",
          name: "Num", // y轴名称
          nameTextStyle: { fontWeight: 600, fontSize: 12 },
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },

        series: [
          {
            name: "S",
            type: "line",
            color: ["green"],
            smooth: true,
            // stack: "总量",
            data: [
              [0, 0.99],
              [1, 0.9877987],
              [2, 0.98386924],
              [3, 0.97691924],
              [4, 0.96482433],
              [5, 0.94435462],
              [6, 0.91127944],
              [7, 0.86158406],
              [8, 0.79433889],
              [9, 0.71474199],
              [10, 0.63344412],
              [11, 0.56112266],
              [12, 0.50351748],
              [13, 0.46104995],
              [14, 0.4312444],
              [15, 0.41093388],
              [16, 0.39733094],
              [17, 0.38831225],
              [18, 0.38236881],
              [19, 0.37846625],
              [20, 0.37590952],
              [21, 0.37423687],
              [22, 0.37314357],
              [23, 0.37242936],
              [24, 0.37196296],
              [25, 0.37165847],
              [26, 0.37145971],
              [27, 0.37132997],
              [28, 0.3712453],
              [29, 0.37119005],
            ],
          },
          {
            name: "I",
            type: "line",
            color: ["red"],
            smooth: true,
            // stack: "总量",
            data: [
              [0, 1.0e-3],
              [1, 1.79502441e-3],
              [2, 3.20638749e-3],
              [3, 5.67792819e-3],
              [4, 9.90257189e-3],
              [5, 1.68249204e-2],
              [6, 2.73769879e-2],
              [7, 4.16460022e-2],
              [8, 5.75539708e-2],
              [9, 7.04457188e-2],
              [10, 7.54603087e-2],
              [11, 7.1193733e-2],
              [12, 6.0367504e-2],
              [13, 4.71706254e-2],
              [14, 3.47556872e-2],
              [15, 2.45890962e-2],
              [16, 1.69256918e-2],
              [17, 1.14396537e-2],
              [18, 7.63893734e-3],
              [19, 5.06059858e-3],
              [20, 3.33508942e-3],
              [21, 2.19043811e-3],
              [22, 1.43544219e-3],
              [23, 9.39307874e-4],
              [24, 6.14068298e-4],
              [25, 4.01195049e-4],
              [26, 2.62010226e-4],
              [27, 1.71063701e-4],
              [28, 1.11668928e-4],
              [29, 7.28876429e-5],
            ],
          },
          {
            name: "R",
            type: "line",
            color: ["blue"],
            smooth: true,
            // stack: "总量",
            data: [
              [0, 0],
              [1, 0.00140627],
              [2, 0.00392437],
              [3, 0.00840283],
              [4, 0.0162731],
              [5, 0.02982046],
              [6, 0.05234358],
              [7, 0.08776994],
              [8, 0.13910714],
              [9, 0.20581229],
              [10, 0.28209557],
              [11, 0.35868361],
              [12, 0.42711501],
              [13, 0.48277942],
              [14, 0.52499992],
              [15, 0.55547702],
              [16, 0.57674337],
              [17, 0.59124809],
              [18, 0.60099225],
              [19, 0.60747315],
              [20, 0.61175539],
              [21, 0.61457269],
              [22, 0.61642099],
              [23, 0.61763133],
              [24, 0.61842297],
              [25, 0.61894033],
              [26, 0.61927828],
              [27, 0.61949896],
              [28, 0.61964303],
              [29, 0.61973707],
            ],
          },
          {
            name: "ST",
            type: "line",
            color: ["green"],
            smooth: true,
            // stack: "总量",
            itemStyle: {
              normal: {
                lineStyle: {
                  type: "dotted", //'dotted'虚线 'solid'实线
                },
              },
            },
            data: [
              [2, 0.94737251],
              [3, 0.9380975],
              [4, 0.92192236],
              [5, 0.90189559],
              [6, 0.87744721],
              [7, 0.84030399],
              [8, 0.81138218],
              [9, 0.76226953],
              [10, 0.73315774],
              [11, 0.70652446],
              [12, 0.66223067],
              [13, 0.6191459],
              [14, 0.5781165],
              [15, 0.50978885],
            ],
          },
          {
            name: "IT",
            type: "line",
            color: ["red"],
            smooth: true,
            // stack: "总量",
            itemStyle: {
              normal: {
                lineStyle: {
                  type: "dotted", //'dotted'虚线 'solid'实线
                },
              },
            },
            data: [
              [2, 0.05262749],
              [3, 0.04271342],
              [4, 0.0425407],
              [5, 0.04695367],
              [6, 0.05175526],
              [7, 0.06601321],
              [8, 0.0681722],
              [9, 0.0871972],
              [10, 0.074321],
              [11, 0.0655296],
              [12, 0.07928667],
              [13, 0.07992573],
              [14, 0.07654907],
              [15, 0.0981735],
            ],
          },
          {
            name: "RT",
            type: "line",
            color: ["blue"],
            smooth: true,
            // stack: "总量",
            itemStyle: {
              normal: {
                lineStyle: {
                  type: "dotted", //'dotted'虚线 'solid'实线
                },
              },
            },
            data: [
              [2, 0],
              [3, 0.01918908],
              [4, 0.03553694],
              [5, 0.05115074],
              [6, 0.07079753],
              [7, 0.0936828],
              [8, 0.12044562],
              [9, 0.15053327],
              [10, 0.19252127],
              [11, 0.22794594],
              [12, 0.25848266],
              [13, 0.30092836],
              [14, 0.34533443],
              [15, 0.39203765],
            ],
          },
          // 使用刚指定的配置项和数据显示图表。
        ],
      };

      myChart.setOption(option_1);
      myChart_2.setOption(option_2);
    },
  },
};
//
</script>
// <style lang="scss" scoped>
// .permissions-container {
//   .Echarts {
//     margin-left: 15%;
//     margin-top: 0%;
//   }
//   .represent {
//     line-height: 1.5em;
//   }
//   .represent1 {
//     line-height: 2em;
//   }

//   .user-report {
//     height: 100px;
//     overflow-y: auto;
//   }
//   .border1 {
//     border: 0px solid rgb(255, 255, 255);
//     margin-left: 35%;
//     margin-top: 2%;
//     margin-bottom: 3%;
//   }
//   .border2 {
//     border: 0px solid rgb(255, 255, 255);
//     margin-left: 13%;
//     margin-top: 2%;
//     margin-bottom: 3%;
//   }
//   .border3 {
//     border: 0px solid rgb(255, 255, 255);
//     margin-left: 35%;
//     margin-top: 2%;
//     margin-bottom: 0%;
//   }
//   .border4 {
//     border: 0px solid rgb(255, 255, 255);
//     margin-top: 5%;
//     margin-bottom: 0%;
//   }
//   .border {
//     border: 1px solid lightgrey;
//     border-right-width: 0;
//     border-bottom-width: 0;
//   }

//   .title {
//     width: 50px;
//     height: 70px;
//     text-align: center;
//   }
//   @media (min-width: 600px) {
//     .title {
//       width: 150px;
//       height: 40px;
//     }
//   }
//   .br {
//     border-right: 1px solid lightgrey;
//     border-bottom: 1px solid lightgrey;
//   }
// }
//
</style>
