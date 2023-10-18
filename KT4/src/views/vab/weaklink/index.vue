<template>
  <div class="weaklink">
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h1>基于主题的意见领袖发现</h1>
        </el-divider>
        <el-card shadow="hover">
          <div slot="header">
            <h2 class="mt-25 mb-25">功能描述</h2>
            <span class="mt-25 mb-25" style="font-size: 16px">
              基于主题的意见领袖发现，在6000个新浪微博爬虫用户中，使用三级影响力计算指标进行计算，得到15个领域的意见领袖和综合意见领袖。
            </span>
          </div>
          <div slot="header">
            <h2 class="mt-25 mb-25">数据集描述:</h2>
            <span class="mt-25 mb-25" style="font-size: 16px">
              数据集通过自2017年1月-至今的微博平台采集的新浪微博用户进行计算，数据集包括用户6000余名。
            </span>
          </div>
          <div class="lodash-content">
            <h2 class="mt-25 mb-25">模型描述：</h2>
            <el-collapse v-model="activeNames">
              <el-collapse-item title="点击展开模型描述" name="2">
                <span style="font-size: 18px; line-height: 30px">
                  第一步：一级指标计算（政治领域为例)
                  <br />
                  <span style="margin-left: 80px">活跃性指标：activity</span>
                  <br />
                  <span style="margin-left: 130px">
                    &#12288;微博数、平均每天发布微博数、粉丝数
                  </span>
                  <br />
                  <span style="margin-left: 80px">扩散性指标：diffusivity</span>
                  <br />
                  <span style="margin-left: 130px">
                    平均被评论数、平均被点赞数、平均被转发数
                  </span>
                  <br />
                  <span style="margin-left: 80px">忠诚性指标：loyalty</span>
                  <br />
                  <span style="margin-left: 130px">关注数、注册天数</span>
                  <br />
                  第二步：二级指标计算
                  <br />
                  <div style="margin-left: 70px">
                    活跃性、扩散性、忠诚性
                    <br />
                  </div>
                  第三步：计算用户各个领域影响力
                  <br />
                  <span style="margin-left: 70px">用户某领域影响力</span>
                  <br />
                  第四步：综合影响力
                  <br />
                  <span style="margin-left: 70px">各领域影响力分配权重</span>
                  <br />
                </span>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="threef">
      <!-- <div class="threef-right"> -->
      <ecs :title="'房产领域意见领袖'" :data="erc" :dataa="len" />
      <ecs :title="'国际领域意见领袖'" :data="erc2" :dataa="len2" />
      <ecs :title="'国内领域意见领袖'" :data="erc3" :dataa="len3" />
      <ecs :title="'健康领域意见领袖'" :data="erc4" :dataa="len4" />
      <ecs :title="'教育领域意见领袖'" :data="erc5" :dataa="len5" />
      <ecs :title="'金融领域意见领袖'" :data="erc6" :dataa="len6" />
      <ecs :title="'军事领域意见领袖'" :data="erc7" :dataa="len7" />
      <ecs :title="'科技领域意见领袖'" :data="erc15" :dataa="len15" />
      <ecs :title="'旅游领域意见领袖'" :data="erc8" :dataa="len8" />
      <ecs :title="'汽车领域意见领袖'" :data="erc9" :dataa="len9" />
      <ecs :title="'社会领域意见领袖'" :data="erc10" :dataa="len10" />
      <ecs :title="'时尚领域意见领袖'" :data="erc11" :dataa="len11" />
      <ecs :title="'体育领域意见领袖'" :data="erc12" :dataa="len12" />
      <ecs :title="'文化领域意见领袖'" :data="erc13" :dataa="len13" />
      <ecs :title="'娱乐领域意见领袖'" :data="erc14" :dataa="len14" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import ecs from "./child/ecs";
import { getBing } from "@/api/geibing.js";
export default {
  name: "",
  components: {
    ecs,
  },
  data() {
    return {
      ind: 0,
      len: [],
      len2: [],
      len3: [],
      len4: [],
      len5: [],
      len6: [],
      len7: [],
      len8: [],
      len9: [],
      len10: [],
      len11: [],
      len12: [],
      len13: [],
      len14: [],
      len15: [],
      data: [],
      title1: "博主综合影响力",
      res: "",
      title: "",
      erc: [],
      erc2: [],
      erc3: [],
      erc4: [],
      erc5: [],
      erc6: [],
      erc7: [],
      erc8: [],
      erc9: [],
      erc10: [],
      erc11: [],
      erc12: [],
      erc13: [],
      erc14: [],
      erc15: [],
      isActive: 0,
      activeNames: ["1"],
    };
  },
  created() {
    getBing()
      .then((res) => {
        console.log(res);
        //      console.log(Object.keys(res))
        //      let ke = Object.keys(res);
        //      console.log(ke[0])
        //      console.log(res.house)
        //      var a = ke[0]
        //      console.log(res.a)
        //
        //      }
        //      console.log(this.erc)

        console.log(res.房产);
        for (let i = 0; i < res.房产.length; i++) {
          let namee = "";
          if (res.房产[i].ifCorrect == 1) {
            namee = res.房产[i].nickname + "（准确）";
          } else {
            namee = res.房产[i].nickname;
          }
          this.len.push(namee);

          console.log(namee);
          this.erc.push({
            name: namee,
            value: res.房产[i].influence,
          });
          console.log(this.len);
        }
        for (let i = 0; i < res.国际.length; i++) {
          let namee = "";
          if (res.国际[i].ifCorrect == 1) {
            namee = res.国际[i].nickname + "（准确）";
          } else {
            namee = res.国际[i].nickname;
          }
          this.len2.push(namee);
          this.erc2.push({
            name: namee,
            value: res.国际[i].influence,
          });
          // this.len2.push(res.国际[i].nickname);
        }
        for (let i = 0; i < res.国内.length; i++) {
          let namee = "";
          if (res.国内[i].ifCorrect == 1) {
            namee = res.国内[i].nickname + "（准确）";
          } else {
            namee = res.国内[i].nickname;
          }
          this.len3.push(namee);
          this.erc3.push({
            name: namee,
            value: res.国内[i].influence,
          });
          // this.len3.push(res.国内[i].nickname);
        }
        for (let i = 0; i < res.健康.length; i++) {
          let namee = "";
          if (res.健康[i].ifCorrect == 1) {
            namee = res.健康[i].nickname + "（准确）";
          } else {
            namee = res.健康[i].nickname;
          }
          this.len4.push(namee);
          this.erc4.push({
            name: namee,
            value: res.健康[i].influence,
          });
          // this.len4.push(res.健康[i].nickname);
        }
        for (let i = 0; i < res.教育.length; i++) {
          let namee = "";
          if (res.教育[i].ifCorrect == 1) {
            namee = res.教育[i].nickname + "（准确）";
          } else {
            namee = res.教育[i].nickname;
          }
          this.len5.push(namee);
          this.erc5.push({
            name: namee,
            value: res.教育[i].influence,
          });
          // this.len5.push(res.教育[i].nickname);
        }
        for (let i = 0; i < res.金融.length; i++) {
          let namee = "";
          if (res.金融[i].ifCorrect == 1) {
            namee = res.金融[i].nickname + "（准确）";
          } else {
            namee = res.金融[i].nickname;
          }
          this.len6.push(namee);
          this.erc6.push({
            name: namee,
            value: res.金融[i].influence,
          });
          // this.len6.push(res.金融[i].nickname);
        }
        for (let i = 0; i < res.军事.length; i++) {
          let namee = "";
          if (res.军事[i].ifCorrect == 1) {
            namee = res.军事[i].nickname + "（准确）";
          } else {
            namee = res.军事[i].nickname;
          }
          this.len7.push(namee);
          this.erc7.push({
            name: namee,
            value: res.军事[i].influence,
          });
          // this.len7.push(res.军事[i].nickname);
        }
        for (let i = 0; i < res.科技.length; i++) {
          let namee = "";
          if (res.科技[i].ifCorrect == 1) {
            namee = res.科技[i].nickname + "（准确）";
          } else {
            namee = res.科技[i].nickname;
          }
          this.len15.push(namee);
          this.erc15.push({
            name: namee,
            value: res.科技[i].influence,
          });
          // this.len15.push(res.科技[i].nickname);
        }
        for (let i = 0; i < res.旅游.length; i++) {
          let namee = "";
          if (res.旅游[i].ifCorrect == 1) {
            namee = res.旅游[i].nickname + "（准确）";
          } else {
            namee = res.旅游[i].nickname;
          }
          this.len8.push(namee);
          this.erc8.push({
            name: namee,
            value: res.旅游[i].influence,
          });
          // this.len8.push(res.旅游[i].nickname);
        }
        for (let i = 0; i < res.汽车.length; i++) {
          let namee = "";
          if (res.汽车[i].ifCorrect == 1) {
            namee = res.汽车[i].nickname + "（准确）";
          } else {
            namee = res.汽车[i].nickname;
          }
          this.len9.push(namee);
          this.erc9.push({
            name: namee,
            value: res.汽车[i].influence,
          });
          // this.len9.push(res.汽车[i].nickname);
        }
        for (let i = 0; i < res.社会.length; i++) {
          let namee = "";
          if (res.社会[i].ifCorrect == 1) {
            namee = res.社会[i].nickname + "（准确）";
          } else {
            namee = res.社会[i].nickname;
          }
          this.len10.push(namee);
          this.erc10.push({
            name: namee,
            value: res.社会[i].influence,
          });
          // this.len10.push(res.社会[i].nickname);
        }
        for (let i = 0; i < res.时尚.length; i++) {
          let namee = "";
          if (res.时尚[i].ifCorrect == 1) {
            namee = res.时尚[i].nickname + "（准确）";
          } else {
            namee = res.时尚[i].nickname;
          }
          this.len11.push(namee);
          this.erc11.push({
            name: namee,
            value: res.时尚[i].influence,
          });
          // this.len11.push(res.时尚[i].nickname);
        }
        for (let i = 0; i < res.体育.length; i++) {
          let namee = "";
          if (res.体育[i].ifCorrect == 1) {
            namee = res.体育[i].nickname + "（准确）";
          } else {
            namee = res.体育[i].nickname;
          }
          this.len12.push(namee);
          this.erc12.push({
            name: namee,
            value: res.体育[i].influence,
          });
          // this.len12.push(res.体育[i].nickname);
        }
        for (let i = 0; i < res.文化.length; i++) {
          let namee = "";
          if (res.文化[i].ifCorrect == 1) {
            namee = res.文化[i].nickname + "（准确）";
          } else {
            namee = res.文化[i].nickname;
          }
          this.len13.push(namee);
          this.erc13.push({
            name: namee,
            value: res.文化[i].influence,
          });
          // this.len13.push(res.文化[i].nickname);
        }
        for (let i = 0; i < res.娱乐.length; i++) {
          let namee = "";
          if (res.娱乐[i].ifCorrect == 1) {
            namee = res.娱乐[i].nickname + "（准确）";
          } else {
            namee = res.娱乐[i].nickname;
          }
          this.len14.push(namee);
          this.erc14.push({
            name: namee,
            value: res.娱乐[i].influence,
          });
          // this.len14.push(res.娱乐[i].nickname);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    //////////=============
    var echarts = require("echarts");

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.main);
    // 绘制图表

    myChart.showLoading();

    var data = {
      name: "flare",
      children: [
        {
          name: "data",
          children: [
            {
              name: "converters",
              children: [
                { name: "Converters", value: 721 },
                { name: "DelimitedTextConverter", value: 4294 },
              ],
            },
            {
              name: "DataUtil",
              value: 3322,
            },
          ],
        },
        {
          name: "display",
          children: [
            { name: "DirtySprite", value: 8833 },
            { name: "LineSprite", value: 1732 },
            { name: "RectSprite", value: 3623 },
          ],
        },
        {
          name: "flex",
          children: [{ name: "FlareVis", value: 4116 }],
        },
        {
          name: "query",
          children: [
            { name: "AggregateExpression", value: 1616 },
            { name: "And", value: 1027 },
            { name: "Arithmetic", value: 3891 },
            { name: "Average", value: 891 },
            { name: "BinaryExpression", value: 2893 },
            { name: "Comparison", value: 5103 },
            { name: "CompositeExpression", value: 3677 },
            { name: "Count", value: 781 },
            { name: "DateUtil", value: 4141 },
            { name: "Distinct", value: 933 },
            { name: "Expression", value: 5130 },
            { name: "ExpressionIterator", value: 3617 },
            { name: "Fn", value: 3240 },
            { name: "If", value: 2732 },
            { name: "IsA", value: 2039 },
            { name: "Literal", value: 1214 },
            { name: "Match", value: 3748 },
            { name: "Maximum", value: 843 },
            {
              name: "methods",
              children: [
                { name: "add", value: 593 },
                { name: "and", value: 330 },
                { name: "average", value: 287 },
                { name: "count", value: 277 },
                { name: "distinct", value: 292 },
                { name: "div", value: 595 },
                { name: "eq", value: 594 },
                { name: "fn", value: 460 },
                { name: "gt", value: 603 },
                { name: "gte", value: 625 },
                { name: "iff", value: 748 },
                { name: "isa", value: 461 },
                { name: "lt", value: 597 },
                { name: "lte", value: 619 },
                { name: "max", value: 283 },
                { name: "min", value: 283 },
                { name: "mod", value: 591 },
                { name: "mul", value: 603 },
                { name: "neq", value: 599 },
                { name: "not", value: 386 },
                { name: "or", value: 323 },
                { name: "orderby", value: 307 },
                { name: "range", value: 772 },
                { name: "select", value: 296 },
                { name: "stddev", value: 363 },
                { name: "sub", value: 600 },
                { name: "sum", value: 280 },
                { name: "update", value: 307 },
                { name: "variance", value: 335 },
                { name: "where", value: 299 },
                { name: "xor", value: 354 },
                { name: "_", value: 264 },
              ],
            },
            { name: "Minimum", value: 843 },
            { name: "Not", value: 1554 },
            { name: "Or", value: 970 },
            { name: "Query", value: 13896 },
            { name: "Range", value: 1594 },
            { name: "StringUtil", value: 4130 },
            { name: "Sum", value: 791 },
            { name: "Variable", value: 1124 },
            { name: "Variance", value: 1876 },
            { name: "Xor", value: 1101 },
          ],
        },
        {
          name: "scale",
          children: [
            { name: "IScaleMap", value: 2105 },
            { name: "LinearScale", value: 1316 },
            { name: "LogScale", value: 3151 },
            { name: "OrdinalScale", value: 3770 },
            { name: "QuantileScale", value: 2435 },
            { name: "QuantitativeScale", value: 4839 },
            { name: "RootScale", value: 1756 },
            { name: "Scale", value: 4268 },
            { name: "ScaleType", value: 1821 },
            { name: "TimeScale", value: 5833 },
          ],
        },
      ],
    };

    myChart.hideLoading();

    myChart.setOption(
      (this.res = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        legend: {
          top: "2%",
          left: "3%",
          orient: "vertical",
          data: [
            {
              name: "tree1",
              icon: "rectangle",
            },
            {
              name: "tree2",
              icon: "rectangle",
            },
          ],
          borderColor: "#c23531",
        },
        series: [
          {
            type: "tree",

            name: "tree1",

            data: [data],

            top: "5%",
            left: "7%",
            bottom: "2%",
            right: "60%",

            symbolSize: 7,

            label: {
              position: "left",
              verticalAlign: "middle",
              align: "right",
            },

            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left",
              },
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      })
    );
  },

  methods: {
    handleActive(index) {
      this.isActive = index;
    },
    tu(index) {
      this.ind = index;
      this.isActive = index;
    },
  },

  // 分页
  // 每页显示的条数
  handleSizeChange(val) {
    // 改变每页显示的条数
    this.PageSize = val;
    // 注意：在改变每页显示的条数时，要将页码显示到第一页
    this.currentPage = 1;
  },
  // 显示第几页
  handleCurrentChange(val) {
    // 改变默认的页数
    this.currentPage = val;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.influence {
  width: 100%;
  height: 100%;
}
.el-tabs--border-card {
  height: 100%;
  width: 100%;
}
.el-tabs__nav {
  margin-left: 10px;
  margin-top: 10px;
}
.el-tabs__nav-scroll {
  background: #eef2f4;
  border-bottom: 1px solid #cccccc;
}
.el-tabs--top .el-tabs__item.is-top {
  background: #71b1d2;
  margin-right: 10px;
  color: white;
}
.el-tabs__item .is-top .is-active {
  border-bottom: 0;
  background: white;
}
.el-tabs__content {
  width: 100%;
  height: 95%;
  padding: 0;
}
.three {
  width: 98%;
  height: 96%;
  margin: 10px;
  border: 1px solid #cccccc;
  overflow: scroll;
  overflow-x: hidden;
}
.threef {
  width: 98%;
  height: 96%;
  margin: 10px;
  border: 1px solid #cccccc;
  overflow: scroll;
  overflow-x: hidden;
  /* display: flex;
    flex-direction: row;
    justify-content:center; */
}
.threef-left {
  flex: 1;
  border: 1px solid #cccccc;
}
.three-left ul {
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
}
.threef-left ul li {
  list-style: none;
  width: 100%;
  height: 70px;
  text-align: center;
  line-height: 70px;
  font-size: 14px;
  border: 1px solid #cccccc;
  background: #67ade2;
  color: white;
}
.three-right ul {
  width: 89%;
  height: 100%;
}
.three ::-webkit-scrollbar {
  width: 5px;
  height: 10px;

  background-color: #eeeeee;
}
.three ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #eeeeee;
}

.three ::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #9fd2f7;
}
.three ::-webkit-scrollbar {
  width: 5px;
  height: 10px;

  background-color: #eeeeee;
}
.threef-left ul::-webkit-scrollbar {
  width: 5px;
  height: 10px;

  background-color: #eeeeee;
}
.threef-left ul::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #eeeeee;
}

.threef-left ul::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #9fd2f7;
}
.threef-left ul::-webkit-scrollbar {
  width: 5px;
  height: 10px;

  background-color: #eeeeee;
}
.threef-right {
  flex: 8;
}
.el-tab-pane {
  width: 100%;
  height: 100%;
}
.ecs {
  width: 33%;
  height: 420px;
  float: left;
  /* border: 1px solid #cccccc; */
  background: #f5f8f4;
  /* margin:0;
    margin-left: 200px;
    margin-top: 100px; */
}
.ecs-title {
  width: 100%;
  height: 30px;
  line-height: 34px;
  font-weight: bold;
  overflow: hidden;
}
.ecs-title-content {
  width: 80%;
  height: 100%;
  float: left;
  text-align: center;
}
.ecs-title-content span {
  padding-left: 80px;
}
.ecs-content {
  width: 20%;
  height: 100%;
  float: left;
}
.ecs-content i {
  padding-right: 10px;
  font-size: 18px;
}
.ecs-ecs {
  width: 400px;
  height: 500px;
}
.yxl {
  width: 90%;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
  margin-top: 10px;
  color: white;
  background: #71b1d2;
}
.xl {
  width: 90%;
  height: 300px;
  margin-left: 10px;
}
.xl li {
  list-style: none;
  text-align: left;
  line-height: 38px;
  padding-left: 10px;
}
.xl i {
  /* color: #71b1d2; */
}
.zhibiao {
  width: 90%;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
  margin-top: 10px;
  color: white;
  background: mediumseagreen;
}
.ec {
  width: 700px;
  height: 400px;
}
.chek {
  background: white;
  color: #cccccc;
}
</style>
