<template>
  <div >
    <el-row :gutter="20">
      <el-card>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h2>基于竞争传播的引导策略效果展示(香港事件)</h2>
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
            然后，采用基于传播的引导策略，应用LCH-TU算法选取10个影响力最大的种子节点投放正面信息，与负面信息进行竞争传播，得到传播后受正面信息影响的节点数量、受负面信息影响的节点数量和中立节点的数量。
            <br><br>
          </span>
          <span style="font-size: 18px; line-height: 30px">
            最后，将添加引导策略前后的网络图以及相应数据进行对比，显示引导的结果。
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
              <img src="../image/HK_original_structure.png" width="666" height="645">
          </el-col>
          <div>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <span style="font-size: 18px; line-height: 30px">
                上图展示了参与本次事件讨论的所有相关节点所构成的原始网络结构图。
                图中黑色的节点代表中立节点。网络的节点数量为3240，边的数量为3465。

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
            <img src="../image/HK_original_negative.png" width="662" height="645">
          </el-col>
          <div>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <span style="font-size: 18px; line-height: 30px">
            上图显示的是只有负面信息传播，网络中正面节点，负面节点和中立节点的分布情况。
            图中红色的节点代表被负面信息影响的节点。可以看到负面节点占据整个网络的大部分。
            网络被负面信息影响的节点的数量为1833，中立的节点只剩下1407。
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
                  <img src="../image/HK_CIC.png" width="665" height="648" />
                </span>
          </el-col>

          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <span style="font-size: 18px; line-height: 30px">
                  左图展示了添加引导策略后，网络中正面节点、中立节点和负面节点的分布情况。
                  图中蓝色的节点代表被正面信息影响的节点。
                  通过LCH-TU算法，我们选取了10个节点施加正面信息，与负面信息进行竞争传播。
                  经过传播后被负面信息影响的节点只有792个，被正面信息影响的节点有1301个，中立的节点有1147个。我们可以看到受正面信息影响的节点占据了整个网络的大部分。
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
              width="1000"
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
            node_ID: "2803301701",
            name:'2803301701',
            location:"北京",
            forward_num: "3534",
            comment_num: "2878",
            interact_id: "128",
            content: "近日香港市民唱国歌被打伤，引来了更多爱国爱港者齐聚，自豪高歌爱国歌曲。爱国从不孤独，正义不应沉默。某些势力" +
              "妄图营造的恐怖气氛不过螳臂当车，改变不了香港属于中国的事实，更改变不了大多数香港人的那颗中国心。在自己国家的土地上举国旗、唱国歌，这才是值得中国人共享的荣光。"

          },
          {
            node_num: "2",
            node_ID: "5869855957",
            name:'5869855957',
            location:"北京",
            forward_num: "5627",
            comment_num: "661",
            interact_id: "98",
            content: "电影我和我的祖国#发布七故事之一《回归》制作特辑，薛晓路从升旗手、香港普通市民和警察的视角，见证香港回归这一庄严的历史时刻。影片也邀请当年的升旗手朱涛作为军事顾问。该故事由薛晓路执导，杜江、朱一龙、惠英红、任达华、王洛勇、高亚麟、王道铁主演，将于9月30日公映。"
          },
          {
            node_num: "3",
            node_ID: "6992157759",
            name:'6992157759',
            location:"北京",
            forward_num: "140",
            comment_num: "287",
            interact_id: "114",
            content: "继续香港现场直播:稍早点，一废青被抓捕，废青同伴干扰现场，转移其作案背包，看场面，警察执法真的太难了！！！#光头刘Sir说同胞的支持是甘露"
          },
          {
            node_num: "4",
            node_ID: "7307409225",
            name:'7307409225',
            location:"香港",
            forward_num: "15",
            comment_num: "114",
            interact_id: "90",
            content: "李嘉诚「网开一面」论究竟是......1、是纵容    2、是宽容      3、我不懂长和资深顾问李嘉诚日前出席慈山寺祈福活动时向信眾发言，希望年轻人能够体谅大局、执政者都能够对未来主人翁网开一面。中央政法委的微信公眾号「长安剑」昨日发表文章指，香港少数「未来的主人翁」在街头非法集会、殴打路人、围攻警察、纵火烧街，质疑对他们网开一面是「纵容犯罪，不是為香港着想，而是看着香港滑向深渊」。文章又指香港年轻人面对的是住房难题，质疑「囤地圈钱」的地產商们，会否对市民「网开一面」。李嘉诚其后就透过发言人表示，对於其在慈山寺的言论被曲解，感到十分遗憾，并指多年已习惯了那些莫须有的指责，永远会虚心接受批评，但最為重要的是「宽容不等於纵容，不等於无视法律程序」。李嘉诚重申对任何暴力，包括语言暴力，对任何衝击法治的行為都不能接受。#香港光头刘Sir称期待北京之行##香港市民快闪清除乱港标语"
          },
          {
            node_num: "5",
            node_ID: "2150758415",
            name:'2150758415',
            location:"北京",
            forward_num: "1518",
            comment_num: "1277",
            interact_id: "88",
            content: "【#香港市民在狮子山高唱国歌#[心]】今天上午，一批爱国爱港的香港市民登上象征香港精神的狮子山，高唱中华人民共和国国歌，挥动起鲜艳的五星红旗，庆祝#新中国成立七十周年#。祝福祖国，为香港加油！（央视记者李大杰 李伟） ​, "
          },
          {
            node_num: "6",
            node_ID: "3471850792",
            name:'3471850792',
            location:"广东",
            forward_num: "118",
            comment_num: "306",
            interact_id: "102",
            content: "爱国大姐在商场唱国歌，被暴徒残忍地推下扶梯，受伤吐血入院。暴徒对此事评论不忍直视[怒]#守护香港# ​, "
          },
          {
            node_num: "7",
            node_ID: "2656274875",
            name:'2656274875',
            location:"香港",
            forward_num: "384",
            comment_num: "443",
            interact_id: "98",
            content: "「香港清潔日」運動我們團隊正聯絡各分區的愛國志願者，自發組隊到社區清洗黑點，並協助修補部份損壞的社區設施。亦鼓勵大家到受影響的愛國食店支持及打氣。現時，我們已經獲得過千名義工支持，登記參加活動。但人數仍然未夠，希望大家推動在香港的朋友參加，謝謝大家支持[作揖]  這幾天亦已有志同道合者，已經開始在社區自發地進行清潔，齊心協力，回復潔淨安寧的香港，非常感恩[good], "
          },
          {
            node_num: "8",
            node_ID: "5820188838",
            name:'5820188838',
            location:"其他",
            forward_num: "43",
            comment_num: "148",
            interact_id: "63",
            content: "安全第一，不要落单，唱完就走。,群友组织的今天下午在金钟太古广场中庭国歌快闪，为了安全，才提前几小时发布消息，希望能来的多支持。主题：高唱国歌，香港加油！（IFC之后快闪再次唱响港岛）时间：9月24日（周二） 13:00曲目：1、《国歌》 2、《中国人》3、《歌唱祖国》口号：1、撑警察，反暴力   ..."
          },
          {
            node_num: "9",
            node_ID: "5617030362",
            name:'5617030362',
            location:"香港",
            forward_num: "137",
            comment_num: "997",
            interact_id: "83",
            content: "好一句邪不能勝正，也是父母一直以來的教誨，而我只需緊守，並傳承下去  今晚見到被捕名單上，最小只有13歲，令我想起電影一句哭訴：It was said that you would destroy the Sith， not join them.  如果他們真是有人性，應該叫那少年離開，而不是加入他們  #撑警海报上的警察曾Sir##香港警察#,【#撑警海报上的警察曾Sir#：相信邪不压正！】曾Sir名叫曾浩然，加入香港警队23年。近期“撑警”活动中，一张表达对港警支持的海报被广泛传播。海报中，站在前面的警察正是曾Sir。三个月来，他一直在前线执勤，尽管辛苦又危险，但他说：“这是职责所在。对祖国的深情就是尽到自己的职责，守护一方安宁"
          },
          {
            node_num: "10",
            node_ID: "5999251130",
            name:'5999251130',
            location:"北京",
            forward_num: "1913",
            comment_num: "667",
            interact_id: "85",
            content: "【细思恐极！为何那么多西方媒体报道香港，连用词都一样？[惊]】你是否留意过各国媒体对香港的海量报道？美国人@NathanRich火锅大王 比对了，发现了一个惊人的事实：法新社、美联社、路透社、CNBC、时代周刊、日经新闻……都采取同一个口径来描述香港，甚至用同一个词！“是懒惰导致记者相互抄袭，还是有人在协调信息？这些报道都是巧合吗？”3分30秒开始疯狂高能！这不是黑色幽默，这是真实的西方媒体报道！聪明的你，看懂了吗？[doge]火锅大王最后说：“即使你从很多媒体感受到仇恨，记住，爱中国无罪！”"
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
              max: 3240, //最大值
              interval: 150, //列数
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
              data: [10,324,368,1248,1310,1833],
              itemStyle:{color:'red'}
            },
            {
              name: '中立节点',
              type: 'line',
              data: [3230,2916,2872,1992,1930,1407],
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
              max: 3240, //最大值
              interval: 150, //列数
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
              data: [10,660,719,1126,1149,1301],
              itemStyle:{color:'blue'}
            },
            {
              name: '负面节点',
              type: 'line',
              data: [10,320,345,696,713,792],
              itemStyle:{color:'red'}
            },
            {
              name: '中立节点',
              type: 'line',
              data: [3220,2260,2167,1418,1378,1147],
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
