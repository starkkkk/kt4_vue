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
            <el-divider content-position="left"><h2>基于结构阻断的引导策略效果展示(香港事件)</h2></el-divider>
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
              <img src="../image/wy1.png" width="700" height="508">
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
              <img src="../image/wy2.png" width="700" height="508">
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
              <img src="../image/wy3.png" width="700" height="521">

            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-card shadow="hover">
              <div slot="header">
                <span style="font-size: 18px; font-weight: bold; line-height: 30px">阻断社区内部的重要节点</span>
              </div>
              <img src="../image/wy4.png" width="700" height="521">

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
      <h2>被阻断节点的原始状态</h2>
    </el-divider>
    <br />
      <el-card>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="编号" width="180"></el-table-column>
          <el-table-column prop="ID" label="账号" width="180"></el-table-column>
          <el-table-column prop="day1" label="第一天热度"></el-table-column>
          <el-table-column prop="day2" label="第二天热度"></el-table-column>
          <el-table-column prop="day3" label="第三天热度"></el-table-column>
          <el-table-column prop="day4" label="第四天热度"></el-table-column>
          <el-table-column prop="day5" label="第五天热度"></el-table-column>
          <el-table-column prop="day6" label="第六天热度"></el-table-column>
          <el-table-column prop="day7" label="第七天热度"></el-table-column>
          <el-table-column prop="day8" label="第八天热度"></el-table-column>
          <el-table-column prop="day9" label="第九天热度"></el-table-column>
          <el-table-column prop="day10" label="第十天热度"></el-table-column>
          <el-table-column prop="day11" label="第十一天热度"></el-table-column>
          <el-table-column prop="day12" label="第十二天热度"></el-table-column>
          <el-table-column prop="day13" label="第十三天热度"></el-table-column>
          <el-table-column prop="day14" label="第十四天热度"></el-table-column>
        </el-table>
      </el-col>
      </el-card>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-card>
        <div class="box">
          <div id="myChart" :style="{width: '1500px', height: '400px'}"></div>
        </div>
          </el-card>
        </el-col>
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
