<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
<!--          <el-form-item label-width="0">-->
<!--            <el-alert show-icon>-->
<!--              策略配置-->
<!--            </el-alert>-->
<!--          </el-form-item>-->

        <el-card shadow="hover">
          <div slot="header">
            <span style="font-size: 20px; font-weight: bold; line-height: 30px">数据集选择:  </span>
            <el-select v-model="YQ_data.variety" placeholder="请选择数据集" @change="aa1">
              <el-option v-for="item in YQ_data"
                       :key="item.variety"
                       :label="item.variety_value"
                       :value="item.id"></el-option>
            </el-select>
          </div>
        <div>
            <span v-if ="YQ_data.variety==1">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <!-- <h2>数据集介绍</h2>
              <span style="font-size: 18px; line-height: 30px">
                微博和推特是两个知名的社交媒体平台，它们都提供了用户可以分享消息、发表观点以及与其他用户交流的功能。两者包含了用户在平台上发布的消息、评论、转发等信息，
                在研究社交媒体分析、信息传播、自然语言处理等领域具有广泛的应用，还可以包含用户信息、关注关系、地理位置信息等元数据，可用于分析用户特征和地理相关的研究问题。
                这些数据集通常以结构化格式（如CSV）或非结构化格式（如JSON）提供，其中包含了文本内容、时间戳、用户ID、关系网络等信息。
                研究人员可以利用这些数据集进行大规模的分析、挖掘和建模，以揭示用户行为模式、社交关系以及信息传播机制等方面的信息，从而开发社交媒体相关的应用和服务。
              </span> -->
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div >
                <!-- <h2>应用场景描述</h2>
                  <span style="font-size: 18px; line-height: 30px">
                    2022年8月2日至8月3日，第52任美国众议院议长南希·佩洛西率团访问台湾，为其亚洲之行的一部分。中国大陆当局基于与台湾的政治对立，称此次访问为“窜访台湾”或“窜访中国台湾地区”及简称“窜台”。
                    佩洛西抵台后，中国大陆多个官方单位相继对此发表声明表达抗议，并触发中国大陆对台举行一系列军事演习。此举在国际上引起巨大政治争议，造成舆论倾向分化，互联网上激进分子以及别有用心之人
                    在此基础上大做文章，引导公众情绪，可能引发紧张局势和外交争端。基于推特和微博两个平台上的事件数据集研究社交网络中的信息传播参与者群体，对不同群体规模的变化以及个体的行为趋势变化进行预测，
                    能够使我们从信息传播参与者的角度对网络结构、属性以及突发事件遵循的规律有进一步的认识，进而对舆情事件进行把控，防止危害地区稳定事件从网络上萌芽。
                    <br><br>
                  </span> -->
              </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div >
                <!-- <h2>研究指标分析</h2>
                  <span style="font-size: 18px; line-height: 30px">
                    本项目旨在预测与舆情相关联群体行为未来发展的趋势和规模。具体地，项目首先基于预处理后舆情数据中参与的相关个体进行分析，判别事件中个体之间的信息传递方向，检测具体舆情数据的发起者和参与者，验证主客体研判的准确率。
                    其次，利用经典的传染病模型，将整个舆情传播系统中的节点分为健康节点、传播节点和免疫节点，以此来分析社交网络中信息传播的基本规律。同时考虑到微博信息的传播还与人在获取信息以后的真实情感、决策和信息互动模式有关，
                    就需要基于事件的传播热度对传染病模型进行适应性调整，验证群体规模预测的准确率。最后，基于给定时间段内群体中个体的行为变化规律计算个体变化趋势先验概率，构建朴素的贝叶斯模型，验证个体行为变化趋势预测的准确率。 
                    <br><br>
                  </span> -->
              </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h2>
                  群体行为趋势整体研究框架
                </h2>
              </el-col>
              <el-col>
                <div style="text-align: center;">
                  <span>
                    <img src="../figure/framework.png" width="680" height="450">
                  </span>
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h2>分析指标选择</h2>
                <div>
                  <el-select v-model="options.variety" placeholder="请选择" @change="aa1">
                    <el-option
                      v-for="item in options"
                      :key="item.variety"
                      :label="item.variety_value"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <span v-if ="options.variety==1">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <h3>“佩洛西访台”数据集参与群体规模 （左）预测结果 （右）真实数据</h3>
                        <div style="text-align: center;position: relative;left:1%;">
                        <img src="../figure/fig3.png" width="924" height="600" />
                        </div>
                        <p style="font-size: 19px; line-height: 32px;">      
                          “佩洛西访台”舆情专题中，佩洛西访台时间为2022-08-02，项目选取访台日期前后近一个月的数据进行统计分析，观察得到佩洛西访台事件的全周期变化趋势。
                           左图为项目预测的群体规模变化趋势，右图为群体规模的真实情况。
                           项目基于2022-07-24至2022-08-03共计11天的真实群体规模变化信息，预测2022-08-04至2022-0822共计19天的群体规模，预测准确率在86%以上。
                        </p>
                      
                      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <span>
                         
                        </span>
                      </el-col>
                      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <span style="font-size: 18px; line-height: 30px">
                          <br><br><br>
                          
                          <br><br><br><br><br><br>
                        </span>
                      </el-col>
                      <div @click="showbox = false">
                        <div style="text-align: center;">
                          <!-- <el-button type="primary" round icon="el-icon-search" @click.stop="showbox=true">显示群体规模预测结果</el-button> -->
                        </div>
                        <div v-show="showbox">
                          <br>
                          <el-table
                            :data="tableData1"
                            style="width: 100%">
                            <el-table-column
                              type="index"
                              :index="indexMethod">
                            </el-table-column>
                            <el-table-column
                              prop="date"
                              label="群体类别/天数"
                              width="180">
                            </el-table-column>
                            <el-table-column
                              prop="name"
                              label="第十二天"
                              width="180">
                            </el-table-column>
                            <el-table-column
                              prop="address"
                              label="第十三天">
                            </el-table-column>
                            <el-table-column
                              prop="zip"
                              label="第十四天">
                            </el-table-column>
                            <el-table-column
                              prop="tag"
                              label="第十五天">
                            </el-table-column>
                          </el-table>                          
                          <!-- <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <span>
                              <br><br>
                              <img src="../figure/fig1data.png" width="360" height="280" />
                            </span>
                          </el-col> -->
                          <el-col>
                            <span style="font-size: 18px; line-height: 30px">
                              <br>
                            
                              <br><br><br><br>
                            </span>
                          </el-col>
                        </div>
                      </div>

                      
                      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <span>
                          <!-- <img src="../figure/fig2.png" width="360" height="310" /> -->
                        </span>
                      </el-col>
                      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <span style="font-size: 18px; line-height: 30px">
                          <br><br>

                        
                          <br><br><br><br><br><br><br>
                        </span>
                      </el-col>
                      <div @click="showbox1 = false">
                        <div style="text-align: center;">
                          <!-- <el-button type="primary" round icon="el-icon-search" @click.stop="showbox1=true">显示群体规模预测结果</el-button> -->
                        </div>
                        <div v-show="showbox1">
                          <br>
                          <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                              type="index"
                              :index="indexMethod">
                            </el-table-column>
                            <el-table-column
                              prop="date"
                              label="群体类别/天数"
                              width="180">
                            </el-table-column>
                            <el-table-column
                              prop="name"
                              label="第十二天"
                              width="180">
                            </el-table-column>
                            <el-table-column
                              prop="address"
                              label="第十三天">
                            </el-table-column>
                            <el-table-column
                              prop="zip"
                              label="第十四天">
                            </el-table-column>
                            <el-table-column
                              prop="tag"
                              label="第十五天">
                            </el-table-column>
                          </el-table>
                          <!-- <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <span>
                              <br><br>
                              <img src="../figure/fig2data.png" width="360" height="280" />
                            </span>
                          </el-col> -->
                          <el-col>
                            <span style="font-size: 18px; line-height: 30px">
                              <br>
                              上面表格中第12天，第13天，第14天，第15天群体规模预测准确率（I+R预测准确率）分别为83.64%，92.67%，98.15%，83.83%，
                              平均群体规模预测准确率为89.52%。
                              <br><br><br><br><br><br><br>
                            </span>
                          </el-col>
                        </div>
                      </div>
                    </el-col>                   

                  </span>
                </div>
              </el-col>





              <!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h3>群体规模预测准确率</h3>
                  <span style="font-size: 18px; line-height: 30px">
                  
                    使用“传染病模型”对微博和推特两个数据集上群体规模变化进行预测，其中“易受感染者（Susceptible）”指代群体中某一个舆情事件的潜在受众，
                    “感染者（Infected）”指代与某一舆情事件发生类似于转发、评论，点赞等关联的群体 ，“康复者（Recovered）”指代较长一段时间未与某一类型舆情事件
                    发生关联的群体。在微博和推特数据集上通过前十天的三个群体占群体比例数据对“SIR”曲线进行拟合，利用拟合的曲线上第十天后四天的预测值与真实值进行、
                    比较，计算群体规模预测准确率。

                  </span>   
                <h4>微博数据集</h4> 
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                  <span>
                    <img src="../figure/fig1.png" width="360" height="310" />
                  </span>
                </el-col>  
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                  <span style="font-size: 18px; line-height: 30px">
                    <br><br>
                    <br><br>
                    左图中实线为微博数据集中三种类型群体根据前十天真实数据在30天内所占群体比例的预测值，虚线为前十天三种类型群体所占群体比例的真实值。
                    <br><br><br><br><br><br><br>
                  </span>
                </el-col> 
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                  <span>
                    <img src="../figure/fig1data.png" width="360" height="280" />
                  </span>
                </el-col>  
                <el-col :xs="20" :sm="12" :md="20" :lg="12" :xl="12">
                  <span style="font-size: 18px; line-height: 30px">
                    <br><br>
                    左图中第12天，第13天，第14天，第15天群体规模预测准确率（I+R预测准确率）分别为84.97%，97.46%，85.92%，76.61%，
                    平均群体规模预测准确率为86.24%。
                    <br><br><br><br><br><br>
                  </span>
                </el-col>     
                <h4><br><br><br><br><br><br>推特数据集</h4> 
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                  <span>
                    <img src="../figure/fig2.png" width="360" height="310" />
                  </span>
                </el-col>  
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                  <span style="font-size: 18px; line-height: 30px">
                    <br><br>
                    <br><br>
                    左图中实线为推特数据集中三种类型群体根据前十天真实数据在30天内所占群体比例的预测值，虚线为前十天三种类型群体所占群体比例的真实值。
                    <br><br><br><br><br><br><br>
                  </span>
                </el-col> 
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                  <span>
                    <img src="../figure/fig2data.png" width="360" height="280" />
                  </span>
                </el-col>  
                <el-col :xs="20" :sm="12" :md="20" :lg="12" :xl="12">
                  <span style="font-size: 18px; line-height: 30px">
                    <br><br>
                    左图中第12天，第13天，第14天，第15天群体规模预测准确率（I+R预测准确率）分别为83.64%，92.67%，98.15%，83.83%，
                    平均群体规模预测准确率为89.52%。
                    <br><br>
                  </span>
                </el-col>           
                
              </el-col>      -->



            </span>
  

          <span v-else-if ="YQ_data.variety==2">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <h2>数据集介绍</h2>
              <span style="font-size: 18px; line-height: 30px">
                微博和推特的快速发展极大的促进了人与人之间的交流，也改变了人们的交际和交流的方式，有了更多表达的机会与渠道。社交网络的公开数据集包含了用户发布的信息内容还有用户间的转发、评论等行为数据。
                为了更好的显示用户之间的交互关系，我们剔除了网络中的不活跃用户，保留参与程度高的用户。
              </span>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div>
                <h2>应用场景描述</h2>
                <span style="font-size: 18px; line-height: 30px">
                  李文亮医生2019年12月30日率先在微信群披露不明肺炎有关情况，被截图转发而后，1月3日受到警方的警示、训诫，称其在网上发布不实言论。
                  之后工作过程中，在接诊了新冠病毒肺炎患者后，李文亮被传染上了新型冠状病毒性肺炎，其父母和多名同事也被感染。
                  1月31日时，李文亮在微博上记录下自己从发布消息、被训诫到被感染、住院的全过程。
                  但病魔是如此地顽强。2月6日深夜至2月7日凌晨，李文亮生命垂危。关于他情况的消息，也经历了“病逝——抢救——病逝——抢救”的几番过程。
                  最后，李文亮还是倒在了这个武汉大风中的晚上。据武汉中心医院微博消息，经全力抢救无效，李文亮于2020年2月7日凌晨2点58分去世，
                  对此，医院方面深表痛惜和哀悼。包括人民日报、新华社、央视新闻等央媒，均发文“送别李文亮医生”。李文亮事件在国内外都引起了广泛的影响。
                  <br><br>
                </span>
              </div>

            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h2>网络整体结构</h2>
            </el-col>
<!--            <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">-->
<!--                <span>-->
<!--                  <br><br>-->
<!--                </span>-->
<!--              </el-col>-->

              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <span>
                  <img src="../figure/LiWenLiang_1_original.png" width="665" height="647" />
                </span>
              </el-col>

              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <span style="font-size: 18px; line-height: 30px">
                   左图是从微博中抽取的一部分数据构成的网络,总共包括1066个节点，1073条边。
                  微博是指一种基于用户关系信息分享、传播以及获取的通过关注机制分享简短实时信息的广播式的社交媒体、网络平台，允许用户通过Web、Wap、Mail、App、IM、SMS以及用户可以通过PC、
                  手机等多种移动终端接入，以文字、图片、视频等多媒体形式，实现信息的即时分享、传播互动。
                  <br><br>
                </span>
              </el-col>
          </span>

        </div>

      </el-card>
      <el-card shadow="hover">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
<!--          <span style="font-size: 20px; font-weight: bold; line-height: 30px">引导程度选择:-->
<!--              <el-select v-model="YQ_level.variety" placeholder="请选择引导程度" @change="aa2">-->
<!--                <el-option v-for="item in YQ_level"-->
<!--                           :key="item.variety"-->
<!--                           :label="item.variety_value"-->
<!--                           :value="item.id"></el-option>-->
<!--              </el-select>-->
<!--          </span>-->

<!--          <div class="lodash-content">-->
<!--           -->
<!--            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--&lt;!&ndash;              <span style="font-size: 18px; font-weight: bold; line-height: 30px">选择的引导级别为：</span>&ndash;&gt;-->
<!--&lt;!&ndash;                <span v-if ="YQ_level.variety==1" style="font-size: 18px; line-height: 30px">&ndash;&gt;-->
<!--&lt;!&ndash;                  级别一&ndash;&gt;-->
<!--&lt;!&ndash;                </span>&ndash;&gt;-->
<!--&lt;!&ndash;                <span v-else-if="YQ_level.variety==2" style="font-size: 18px; line-height: 30px">&ndash;&gt;-->
<!--&lt;!&ndash;                  级别二&ndash;&gt;-->
<!--&lt;!&ndash;                </span>&ndash;&gt;-->
<!--&lt;!&ndash;                <span v-else-if="YQ_level.variety==3" style="font-size: 18px; line-height: 30px">&ndash;&gt;-->
<!--&lt;!&ndash;                  级别三&ndash;&gt;-->
<!--&lt;!&ndash;                </span>&ndash;&gt;-->
<!--&lt;!&ndash;                <span v-else-if="YQ_level.variety==4" style="font-size: 18px; line-height: 30px">&ndash;&gt;-->
<!--&lt;!&ndash;                  级别四&ndash;&gt;-->
<!--&lt;!&ndash;                </span>&ndash;&gt;-->
<!--&lt;!&ndash;                <span v-else style="font-size: 18px; line-height: 30px">&ndash;&gt;-->

<!--&lt;!&ndash;                </span>&ndash;&gt;-->
<!--            </el-col>-->
<!--          </div>-->

          </el-col>
        </el-row>
      </el-card>

    </el-form>
    <div class="pay-button-group">
      <el-button style="font-size: 18px; font-weight: bold;" @click="handlePrev">上一步</el-button>
      <el-button style="font-size: 18px; font-weight: bold;" type="primary" :loading="loading" @click="handleSubmit">
        下一步
      </el-button>

    </div>
      </el-col>
    </el-row>
  </div>

</template>
<script>
  export default {
    props: {
      infoData: {
        type: Object,
        default: () => {
          return {};
        },
      },
    },
    data() {
      return {

        YQ_data: [
          {
            variety: "事件一",
            variety_value: "佩洛西访台舆情数据集",
            id:1,
          },
          {
            variety: "事件二",
            variety_value: "气球舆情数据集",
            id:2,
          },
        ],
        options: [
          {
          variety: '选项1',
          variety_value: '群体规模预测分析',
          id:1,
          }, 
          {
          variety: '选项2',
          variety_value: '个体行为波动预测分析',
          id:2,

          }, 
          {
          variety: '选项3',
          variety_value: '主客体研判分析',
          id:3,
          }, 
        ],
        showbox: false,
        showbox1:false,
        YQ_level: [
          {
            variety: "等级一",
            variety_value: "等级一",
            id:1,
          },
          {
            variety: "等级二",
            variety_value: "等级二",
            id:2,
          },
          {
            variety: "等级三",
            variety_value: "等级三",
            id:3,
          },

          {
            variety: "等级四",
            variety_value: "等级四",
            id:4,
          },

        ],
        tableData: [{
          date: 'S（真实值）',
          name: '0.3155',
          province: '上海',
          city: '普陀区',
          address: '0.2313',
          zip: 0.1484,
          tag: '0.0001'
        }, {
          date: 'S（预测值）',
          name: '0.1718',
          province: '上海',
          city: '普陀区',
          address: '0.1613',
          zip: 0.1551,
          tag: '0.1515'
        }, {
          date: 'I（真实值）',
          name: '0.1930',
          province: '上海',
          city: '普陀区',
          address: '0.1935',
          zip: 0.1863,
          tag: '0.2339'
        }, {
          date: 'I（预测值）',
          name: '0.0459',
          province: '上海',
          city: '普陀区',
          address: '0.0286',
          zip: 0.0176,
          tag: '0.0107'
          
        },
        {
          date: 'R（真实值）',
          name: '0.4914',
          province: '上海',
          city: '普陀区',
          address: '0.5752',
          zip: 0.6653,
          tag: '0.7660'
        },
        {
          date: 'R（预测值）',
          name: '0.7733',
          province: '上海',
          city: '普陀区',
          address: '0.8011',
          zip: 0.8183,
          tag: '0.8288'
        },
        {
          date: 'I+R预测准确度',
          name: '83.64%',
          province: '上海',
          city: '普陀区',
          address: '92.67%',
          zip: "98.15%",
          tag: '83.83%'
        },
      ],
      tableData1: [{
          date: 'S（真实值）',
          name: '0.3629',
          province: '上海',
          city: '普陀区',
          address: '0.2221',
          zip: 0.1121,
          tag: '0'
        }, {
          date: 'S（预测值）',
          name: '0.2412',
          province: '上海',
          city: '普陀区',
          address: '0.2327',
          zip: 0.2280,
          tag: '0.2253'
        }, {
          date: 'I（真实值）',
          name: '0.1603',
          province: '上海',
          city: '普陀区',
          address: '0.2281',
          zip: 0.1966,
          tag: '0.1793'
        }, {
          date: 'I（预测值）',
          name: '0.0237',
          province: '上海',
          city: '普陀区',
          address: '0.0138',
          zip: 0.0079,
          tag: '0.0045'
          
        },
        {
          date: 'R（真实值）',
          name: '0.4768',
          province: '上海',
          city: '普陀区',
          address: '0.5498',
          zip: 0.6913,
          tag: '0.8201'
        },
        {
          date: 'R（预测值）',
          name: '0.7261',
          province: '上海',
          city: '普陀区',
          address: '0.7444',
          zip: 0.7550,
          tag: '0.7611'
        },
        {
          date: 'I+R预测准确度',
          name: '84.97%',
          province: '上海',
          city: '普陀区',
          address: '97.46%',
          zip: "85.92%",
          tag: '76.61%'
        },
      ],
        form: {
          password: "",
        },
        rules: {
          password: [
            { required: true, message: "请输入支付密码", trigger: "blur" },
          ],
        },
        loading: false,
      };
    },
    methods: {

      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true;
            setTimeout(() => {
              this.$emit("change-step", 3);
              this.loading = false;
            }, 20);
          } else {
            this.loading = false;
          }
        });
      },
      aa1(id, type){
        this.infoData.gatheringAccount=id
        return id;
      },
      aa2(id, type){
        this.infoData.gatheringName=id
        return id;
      },


      handlePrev() {
        this.$emit("change-step", 1);
      },
    },
  };

</script>

<style lang="scss" scoped>
  .pay-button-group {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
  .box{
    width: 100vw;
    height:100vh
  }
</style>
