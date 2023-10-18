<template>
  <div class="main-show">
    <el-row :gutter="10" type="flex">
      <el-col :span="9">
        <div class="grid-content news">
          <el-card class="box-card" style="height: 385px">
            <div slot="header" class="clearfix">
              <h1>{{ result["event_name"] }}</h1>
            </div>
            <div class="text item">起始时间: {{ start }}</div>
            <div class="text item">终止时间: {{ end }}</div>
            <div class="text item">关键词: {{ keyword }}</div>
            <div class="text item">信息来源: {{ source }}</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="7">
        <el-row>
          <div class="grid-content">
            <el-card>
              <div
                slot="header"
                class="clearfix"
                style="display: flex; align-items: center"
              >
                <h3>安全等级</h3>

                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                  "
                >
                  <el-tooltip
                    class="item"
                    effect="dark"
                    placement="right-start"
                  >
                    <i class="el-icon-question" />
                    <div slot="content">
                      <font size="2">
                        事件安全等级分为：
                        <br />
                        特别重大网络安全事件
                        <br />
                        重大网络安全事件
                        <br />
                        较大网络安全事件
                        <br />
                        一般网络安全事件
                      </font>
                    </div>
                  </el-tooltip>
                </div>
              </div>

              <div :class="{ attention: !isShowrank }">
                <div
                  style="
                    margin: 5px 0;
                    display: flex;
                    justify-content: space-around;
                  "
                >
                  <div
                    style="
                      display: flex;
                      flex-direction: column;
                      justify-content: space-between;
                      align-items: center;
                      font-size: 20px;
                    "
                  >
                    <h4>关注度</h4>
                    <span>{{ description[4] }}</span>
                  </div>
                  <div style="border-left: gainsboro 1px solid"></div>
                  <div
                    style="
                      display: flex;
                      flex-direction: column;
                      justify-content: space-between;
                      align-items: center;
                      font-size: 20px;
                    "
                  >
                    <h4>危害度</h4>
                    <span>{{ description[5] }}</span>
                  </div>
                </div>
                <div
                  class="buttonSet"
                  style="display: flex; justify-content: center"
                >
                  <el-button
                    type="primary"
                    size="small"
                    round="true"
                    @click="showRank"
                  >
                    查看态势等级
                  </el-button>
                </div>
              </div>

              <div style="margin: 5px 0" :class="{ attention: isShowrank }">
                <h1>{{ situation }}</h1>
              </div>
            </el-card>
          </div>
        </el-row>
        <el-row>
          <div class="grid-content">
            <el-card>
              <div slot="header" class="clearfix">
                <div style="display: flex; align-items: center">
                  <h3>态势</h3>
                  <el-popover placement="top-start" width="200" trigger="hover">
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                      class="clearfix"
                    >
                      <div
                        style="
                          border-bottom: 1px solid gainsboro;
                          width: 100%;
                          display: flex;
                          justify-content: center;
                          padding: 5px;
                        "
                      >
                        <span>九个维度</span>
                      </div>
                      <div
                        style="
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                          padding: 5px;
                          justify-content: center;
                        "
                      >
                        <span
                          v-for="item in nineD"
                          :key="item"
                          style="text-align: center"
                        >
                          {{ item }}
                        </span>
                      </div>
                    </div>

                    <span slot="reference"><i class="el-icon-question" /></span>
                  </el-popover>
                  <div align="right">
                    <el-button
                      size="mini"
                      icon="el-icon-edit"
                      circle
                      @click="dialogVisible1 = true"
                    ></el-button>
                  </div>
                  <!--                    <el-button type="primary" size="mini" round="true" @click="dialogVisible1 = true" >评估工具说明</el-button>-->
                  <el-dialog
                    :visible.sync="dialogVisible1"
                    width="50%"
                    style="text-align: center"
                    :before-close="handleClose"
                  >
                    <div align="left" style="font-weight: bold">
                      内部一致性信度：0.942
                    </div>
                    <div align="left" style="margin-top: 10px">
                      通常，内部要达到0.80以上可以接受，而低于0.70则为低信度，需要予以拒绝。
                    </div>
                    <div
                      align="left"
                      style="font-weight: bold; margin-top: 10px"
                    >
                      结构效度：符合良好标准
                    </div>
                    <div align="left" style="margin-top: 10px">
                      1. 采用主成分分析方法（Principal Component
                      Analysis，PCA）将9个维度划分为3个因子;
                    </div>
                    <div align="left" style="margin-top: 10px">
                      2. 所有维度的因子载荷（Component
                      Loading）都大于等于0.782，因子载荷在0.3以上，表明这个维度可以采纳;
                    </div>
                    <div align="left" style="margin-top: 10px">
                      3.
                      三个因子总共解释了83.6%的方差，所有因子总共能解释70%以上的方差，说明该因子结构可以采纳;
                    </div>
                    <div align="left" style="margin-top: 10px">
                      4. Barlett’s Test of
                      Sphericity显著，表明PCA分析所得出的因子是可以采纳的;
                    </div>
                    <div align="left" style="margin-top: 10px">
                      5.
                      综合以上3个测试结果数据，说明9个维度的结构效度的拟合符合良好标准。
                    </div>
                  </el-dialog>
                </div>
              </div>
              <div class="tag">
                <el-tooltip
                  effect="dark"
                  class="tag-item"
                  open-delay="500"
                  placement="top-end"
                >
                  <div slot="content">
                    <td style="width: 110px">
                      <br />
                      <br />
                      <tr align="center">情感等级</tr>
                      <tr align="center">（从严重到一般）</tr>
                    </td>
                    <td style="width: 60px">
                      <tr align="center">情感激烈</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">情感激动</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">情感波动</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">情感平和</tr>
                    </td>
                  </div>
                  <div :style="{ backgroundColor: colour[0] }">
                    {{ description[0] }}
                  </div>
                </el-tooltip>
                <el-tooltip
                  effect="dark"
                  class="tag-item"
                  open-delay="500"
                  placement="top-start"
                >
                  <div slot="content">
                    <td style="width: 110px">
                      <br />
                      <br />
                      <tr align="center">行为等级</tr>
                      <tr align="center">（从严重到一般）</tr>
                    </td>
                    <td style="width: 60px">
                      <tr align="center">引爆全网</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">积极关注</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">略显积极</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">漠不关心</tr>
                    </td>
                  </div>
                  <div :style="{ backgroundColor: colour[1] }">
                    {{ description[1] }}
                  </div>
                </el-tooltip>
                <el-tooltip
                  effect="dark"
                  class="tag-item"
                  open-delay="500"
                  placement="top-start"
                >
                  <div slot="content">
                    <td style="width: 110px">
                      <br />
                      <br />
                      <tr align="center">认知等级</tr>
                      <tr align="center">（从严重到一般）</tr>
                    </td>
                    <td style="width: 60px">
                      <tr align="center">负向认知</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">认知消极</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">认知积极</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">正向认知</tr>
                    </td>
                  </div>
                  <div :style="{ backgroundColor: colour[2] }">
                    {{ description[2] }}
                  </div>
                </el-tooltip>
                <el-tooltip
                  effect="dark"
                  class="tag-item"
                  open-delay="500"
                  placement="bottom"
                >
                  <div slot="content">
                    <td style="width: 110px">
                      <br />
                      <br />
                      <tr align="center">传播等级</tr>
                      <tr align="center">（从严重到一般）</tr>
                    </td>
                    <td style="width: 60px">
                      <tr align="center">传播迅猛</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">传播迅速</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">传播较快</tr>
                      <tr align="center">↓</tr>
                      <tr align="center">传播缓慢</tr>
                    </td>
                  </div>
                  <div :style="{ backgroundColor: colour[3] }">
                    {{ description[3] }}
                  </div>
                </el-tooltip>
                <!--<div v-for="d in description" :key="d" effect="dark" class="tag-item">{{ d }}</div> -->
              </div>
            </el-card>
          </div>
        </el-row>
      </el-col>

      <el-col :span="9">
        <div class="grid-content">
          <Radar :data="score"></Radar>
        </div>
        <div
          class="grid-content"
          style="display: flex; justify-content: center"
        >
          <el-tooltip class="item" effect="dark" placement="right-start">
            <el-button
              type="primary"
              size="mini"
              round="true"
              @click="dialogVisible = true"
            >
              传播预测
            </el-button>
          </el-tooltip>
          <el-dialog
            :visible.sync="dialogVisible"
            width="50%"
            style="text-align: center"
            :before-close="handleClose"
          >
            <img :src="spreadImg" width="527" height="370" />
            <img :src="accImg" width="527" height="370" />
          </el-dialog>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <div class="grid-content">
        <Linear :data="linearData" :date="linearDate"></Linear>
      </div>
    </el-row>

    <el-row :gutter="15" style="margin-top: 10px">
      <el-col :span="14">
        <div class="grid-content">
          <Map :datalist="{ mapData }"></Map>
        </div>
      </el-col>
      <el-col :span="10">
        <el-row>
          <div class="grid-content">
            <Cloud :data="wordData"></Cloud>
          </div>
        </el-row>
      </el-col>
    </el-row>

    <el-row>
      <div class="grid-content">
        <Weibo :weibo="weibo"></Weibo>
      </div>
    </el-row>
    <div class="lodash-content">
      <h2 class="mt-25 mb-25">弹性引导策略配置预案</h2>
      <span class="represent" style="font-size: 16px; line-height: 28px">
        我们根据四个维度的指标计算分别得到情感、行为、认知和传播的等级划分。根据行为和传播指标来选择技术型的引导策略，根据情感和认
        知来选择心理型的引导策略，最终得到组合型弹性策略对舆情事件进行引导。
      </span>
      <div>
        <h3 class="mt-25 mb-25">
          我们选取的技术性引导策略是：{{ strategy[0] }}
          <br />
          <br />
          我们选取的心理性引导策略是：{{ strategy[1] }}
        </h3>
      </div>
      <br />
    </div>
    <el-row>
      <div class="button1">
        <el-button type="primary" icon="el-icon-video-play" @click="handle1">
          <span style="font-size: 18px">方案查看</span>
        </el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import Radar from "./Radar";
import Map from "./Map";
import Linear from "./Linear";
import Cloud from "./WordCloud";
import Weibo from "./Weibo";
export default {
  name: "Detailed",
  components: { Radar, Map, Linear, Cloud, Weibo },
  props: {
    eventId: {
      type: [String, Number],
      default: "0",
    },
  },

  data() {
    return {
      info: [],
      result: {},
      colour: [],
      dialogVisible: false,
      dialogVisible1: false,
      isShowrank: true,
      spreadImg: require("../figure/" + this.eventId + "p.png"),
      accImg: require("../figure/" + this.eventId + "a.png"),
      nineD: [
        "点赞量",
        "评论量",
        "转发量",
        "正向情感词",
        "负向情感词",
        "正向评论占比",
        "负向评论占比",
        "发布地域",
        "发布时间区间",
      ],
    };
  },

  computed: {
    start: function () {
      // console.log("info");
      // console.log(this.info);
      if (this.info !== [] && this.info.length > 0 && this.info) {
        return this.info[0].time;
      }
      return "";
    },
    end: function () {
      if (this.info !== [] && this.info.length > 0 && this.info) {
        return this.info[this.info.length - 1].time;
      }
      return "";
    },
    strategy: function () {
      if (this.result !== null && this.result !== {}) {
        return [
          this.result.technology_guidance,
          this.result.psychological_guidance,
        ];
      }

      return [];
    },
    keyword: function () {
      if (
        this.result !== null &&
        this.result !== {} &&
        this.result.word_frequency
      ) {
        return this.result.word_frequency
          .split(",")
          .slice(0, 3)
          .map((value, index) => {
            return value.split(" ")[0];
          })
          .join(",");
      }
      return "";
    },
    source: function () {
      if (this.result !== null && this.result !== {}) {
        return this.result.platform;
      }
      return "";
    },
    situation: function () {
      if (this.result !== null && this.result !== {}) {
        return this.result.situation_description;
      }
      return "";
    },
    description: function () {
      if (this.result !== null && this.result !== {}) {
        return [
          this.result.feeling_description,
          this.result.behaviour_description,
          this.result.cognition_description,
          this.result.spread_description,
          this.result.attention_score,
          this.result.harm_score,
        ];
      }
      return [];
    },
    score: function () {
      console.log(this.result);
      if (this.result !== null && this.result !== {}) {
        return [
          this.result.feeling_score,
          this.result.cognition_score,
          this.result.spread_score,
          this.result.behaviour_score,
        ];
      }

      return [];
    },
    linearData() {
      if (this.info !== null && this.info !== []) {
        return this.info.map((element, index) => element.timesum);
      }
      return [];
    },

    linearDate() {
      if (this.info !== null && this.info !== []) {
        return this.info.map((element, index) => element.time);
      }
      return [];
    },

    mapData() {
      if (this.result !== null && this.result !== {} && this.result.location) {
        let obj = [];
        this.result.location.split(",").map((element, index) => {
          let loc = element.split(" ")[0];
          let num = element.split(" ")[1];
          obj.push({ name: loc, value: parseInt(num) });
        });
        return obj;
      }
      return [];
    },

    wordData() {
      if (
        this.result !== null &&
        this.result !== {} &&
        this.result.word_frequency
      ) {
        let obj = [];
        this.result.word_frequency.split(",").map((element, index) => {
          let loc = element.split(" ")[0];
          let num = element.split(" ")[1];
          obj.push({ name: loc, value: parseInt(num) });
        });
        return obj;
      }
      return [];
    },

    weibo() {
      if (
        this.result !== null &&
        this.result !== {} &&
        this.result.popular_weibo
      ) {
        let obj = [];
        this.result.popular_weibo.split("\n").map((element, index) => {
          if (element) {
            console.log(element);
            let part1 = element.split(",")[0];
            let part2 = element.split(",")[1];
            let part3 = element.split(",")[2];
            obj.push({
              id: index + 1,
              name: part1.split(":")[1],
              time: part2.slice(5, part2.length),
              content: part3.slice(8, part3.length),
            });
          }
        });
        return obj;
      }
      return [];
    },
  },

  mounted() {
    axios
      .get(`http://202.121.180.70:8109/getTime?eventid=${this.eventId}`)
      .then((response) => {
        this.info = response.data.result;
      });

    axios
      //http://192.168.1.2
      .get(`http://202.121.180.70:8109/getDataById?eventid=${this.eventId}`)
      .then((res) => {
        this.result = res.data.result[0];
        this.colour = res.data.colour;
      });
  },
  methods: {
    handle1() {
      this.$router.push({ name: "Strategyplan" });
    },
    showRank() {
      this.isShowrank = false;
    },
  },
};
</script>



<style>
.text {
  font-size: 14px;
}
.lodash-content {
  margin-left: 2%;
}
.button1 {
  border: 0px solid rgb(255, 255, 255);
  margin-left: 3%;
  margin-top: 2%;
  margin-bottom: 3%;
}
.item {
  margin-bottom: 18px;
}

.tag {
  display: flex;
  color: white;
  flex-wrap: wrap;
  flex-direction: row;
}

.tag-item {
  /* flex: 0 1 20%; */
  padding: 10px;
  //background-color: #409eff;
  border-radius: 40px;
  border-color: white;
  border-width: 3px;
  border-style: solid;
}
.attention {
  display: none;
}

.buttonSet .el-button {
  padding: 0;
  width: 300px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00aaff;
}
</style>


