
<template>
  <div class="permissions-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h1>基于事件的意见领袖发现</h1>
        </el-divider>
        <el-card shadow="hover">
          <div slot="header" style="font-size: 17px">
            数据集选择:
            <el-select
              v-model="value1"
              style="margin-right: 15px; font-size: 25px"
              placeholder="香港事件数据集-微博"
              @change="chickvalue"
            >
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </div>
          <div class="lodash-content">
            <h2 class="mt-25 mb-25">功能描述</h2>
            <span class="represent" style="font-size: 16px; line-height: 30px">
              针对微博网络数据集，使用基于综合评估指标体系的影响力计算模型来得到每个用户的影响力，进而找出其中的意见领袖，并给出相应的个人真实信息的展示。
            </span>
            <br />
            <h2 class="mt-25 mb-25">数据集描述</h2>
            <span style="font-size: 16px; line-height: 30px">
              {{ data1[value1] }}
            </span>
            <h2 class="mt-25 mb-25">事件描述</h2>
            <span class="represent" style="font-size: 16px; line-height: 30px">
              {{ data2[value1] }}
            </span>
          </div>
          <div class="lodash-content">
            <h2 class="mt-25 mb-25">模型描述：</h2>
            <el-collapse v-model="activeNames">
              <el-collapse-item title="点击展开模型描述" name="2">
                <span style="font-size: 16px; line-height: 35px">
                  第一步：四种维度的影响力指标计算
                  <br />
                  <span style="margin-left: 65px">
                    用户的局部网络结构影响力：LH-index
                  </span>
                  <br />
                  <span style="margin-left: 65px">
                    用户的全局网络结构影响力：介数中心性
                  </span>
                  <br />
                  <span style="margin-left: 65px">用户的行为影响力</span>
                  <br />
                  <span style="margin-left: 65px">用户的话题传播影响力</span>
                  <br />
                  第二步：综合评价模型融合多维度的指标
                  <br />
                  第三步：计算用户的综合评价影响力
                  <br />
                  第四步：选取影响力最大的若干个节点作为意见领袖。
                  <br />
                </span>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card shadow="hover">
          <div class="lodash-content">
            <h2 class="mt-25 mb-25">意见领袖展示</h2>
          </div>
          <div v-if="user_data_content[0]" class="border5">
            <el-table
              :data="user_data_content[0].list2"
              border
              style="width: 97.2%"
            >
              <el-table-column
                v-for="(item, index) in user_data_content[0].list1"
                :key="index"
                :prop="item.tableprop"
                :label="item.label"
                min-width="7%"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
            </el-table>
            <!-- <el-table :data="tableData1" border style="width: 97.2%">
              <el-table-column
                prop="a1"
                label="用户名"
                width="120"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="a2"
                label="向太Tiffany陈岚"
                width="120"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a3"
                label="香港自由行加加"
                width="120"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a4"
                label="人民日报"
                width="120"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a5"
                label="孤烟暮蝉"
                width="120"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a6"
                label="寰亚SYHP"
                width="120"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a7"
                label="央视新闻"
                width="120"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a8"
                label="香港中通社"
                width="120"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a9"
                label="上帝之鹰_5zn"
                width="120"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a10"
                label="无心简影"
                width="120"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="a11"
                label="好得意得意好"
                width="120"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="a12" label="兔主席" align="center">
                <template slot-scope="scope">
                  <el-button
                    v-if="scope.row[scope.column.property] == '查看'"
                    type="text"
                    size="small"
                    @click="handelClick(scope)"
                  >
                    {{ `${scope.row[scope.column.property]}` }}
                  </el-button>
                  <div v-else>{{ `${scope.row[scope.column.property]}` }}</div>
                </template>
              </el-table-column>
            </el-table> -->
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card shadow="hover">
          <div v-if="value1 == '香港事件数据集-微博'" class="lodash-content">
            <h2 class="mt-25 mb-25">定量结果</h2>
            <el-row>
              <span
                class="mt-25 mb-25"
                style="font-size: 16px; line-height: 30px"
              >
                准确率用算法挖掘的意见领袖排序和ground-truth排序的相关系数评估，横坐标是前k个意见领袖，纵坐标是意见领袖发现的准确率。
              </span>
            </el-row>
            <div class="Echarts1">
              <img
                :src="`/images/precision1.png`"
                alt=""
                style="width: 465px; height: 345px"
              />
            </div>
            <el-row>
              <span
                class="mt-25 mb-25"
                style="font-size: 16px; line-height: 30px"
              >
                ground-truth意见领袖是基于历史传播数据统计得到的，即统计每个用户的相关话题的微博的传播范围，按照传播范围排序得到意见领袖。
              </span>
            </el-row>
          </div>
          <div v-if="value1 == '李文亮事件数据集-微博'" class="lodash-content">
            <h2 class="mt-25 mb-25">定量结果</h2>
            <el-row>
              <span
                class="mt-25 mb-25"
                style="font-size: 16px; line-height: 30px"
              >
                准确率用算法挖掘的意见领袖排序和ground-truth排序的相关系数评估，横坐标是前k个意见领袖，纵坐标是意见领袖发现的准确率。
              </span>
            </el-row>
            <div class="Echarts1">
              <img
                :src="`/images/precision2.png`"
                alt=""
                style="width: 465px; height: 345px"
              />
            </div>
            <el-row>
              <span
                class="mt-25 mb-25"
                style="font-size: 16px; line-height: 30px"
              >
                ground-truth意见领袖是基于历史传播数据统计得到的，即统计每个用户的相关话题的微博的传播范围，按照传播范围排序得到意见领袖。
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
import Vue from "vue";
import axios from "axios";

export default {
  name: "Permissions",
  components: {
    JsonEditor,
  },

  data() {
    return {
      data1: {
        "香港事件数据集-微博":
          "我们选取了2019年9月24日到10月7日共14天的HK事件的微博数据集，这些数据包含了用户的个人信息和用户间的转发、评论等行为数据。微博的原始数据集是个稀疏网络，我们剔除网络中的不活跃用户，保留参与程度高的用户。处理好的网络数据集中共包含4983个节点，24935条连边，节点表示微博用户，连边表示转发、评论等关系。",
        "李文亮事件数据集-微博":
          "我们选取了2020年2月5日到12月8日的李文亮事件的微博数据集，这些数据包含了用户的个人信息和用户间的转发、评论等行为数据。微博的原始数据集是个稀疏网络，我们剔除网络中的不活跃用户，保留参与程度高的用户。处理好的网络数据集中共包含2309个节点，2063条连边，节点表示微博用户，连边表示转发、评论等关系。",
      },
      data2: {
        "香港事件数据集-微博":
          "香港“占中”事件在社交网络上引起了广泛的讨论，境外媒体和记者在社交网络上发布一些内容抹黑香港警察，用一些夸张虚假的内容引导群众舆论，因此对舆论进行正确的引导是必须的。",
        "李文亮事件数据集-微博":
          "李文亮医生在抗击疫情中感染新型冠状病毒肺炎，不幸逝世，引发网友刷屏关注。境外媒体和记者在社交网络上发布一些内容抹黑中国抗击疫情，因此对舆论进行正确的引导是必须的。",
      },
      value1: "香港事件数据集-微博",
      value2: ["香港事件数据集-微博"],
      value3: [],
      options1: [
        {
          value: "数据集一",
          label: "香港事件数据集-微博",
        },
        {
          value: "数据集二",
          label: "李文亮事件数据集-微博",
        },
      ],
      choice: {
        "香港事件数据集-微博": "OpinionLeaderTwoList",
        "李文亮事件数据集-微博": "OpinionLeaderFourList",
      },

      form: {
        account: "",
      },
      user_data_content: {},
      user_data_content1: {},
    };
  },
  computed: {
    ...mapGetters({
      username: "user/username",
      permissions: "user/permissions",
    }),
  },
  watch: {
    // value1: {
    //   handler(newName, oldName) {
    //     this.value1 = newName;
    //     this.chickvalue();
    //   },
    //   deep: true,
    //   immediate: true,
    // },
    // value2: {
    //   handler(newName, oldName) {
    //     this.chickvalue();
    //   },
    //   deep: true,
    //   immediate: true,
    // },
    // value3: {
    //   handler(newName, oldName) {
    //     this.chickvalue();
    //   },
    //   deep: true,
    //   immediate: true,
    // },
  },

  mounted() {
    console.log(this.value2);
  },
  created() {
    const _this = this;
    // console.log(_this.value2[0]);
    if (sessionStorage.getItem("select")) {
      this.value1 = sessionStorage.getItem("select");
    }
    axios.get("http://202.121.180.70:8109/getData?n=12").then(function (resp) {
      _this.user_data_content1 = resp.data;
      _this.chickvalue();
      // console.log(_this.user_data_content1);
    });
  },
  methods: {
    chickvalue() {
      // console.log(this.value1);daim
      sessionStorage.setItem("select", this.value1);
      this.value2[0] = this.value1;
      this.value3 = this.choice[this.value2[0]];
      this.user_data_content = this.user_data_content1[this.value3];
      // console.log(this.value2[0]);
    },
    handelClick(row) {
      console.log(row);
      this.$router.push({
        name: "Permissions2",
        query: {
          user_name: encodeURI(row.column.label),
          value1: encodeURI(this.value1),
        },
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
  .Echarts1 {
    margin-left: 30%;
    margin-top: 0%;
    margin-bottom: 2%;
    height: 120%;
    width: 120%;
  }
  .border1 {
    margin-top: 2%;
  }
  .border2 {
    margin-top: 3%;
  }
  .border3 {
    margin-top: 6%;
    margin-left: 5%;
  }
  .border5 {
    margin-top: 1%;
    margin-left: 3%;
    margin-bottom: 1%;
  }
  .represent {
    line-height: 1.5em;
  }

  .user-report {
    height: 120px;
    overflow-y: auto;
    margin-top: 2%;
  }

  .border {
    border: 1px solid lightgrey;
    border-right-width: 0;
    border-bottom-width: 0;
    font-size: 15px;
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
