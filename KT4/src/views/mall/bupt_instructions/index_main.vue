<template>
  <div class="indexContent_right">
    <!--v-if="!tiezi" -->
    <div class="indexContent_right_header">
      <el-menu
        :default-active="titlenum"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1" @click="backindex">心理干预策略库</el-menu-item>
        <el-menu-item index="2">{{ titlevalue }}</el-menu-item>
      </el-menu>
    </div>
    <div class="indexContent_right_header2">
      <div>干预对象</div>
      <el-select
        v-model="value"
        clearable
        :placeholder="placeholder"
        @change="changeOption"
      >
        <el-option
          v-for="(item, index) in options"
          :key="index + 'b'"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="allcontent">
      <div class="indexContent_right_button">心理管制策略</div>
      <div class="indexContent_right_button">心理劝导策略</div>
      <div class="indexContent_right_button">心理助推策略</div>
    </div>
  </div>
</template>





<script>
export default {
  data() {
    return {
      placeholder: "全部",
      tieziDetail: true, //是否显示帖子详情页，true不显示
      keyword: 0,
      keywords: ["retweet", "likes", "comment", "pubtime"],
      tiezi: false,
      tageffect: ["dark", "plain", "plain", "plain", "plain", "plain"],
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
      totals: [242805, 242805, 242805, 242805, 242805, 242805],
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
      placeholders: ["偏差信息倡导者", "偏差信息支持者", "偏差信息传播者"],
      boxcontent: ["个体化策略", "强化策略", "认知修正策略"],
    };
  },
  mounted() {
    var e = this.$route.query.changenum;
    this.placeholder = this.placeholders[e];
    this.changeOption(e);
  },
  methods: {
    backindex() {
      this.tiezi = false;
      this.isselect = false;
      this.titlevalue = "";
      this.titlenum = "1";
      // console.log(this.$parent)
      // this.$parent.indexnum="100"
    },
    changeOption(e) {
      this.indexnum = e;
      this.isselect = false;
      if (e == "0") {
        document.getElementsByClassName(
          "indexContent_right_button"
        )[0].style.backgroundColor = "orange";
        document.getElementsByClassName(
          "indexContent_right_button"
        )[1].style.backgroundColor = "royalblue";
        document.getElementsByClassName(
          "indexContent_right_button"
        )[2].style.backgroundColor = "royalblue";
      } else if (e == "1") {
        document.getElementsByClassName(
          "indexContent_right_button"
        )[0].style.backgroundColor = "royalblue";
        document.getElementsByClassName(
          "indexContent_right_button"
        )[1].style.backgroundColor = "orange";
        document.getElementsByClassName(
          "indexContent_right_button"
        )[2].style.backgroundColor = "royalblue";
      } else if (e == "2") {
        document.getElementsByClassName(
          "indexContent_right_button"
        )[0].style.backgroundColor = "royalblue";
        document.getElementsByClassName(
          "indexContent_right_button"
        )[1].style.backgroundColor = "royalblue";
        document.getElementsByClassName(
          "indexContent_right_button"
        )[2].style.backgroundColor = "orange";
      } else {
        document.getElementsByClassName(
          "indexContent_right_button"
        )[0].style.backgroundColor = "royalblue";
        document.getElementsByClassName(
          "indexContent_right_button"
        )[1].style.backgroundColor = "royalblue";
        document.getElementsByClassName(
          "indexContent_right_button"
        )[2].style.backgroundColor = "royalblue";
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
</style>