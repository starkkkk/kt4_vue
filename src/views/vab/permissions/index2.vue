
<template>
  <div class="permissions-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h1>意见领袖详细信息</h1>
        </el-divider>
        <el-card shadow="hover">
          <!-- <div slot="header" style="font-size: 17px">意见领袖详细信息:</div> -->
          <div v-if="user_data_content[user_name]" class="lodash-content">
            <el-row>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <div class="border1">
                  <img
                    class="avatar ml-20"
                    :src="`/images/${user_data_content[user_name].id}.jpg`"
                    alt=""
                  />
                </div>
                <div class="border2">
                  <span style="font-size: 16px">
                    {{ user_data_content[user_name].name }}
                  </span>
                </div>
              </el-col>
              <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                <div class="border3">
                  <el-row><h2>用户事迹</h2></el-row>
                  <br />
                  <br />
                  <el-row class="represent">
                    <span style="font-size: 16px; line-height: 28px">
                      {{ user_data_content[user_name].event }}
                    </span>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row class="mt-40 mb-20">
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <div class="border4">
                  <span style="font-size: 16px">
                    粉丝数: {{ user_data_content[user_name].fans }}
                  </span>
                </div>
              </el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <div class="border4">
                  <span style="font-size: 16px">
                    被评论数: {{ user_data_content[user_name].comments }}
                  </span>
                </div>
              </el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <div class="border4">
                  <span style="font-size: 16px">
                    被转发数: {{ user_data_content[user_name].share }}
                  </span>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <h2 class="mt-25 mb-25">用户典型言论</h2>
              <el-row class="user-report">
                <div
                  v-for="b of user_data_content[user_name].list1"
                  :key="b"
                  class="mb-5"
                  style="font-size: 16px; line-height: 33px"
                >
                  {{ b }}
                </div>
              </el-row>
            </el-row>
            <el-row>
              <br />
              <h3>
                话题内容：
                <span
                  v-for="a of user_data_content[user_name].list2"
                  :key="a"
                  class="mr-20"
                  style="line-height: 30px; font-size: 16px"
                >
                  {{ a }}
                </span>
              </h3>
            </el-row>
            <!-- <el-row>
              <h2 class="mt-25 mb-25">利用不同算法计算出的影响力</h2>
            </el-row>
            <el-row>
              <div class="border">
                <div
                  v-for="item in Object.keys(user_data_content[userId].dict1)"
                  :key="item"
                  class="dis-flex"
                >
                  <div class="title br fc">
                    {{ item }}
                  </div>
                  <div class="dis-flex flex1 fc">
                    <div
                      v-for="(c, index) of user_data_content[userId].dict1[
                        item
                      ]"
                      :key="c + index"
                      class="flex1 fc br"
                      style="
                        height: 100%;
                        word-wrap: break-word;
                        word-break: break-all;
                      "
                    >
                      {{ c }}
                    </div>
                  </div>
                </div>
              </div>
            </el-row> -->
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

export default {
  name: "Permissions",
  components: {
    JsonEditor,
  },

  data() {
    return {
      user_data_content: {},
      choice: {
        "香港事件数据集-微博": "OpinionLeaderOneList",
        "李文亮事件数据集-微博": "OpinionLeaderThreeList",
      },
      al_data: [
        {
          title: "算法名称",
          children: [
            "LH-index",
            "介数中心性",
            "用户行为影响力",
            "用户话题影响力",
            "综合评估影响力",
          ],
        },
        {
          title: "用户影响力",
          children: [],
        },
        {
          title: "影响力在所有用户中的排名",
          children: [],
        },
      ],
    };
  },
  computed: {
    user_name() {
      return decodeURI(this.$route.query.user_name);
    },
    value1() {
      return decodeURI(this.$route.query.value1);
    },
  },

  created() {
    const _this = this;
    axios.get("http://202.121.180.70:8109/getData?n=12").then(function (resp) {
      console.log(resp);
      _this.user_data_content = resp.data[_this.choice[_this.value1]];
    });
  },

  methods: {
    // assign(user_data_content, userId) {
    //   this.al_data[1].children = JSON.parse(
    //     JSON.stringify([
    //       user_data_content[userId].lh_index,
    //       user_data_content[userId].between,
    //       user_data_content[userId].behavior,
    //       user_data_content[userId].topic,
    //       user_data_content[userId].tops,
    //     ])
    //   );
    //   this.al_data[2].children = JSON.parse(
    //     JSON.stringify([
    //       user_data_content[userId].rank1,
    //       user_data_content[userId].rank2,
    //       user_data_content[userId].rank3,
    //       user_data_content[userId].rank4,
    //       user_data_content[userId].rank5,
    //     ])
    //   );
    //   this.$set(al_data, 1, al_data[1]);
    //   this.$set(al_data, 2, al_data[2]);
    // },
    // selectModel(id) {
    //   let obj = {};
    //   obj = this.YQ_data.find((item) => {
    //     return item.id === id; //筛选出匹配数据
    //   });
    // },
  },
};
</script>
<style lang="scss" scoped>
.permissions-container {
  .lodash-content {
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }

  .border1 {
    margin-top: 24%;
  }
  .border2 {
    margin-top: 14%;
    margin-left: 6%;
  }
  .border3 {
    margin-top: 7%;
  }
  .border4 {
    margin-top: 5%;
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
    height: 200px;
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
