
 <template>
  <div class="permissions-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h2>基于综合评估指标体系的影响力计算模型</h2>
        </el-divider>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card shadow="hover">
          <div class="lodash-content">
            <h3>问题分析</h3>
            <span style="font-size: 16px; line-height: 30px">
              社交网络包含内部静态拓扑、用户静态属性、用户行为动作、交互信息内容、交互信息话题等各类信息，而实际的社交网络内信
              息传播过程受以上各类要素的综合影响，彼此间关系复杂。因此针对社交网络传播影响力重要节点发现问题，需要将原本的静态网络
              拓扑结构信息和社交网络传播要素等有效结合，才能将不同场景下用户节点的传播影响力准确反映，从而筛选出社交网络重要节点。
            </span>
            <h3>整体模型</h3>
            <span style="font-size: 16px; line-height: 30px">
              常用的度量节点影响力的指标大致可以划分为基于网络拓扑结构、基于用户行为和基于交互信息的度量等类型。为了能够覆盖多个类型
              的指标并且反应社交网络的多个内在属性，我们从度量节点影响力的指标中共选取了4个类型的指标，将多指标输入至Modified
              Weighted-TOPSIS决策模型， 实现传播影响力重要节点的发现。
            </span>
            <h3>数据集情况</h3>
            <span style="font-size: 16px; line-height: 30px">
              我们选取了9月24日到10月7日共14天的HK事件的微博数据集，这些数据包含了用户的个人信息和用户间的转发、评论等行为数据。微博的原始数据集是
              个稀疏网络，我们剔除网络中的不活跃用户，保留参与程度高的用户。处理好的网络数据集中共包含4983个节点，24935条连边，节点表示微博用户，
              连边表示转发、评论等关系。
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card shadow="hover">
          <div class="lodash-content">
            <el-row>
              <h3 class="mt-25 mb-25">多种模型的意见领袖发现的准确率：</h3>
            </el-row>
            <el-row>
              <span
                class="mt-25 mb-25"
                style="font-size: 16px; line-height: 25px"
              >
                为了计算意见领袖发现的准确率，使用斯皮尔曼等级相关系数，斯皮尔曼等级相关系数的物理意义是提出的模型
                计算出的每个节点的影响力排名与真实的节点影响力排名越接近，这个模型的准确率就越高。
              </span>
            </el-row>
            <el-row>
              <div class="border1">
                <span
                  class="mt-25 mb-25"
                  style="font-size: 16px; line-height: 25px; font-weight: bold"
                >
                  意见领袖发现的准确率
                </span>
              </div>
              <div class="border2">
                <el-table :data="tableData1" border style="width: 78.6%">
                  <el-table-column
                    prop="model"
                    label="模型"
                    width="250"
                    align="center"
                  ></el-table-column>
                  <el-table-column
                    prop="precision"
                    label="准确率"
                    width="250"
                    align="center"
                  ></el-table-column>
                </el-table>
              </div>
            </el-row>
            <el-row>
              <div class="border4">
                <span
                  class="mt-25 mb-25"
                  style="font-size: 16px; line-height: 25px"
                >
                  HK事件的微博数据集里面有每个用户的id，通过这个id在微博的官方网站上找到每个用户的真实身份，选取多个具有知名度的用户作为意见领袖。
                  上面结果为意见领袖发现的准确率，左边的一列是使用的模型，右边的一列是每个模型意见领袖发现的准确率。
                </span>
              </div>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card shadow="hover">
          <div class="lodash-content">
            <el-row>
              <h3 class="mt-25 mb-25">多种模型的意见领袖的激活节点数：</h3>
            </el-row>
            <el-row>
              <span
                class="mt-25 mb-25"
                style="font-size: 16px; line-height: 25px"
              >
                为了模拟信息在社交网络中的传播过程，以IC模型来模拟这一传播过程，一般情况下，如果节点被认为
                是重要的，那么它在IC模型中应该能激活更多节点。
              </span>
            </el-row>
            <el-row>
              <div class="border3">
                <span
                  class="mt-25 mb-25"
                  style="font-size: 16px; line-height: 30px; font-weight: bold"
                >
                  意见领袖的激活节点数
                </span>
              </div>
              <div class="Echarts">
                <div id="main" style="width: 450px; height: 365px"></div>
              </div>
            </el-row>

            <el-row>
              <span
                class="mt-25 mb-25"
                style="font-size: 16px; line-height: 30px"
              >
                绘制传播时间和激活节点数的关系图，结果如上图所示。由图可以看出，
                提出的方法发现的最重要的节点在传播过程达到稳定状态后激活的节点数最多。显然提出的方法发现的意见领袖具有更好的信息
                传播能力和激活能力，提出的方法准确性优于其他方法。
              </span>
            </el-row>
          </div>
        </el-card>
      </el-col>
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
      tableData1: [
        {
          model: "LH-index",
          precision: "0.64",
        },
        {
          model: "介数中心性",
          precision: "0.68",
        },
        {
          model: "用户行为影响力",
          precision: "0.36",
        },
        {
          model: "度中心性",
          precision: "0.68",
        },
        {
          model: "K-core",
          precision: "0.12",
        },
        {
          model: "TOPSIS",
          precision: "0.76",
        },
        {
          model: "Weighted-TOPSIS",
          precision: "0.92",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      username: "user/username",
      permissions: "user/permissions",
    }),
  },
  mounted() {
    this.myEcharts();
  },
  created() {},
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      var option = {
        // title: {
        //   text: "折线图堆叠",
        //   left: "center",
        //   bottom: 0,
        // },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["LH", "BC", "AC", "DC", "K-core", "Proposed Method"],
          left: "center",
          top: "5%",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          max: 8.3,
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
            },
          },
        },
        series: [
          {
            name: "LH",
            type: "line",
            stack: "总量",
            data: [
              [0, 0],
              [0.09919227361679077, 80.65],
              [0.3162701964378357, 205.15],
              [0.7283355712890625, 295.6],
              [1.0219160676002503, 350.65],
              [1.2053099989891052, 370.25],
              [1.4684382557868958, 377.35],
              [1.8539822816848754, 379.3],
              [2.3039822816848754, 379.45],
              [2.7539822816848756, 379.45],
              [3.2039822816848753, 379.45],
              [3.6539822816848755, 379.45],
              [4.103982281684876, 379.45],
              [4.553982281684876, 379.45],
              [5.003982281684875, 379.45],
              [5.453982281684875, 379.45],
              [5.9039822816848755, 379.45],
              [6.353982281684876, 379.45],
              [6.803982281684876, 379.45],
              [7.253982281684875, 379.45],
              [7.703982281684875, 379.45],
              [8.153982281684875, 379.45],
              [8.603982281684875, 379.45],
            ],
          },
          {
            name: "BC",
            type: "line",
            stack: "总量",
            data: [
              [0, 0],
              [0.0, 36.5],
              [0.1082883358001709, 75.25],
              [0.22547104358673095, 145.35],
              [0.47178117036819456, 199.9],
              [0.7181829214096069, 233.05],
              [0.8997216105461121, 249.45],
              [1.232904040813446, 256.4],
              [1.6829040408134461, 259.1],
              [2.132904040813446, 260.1],
              [2.582904040813446, 260.1],
              [3.0329040408134462, 260.1],
              [3.482904040813446, 260.1],
              [3.932904040813446, 260.1],
              [4.382904040813446, 260.1],
              [4.832904040813446, 260.1],
              [5.282904040813446, 260.1],
              [5.732904040813446, 260.1],
              [6.182904040813446, 260.1],
              [6.632904040813446, 260.1],
              [7.082904040813446, 260.1],
              [7.532904040813446, 260.1],
              [7.982904040813446, 260.1],
            ],
          },
          {
            name: "AC",
            type: "line",
            stack: "总量",
            data: [
              [0, 0],
              [0.0, 29.75],
              [0.08939882516860961, 64.75],
              [0.202185320854187, 137.1],
              [0.45539031028747556, 200.35],
              [0.7342224240303039, 240.7],
              [0.9450945734977723, 257.0],
              [1.3436811089515686, 261.65],
              [1.7936811089515685, 262.85],
              [2.2436811089515687, 263.4],
              [2.6936811089515684, 263.5],
              [3.1436811089515686, 263.5],
              [3.593681108951569, 263.5],
              [4.043681108951569, 263.5],
              [4.493681108951568, 263.5],
              [4.943681108951568, 263.5],
              [5.393681108951569, 263.5],
              [5.843681108951569, 263.5],
              [6.293681108951569, 263.5],
              [6.743681108951568, 263.5],
              [7.193681108951568, 263.5],
              [7.643681108951569, 263.5],
              [8.093681108951568, 263.5],
            ],
          },
          {
            name: "DC",
            type: "line",
            stack: "总量",
            data: [
              [0, 0],
              [0.0, 56.7],
              [0.17999823093414308, 119.35],
              [0.34980111122131347, 225.3],
              [0.7176877021789551, 278.85],
              [0.9641408801078797, 305.15],
              [1.125441586971283, 315.7],
              [1.575441586971283, 317.9],
              [2.025441586971283, 319.1],
              [2.475441586971283, 319.2],
              [2.925441586971283, 319.2],
              [3.375441586971283, 319.2],
              [3.825441586971283, 319.2],
              [4.275441586971283, 319.2],
              [4.725441586971283, 319.2],
              [5.175441586971283, 319.2],
              [5.625441586971283, 319.2],
              [6.075441586971283, 319.2],
              [6.525441586971283, 319.2],
              [6.975441586971283, 319.2],
              [7.425441586971283, 319.2],
              [7.875441586971283, 319.2],
              [8.325441586971284, 319.2],
            ],
          },
          {
            name: "K-core",
            type: "line",
            stack: "总量",
            data: [
              [0, 0],
              [0.0, 45.05],
              [0.14916396141052246, 85.8],
              [0.2827391266822815, 176.95],
              [0.5662757277488708, 238.5],
              [0.7613651037216187, 283.85],
              [0.9134269595146179, 301.65],
              [1.1173457503318787, 311.3],
              [1.5108848929405212, 315.25],
              [1.9608848929405212, 316.45],
              [2.4108848929405213, 317.1],
              [2.860884892940521, 317.15],
              [3.3108848929405212, 317.15],
              [3.7608848929405214, 317.15],
              [4.210884892940522, 317.15],
              [4.660884892940521, 317.15],
              [5.110884892940521, 317.15],
              [5.560884892940521, 317.15],
              [6.010884892940521, 317.15],
              [6.460884892940522, 317.15],
              [6.910884892940521, 317.15],
              [7.360884892940521, 317.15],
              [7.810884892940521, 317.15],
            ],
          },
          {
            name: "Proposed Method",
            type: "line",
            stack: "总量",
            data: [
              [0, 0],
              [0.04847209453582764, 79.65],
              [0.22552087306976318, 193.5],
              [0.6175462126731872, 284.15],
              [0.9225727677345276, 329.15],
              [1.0629912614822388, 347.25],
              [1.3906754732131958, 350.7],
              [1.8406754732131958, 351.45],
              [2.290675473213196, 351.55],
              [2.7406754732131957, 351.55],
              [3.190675473213196, 351.55],
              [3.6406754732131956, 351.55],
              [4.090675473213196, 351.55],
              [4.540675473213196, 351.55],
              [4.990675473213196, 351.55],
              [5.4406754732131954, 351.55],
              [5.890675473213196, 351.55],
              [6.340675473213196, 351.55],
              [6.790675473213196, 351.55],
              [7.240675473213196, 351.55],
              [7.6906754732131954, 351.55],
              [8.140675473213197, 351.55],
              [8.590675473213196, 351.55],
            ],
          },
          // 使用刚指定的配置项和数据显示图表。
        ],
        // 使用刚指定的配置项和数据显示图表。
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.permissions-container {
  .Echarts {
    margin-left: 15%;
    margin-top: 0%;
  }
  .represent {
    line-height: 1.5em;
  }
  .represent1 {
    line-height: 2em;
  }

  .user-report {
    height: 100px;
    overflow-y: auto;
  }
  .border1 {
    border: 0px solid rgb(255, 255, 255);
    margin-left: 35%;
    margin-top: 2%;
    margin-bottom: 3%;
  }
  .border2 {
    border: 0px solid rgb(255, 255, 255);
    margin-left: 13%;
    margin-top: 2%;
    margin-bottom: 3%;
  }
  .border3 {
    border: 0px solid rgb(255, 255, 255);
    margin-left: 35%;
    margin-top: 2%;
    margin-bottom: 0%;
  }
  .border4 {
    border: 0px solid rgb(255, 255, 255);
    margin-top: 5%;
    margin-bottom: 0%;
  }
  .border {
    border: 1px solid lightgrey;
    border-right-width: 0;
    border-bottom-width: 0;
  }

  .title {
    width: 50px;
    height: 70px;
    text-align: center;
  }
  @media (min-width: 600px) {
    .title {
      width: 150px;
      height: 40px;
    }
  }
  .br {
    border-right: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
  }
}
</style>