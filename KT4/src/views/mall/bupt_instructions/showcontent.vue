<template>
  <div>
    <div class="allcontentbox">
      <div
        style="
          width: 30%;
          border-right: 1px solid blue;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <div>心理工具箱</div>
      </div>
      <div style="padding: 1rem 1rem; width: 70%; text-align: left">
        <div
          v-for="(item, index) in showdatas"
          :key="'a' + index"
          style="padding: 1rem 0"
          @click="ccc(index)"
        >
          {{ index + 1 }}、{{ item.intervention_strategy }}
        </div>
      </div>
    </div>
    <div class="boxshowcontent">
      <div class="boxshowcontenttitle">
        <div
          style="width: 2rem; height: 3rem; background-color: royalblue"
        ></div>
        <div style="">{{ boxshowcontent.intervention_strategy }}</div>
      </div>
      <div class="boxshowcontentbottom">
        <div style="display: flex">
          <div>{{ boxshowcontent.strategy_introduction1 }}</div>
        </div>
        <div style="display: flex">
          <div>{{ boxshowcontent.strategy_introduction2 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      titles: ["心理管制策略", "心理劝导策略", "心理助推策略"],
      showdatas: [],
      boxshowcontent: {},
      selectval: "",
    };
  },
  mounted() {
    this.selectStrategy(this.$parent.sendval);
  },
  methods: {
    ccc(e) {
      this.boxshowcontent = this.showdatas[e];
    },
    selectStrategy(va) {
      var that = this;
      Axios.get("http://202.121.180.70:8109/strategy", {
        params: {
          val: va,
        },
      })
        .then(function (response) {
          that.showdatas = response.data;
          that.boxshowcontent = that.showdatas[0];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.boxshowcontentbottom {
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1rem;
  line-height: 2rem;
}
</style>
