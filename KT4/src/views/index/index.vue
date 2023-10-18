<template>
  <div class="index-container">
    <el-row :gutter="20">
      <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-alert
          v-if="noticeList[0]"
          :title="noticeList[0].title"
          :closable="noticeList[0].closable"
        ></el-alert>
      </el-col> -->
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card shadow="never">
          <center><h1>面向宏观态势的信息引导与评估系统</h1></center>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card shadow="never">
          <div slot="header">
            <el-button
              style="font-size: 18px; font-weight: bold"
              type="link"
              @click="handle"
            >
              舆情态势评估和引导策略
            </el-button>
          </div>
          <span style="font-size: 16px; line-height: 30px">
            研究敏感舆情事件宏观态势的量化测度、特定信息传播的实时预测算法和空间维预测算法和实时在线化处理方法。首先从情感、行为、
            认知和传播态势四个方面对事件进行评分，然后根据事件的态势评分对事件进行评级，最后根据舆情事件的等级，分别从技术引
            导策略库和心理引导策略库选取合适的策略进行组合引导。
          </span>
          <div class="image-content1">
            <img
              src="../figure/yindao1.jpg"
              width="400"
              height="300"
              @click="handle"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card shadow="never">
          <div slot="header">
            <el-button
              style="font-size: 18px; font-weight: bold"
              type="link"
              @click="handle2"
            >
              意见领袖发现与跟踪
            </el-button>
          </div>
          <span style="font-size: 16px; line-height: 30px">
            研究网络个体影响力评价技术，根据节点信息和节点正文信息计算得到节点的综合影响力，进而找出重大舆情事件中的意见领袖。研究基于用户指纹的意见领袖行为分析与跟踪技术。通过分析用户的属性特
            征及行为特征，建立高维度节点身份映射模型，对跨网络的不同用户进行身份对齐，从而实现对目标节点不同账号的跟踪。
          </span>
          <div class="image-content2">
            <img
              src="../figure/yindao2.png"
              width="400"
              height="300"
              @click="handle2"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <el-card shadow="never">
          <div slot="header">
            <el-button
              style="font-size: 18px; font-weight: bold"
              type="link"
              @click="handle3"
            >
              引导策略工具库和效果展示
            </el-button>
          </div>
          <span style="font-size: 16px; line-height: 30px">
            引导策略工具库包括基于竞争的传播引导策略、基于内容生成的传播引导策略和基于结构阻断的引导策略等。
            不同的引导策略引导的目标各不相同，针对不同的社交网络中的舆情事件可以选择不同的引导策略，使用相应的策略能够控制舆论的
            传播。最后，引导效果展示通过对真实事件的引导显示了引导策略的具体实施效果。
          </span>
          <div class="image-content3">
            <img
              src="../figure/yindao3.jpg"
              width="450"
              height="300"
              @click="handle3"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VabChart from "@/plugins/echarts";
import { dependencies, devDependencies } from "../../../package.json";
import { getList } from "@/api/changeLog";
import { getNoticeList } from "@/api/notice";
import { getRepos, getStargazers } from "@/api/github";
export default {
  name: "Index",
  components: {
    VabChart,
  },
  data() {
    return {
      timer: 0,
      updateTime: process.env.VUE_APP_UPDATE_TIME,
      nodeEnv: process.env.NODE_ENV,
      dependencies: dependencies,
      devDependencies: devDependencies,
      config1: {
        startVal: 0,
        endVal: this.$baseLodash.random(20000, 60000),
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 8000,
      },
      config2: {
        startVal: 0,
        endVal: this.$baseLodash.random(1000, 20000),
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 8000,
      },
      config3: {
        startVal: 0,
        endVal: this.$baseLodash.random(1000, 20000),
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 8000,
      },

      //访问量

      //授权数

      //词云

      //中国地图

      //更新日志
      reverse: true,
      activities: [],
      noticeList: [],
      //其他信息
      userAgent: navigator.userAgent,
      //卡片图标
    };
  },
  created() {
    this.fetchData();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    handle() {
      this.$router.push({ name: "UserManagement" });
    },
    handle2() {
      this.$router.push({ name: "Permission" });
    },
    handle3() {
      this.$router.push({ name: "Pay" });
    },
    handle4() {
      this.$router.push({ name: "C2" });
    },
    handleClick(e) {
      this.$baseMessage(`点击了${e.name},这里可以写跳转`);
    },
    handleZrClick(e) {},
    handleChangeTheme() {
      this.$baseEventBus.$emit("theme");
    },
    async fetchData() {
      const { data } = await getList();
      data.map((item, index) => {
        if (index === data.length - 1) {
          item.color = "#0bbd87";
        }
      });
      this.activities = data;
      const res = await getNoticeList();
      this.noticeList = res.data;
      /* getRepos({
        token: "1061286824f978ea3cf98b7b8ea26fe27ba7cea1",
      }).then((res) => {
        const per_page = Math.ceil(res.data.stargazers_count / 100);
        alert(per_page);
        getStargazers({
          token: "1061286824f978ea3cf98b7b8ea26fe27ba7cea1",
          page: 1,
          per_page: res.per_page,
        }).then((res) => {
          alert(JSON.stringify(res));
        });
      }); */
    },
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  padding: 0 !important;
  margin: 0 !important;
  background: #f5f7f8 !important;

  ::v-deep {
    .el-alert {
      padding: $base-padding;

      &--info.is-light {
        min-height: 82px;
        padding: $base-padding;
        margin-bottom: 15px;
        color: #909399;
        background-color: $base-color-white;
        border: 1px solid #ebeef5;
      }
    }
    .header {
      border: 0px solid rgb(255, 255, 255);
      border-bottom-width: 0;
      border-bottom: 0px solid lightgrey;
    }
    .image-content1 {
      margin-left: 8%;
      margin-top: 10%;
      margin-bottom: 4%;
    }
    .image-content2 {
      margin-left: 8%;
      margin-top: 10%;
      margin-bottom: 4%;
    }
    .image-content3 {
      margin-left: 3%;
      margin-top: 10%;
      margin-bottom: 4%;
    }

    .el-card__body {
      .echarts {
        width: 100%;
        height: 125px;
      }
    }
  }

  .card {
    min-height: 400px;

    ::v-deep {
      .el-card__body {
        .echarts {
          width: 100%;
          height: 305px;
        }
      }
    }
  }

  .bottom {
    padding-top: 20px;
    margin-top: 5px;
    color: #595959;
    text-align: left;
    border-top: 1px solid $base-border-color;
  }

  .table {
    width: 100%;
    color: #666;
    border-collapse: collapse;
    background-color: #fff;

    td {
      position: relative;
      min-height: 20px;
      padding: 9px 15px;
      font-size: 14px;
      line-height: 20px;
      border: 1px solid #e6e6e6;

      &:nth-child(odd) {
        width: 20%;
        text-align: right;
        background-color: #f7f7f7;
      }
    }
  }

  .icon-panel {
    height: 100px;
    text-align: center;
    cursor: pointer;

    svg {
      font-size: 40px;
    }

    p {
      margin-top: 10px;
    }
  }

  .bottom-btn {
    button {
      margin: 5px 10px 15px 0;
    }
  }
}
</style>
