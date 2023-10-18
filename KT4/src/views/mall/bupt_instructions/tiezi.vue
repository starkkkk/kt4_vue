<template>
  <div
    id="tiezi"
    v-loading="loading"
    element-loading-text="请求处理中..."
    style="width: 85%"
  >
    <div>
      <div
        style="
          padding: 10px 10px;
          width: 60%;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
        "
      >
        <el-tag :effect="tageffect[0]" class="tagid" @click="selectsort(0)">
          全部
        </el-tag>
        <el-tag
          :effect="tageffect[1]"
          class="tagid"
          type="success"
          @click="selectsort(1)"
        >
          转发数
        </el-tag>
        <el-tag
          :effect="tageffect[2]"
          class="tagid"
          type="info"
          @click="selectsort(2)"
        >
          收藏数
        </el-tag>
        <el-tag
          :effect="tageffect[3]"
          class="tagid"
          type="warning"
          @click="selectsort(3)"
        >
          评论数
        </el-tag>
        <el-tag
          :effect="tageffect[4]"
          class="tagid"
          type="danger"
          @click="selectsort(4)"
        >
          最新日期
        </el-tag>
        <el-tag
          :effect="tageffect[5]"
          class="tagid"
          type="info"
          @click="selectsort(5)"
        >
          政治敏感
        </el-tag>
        <el-tag
          :effect="tageffect[6]"
          class="tagid"
          type="warning"
          @click="selectsort(6)"
        >
          暴恐敏感
        </el-tag>
        <el-tag
          :effect="tageffect[7]"
          class="tagid"
          type="danger"
          @click="selectsort(7)"
        >
          经济敏感
        </el-tag>
        <el-tag
          :effect="tageffect[8]"
          class="tagid"
          type="success"
          @click="selectsort(8)"
        >
          色情敏感
        </el-tag>
        <el-tag
          :effect="tageffect[9]"
          class="tagid"
          type="info"
          @click="selectsort(9)"
        >
          权力敏感
        </el-tag>
        <el-tag
          :effect="tageffect[10]"
          class="tagid"
          type="warning"
          @click="selectsort(10)"
        >
          民生敏感
        </el-tag>
        <el-tag
          :effect="tageffect[11]"
          class="tagid"
          type="danger"
          @click="selectsort(11)"
        >
          愤怒情感
        </el-tag>
        <el-tag
          :effect="tageffect[12]"
          class="tagid"
          type="warning"
          @click="selectsort(12)"
        >
          焦虑情感
        </el-tag>
        <el-tag
          :effect="tageffect[13]"
          class="tagid"
          type="danger"
          @click="selectsort(13)"
        >
          憎恨情感
        </el-tag>
        <el-tag
          :effect="tageffect[14]"
          class="tagid"
          type="warning"
          @click="selectsort(14)"
        >
          悲伤情感
        </el-tag>
        <!-- <el-tag :effect="tageffect[5]" class="tagid" @click="selectsort(5)">古北路上怎么了</el-tag> -->
      </div>
      <div
        class="tiezishowContent"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <el-card
          v-for="(item, index) in tiezidatas"
          :key="index + 'z'"
          style="margin: 3px; width: 60rem"
        >
          <div
            style="
              padding: 1px 5px;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
            "
            @click="
              joindetail(
                item.no,
                item.倡导者 == 1
                  ? '倡导者'
                  : item.扩散者 == 1
                  ? '扩散者'
                  : '支持者'
              )
            "
          >
            <div
              style="
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                width: 100%;
              "
            >
              <el-avatar :title="duixiang">user</el-avatar>
              <div style="width: 95%; font-size: 0.8rem; margin-left: 5px">
                <div>用户id：{{ item.u_Id }}</div>
              </div>
            </div>
            <div style="width: 95%">
              <span>
                <el-tag id="biaoqian" type="warning">
                  {{
                    item.倡导者 == 1
                      ? "倡导者"
                      : item.扩散者 == 1
                      ? "扩散者"
                      : "支持者"
                  }}
                </el-tag>
              </span>
              <div class="bottom clearfix">
                <time class="time tieziContent1">{{ item.w_content }}</time>
                <div style="text-align: right">发表于{{ item.date }}</div>
              </div>
              <div style="text-align: right; font-size: 0.8rem">
                来自{{ item.tools }}
              </div>
            </div>
            <div
              style="
                border-top: 1px solid #d9d9d9;
                padding-top: 10px;
                margin-top: 8px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                font-size: 0.8rem;
              "
            >
              <div>转发{{ item.re_tweet }}</div>
              <span style="color: #d9d9d9">|</span>
              <div>评论{{ item.comment }}</div>
              <span style="color: #d9d9d9">|</span>
              <div>
                <i class="el-icon-star-on"></i>
                {{ item.likes }}
              </div>
            </div>
          </div>
        </el-card>
      </div>
      <div
        class="block"
        style="padding: 10px 10px; display: flex; justify-content: center"
      >
        <el-pagination
          layout="prev, pager, next"
          :current-page="currentpage"
          :total="total"
          :page-size="30"
          @current-change="changepage"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import showcontentvue from './showcontent.vue'
import Axios from "axios";
export default {
  data() {
    return {
      loading: false,
      duixiang: "",
      tieziDetail: true, //是否显示帖子详情页，true不显示
      keyword: 0,
      keywords: [
        "retweet",
        "likes",
        "comment",
        "pubtime",
        "政治敏感",
        "暴恐敏感",
        "经济敏感",
        "色情敏感",
        "权力敏感",
        "民生敏感",
        "anger",
        "anxiety",
        "hate",
        "sorrow",
      ],
      tiezi: false,
      isselect: false,
      tageffect: [
        "dark",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
      ],
      titlenum: "1",
      titles: ["心理管制策略", "心理劝导策略", "心理助推策略"],
      titlevalue: "",
      value: "",
      currentpage: 1,
      sendval: "",
      indexnum: "0",
      iszhankaiquanwen: true,
      tieziDetailDatas: "",
      total: 242805,
      totals: [
        242805, 242805, 242805, 242805, 242805, 242805, 242805, 242805, 242805,
        242805, 242805, 242805, 242805, 242805, 242805,
      ],
      options: [
        {
          value: "全部",
          label: "全部",
        },
        {
          value: "0",
          label: "偏差信息倡导者",
        },
        {
          value: "1",
          label: "偏差信息支持者",
        },
        {
          value: "2",
          label: "偏差信息传播者",
        },
      ],
      tiezidatas: [],
      boxcontent: ["个体化策略", "强化策略", "认知修正策略"],
    };
  },
  // components: {
  // 	// showcontentvue
  // },
  watch: {
    $route(to, from) {
      var e = this.$route.query.enum;

      alert(e);
      if (e > 1000) {
        this.tiezi = true;
        this.tieziDetail = true;
      } else if (e == "100") {
        this.backindex();
      } else {
        this.tiezi = false;
        this.titlevalue = this.titles[e];
        (this.titlenum = "2"), (this.isselect = true);
        this.sendval = this.titles[e];
        this.$refs.showStrategy.selectStrategy(this.sendval);
      }
    },
  },
  mounted() {
    this.tieziDetail = true;
    this.getpagedata(1);
  },
  methods: {
    backindex() {
      this.tiezi = false;
      this.isselect = false;
      this.titlevalue = "";
      this.titlenum = "1";
    },

    changepage(val) {
      if (this.keyword == "0") {
        this.getpagedata(val);
      } else {
        this.getpagedataBykeyword(this.keyword, val);
      }
    },
    joindetail(val, personType) {
      //进入帖子详情页

      this.$router.push({
        path: "/mall/instructions/detail",
        query: {
          tieziid: val,
          personType: personType,
        },
      });
    },
    getpagedata(val) {
      var that = this;
      Axios.get("http://202.121.180.70:8109/liwenliang", {
        params: {
          page: val,
        },
      })
        .then(function (response) {
          that.tiezidatas = response.data;
          if (response.data.倡导者 == "1") {
            that.duixiang = "倡导者";
          } else if (response.data.扩散者 == "1") {
            that.duixiang = "扩散者";
          } else if (response.data.支持者 == "1") {
            that.duixiang = "支持者";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getpagedataBykeyword(keyword, val) {
      var that = this;

      this.loading = true;
      Axios.get("http://202.121.180.70:8109/selectSort", {
        params: {
          keyword: this.keywords[keyword - 1],
          page: val,
        },
      })
        .then(function (response) {
          that.tiezidatas = response.data;
          that.loading = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    selectsort(val) {
      this.tageffect = [
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
        "plain",
      ];
      this.tageffect.splice(val, 1, "dark");
      this.keyword = val;
      this.currentpage = 1;
      this.total = this.totals[val];
      if (val == "0") {
        this.getpagedata(1);
      } else {
        this.getpagedataBykeyword(val, 1);
      }
    },
  },
};
</script>

<style>
.indexContent {
  display: flex;
  /* height: 43rem; */
}

.indexContent_left {
  width: 15%;
  border-right: #000000 1px solid;
}

.indexContent_right {
  width: 85%;
}

.indexContent_right_button {
  height: 6rem;
  width: 15rem;
  background-color: royalblue;
  margin: 4rem auto;
  text-align: center;
  line-height: 6rem;
  border-radius: 10px;
  font-weight: bold;
}

.indexContent_right_header {
  border-bottom: 1px solid royalblue;
  display: flex;
}

.indexContent_right_header div {
  width: 10rem;
  text-align: center;
  background-color: royalblue;
  color: white;
  font-weight: bold;
}

/* 	.el-tabs,
	.el-tabs__nav,
	#tab-1 {
		height: 2rem;
		line-height: 1.5rem;
	} */

.indexContent_right_button {
  color: white;
}

.indexContent_right_button:hover {
  background-color: orange;
}

.indexContent_right_header2 {
  height: 3rem;
  line-height: 3rem;
  display: flex;
  width: 30%;
  justify-content: space-around;
}

.el-select input {
  height: 2rem;
}

.allcontentbox {
  border-top: 1px solid royalblue;
  border-bottom: 1px solid royalblue;
  display: flex;
  justify-content: space-between;
}

.boxshowcontenttitle {
  display: flex;
  font-size: 1.7rem;
  color: royalblue;
}

.tieziContent1 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.tieziContent2 {
}
#biaoqian {
  background-color: #ffffff;
  border: #ffffff solid 1px;
}
</style>
