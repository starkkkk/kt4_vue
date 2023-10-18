<template>
  <div>

    <div class="strategy" style="display: flex;justify-content: space-between;">
      <div style="width:60%;">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span style="font-size: 20px; font-weight: bold;margin-right: 20px;">原始态势</span>
          </div>
          <div class="cardBody" style="display: flex;justify-content: space-between;">
            <div class="bodyleft" style="width: 40%;height: 250px;">
              <el-card shadow="hover" style="height: 250px;margin-bottom:0px;">
                <div style="display: flex;flex-direction: column;justify-content: space-around;">
                  <span>
                    <h2>{{EventName1}}</h2>
                  </span>
                  <div style="margin:5px 0;">
                    <span style="font-weight: bold;">起始时间：</span><br />
                    <span>{{startTime1}}</span>
                  </div>
                  <div style="margin:5px 0;">
                    <span style="font-weight: bold;">终止时间：</span><br />
                    <span>{{endTime1}}</span>
                  </div>
                  <div style="margin:5px 0;">
                    <span style="font-weight: bold;">类型：</span><br />
                    <span>{{keyValue1}}</span>
                  </div>
                  <div style="margin:5px 0;">
                    <span style="font-weight: bold;">信息来源：</span><br />
                    <span>{{platform1}}</span>
                  </div>

                </div>

              </el-card>
            </div>
            <div class="bodycenter" style="width: 60%;height:250px;display: flex;flex-direction: column;justify-content: space-around;">
              <el-card shadow="hover" style="margin-bottom:0px">
                <div>
                  <span>
                    <h2>安全等级</h2>
                  </span>
                  <div style="margin:5px 0;">
                    <span style="font-weight: bold;color: red;font-size: 20px;">{{Srank1}}</span><br />
                  </div>
                </div>
              </el-card>
              <el-card shadow="hover" style="margin-bottom:0px">
                <div>
                  <span>
                    <h2>态势</h2>
                  </span>
                  <div style="margin:5px 0;">
                    <el-tag v-for="item in items1" :key="item.label" :type="item.type" effect="dark">
                      {{ item.label }}
                    </el-tag>
                  </div>
                </div>
              </el-card>
            </div>

          </div>

        </el-card>

        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span style="font-size: 20px; font-weight: bold;margin-right: 20px;">引导结果</span>
          </div>
          <div class="cardBody" style="display: flex;justify-content: space-between;">
            <div class="bodyleft" style="width: 40%;height: 250px;">
              <el-card shadow="hover" style="height: 250px;margin-bottom:0px;">
                <div style=" display: flex;flex-direction: column;justify-content: space-around;">
                  <span>
                    <h2>{{EventName1}}</h2>
                  </span>
                  <div style="margin:5px 0;">
                    <span style="font-weight: bold;">起始时间：</span><br />
                    <span>{{startTime}}</span>

                  </div>
                  <div style="margin:5px 0;">
                    <span style="font-weight: bold;">终止时间：</span><br />
                    <span>{{endTime}}</span>
                  </div>
                  <div style="margin:5px 0;">
                    <span style="font-weight: bold;">类型：</span><br />
                    <span>{{keyValue1}}</span>
                  </div>
                  <div style="margin:5px 0;">
                    <span style="font-weight: bold;">信息来源：</span><br />
                    <span>{{platform1}}</span>
                  </div>

                </div>

              </el-card>
            </div>
            <div class="bodycenter" style="width: 60%;height:250px;display: flex;flex-direction: column;justify-content: space-between;">
              <el-card shadow="hover" style="margin-bottom:0px">
                <div>
                  <span>
                    <h2>安全等级</h2>
                  </span>

                  <div style="margin:5px 0;">
                    <span style="font-weight: bold;color: red;font-size: 20px;">{{Srank}}</span><br />
                  </div>
                </div>
              </el-card>
              <el-card shadow="hover" style="margin-bottom:0px">
                <div>
                  <span>
                    <h2>态势</h2>
                  </span>
                  <div style="margin:5px 0;">
                    <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
                      {{ item.label }}
                    </el-tag>
                  </div>
                </div>
              </el-card>
            </div>

          </div>

        </el-card>

      </div>

      <div style="width:40%;">
        <div class="bodyright" style="width: 100%;height:700px;">
          <el-card shadow="hover" style="margin-bottom:0px;height:700px;">
            <div>
              <span>
                <h2>舆情指数雷达图</h2>
              </span>
              <div style="width: 100%;display: flex;justify-content: center;align-items: center;">
                <div id="radarChart" style="width: 650px;height: 650px;"></div>
              </div>
            </div>
          </el-card>
        </div>
        <!--      <div class="bodyright" style="width: 40%;height:380px;">
	           <el-card shadow="hover" style="margin-bottom:0px;height:380px;">
	             <div>
	               <span>
	                 <h2>舆情指数雷达图</h2>
	               </span>
	               <div style="width: 100%;padding: 2px;display: flex;justify-content: center;align-items: center;">
	                 <div id="radarResult" style="width: 400px;height: 300px;"></div>
	               </div>
	             </div>
	           </el-card>
	         </div> -->
      </div>
    </div>
    <div>
      <el-card shadow="hover">
        <div slot="header" class="clearfix">
          <span style="font-size: 20px; font-weight: bold;margin-right: 20px;">量化干预效果</span>
        </div>
        <div>
          <h4>以策略干预时间节点为界，划分为两段，分别计算时间节点前后敏感指标变化</h4>
          <h4>政治敏感均值：模型输出所有帖子博文政治敏感置信度，以均值结果反映整个舆情事件的政治敏感程度</h4>
          <el-table :data="tableData" :span-method="objectSpanMethod" style="width: 100%">
            <el-table-column prop="date" label="" width="300">
            </el-table-column>
            <el-table-column prop="name" label="政治敏感均值" width="300">
            </el-table-column>
            <el-table-column prop="acc" label="准确率" width="300">
            </el-table-column>
          </el-table>

        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
  // import showcontentvue from './showcontent.vue'
  import Axios from "axios";
  export default {
    data() {
      return {
        eventId: '',
        items1: [],
        Srank1: '',
        EventName1: '',
        startTime1: '',
        endTime1: '',
        startTime: '',
        endTime: '',
        keyValue1: '',
        platform1: '',

        items: [],
        Srank: '',
        originalData: '',
        resultData: '',
        tableData: []




      };
    },
    // components: {
    // 	// showcontentvue
    // },
    mounted() {


      this.eventId = this.$route.query.eventNum
      if(this.eventId == "event1"){
        this.tableData = [{
            date: '干预前',
            name: '0.19341',
            acc: '70.52%'
          },
          {
            date: '干预后',
            name: '0.05702',
            acc: '70.52%'
          }
        ]
      }
      else{
        this.tableData = [{
              date: '干预前',
              name: '0.79221',
              acc: '78.25%'
            },
            {
              date: '干预后',
              name: '0.17233',
              acc: '78.25%'
            }
          ]
        }


      this.getBeforData(this.eventId)


    },
    methods: {
      objectSpanMethod({
        row,
        column,
        rowIndex,
        columnIndex
      }) {
        if (columnIndex === 2) {
          if (rowIndex === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      getBeforData(val) {

        var that = this

        Axios.get('http://202.121.180.70:8109/getEventDataAfter', {
            params: {
              eventNum: val
            }
          }, )
          .then(function(response) {

            that.Srank1 = response.data.beforedata.situation_description
            that.EventName1 = response.data.beforedata.eventName,
              that.startTime1 = response.data.beforedata.start_time,
              that.endTime1 = response.data.beforedata.end_time,
              that.keyValue1 = response.data.beforedata.event_type,
              that.platform1 = response.data.beforedata.platform,
              that.items1 = [{
                  type: response.data.beforedata.feeling_color,
                  label: response.data.beforedata.feeling_description
                },
                {
                  type: response.data.beforedata.behaviour_color,
                  label: response.data.beforedata.behaviour_description
                },
                {
                  type: response.data.beforedata.spread_color,
                  label: response.data.beforedata.spread_description
                },
                {
                  type: response.data.beforedata.cognition_color,
                  label: response.data.beforedata.cognition_description
                },
              ]

            that.originalData = {
                name: "原始态势",
                value: [response.data.beforedata.feeling_score, response.data.beforedata.behaviour_score, response.data
                  .beforedata.spread_score, response.data.beforedata.cognition_score
                ],
              },

              that.Srank = response.data.afterData.situation_description
            that.startTime = response.data.afterData.start_time,
              that.endTime = response.data.afterData.end_time,

              that.items = [{
                  type: response.data.afterData.feeling_color,
                  label: response.data.afterData.feeling_description
                },
                {
                  type: response.data.afterData.behaviour_color,
                  label: response.data.afterData.behaviour_description
                },
                {
                  type: response.data.afterData.spread_color,
                  label: response.data.afterData.spread_description
                },
                {
                  type: response.data.afterData.cognition_color,
                  label: response.data.afterData.cognition_description
                },
              ]
            that.resultData = {
              itemStyle: {
                normal: {
                  color: '#6f0000', //改变折线点的颜色
                  lineStyle: {
                    color: '#6f0000' //改变折线颜色
                  }
                }
              },
              name: "干预结果",
              value: [response.data.afterData.feeling_score, response.data.afterData.behaviour_score, response.data
                .afterData.spread_score, response.data.afterData.cognition_score
              ],
            }

            that.original()
            that.showResult()
          })
          .catch(function(error) {
            console.log(error);
          })
      },
      original() {
        var that = this
        var radarmyChart = this.$echarts.init(document.getElementById('radarChart'));
        const optionSentiment = {
          title: {
            // text: '舆情指数雷达图'
          },
          tooltip: {},
          legend: {
            // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          radar: {
            shape: 'circle',
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: true,
              areaStyle: { // 分隔区域的样式设置。
                color: [],
                // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
              }
            },

            name: {
              textStyle: {
                color: '#fffff',
                fontSize: 20,
                borderRadius: 3,
                padding: [3, 5],
              },
            },
            indicator: [{
                text: '情感',
                max: 100
              },
              {
                text: '行为',
                max: 100
              },
              {
                text: '传播',
                max: 100
              },
              {
                text: '认知',
                max: 100
              }
            ],
            radius: 120,

          },
          series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            areaStyle: {},
            itemStyle: {
              normal: {
                color: '#3154b4', //改变折线点的颜色
                lineStyle: {
                  color: '#3154b4' //改变折线颜色
                }
              }
            },
            data: [that.originalData, that.resultData]

          }]
        };
        radarmyChart.setOption(optionSentiment);
      },
      // showResult() {
      //   var that = this
      //   const optionSentimentResult = {
      //     title: {
      //       // text: '舆情指数雷达图'
      //     },
      //     tooltip: {},
      //     legend: {
      //       // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
      //     },
      //     radar: {
      //       shape: 'circle',
      //       splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
      //         show: true,
      //         areaStyle: { // 分隔区域的样式设置。
      //           color: [],
      //           // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
      //         }
      //       },

      //       name: {
      //         textStyle: {
      //           color: '#fffff',
      //           fontSize:20,
      //           // backgroundColor: '#999',
      //           borderRadius: 3,
      //           padding: [3, 5],
      //         },
      //       },
      //       indicator: [{
      //           name: '情感',
      //           max: 100
      //         },
      //         {
      //           name: '行为',
      //           max: 100
      //         },
      //         {
      //           name: '传播',
      //           max: 100
      //         },
      //         {
      //           name: '认知',
      //           max: 100
      //         }
      //       ],
      //       radius: 100
      //     },
      //     series: [{
      //       // name: '预算 vs 开销（Budget vs spending）',
      //       type: 'radar',
      //       areaStyle: {},
      //       itemStyle: {
      //         normal: {
      //           color: '#4169E1', //改变折线点的颜色
      //           lineStyle: {
      //             color: '#4169E1' //改变折线颜色
      //           }
      //         }
      //       },
      //       data:that.resultData,

      //     }]
      //   };
      //   var xxxx = this.$echarts.init(document.getElementById('radarResult'));
      //   xxxx.setOption(optionSentimentResult);

      // }

    }


  };
</script>

<style>

</style>
