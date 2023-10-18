<template>
  <div >
    <el-row :gutter="20">
      <el-card>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h2>基于竞争传播的引导策略效果展示(丰巢收费事件)</h2>
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
              <img src="../image/FengChao_1_structure.png" width="664" height="646">
          </el-col>
          <div>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <span style="font-size: 18px; line-height: 30px">
                上图展示了参与本次事件讨论的所有相关节点所构成的原始网络结构图。
                图中黑色的节点代表中立节点。网络的节点数量为3458，边的数量为3573。
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
            <img src="../image/FengChao_1_negative.png" width="665" height="646">
          </el-col>
          <div>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <span style="font-size: 18px; line-height: 30px">
            上图显示的是只有负面信息传播，网络中正面节点，负面节点和中立节点的分布情况。
            图中红色的节点代表被负面信息影响的节点。可以看到负面节点占据整个网络的大部分。
            网络被负面信息影响的节点的数量为2295，中立的节点只剩下1163。
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
                  <img src="../image/FengChao_CIC.png" width="664" height="646" />
                </span>
          </el-col>

          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <span style="font-size: 18px; line-height: 30px">
                  左图展示了添加引导策略后，网络中正面节点、中立节点和负面节点的分布情况。
                  图中蓝色的节点代表被正面信息影响的节点。
                  通过LCH-TU算法，我们选取了10个节点施加正面信息，与负面信息进行竞争传播。
                  经过传播后被负面信息影响的节点只有915个，被正面信息影响的节点有1499个，中立的节点有1044个。我们可以看到受正面信息影响的节点占据了整个网络的大部分。
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
            node_ID: "2803301701",
            name:'人民日报',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "447",
            content: "【#国家邮政局约谈丰巢负责人#：妥善处理智能快件箱免费保管期限调整纠纷】5月13日，针对近期丰巢公司与杭州、上海少数小区物业因调整智能快件箱免费保管期限产生纠纷事宜，国家邮政局约谈了丰巢科技公司主要负责人，要求丰巢公司积极采取措施，主动承担社会责任，着手研究解决方案，调整完善收费机制...全文： http://m.weibo.cn/2803301701/4504904041601101 "

          },
          {
            node_num: "2",
            node_ID: "2656274875",
            name:'央视新闻',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "260",
            content: "【小调查：#快递柜该不该收超时费#？】近日，多地小区抵制丰巢超时收费。有网友认为，有时快递被丢到快递箱，并未经自己允许；超12小时就收费，对常出差的上班族来说不合理；明明付过快递费，拿到手凭啥又加一次钱？也有网友认为，超时存放收费可以理解，但如何收费应听取消费者意见。你怎么看？ ...全文： http://m.weibo.cn/2656274875/4504460360258822 "
          },
          {
            node_num: "3",
            node_ID: "1642088277",
            name:'财经网',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "216",
            content: "#北京部分小区业主要求丰巢撤出#【丰巢超时保管费引争议 #有快递员一周自掏50元丰巢寄存费#】今天记者探访北京部分小区发现，使用丰巢智能快件箱的小区同样也已经开始收费，但部分业主并不愿意买单，要求丰巢从小区撤出。今天，翡丽小区蓝爵堡物业工作人员表示，现在，物业已经开辟出一个暂存区临时存...全文： http://m.weibo.cn/1642088277/4503305696921493 "
          },
          {
            node_num: "4",
            node_ID: "1885454921",
            name:'蓝鲸财经记者工作平台',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "228",
            content: "【鲸视频：#上海消保委谈丰巢超时收费#，消费者不满的，是丰巢的有恃无恐】“丰巢超时收费”事件发生后，上海市消保委也接到了大量消费者的反映与咨询。5月12日上午，上海市消保委副秘书长唐健盛接受采访时表示，每一单快递都属单独合同，都要得到消费者的明确同意，做到“一单一物一确认”。如果快递...全文： http://m.weibo.cn/1885454921/4504043386828542 "
          },
          {
            node_num: "5",
            node_ID: "1642634100",
            name:'新浪科技',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "236",
            content: "【#律师谈丰巢收费#：非双向收费，若约定免费则应按约定执行】5月11日，针对丰巢快递柜收费一事。律师林翔分析，从时间段上看，丰巢并非双向收费。现有情况看，收费是市场行为，并不违法违规。不过，如果丰巢在入驻小区时有永久免费约定，则应按约定执行。http://t.cn/A6AuPegi "
          },
          {
            node_num: "6",
            node_ID: "2589382861",
            name:'律师梁晨',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "128",
            content: "#未获用户同意投放快递柜属违法#本人宣布，就丰巢不分情况收费一事起诉。1、深圳丰巢是商业公司，不是慈善机构，作为快件保管方，服务收费本没有错。但你方便了谁，就应该向谁收钱。不分情况收费就是强买强卖。更让大家感到不爽的是：快递公司本应在征得收件方同意后，才有权将快件放至丰巢。现...全文： http://m.weibo.cn/2589382861/4502765949353829 "
          },
          {
            node_num: "7",
            node_ID: "5044281310",
            name:'澎湃新闻',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "141",
            content: "【涉嫌强推收费、一家独大？#三律师向反垄断局反映丰巢情况#】透过此次收费风波，智能快递柜市场丰巢一家独大的隐忧也逐渐显现。近日，澎湃新闻获悉，北京的三位律师已向国家市场监督管理总局反垄断局实名提交了“情况反映函”。三位律师之一的王维维认为，丰巢宣布收费与收购中邮智递的时间点十分微妙...全文： http://m.weibo.cn/5044281310/4505141573961150 "
          },
          {
            node_num: "8",
            node_ID: "1496814565",
            name:'封面新闻',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "78",
            content: "【#上海消保委回应丰巢执行超时收费#：建议小区设立免费公共快递架】上海市消保委透露，近日，丰巢快递柜宣布执行超时收费后，引发消费者普遍不满。上海市消保委认为：快递公司将快递件放入快递柜，都应征得消费者的明确同意；利用物业共用部位从事快递柜经营的，应当征得业主大会同意；快递柜的收费和...全文： http://m.weibo.cn/1496814565/4503503068605471 "
          },
          {
            node_num: "9",
            node_ID: "1618051664",
            name:'头条新闻',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "99",
            content: "【#国家邮政局约谈丰巢负责人#】13日，针对近期丰巢公司与杭州、上海少数小区物业因调整智能快件箱免费保管期限产生纠纷事宜，国家邮政局约谈了丰巢科技公司主要负责人，要求丰巢公司积极采取措施，主动承担社会责任，着手研究解决方案，调整完善收费机制，回应用户合理诉求。丰巢科技公司主要负责人表...全文： http://m.weibo.cn/1618051664/4504907259132315 "
          },
          {
            node_num: "10",
            node_ID: "1744332207",
            name:'钱江视频',
            location:"无",
            forward_num: "无",
            comment_num: "无",
            interact_id: "72",
            content: "【#丰巢致歉并调整服务# 免费保管时长由12小时延长至18小时】#丰巢致歉#并调整服务：用户免费保管时长由原来的12小时延长至18小时，超时后每12小时收费0.5元，3元封顶；已付费用户赠送一个月的会员权益。丰巢称，因系统升级原因，以上调整措施将在5月20日全国生效。#丰巢免费保管延长至18小时# ...全文： http://m.weibo.cn/1744332207/4504949033782441 "
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
              max: 3458, //最大值
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
              data: [10,865,889,2119,2152,2295],
              itemStyle:{color:'red'}
            },
            {
              name: '中立节点',
              type: 'line',
              data: [3448,2593,2569,1339,1306,1163],
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
              max: 3458, //最大值
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
              data: [10,1328,1362,1466,1491,1499],
              itemStyle:{color:'blue'}
            },
            {
              name: '负面节点',
              type: 'line',
              data: [10,824,838,900,915,915],
              itemStyle:{color:'red'}
            },
            {
              name: '中立节点',
              type: 'line',
              data: [3438,1306,1258,1092,1052,1044],
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
