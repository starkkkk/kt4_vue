<template>
  <div class="indexContent">
    <el-row style="margin-top: 20px">
      <el-col>
        <el-divider content-position="left">
          <h1>基于心理干预的引导策略</h1>
        </el-divider>
        <el-card shadow="hover" style="padding-left: 30px">
          <div slot="header" class="clearfix">
            <span
              style="font-size: 20px; font-weight: bold; margin-right: 20px"
            >
              请选择事件
            </span>
            <el-select
              v-model="value"
              placeholder="李文亮事件"
              @change="changeEvent"
            >
              <el-option
                v-for="item in optionsdata"
                :key="item.eventNum"
                :label="item.eventName"
                :value="item.eventNum"
              ></el-option>
            </el-select>
          </div>
          <div
            class="cardBody"
            style="display: flex; justify-content: space-around"
          >
            <div class="bodyleft" style="width: 30%; height: 280px">
              <el-card shadow="hover" style="height: 280px; margin-bottom: 0px">
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                  "
                >
                  <span>
                    <h2>{{ eventName }}</h2>
                  </span>
                  <div style="margin: 5px 0">
                    <span style="font-weight: bold">起始时间：</span>
                    <br />
                    <span>{{ startTime }}</span>
                  </div>
                  <div style="margin: 5px 0">
                    <span style="font-weight: bold">终止时间：</span>
                    <br />
                    <span>{{ endTime }}</span>
                  </div>
                  <div style="margin: 5px 0">
                    <span style="font-weight: bold">关{{ ssss }}键词：</span>
                    <br />
                    <span>{{ keyValue }}</span>
                  </div>
                  <div style="margin: 5px 0">
                    <span style="font-weight: bold">信息来源：</span>
                    <br />
                    <span>{{ platform }}</span>
                  </div>
                </div>
              </el-card>
            </div>
            <div
              class="bodycenter"
              style="
                width: 30%;
                height: 280px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              "
            >
              <el-card shadow="hover" style="margin-bottom: 0px">
                <div>
                  <span>
                    <h2>安全等级</h2>
                  </span>
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
                        "
                      >
                        <el-tag color="#CCCC33" hit="false" effect="dark">
                          关注度
                        </el-tag>
                        <span>{{ attentionscore }}</span>
                      </div>
                      <div style="border-left: gainsboro 1px solid"></div>
                      <div
                        style="
                          display: flex;
                          flex-direction: column;
                          justify-content: space-between;
                          align-items: center;
                        "
                      >
                        <el-tag color="#99CC99" hit="false" effect="dark">
                          危害度
                        </el-tag>
                        <span>{{ harmscore }}</span>
                      </div>
                    </div>
                    <div
                      class="buttonSet"
                      style="display: flex; justify-content: center"
                    >
                      <el-button type="primary" size="mini" @click="showRank">
                        查看态势等级
                      </el-button>
                    </div>
                  </div>

                  <div style="margin: 5px 0" :class="{ attention: isShowrank }">
                    <span
                      style="font-weight: bold; color: red; font-size: 20px"
                    >
                      {{ Srank }}
                    </span>
                    <br />
                  </div>
                </div>
              </el-card>
              <el-card shadow="hover" style="margin-bottom: 0px">
                <div>
                  <span style="display: flex">
                    <h2>态势</h2>
                    <el-popover
                      placement="top-start"
                      width="200"
                      trigger="hover"
                    >
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
                      <span
                        slot="reference"
                        style="
                          font-size: 5px;
                          color: #409eff;
                          border: #409eff 1px solid;
                          border-radius: 50%;
                          padding: 1px;
                          height: 25px;
                          width: 25px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        "
                      >
                        详情
                      </span>
                    </el-popover>
                  </span>
                  <div style="margin: 5px 0">
                    <el-tag
                      v-for="item in items"
                      :key="item.label"
                      :type="item.type"
                      effect="dark"
                    >
                      {{ item.label }}
                    </el-tag>
                  </div>
                </div>
              </el-card>
            </div>
            <div class="bodyright" style="width: 30%; height: 280px">
              <el-card shadow="hover" style="margin-bottom: 0px; height: 280px">
                <div>
                  <span>
                    <h2>舆情指数雷达图</h2>
                  </span>
                  <div
                    style="padding: 2px; display: flex; justify-content: center"
                  >
                    <div
                      id="radarChart"
                      style="width: 200px; height: 200px"
                    ></div>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover" style="padding-left: 30px">
          <div slot="header" class="clearfix">
            <span
              style="font-size: 20px; font-weight: bold; margin-right: 20px"
            >
              事件数据分析
            </span>
          </div>
          <div class="table" style="margin-bottom: 20px"></div>
          <div
            style="
              padding: 20px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            "
          >
            <div id="echarts" style="width: 30%; height: 500px"></div>
            <div id="Pursue" style="width: 30%; height: 500px"></div>
            <div id="Emotion" style="width: 30%; height: 500px"></div>
          </div>
          <div style="margin-bottom: 30px">
            <div
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              "
            >
              <h2>推荐策略</h2>
              <el-link>
                <!-- <h3 style="color: #409EFF;" @click="showStrategy">策略库</h3> -->
                <h2 style="color: #409eff" @click="showStrategy2">策略库</h2>
              </el-link>
            </div>
            <div style="padding-left: 30px">
              <h3>
                1.
                针对舆情事件的干预对象进行敏感等级、核心诉求、情感分析，并依据干预对象的敏感等级推荐心理干预引导策略
              </h3>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 50px;
              "
            >
              <div
                style="
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  width: 50%;
                  font-size: 20px;
                  color: #606266;
                  height: 200px;
                "
              >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 150px;
                  "
                >
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="舆情事件中主要干预对象类型,确定干预策略范围.心理管制/心理劝导/心理助推"
                    placement="right"
                  >
                    <span v-if="eventNumId == 'event1'">
                      对象：
                      <el-tag type="success" effect="plain">支持者</el-tag>
                    </span>
                    <span v-else>
                      对象：
                      <el-tag type="success" effect="plain">倡导者</el-tag>
                    </span>
                  </el-tooltip>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="舆情事件中主要敏感类型,缩小干预策略范围.不敏感/一级敏感/二级敏感/三级敏感/四级敏感"
                    placement="right"
                  >
                    <span>
                      敏感：
                      <el-tag effect="plain">
                        {{ mingan }}
                      </el-tag>
                    </span>
                  </el-tooltip>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="舆情事件中主要诉求类型.舆情事件辅助分析结果"
                    placement="right"
                  >
                    <span>
                      诉求：
                      <el-tag type="success" effect="plain">{{ suqiu }}</el-tag>
                    </span>
                  </el-tooltip>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="舆情事件中主要负面情绪.舆情事件辅助分析结果"
                    placement="right"
                  >
                    <span>
                      情感：
                      <el-tag type="warning" effect="plain">
                        {{ qingxu }}
                      </el-tag>
                    </span>
                  </el-tooltip>
                </div>
                <span>
                  <i
                    style="font-size: 60px"
                    class="iconfont icon-cs-jt-xy-1-1"
                  ></i>
                </span>
                <span>
                  推荐使用
                  <span style="color: black; font-weight: bold">
                    {{ strategy }}
                  </span>
                  <!-- <span style="color: #409EFF;padding-left: 10px;" type="primary" @click="recomment">查看介绍</span> -->
                </span>
              </div>
              <div
                style="
                  width: 50%;
                  border-left: #606266 1px dashed;
                  padding-left: 25px;
                "
              >
                <div v-show="isShowStrage" style="width: 80%">
                  <h2>
                    <span style="color: #cc0000">{{ strategy }}</span>
                  </h2>
                  <p
                    style="color: #110000; font-size: 20px; line-height: 25px"
                    v-html="strategyDetail"
                  >
                    <!-- {{strategyDetail}} -->
                  </p>
                </div>
              </div>
            </div>
            <div style="padding-left: 30px">
              <h3>2. 利用政府信息和主流媒体相关报道进行实证验证</h3>
            </div>
            <div style="padding-left: 70px">
              <div style="width: 90%">
                <p style="font-size: 18px; font-weight: bold">
                  {{ titleName }}
                </p>
                <p style="font-size: 15px; line-height: 30px">
                  {{ contentDeatil }}
                </p>
              </div>

              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  padding: 10px 10px;
                "
              >
                <div style="width: 55%; text-align: center">
                  <el-button type="danger" round>政府信息</el-button>
                </div>
                <div style="width: 45%; text-align: center">
                  <el-button type="danger" round>主流媒体</el-button>
                </div>
              </div>
              <div style="display: flex; justify-content: space-between">
                <img :src="imageUrl" width="55%" />
                <img :src="imageUrl2" width="45%" />
              </div>
            </div>
          </div>
          <div>
            <h2>干预效果</h2>

            <div style="padding-left: 30px">
              <el-button type="primary" @click="showDuiResult">
                查看干预效果
              </el-button>
            </div>
            <!-- <el-button type="primary" @click="showCard">查看干预效果</el-button> -->
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import showcontentvue from './showcontent.vue'
import Axios from "axios";
export default {
  data() {
    return {
      dialogFormVisible: false,
      isShowStrage: true,
      // isShow: false,
      Srank: "",
      eventName: "",
      startTime: "",
      endTime: "",
      keyValue: "",
      platform: "",
      // ssss:'是大V',
      eventid: "event1",
      optionsdata: "",
      value: "",
      items: [],
      mingan: "权力敏感",
      suqiu: "道德诉求",
      qingxu: "悲伤情绪",
      strategy: "公开承诺策略",
      strategyDetail: "",
      titleName: "",
      contentDeatil: "",
      imageUrl: "",
      imageUrl2: "",
      eventNumId: "event1",

      // // echarts图中数据
      radarLiData: [],
      eventMinganData: [],
      eventSuqiuData: [],
      eventQingganData: [],
      isShowrank: true,
      nineD: [],
      attentionscore: "",
      harmscore: "",
    };
  },
  // components: {
  // 	// showcontentvue
  // },
  mounted() {
    this.getEvent();
    this.getBeforData("event1");
  },
  methods: {
    // 选择事件
    changeEvent(val) {
      this.eventid = val;
      this.eventNumId = val;
      this.getBeforData(val);
    },
    // 获取事件列表
    getEvent() {
      var that = this;
      Axios.get("http://202.121.180.70:8109/getEvents")
        .then(function (response) {
          console.log(response.data);
          that.optionsdata = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // 获取事件信息
    getBeforData(val) {
      var that = this;

      Axios.get("http://202.121.180.70:8109/getEventDataBefore", {
        params: {
          eventNum: val,
        },
      })
        .then(function (response) {
          console.log(response.data);
          that.Srank = response.data.radarData.situation_description;
          (that.eventName = response.data.radarData.eventName),
            (that.startTime = response.data.radarData.start_time),
            (that.endTime = response.data.radarData.end_time),
            (that.keyValue = response.data.radarData.event_type),
            (that.platform = response.data.radarData.platform),
            (that.mingan = response.data.eventdata.mingan),
            (that.suqiu = response.data.eventdata.suqiu),
            (that.qingxu = response.data.eventdata.qingxu),
            (that.strategy = response.data.eventdata.strategy),
            (that.strategyFor = response.data.eventdata.strategyFor.split(","));
          that.strategyDetail = response.data.eventdata.strategyDetail
            .replace(
              that.strategyFor[0],
              '<span style="color:red">' + that.strategyFor[0] + "</span>"
            )
            .replace(
              that.strategyFor[1],
              '<span style="color:red">' + that.strategyFor[1] + "</span>"
            );
          (that.titleName = response.data.eventdata.titleName),
            (that.contentDeatil = response.data.eventdata.contentDeatil),
            (that.imageUrl = response.data.eventdata.imageUrl),
            (that.imageUrl2 = response.data.eventdata.imageUrl2),
            (that.attentionscore = response.data.eventdata.attentionscore),
            (that.harmscore = response.data.eventdata.harmscore),
            (that.nineD = response.data.eventdata.nineDis.split(",")),
            (that.items = [
              {
                type: response.data.radarData.feeling_color,
                label: response.data.radarData.feeling_description,
              },
              {
                type: response.data.radarData.behaviour_color,
                label: response.data.radarData.behaviour_description,
              },
              {
                type: response.data.radarData.spread_color,
                label: response.data.radarData.spread_description,
              },
              {
                type: response.data.radarData.cognition_color,
                label: response.data.radarData.cognition_description,
              },
            ]);

          (that.radarLiData = [
            {
              value: [
                response.data.radarData.feeling_score.toFixed(2),
                response.data.radarData.behaviour_score.toFixed(2),
                response.data.radarData.spread_score.toFixed(2),
                response.data.radarData.cognition_score.toFixed(2),
              ],
            },
          ]),
            (that.eventMinganData = [
              {
                value: response.data.eventdata.zhengzhi,
                name: "政治敏感",
              },
              {
                value: response.data.eventdata.quanli,
                name: "权力敏感",
              },
              {
                value: response.data.eventdata.minsheng,
                name: "民生敏感",
              },
              {
                value: response.data.eventdata.seqing,
                name: "色情敏感",
              },
              {
                value: response.data.eventdata.jingji,
                name: "经济敏感",
              },
              {
                value: response.data.eventdata.baokong,
                name: "暴恐敏感",
              },
            ]),
            (that.eventSuqiuData = [
              {
                value: response.data.eventdata.daode,
                name: "道德诉求",
              },
              {
                value: response.data.eventdata.gongli,
                name: "功利诉求",
              },
            ]),
            (that.eventQingganData = [
              {
                value: response.data.eventdata.beishang,
                name: "悲伤",
              },
              {
                value: response.data.eventdata.zenghen,
                name: "憎恨",
              },
              {
                value: response.data.eventdata.jiaolv,
                name: "焦虑",
              },
              {
                value: response.data.eventdata.fennu,
                name: "愤怒",
              },
            ]);
          that.myEcharts();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    showStrategy() {
      var that = this;
      this.$router.push({
        path: "/mall/strategy",
        query: {
          eventNum: that.eventid,
        },
      });
    },
    showStrategy2() {
      this.$router.push({
        path: "/mall/strategy2",
      });
    },
    showRank() {
      this.isShowrank = false;
    },
    // // 打开弹框
    // recomment() {
    //   // this.dialogFormVisible = true;
    //   this.isShowStrage = !this.isShowStrage
    // },
    // 关闭弹框
    doclose() {
      this.dialogFormVisible = false;
    },
    myEcharts() {
      var radarmyChart = this.$echarts.init(
        document.getElementById("radarChart")
      );

      var myChart = this.$echarts.init(document.getElementById("echarts"));
      var myChartEmotion = this.$echarts.init(
        document.getElementById("Emotion")
      );
      var myChartPursue = this.$echarts.init(document.getElementById("Pursue"));
      const optionSentiment = {
        title: {
          // text: '舆情指数雷达图'
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
              name: "情感",
              max: 100,
            },
            {
              name: "行为",
              max: 100,
            },
            {
              name: "传播",
              max: 100,
            },
            {
              name: "认知",
              max: 100,
            },
          ],
          radius: 50,
        },
        series: [
          {
            name: "态势",
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

            data: this.radarLiData,
          },
        ],
      };
      const option = {
        title: {
          text: "敏感分析",
          // subtext: '敏感类别所占比例',
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "政治敏感",
            "权力敏感",
            "民生敏感",
            "色情敏感",
            "经济敏感",
            "暴恐敏感",
          ],
        },
        color: [
          "#67C23A",
          "#409EFF",
          "#E6A23C",
          "#F56C6C",
          "#5896D7",
          "#36424E",
        ],

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.eventMinganData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0,0.5)",
              },
            },
          },
        ],
      };
      const optionPursue = {
        title: {
          text: "诉求分析",
          // subtext: '核心诉求',
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["道德诉求", "功利诉求"],
        },
        color: ["#409EFF", "#D29437"],

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.eventSuqiuData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0,0.5)",
              },
            },
          },
        ],
      };
      const optionEmotion = {
        title: {
          text: "情绪分析",
          // subtext: '负面情绪比例',
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["悲伤", "憎恨", "焦虑", "愤怒"],
        },
        color: ["#67C23A", "#409EFF", "#E6A23C", "#F56C6C"],

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.eventQingganData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0,0.5)",
              },
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      radarmyChart.setOption(optionSentiment);
      myChartPursue.setOption(optionPursue);
      myChartEmotion.setOption(optionEmotion);
    },
    showCard() {
      this.isShow = !this.isShow;
      this.showResult();
    },
    showDuiResult() {
      var that = this;
      this.$router.push({
        path: "/mall/comparison",
        query: {
          eventNum: that.eventid,
        },
      });
    },
  },
};
</script>

<style>
.el-dialog__header {
  padding: 0px;
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
