<template>
  <div >
    <el-row :gutter="20">
      <el-card>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h2>基于竞争传播的引导策略效果展示(李文亮事件)</h2>
        </el-divider>
        <br>
        <el-card>
          <h2>引导效果展示流程</h2>
          <span style="font-size: 18px; line-height: 30px">

            基于竞争传播的引导策略采用的是<span style="font-size: 18px; font-weight: bold; line-height: 30px;">基于属性生成边权重的竞争受限传播模型
          </span>（Competitive Restricted propagation Independent Cascade model based on Attribute, IC-CRA），
            应用<span style="font-size: 18px; font-weight: bold; line-height: 30px;">LCH-TU算法</span>选取节点施加正面信息，与负面信息进行竞争传播。具体流程如下：
            <br><br>
          </span>
          <span style="font-size: 18px; line-height: 30px">
            首先，初始网络状态下，选取度比较大的10个节点传播负面信息，模拟舆情网络中初始负面信息传播的状态，得到传播后受负面信息影响的节点数量和中立节点的数量。
            <br><br>
          </span>
          <span style="font-size: 18px; line-height: 30px">
          然后，采用基于传播的引导策略，应用LCH-TU算法选取10个影响力最大的种子节点投放正面信息，与负面信息进行竞争传播，得到传播后受正面信息影响的节点数量、受负面信息影响的节点数量和中立节点的数量。            <br><br>
          </span>
          <span style="font-size: 18px; line-height: 30px">
            最后，将添加引导策略前后的负面节点数量的对比显示引导的结果。
            <br><br>
          </span>
        </el-card>



      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card >
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span style="font-size: 20px; font-weight: bold; line-height: 30px">原始网络结构</span>
          </el-col>
          <br>

          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <img src="../image/LiWenLiang_1_original.png" width="663" height="645">
          </el-col>
          <div>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <span style="font-size: 18px; line-height: 30px">
                上图展示了参与本次事件讨论的所有相关节点所构成的原始网络结构图。
                图中黑色的节点代表中立节点。网络的节点数量为1066，边的数量为1073。
                <br><br><br>
              </span>
            </el-col>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <el-card>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span style="font-size: 18px; font-weight: bold; line-height: 30px">
              只有负面信息传播时网络的状态
            </span>
          </el-col>

          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <img src="../image/LiWenLiang_1_negative.png" width="665" height="646">
          </el-col>
          <div>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <span style="font-size: 18px; line-height: 30px">
            上图显示的是只有负面信息传播，网络中正面节点，负面节点和中立节点的分布情况。
            图中红色的节点代表被负面信息影响的节点。可以看到负面节点占据整个网络的大部分。
            网络被负面信息影响的节点的数量为721，中立的节点只剩下345。
            <br><br>
          </span>
            </el-col>
          </div>
        </el-card>
      </el-col>
        <el-card>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <h2>添加引导策略后网络的状态</h2>
          </el-col>
          <!--            <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">-->
          <!--                <span>-->
          <!--                  <br><br>-->
          <!--                </span>-->
          <!--              </el-col>-->

          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <span>
                  <img src="../image/LiWenLiang_CIC.png" width="667" height="647" />
                </span>
          </el-col>

          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <span style="font-size: 18px; line-height: 30px">
                  左图展示了添加引导策略后，网络中正面节点、中立节点和负面节点的分布情况。
                  图中蓝色的节点代表被正面信息影响的节点。
                  通过LCH-TU算法，我们选取了10个节点施加正面信息，与负面信息进行竞争传播。
                  经过传播后被负面信息影响的节点只有83个，被正面信息影响的节点有663个，中立的节点有320个。我们可以看到受正面信息影响的节点占据了整个网络的大部分。
                  <br><br>
                </span>
          </el-col>
        </el-card>
        <el-card>
          <div>
          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <h2>只有负面信息传播时各类节点数量的变化趋势</h2>
            <div class="box">
              <div id="myChart" :style="{width: '700px', height: '400px'}"></div>
            </div>
          </el-col>

          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <h2>正面信息与负面信息竞争传播时各类节点数量的变化趋势</h2>
            <div class="box">
              <div id="myChart1" :style="{width: '700px', height: '400px'}"></div>
            </div>
          </el-col>
          </div>
        </el-card>
        <el-card>

        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <h2>选中的影响力比较大的节点的信息</h2>
          <div class="">
            <el-table :data="tableData1" border style="width: 100%">
              <el-table-column
                prop="node_num"
                label="编号"
                width="50"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="node_ID"
                label="节点ID"
                width="200"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="name"
                label="名称"
                width="200"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="interact_id"
                label="节点的度"
                width="100"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="location"
                label="地点"
                width="100"
                align="center"
              ></el-table-column>
              <el-table-column
              prop="forward_num"
              label="转发数"
              width="100"
              align="center"
            ></el-table-column>
              <el-table-column
                prop="comment_num"
                label="评论数"
                width="100"
                align="center"
              ></el-table-column>
              <el-table-column
              prop="content"
              label="内容"
              width="700"
              align="left"
            ></el-table-column>
            </el-table>
          </div>

        </el-col>
      </el-card>

      </el-card>

    </el-row>
  </div>
</template>

<script>
  import VabSnow from "@/components/VabSnow";
  import VabProfile from "@/components/VabProfile";
  import VabCharge from "@/components/VabCharge";

  export default {
    name: "Sticky",
    components: {
      VabSnow,
      VabProfile,
      VabCharge,
    },
    data() {
      return {

        tableData1: [
          {
            node_num: "1",
            node_ID: "1618051664",
            name:'头条新闻',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "201",
            content: "【疫情“吹哨人”#李文亮去世# [蜡烛]】《生命时报》前方记者证实，李文亮医生因感染新型冠状病毒肺炎，于2月6日21点30分病逝。据悉，李文亮是武汉市中心医院的一名眼科医生，因最早于2019年12月30日向外界发出防护预警，而被称为疫情“吹哨人”。2月1日，李文亮在自己的微博上公布了其确诊新型冠状病...全文： http://m.weibo.cn/1618051664/4469100891452201 "

          },
          {
            node_num: "2",
            node_ID: "6004281123",
            name:'梨视频',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "161",
            content: "《生命时报》前方记者证实，李文亮医生因感染新型冠状病毒肺炎，于2月6日21点30分病逝。据悉，李文亮是武汉市中心医院的一名眼科医生，因最早于2019年12月30日向外界发出防护预警，而被称为疫情“吹哨人”。他曾说，康复后想尽快回到一线！李医生，走好[蜡烛][泪]"
          },
          {
            node_num: "3",
            node_ID: "1663072851",
            name:'中国日报',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "149",
            content: "【#李文亮医生去世#】 据@武汉中心医院 ，疫情“吹哨人”武汉市中心医院医生李文亮在抗击新型冠状病毒感染的肺炎疫情工作中不幸感染，经全力抢救无效，于2020年2月7日凌晨2点58分去世，年仅33岁。"
          },
          {
            node_num: "4",
            node_ID: "2418542712",
            name:'平安武汉',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "125",
            content: "情况通报      根据公安机关人民警察相关纪律规定，经市公安局研究，对李文亮医生被训诫一案相关责任人作出如下处理：      一、武昌区公安分局中南路街中南路派出所副所长杨力，安排民警对李文亮训诫，适用法律错误，存在执法过错，对民警执法工作监督管理不力，工作失职，给予其行政记过处分；   ...全文： http://m.weibo.cn/2418542712/4484308582580812 "
          },
          {
            node_num: "5",
            node_ID: "1774057271",
            name:'生命时报',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "69",
            content: "【 疫情“吹哨人”李文亮去世】《生命时报》前方记者证实，李文亮医生因感染新型冠状病毒肺炎，于2月6日21点30分病逝。据悉，李文亮是武汉市中心医院的一名眼科医生，因最早于2019年12月30日向外界发出防护预警，而被称为疫情“吹哨人”。2月1日，李文亮在自己的微博上公布了其确诊新型冠状病毒肺炎的...全文： http://m.weibo.cn/1774057271/4469100506208139 "
          },
          {
            node_num: "6",
            node_ID: "1649173367",
            name:'每日经济新闻',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "60",
            content: "【世卫组织缅怀李文亮,#国家卫健委深切哀悼李文亮医生#】李文亮医生在抗击疫情中感染，经全力抢救无效逝世，国家卫生健康委表示深切哀悼，向李文亮医生的家属表示慰问。同时，#湖北卫健委向李文亮医生表示深切哀悼#，并向其家属表示诚挚慰问！向一直奋战在抗疫一线的全体医务工作者表示崇高敬意！值此...全文： http://m.weibo.cn/1649173367/4469387849823017 "
          },
          {
            node_num: "7",
            node_ID: "1644114654",
            name:'新京报',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "44",
            content: "【#国家卫健委哀悼李文亮# 向其家属表示慰问】2月7日，国务院召开新闻发布会，通报疫情最新进展。国家卫健委新闻发言人宋树立称，武汉市中心医院李文亮医生在抗击疫情中感染新型冠状病毒肺炎，经全力救治不幸逝世，国家卫生健康委表示深切哀悼，向李文亮医生的家属表示诚挚慰问。同时，"
          },
          {
            node_num: "8",
            node_ID: "5331165179",
            name:'NewMedia联盟',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "55",
            content: "【市民献花悼念：向抗疫英雄李文亮致敬！】#武汉市民献花悼念李文亮#，2月7日，在李文亮生前工作过的武汉中心医院后湖院区门诊楼门口，摆放着他的照片和市民送来的鲜花。不时有穿着防护服的医护人员前去吊唁，有的武汉市民驻足静立，也有外地的人委托武汉朋友去献花。李文亮医生，一路走好！...全文： http://m.weibo.cn/5331165179/4469453502853459 "
          },
          {
            node_num: "9",
            node_ID: "3357984530",
            name:'成都水务',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "32",
            content: "【疫情吹哨人#李文亮医生去世#，年仅34岁，生前曾表示想尽快回到一线[蜡烛]】疫情“吹哨人”武汉市中心医院医生李文亮于2月6日晚抢救无效去世，年仅34岁，妻子目前还怀着二胎。2月1日，李文亮确诊新型冠状病毒肺炎。2019年12月30日，李文亮因在同学群发布华南海鲜市场疫情信息，警方以其发布不实言论对...全文： http://m.weibo.cn/3357984530/4469256777884678 "
          },
          {
            node_num: "10",
            node_ID: "1586923571",
            name:'范雎',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "40",
            content: "现在他们的逻辑：一、李文亮医生的真话并没有打动上层，真正引起官方重视的，是张继先医生。所以论贡献，李文亮远不及张继先，张继先才是“吹哨人”，李文亮不是二、李文亮医生受感染，是因为他的工作属性，与他讲真话被训诫没有关系。用他们的原话，就是“害死李文亮的肺炎，不是说真话”，你们就是...全文： http://m.weibo.cn/1586923571/4469361857116450 "
          },

        ],
        profileShow: true,
        faultTextShow: true,
        solidTextShow: true,
        startVal: 0,
        endVal: 20,
        timeInterval: null,
      };
    },
    mounted() {
      this.drawLine();
      this.drawLine1();
      this.handleProfile();
      this.handleSolidText();
      this.timeInterval = setInterval(() => {
        if (this.endVal < 100) {
          this.startVal = this.endVal;
          this.endVal++;
        }
      }, 5000);
    },
    beforeDestroy() {
      if (this.clearInterval) {
        clearInterval(this.timeInterval);
      }
    },

    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          title: {
            text: ''
          },
          //提示框组件，专门配置提示框的。
          tooltip: {
            trigger:'axis',
            // 坐标轴指示器配置项。
            axisPointer:{
              type:'cross', //指示器样试
            }
          },
          //工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
          toolbox:{
            feature:{
              // 动态类型切换,切换图表
              magicType: {
                type: ['line', 'bar', ]
              },
              //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
              dataView:{
                show:true,  //是否显示 数据示图
                readOnly:false, //是否 直接可以编辑数据。
              },
              //保存为图片的配置
              // saveAsImage: {
              //   show: true
              // },
              //配置项还原
              // restore: {show: true},
            }
          },
          //图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
          legend:{
            data:['正面节点','负面节点','中立节点'] //对应的是name
          },
          //配置X轴
          xAxis: {
            //坐标轴类型
            type:'category',
            //配置类目名称。 可以逐一设置，具体看文档
            data: ['第一天', '第二天', '第三天', '第四天', '第五天', '第六天'],
            //配置 鼠标移入时显示的 阴影指示器'line' 直线指示器 'shadow' 阴影指示,器  'none' 无指示器
            axisPointer: {
              show:true, //show 必须写，开关的作用
              type: 'shadow'
            }
          },
          //配置Y轴
          yAxis: [
            {
              type: 'value', //坐标轴类型
              name: '节点数量', //名称
              min: 0, //最小值
              max: 1066, //最大值
              interval: 100, //列数
              axisLabel: {  //坐标轴刻度标签的相关设置。
                formatter: '{value}'  //字符串模板
              }
            },
          ],
          //系列列表。每个系列通过 type 决定自己的图表类型,一个对象表示一个列表
          series: [
            // {
            //   name: '实体查阅',
            //   type: 'bar',
            //   data: [15, 25, 40, 20, 20, 22,23,44,42,25,32,45],
            //   itemStyle:{ //图形的颜色。默认指向全局的option.color
            //     color:'#F60'
            //   }
            // },
            {
              name: '正面节点',
              type: 'line',
              data: [0,0,0,0,0,0],
              itemStyle:{color:'blue'}
            },
            {
              name: '负面节点',
              type: 'line',
              data: [10,84,221,520,524,721],
              itemStyle:{color:'red'}
            },
            {
              name: '中立节点',
              type: 'line',
              data: [1056,982,845,546,542,345],
              itemStyle:{color:'black'}
            },

          ],
          //图表的颜色
          color:['#CCC','#AFA', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
        });
        //鼠标事件
        myChart.on('click',function(params){
          console.log(params)
        })

      },
      drawLine1(){
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = this.$echarts.init(document.getElementById('myChart1'));
        // 绘制图表
        myChart1.setOption({
          title: {
            text: ''
          },
          //提示框组件，专门配置提示框的。
          tooltip: {
            trigger:'axis',
            // 坐标轴指示器配置项。
            axisPointer:{
              type:'cross', //指示器样试
            }
          },
          //工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
          toolbox:{
            feature:{
              // 动态类型切换,切换图表
              magicType: {
                type: ['line', 'bar', ]
              },
              //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
              dataView:{
                show:true,  //是否显示 数据示图
                readOnly:false, //是否 直接可以编辑数据。
              },
              //保存为图片的配置
              // saveAsImage: {
              //   show: true
              // },
              //配置项还原
              // restore: {show: true},
            }
          },
          //图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
          legend:{
            data:['正面节点','负面节点','中立节点'] //对应的是name
          },
          //配置X轴
          xAxis: {
            //坐标轴类型
            type:'category',
            //配置类目名称。 可以逐一设置，具体看文档
            data: ['第一天', '第二天', '第三天', '第四天', '第五天', '第六天'],
            //配置 鼠标移入时显示的 阴影指示器'line' 直线指示器 'shadow' 阴影指示,器  'none' 无指示器
            axisPointer: {
              show:true, //show 必须写，开关的作用
              type: 'shadow'
            }
          },
          //配置Y轴
          yAxis: [
            {
              type: 'value', //坐标轴类型
              name: '节点数量', //名称
              min: 0, //最小值
              max: 1066, //最大值
              interval: 100, //列数
              axisLabel: {  //坐标轴刻度标签的相关设置。
                formatter: '{value}'  //字符串模板
              }
            },
          ],
          //系列列表。每个系列通过 type 决定自己的图表类型,一个对象表示一个列表
          series: [
            // {
            //   name: '实体查阅',
            //   type: 'bar',
            //   data: [15, 25, 40, 20, 20, 22,23,44,42,25,32,45],
            //   itemStyle:{ //图形的颜色。默认指向全局的option.color
            //     color:'#F60'
            //   }
            // },
            {
              name: '正面节点',
              type: 'line',
              data: [10,653,657,663,663,663],
              itemStyle:{color:'blue'}
            },
            {
              name: '负面节点',
              type: 'line',
              data: [10,82,83,83,83,83],
              itemStyle:{color:'red'}
            },
            {
              name: '中立节点',
              type: 'line',
              data: [1046,331,326,320,320,320],
              itemStyle:{color:'black'}
            },
          ],
          //图表的颜色
          color:['#CCC','#AFA', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
        });
        //鼠标事件
        myChart.on('click',function(params){
          console.log(params)
        })

      },
      handleProfile() {
        this.profileShow = false;
        setTimeout(() => {
          this.profileShow = true;
        });
      },
      handleSolidText() {
        this.solidTextShow = false;
        setTimeout(() => {
          this.solidTextShow = true;
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .small-components-container {
    ::v-deep {
      .el-card__body {
        display: flex;
        align-items: center; /* 垂直居中 */
        justify-content: center; /* 水平居中 */
        height: 430px;
      }
    }
  }
</style>
