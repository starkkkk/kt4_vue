<template>
  <div class="permissions-container">

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

      <el-card shadow="hover">
        <div slot="header">

      </div>
      <div class="lodash-content">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-divider content-position="left"><h2>基于结构阻断的引导策略效果展示(丰巢收费事件)</h2></el-divider>
            <br>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-card>
              <h2>引导代价</h2>
              <span style="font-size: 18px; line-height: 30px">
                为了封锁舆情传播社区向其他临近社区的<span style="font-size: 18px; font-weight: bold; line-height: 30px; color: red">外部扩散</span>，并将传播范围控制到社区
                <span style="font-size: 18px; font-weight: bold; line-height: 30px; color: red">内部的10%</span>，我们尽可能选择
                <span style="font-size: 18px; font-weight: bold; line-height: 30px; color: red">最少的有效用户节点进行阻断</span>（封号或限制权限等方法）。

                <br>
              </span>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-card shadow="hover">
              <div slot="header">
                <span style="font-size: 18px; font-weight: bold; line-height: 30px">原始网络结构图</span>
              </div>
              <img src="../image/zd_fengchao_1.png" width="666" height="460">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <span style="font-size: 18px; line-height: 30px">
                <br>
                该图具体展示了参与本次事件讨论的所有相关节点所构成的原始网络结构图。
                <br><br><br>
              </span>
              </el-col>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-card shadow="hover">
              <div slot="header">
                <span style="font-size: 18px; font-weight: bold; line-height: 30px">添加引导策略前网络状态图</span>
              </div>
              <img src="../image/zd_fengchao_2.png" width="666" height="460">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <span style="font-size: 18px; line-height: 30px">
                <br>
                该图展示了采用结构阻断的引导策略前，由于舆情信息从若干重点社区中扩散，几乎所有节点都在动态传播中受到了影响。图中的红色节点表示参与了话题讨论的用户，灰色节点表示还没有参与其中的节点。
              </span>
              </el-col>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-card shadow="hover">
              <div slot="header">
                <span style="font-size: 18px; font-weight: bold; line-height: 30px">阻断社区边界处的桥节点</span>
              </div>
              <img src="../image/zd_fengchao_3.png" width="666" height="460">

            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-card shadow="hover">
              <div slot="header">
                <span style="font-size: 18px; font-weight: bold; line-height: 30px">阻断社区内部的重要节点</span>
              </div>
              <img src="../image/zd_fengchao_4.png" width="666" height="460">

            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-card>
              <span style="font-size: 18px; line-height: 30px">
                为了直观地展示引导效果，我们展示了采用了基于结构阻断的引导策略后的网络状态图，其中左图表示执行第一步阻断桥节点后的网络状态图，可以看出舆情传播能够被限制在该舆情社区内部，不会扩散出去；右图表示执行第二步阻断社区内重要节点的网络状态图，可以看出在社区内部舆情传播也得到了较好的管控效果。
              </span>
            </el-card>
          </el-col>

        </el-row>
      </div>
        <el-card>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-card shadow="hover">
                <div slot="header">
                  <span style="font-size: 18px; font-weight: bold; line-height: 30px">参与人数变化图</span>
                </div>
                <img src="../image/zd_fengchao_5.png" width="666" height="345">

              </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <el-card shadow="hover">
                <div slot="header">
                  <span style="font-size: 18px; font-weight: bold; line-height: 30px">事件热度变化图</span>
                </div>
                <img src="../image/zd_fengchao_6.png" width="666" height="345">

              </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-card>
              <span style="font-size: 18px; line-height: 30px">
                从引导前后的人数变化和事件热度变化可以看到我们的引导策略具有很好的效果。
              </span>
              </el-card>
            </el-col>


          </el-col>

        </el-card>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <span>
<!--          <h2>引导效果说明</h2>-->
<!--          <span style="font-size: 18px; line-height: 30px">-->
<!--          将添加引导策略后的网络状态图和不加引导策略的网路状态图进行对比，直观的显示引导效果。-->
<!--          </span>-->
          <br><br>
        </span>
        </el-col>
    </el-card>

      </el-col>



      <el-card shadow="hover">
    <el-divider content-position="left">
      <h2>被阻断节点的信息</h2>
    </el-divider>
        <el-card>

          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <h2></h2>
            <div class="">
              <el-table :data="tableData1" border style="width: 100%">
                <el-table-column
                  prop="node_num"
                  label="序号"
                  width="50"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="node_ID"
                  label="编号"
                  width="200"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="location"
                  label="昵称"
                  width="150"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="forward_num"
                  label="所属社区编号"
                  width="150"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="comment_num"
                  label="近期制造热度"
                  width="150"
                  align="center"
                ></el-table-column>

              </el-table>
            </div>

          </el-col>
        </el-card>

<!--      <el-card>-->
<!--      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--        <el-table :data="tableData" style="width: 100%">-->
<!--          <el-table-column prop="name" label="编号" width="180"></el-table-column>-->
<!--          <el-table-column prop="ID" label="账号" width="180"></el-table-column>-->
<!--          <el-table-column prop="day1" label="第一天热度"></el-table-column>-->
<!--          <el-table-column prop="day2" label="第二天热度"></el-table-column>-->
<!--          <el-table-column prop="day3" label="第三天热度"></el-table-column>-->
<!--          <el-table-column prop="day4" label="第四天热度"></el-table-column>-->
<!--          <el-table-column prop="day5" label="第五天热度"></el-table-column>-->
<!--          <el-table-column prop="day6" label="第六天热度"></el-table-column>-->
<!--          <el-table-column prop="day7" label="第七天热度"></el-table-column>-->
<!--          <el-table-column prop="day8" label="第八天热度"></el-table-column>-->
<!--          <el-table-column prop="day9" label="第九天热度"></el-table-column>-->
<!--          <el-table-column prop="day10" label="第十天热度"></el-table-column>-->
<!--          <el-table-column prop="day11" label="第十一天热度"></el-table-column>-->
<!--          <el-table-column prop="day12" label="第十二天热度"></el-table-column>-->
<!--          <el-table-column prop="day13" label="第十三天热度"></el-table-column>-->
<!--          <el-table-column prop="day14" label="第十四天热度"></el-table-column>-->
<!--        </el-table>-->
<!--      </el-col>-->
<!--      </el-card>-->
<!--        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--          <el-card>-->
<!--        <div class="box">-->
<!--          <div id="myChart" :style="{width: '1500px', height: '400px'}"></div>-->
<!--        </div>-->
<!--          </el-card>-->
<!--        </el-col>-->
      </el-card>
    </el-row>
  </div>
</template>

<script>
  import { getList } from "@/api/blacklist";
  import { mapGetters } from "vuex";
  import { tokenTableName } from "@/config/settings";
  import JsonEditor from "@/components/JsonEditor";


  export default {
    name: "Permissions",
    components: {
      JsonEditor,
    },

    data() {
      return {
        tableData1: [
          {
            node_num: "1",
            node_ID: "2803301701",
            location:"吉吉菌",
            forward_num: "115",
            comment_num: "12754",
            interact_id: "",
            content: "近日香港市民唱国歌被打伤，引来了更多爱国爱港者齐聚，自豪高歌爱国歌曲。爱国从不孤独，正义不应沉默。某些势力" +
              "妄图营造的恐怖气氛不过螳臂当车，改变不了香港属于中国的事实，更改变不了大多数香港人的那颗中国心。在自己国家的土地上举国旗、唱国歌，这才是值得中国人共享的荣光。"

          },
          {
            node_num: "2",
            node_ID: "5597120020",
            location:"钢铁直女lonny",
            forward_num: "115",
            comment_num: "14821",
            interact_id: "",
            content: "电影我和我的祖国#发布七故事之一《回归》制作特辑，薛晓路从升旗手、香港普通市民和警察的视角，见证香港回归这一庄严的历史时刻。影片也邀请当年的升旗手朱涛作为军事顾问。该故事由薛晓路执导，杜江、朱一龙、惠英红、任达华、王洛勇、高亚麟、王道铁主演，将于9月30日公映。"
          },
          {
            node_num: "3",
            node_ID: "2818023040",
            location:"甜椰子酱",
            forward_num: "115",
            comment_num: "14811",
            interact_id: "",
            content: "继续香港现场直播:稍早点，一废青被抓捕，废青同伴干扰现场，转移其作案背包，看场面，警察执法真的太难了！！！#光头刘Sir说同胞的支持是甘露"
          },
          {
            node_num: "4",
            node_ID: "6572247833",
            location:"不知逆",
            forward_num: "115",
            comment_num: "14632",
            interact_id: "",
            content: "李嘉诚「网开一面」论究竟是......1、是纵容    2、是宽容      3、我不懂长和资深顾问李嘉诚日前出席慈山寺祈福活动时向信眾发言，希望年轻人能够体谅大局、执政者都能够对未来主人翁网开一面。中央政法委的微信公眾号「长安剑」昨日发表文章指，香港少数「未来的主人翁」在街头非法集会、殴打路人、围攻警察、纵火烧街，质疑对他们网开一面是「纵容犯罪，不是為香港着想，而是看着香港滑向深渊」。文章又指香港年轻人面对的是住房难题，质疑「囤地圈钱」的地產商们，会否对市民「网开一面」。李嘉诚其后就透过发言人表示，对於其在慈山寺的言论被曲解，感到十分遗憾，并指多年已习惯了那些莫须有的指责，永远会虚心接受批评，但最為重要的是「宽容不等於纵容，不等於无视法律程序」。李嘉诚重申对任何暴力，包括语言暴力，对任何衝击法治的行為都不能接受。#香港光头刘Sir称期待北京之行##香港市民快闪清除乱港标语"
          },
          {
            node_num: "5",
            node_ID: "1695014720",
            location:"丨凌漪丨",
            forward_num: "8",
            comment_num: "1065775",
            interact_id: "",
            content: "【#香港市民在狮子山高唱国歌#[心]】今天上午，一批爱国爱港的香港市民登上象征香港精神的狮子山，高唱中华人民共和国国歌，挥动起鲜艳的五星红旗，庆祝#新中国成立七十周年#。祝福祖国，为香港加油！（央视记者李大杰 李伟） ​, "
          },
          {
            node_num: "6",
            node_ID: "2243308174",
            location:"帅哥都有罪",
            forward_num: "115",
            comment_num: "13949",
            interact_id: "",
            content: "爱国大姐在商场唱国歌，被暴徒残忍地推下扶梯，受伤吐血入院。暴徒对此事评论不忍直视[怒]#守护香港# ​, "
          },
          {
            node_num: "7",
            node_ID: "1642634100",
            location:"新浪科技",
            forward_num: "20",
            comment_num: "149229",
            interact_id: "",
            content: "「香港清潔日」運動我們團隊正聯絡各分區的愛國志願者，自發組隊到社區清洗黑點，並協助修補部份損壞的社區設施。亦鼓勵大家到受影響的愛國食店支持及打氣。現時，我們已經獲得過千名義工支持，登記參加活動。但人數仍然未夠，希望大家推動在香港的朋友參加，謝謝大家支持[作揖]  這幾天亦已有志同道合者，已經開始在社區自發地進行清潔，齊心協力，回復潔淨安寧的香港，非常感恩[good], "
          },


        ],
        YQ_data: [
          {
            variety: "数据集一",
            variety_value: "香港事件数据集-twitter",
            id:1,
          },
          {
            variety: "数据集二",
            variety_value: "香港事件数据集-微博",
            id:2,
          },

        ],
        form: {
          account: "",
        },
        tableData: [],
        res: [],
        selected:[],
        // currentsel:this.selectModel(id),
      };
    },
    computed: {
      ...mapGetters({
        username: "user/username",
        permissions: "user/permissions",
      }),
    },
    created() {
      this.fetchData();
      this.myEcharts();
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          title: {
            text: '引导前被阻断节点热度'
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
            data:['node_7','node_9','node_21','node_27','node_34'] //对应的是name
          },
          //配置X轴
          xAxis: {
            //坐标轴类型
            type:'category',
            //配置类目名称。 可以逐一设置，具体看文档
            data: ['第一天', '第二天', '第三天', '第四天', '第五天', '第六天','第七天','第八天','第九天','第十天','第十一天','第十二天','第十三天','第十四天'],
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
              name: '热度', //名称
              min: 0, //最小值
              max: 2550, //最大值
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
              name: 'node_7',
              type: 'line',
              data: [749,386,185,70,968,1253,776,692,668,1790,1572,931,1680,1347],
              itemStyle:{color:'#F60'}
            },
            {
              name: 'node_9',
              type: 'line',
              data: [408,268,91,259,219,130,249,293,385,410,382,1013,162,34],
              itemStyle:{color:'#749f83'}
            },
            {
              name: 'node_21',
              type: 'line',
              data: [391,277,346,253,223,178,128,423,653,537,315,408,215,59],
              itemStyle:{color:'#AFA'}
            },
            {
              name: 'node_27',
              type: 'line',
              data: [293,607,457,551,366,303,747,714,1617,998,1395,2205,1103,1017],
              itemStyle:{color:'#61a0a8'}
            },
            {
              name: 'node_34',
              type: 'line',
              data: [270,234,81,38,54,288,580,186,272,72,94,319,198,83],
              itemStyle:{color:'#91c7ae'}
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

      selectModel(id) {
        let obj = {};
        obj = this.YQ_data.find((item) => {
          return item.id === id;//筛选出匹配数据
        });
      },
        handleChangePermission() {
        localStorage.setItem(
          tokenTableName,
          `${this.form.account}-accessToken`
        );
        location.reload();
      },
      fetchData() {
        getList().then(({ data }) => {
          this.tableData = data;
        });
      },

    },
  };
</script>
