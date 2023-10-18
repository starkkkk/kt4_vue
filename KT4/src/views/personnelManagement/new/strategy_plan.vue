<template>
  <div class="permissions-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h1>弹性引导策略配置预案</h1>
        </el-divider>
        <el-card shadow="hover">
          <div class="lodash-content">
            <h2 class="mt-25 mb-25">技术型策略选择</h2>
            <span class="represent" style="font-size: 16px; line-height: 28px">
              行为指标和传播指标各有4个等级，因此一共存在16种不同情况，该表格展示了不同行为和传播等级下采用的基于技术的引导策略。
            </span>
            <br />
            <br />
            <br />
            <el-table
              :data="tableData"
              border
              style="width: 100%; font-size: 20px"
            >
              <el-table-column prop="a1" label="" width="300" align="center">
                <template slot-scope="scope">
                  <div v-for="(item, index) in scope.row.a1" :key="index">
                    {{ item }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a2"
                label="传播较慢"
                width="300"
                align="center"
              >
                <template slot-scope="scope">
                  <div v-for="(item, index) in scope.row.a2" :key="index">
                    {{ item }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a3"
                label="传播较快"
                width="300"
                align="center"
              >
                <template slot-scope="scope">
                  <div v-for="(item, index) in scope.row.a3" :key="index">
                    {{ item }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a4"
                label="传播迅速"
                width="300"
                align="center"
              >
                <template slot-scope="scope">
                  <div v-for="(item, index) in scope.row.a4" :key="index">
                    {{ item }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="a5" label="传播迅猛" align="center">
                <template slot-scope="scope">
                  <div v-for="(item, index) in scope.row.a5" :key="index">
                    {{ item }}
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <br />
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card shadow="hover">
          <div class="lodash-content">
            <el-row>
              <h2 class="mt-25 mb-25">心理型策略选择</h2>
            </el-row>
            <el-row>
              <span
                class="mt-25 mb-25"
                style="font-size: 16px; line-height: 30px"
              >
                心理策略有三大类引导方法，子策略的选择情况如下：
                <br />
                a)心理管制策略： (1)个体化策略 (2)强化策略 (3)认知修正策略
                <br />
                b)心理劝导策略： (1)信息源调整策略 (2)内容斑驳策略
                (3)信息框架策略 (4)权戚亲近策略 (5)公开承诺策略
                <br />
                c)心理助推策略： (1)信息锚定策略 (2)观点引导策略 (3)情景明确策略
                (4)信息网络策略 (5)环境引导策略
              </span>
            </el-row>
            <el-row>
              <br />
              <br />
              <br />
              <el-table
                :data="tableData1"
                border
                style="width: 100%; font-size: 20px"
              >
                <el-table-column prop="b1" label="" width="300" align="center">
                  <template slot-scope="scope">
                    <div v-for="(item, index) in scope.row.b1" :key="index">
                      {{ item }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="b2"
                  label="正向认知"
                  width="300"
                  align="center"
                >
                  <template slot-scope="scope">
                    <div v-for="(item, index) in scope.row.b2" :key="index">
                      {{ item }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="b3"
                  label="认知积极"
                  width="300"
                  align="center"
                >
                  <template slot-scope="scope">
                    <div v-for="(item, index) in scope.row.b3" :key="index">
                      {{ item }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="b4"
                  label="认知消极"
                  width="300"
                  align="center"
                >
                  <template slot-scope="scope">
                    <div v-for="(item, index) in scope.row.b4" :key="index">
                      {{ item }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="b5" label="负向认知" align="center">
                  <template slot-scope="scope">
                    <div v-for="(item, index) in scope.row.b5" :key="index">
                      {{ item }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-row>
            <br />
            <br />
            <br />
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
import axios from "axios";
import Heatmap from "heatmap.js";

export default {
  name: "Permissions",
  components: {
    JsonEditor,
  },
  data() {
    return {
      tableData: [
        {
          a1: ["漠不关心"],
          a2: ["基于内容生成"],
          a3: ["基于内容生成"],
          a4: ["基于竞争传播"],
          a5: ["基于竞争传播"],
        },
        {
          a1: ["略显积极"],
          a2: ["基于内容生成"],
          a3: ["基于内容生成"],
          a4: ["基于内容生成", "基于竞争传播"],
          a5: ["基于内容生成", "基于竞争传播"],
        },
        {
          a1: ["积极关注"],
          a2: ["基于热度消减"],
          a3: ["基于内容生成", "基于热度消减"],
          a4: ["基于竞争传播", "基于热度消减"],
          a5: ["基于结构阻断"],
        },
        {
          a1: ["引爆全网"],
          a2: ["基于热度消减"],
          a3: ["基于内容生成", "基于热度消减"],
          a4: ["基于结构阻断"],
          a5: ["基于结构阻断"],
        },
      ],
      tableData1: [
        {
          b1: ["情感平和"],
          b2: ["个体化策略", "信息源调整策略", "信息锚定策略"],
          b3: ["个体化策略", "信息框架策略", "环境引导策略"],
          b4: ["强化策略", "内容斑驳策略", "观点引导策略"],
          b5: ["认知修正策略", "公开承诺策略", "信息网络策略"],
        },
        {
          b1: ["情感波动"],
          b2: ["个体化策略", "权戚亲近策略", "情境明确策略"],
          b3: ["个体化策略", "信息框架策略", "环境引导策略"],
          b4: ["强化策略", "内容斑驳策略", "观点引导策略"],
          b5: ["认知修正策略", "公开承诺策略", "信息网络策略"],
        },
        {
          b1: ["情感激动"],
          b2: ["个体化策略", "权戚亲近策略", "情境明确策略"],
          b3: ["个体化策略", "信息框架策略", "环境引导策略"],
          b4: ["强化策略", "内容斑驳策略", "观点引导策略"],
          b5: ["认知修正策略", "公开承诺策略", "信息网络策略"],
        },
        {
          b1: ["情感激烈"],
          b2: ["个体化策略", "权戚亲近策略", "情境明确策略"],
          b3: ["个体化策略", "信息框架策略", "公开承诺策略", "环境引导策略"],
          b4: ["强化策略", "内容斑驳策略", "观点引导策略"],
          b5: ["认知修正策略", "信息网络策略"],
        },
      ],
    };
  },
  mounted() {
    this.myEcharts();
  },

  myEcharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById("main"));

    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        position: "top",
      },
      animation: false,
      grid: {
        height: "98%",
        top: "0%",
      },
      xAxis: {
        type: "category",
        data: this.hours,
        splitArea: {
          show: true,
        },
      },
      yAxis: {
        type: "category",
        data: this.days,
        splitArea: {
          show: true,
        },
      },
      visualMap: {
        min: -4,
        max: 4,
        inRange: {
          color: [
            "#FFFFFF",
            "#F8F8FF",
            "#F0FFFF",
            "#ADD8E6",
            "#B0E0E6",
            "#87CEFA",
            "#87CEEB",
            "#00BFFF",
            "#0000FF",
            "#0000CD",
            "#00008B",
          ],
        },
        calculable: true,
        orient: "vertical",
        left: "0%",
        bottom: "30%",
      },
      series: [
        {
          name: "Punch Card",
          type: "heatmap",
          data: this.data1,
          label: {
            show: false,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 5,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
};
</script>
<style lang="scss" scoped>
.permissions-container {
  .lodash-content {
    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .Echarts {
    margin-left: 23%;
    margin-top: 3%;
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
    margin-left: 28%;
    margin-top: 3%;
    margin-bottom: 3%;
    font-size: 16px;
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
