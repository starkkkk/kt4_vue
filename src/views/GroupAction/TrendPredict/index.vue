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
                <div>
                  <span v-if ="options.variety==2">
                    <h2>关键人物个体选择</h2>
                  <label for="scene">选择人物个体：</label>
                  <el-select id="scene" v-model="selectedScene" @change="displayTable">
                    <el-option value="请选择人物个体">请选择人物个体</el-option>
                    <el-option value=包容万物恒河水>包容万物恒河水</el-option>
                    <el-option value=环球时报>环球时报</el-option>
                    <el-option value=俄罗斯卫星通讯社>俄罗斯卫星通讯社</el-option>
                    <el-option value=阿绿今天有猫了么>阿绿今天有猫了么</el-option>
                    <el-option value=粤港澳小小胖>粤港澳小小胖</el-option>
                    <el-option value=拆台CT>拆台CT</el-option>
                    
                   
                    
                    
                  </el-select>
                  <template v-if="selectedScene === '请选择人物个体'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_" style="width: 100%" border>
                        <el-table-column prop="column1" label="作者昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                        <el-table-column prop="column3" label="源微博id"></el-table-column>
                        <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                        <el-table-column prop="column5" label="内容"></el-table-column>
                        <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                        <el-table-column prop="column7" label="预测情感标签"></el-table-column>
                      </el-table>
                    </el-col>
                  </template>
                  <template v-if="selectedScene === '拆台CT'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDatact" style="width: 100%" border>
                        <el-table-column prop="column1" label="作者昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                        <el-table-column prop="column3" label="源微博id"></el-table-column>
                        <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                        <el-table-column prop="column5" label="内容"></el-table-column>
                        <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                        <!-- <el-table-column prop="column7" label="预测情感标签"></el-table-column> -->
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox1 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox1=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox1">
                          <br>
                        <el-table :data="tableDatact1" style="width: 100%" border>
                          <el-table-column prop="column1" label="作者昵称"></el-table-column>
                          <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                          <el-table-column prop="column3" label="源微博id"></el-table-column>
                          <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                          <el-table-column prop="column5" label="内容"></el-table-column>
                          <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                          <el-table-column prop="column7" label="预测情感标签"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>

                  <template v-if="selectedScene === '粤港澳小小胖'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDatayga" style="width: 100%" border>
                        <el-table-column prop="column1" label="作者昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                        <el-table-column prop="column3" label="源微博id"></el-table-column>
                        <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                        <el-table-column prop="column5" label="内容"></el-table-column>
                        <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                        <!-- <el-table-column prop="column7" label="预测情感标签"></el-table-column> -->
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox2 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox2=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox2">
                          <br>
                        <el-table :data="tableDatayga1" style="width: 100%" border>
                          <el-table-column prop="column1" label="作者昵称"></el-table-column>
                          <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                          <el-table-column prop="column3" label="源微博id"></el-table-column>
                          <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                          <el-table-column prop="column5" label="内容"></el-table-column>
                          <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                          <el-table-column prop="column7" label="预测情感标签"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>

                  <template v-if="selectedScene === '包容万物恒河水'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDatabr" style="width: 100%" border>
                        <el-table-column prop="column1" label="作者昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                        <el-table-column prop="column3" label="源微博id"></el-table-column>
                        <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                        <el-table-column prop="column5" label="内容"></el-table-column>
                        <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                        <!-- <el-table-column prop="column7" label="预测情感标签"></el-table-column> -->
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox3 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox3=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox3">
                          <br>
                        <el-table :data="tableDatabr1" style="width: 100%" border>
                          <el-table-column prop="column1" label="作者昵称"></el-table-column>
                          <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                          <el-table-column prop="column3" label="源微博id"></el-table-column>
                          <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                          <el-table-column prop="column5" label="内容"></el-table-column>
                          <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                          <el-table-column prop="column7" label="预测情感标签"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>

                  <template v-if="selectedScene === '环球时报'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDatahq" style="width: 100%" border>
                        <el-table-column prop="column1" label="作者昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                        <el-table-column prop="column3" label="源微博id"></el-table-column>
                        <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                        <el-table-column prop="column5" label="内容"></el-table-column>
                        <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                        <!-- <el-table-column prop="column7" label="预测情感标签"></el-table-column> -->
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox4 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox4=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox4">
                          <br>
                        <el-table :data="tableDatahq1" style="width: 100%" border>
                          <el-table-column prop="column1" label="作者昵称"></el-table-column>
                          <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                          <el-table-column prop="column3" label="源微博id"></el-table-column>
                          <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                          <el-table-column prop="column5" label="内容"></el-table-column>
                          <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                          <el-table-column prop="column7" label="预测情感标签"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>

                  <template v-if="selectedScene === '俄罗斯卫星通讯社'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDataels" style="width: 100%" border>
                        <el-table-column prop="column1" label="作者昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                        <el-table-column prop="column3" label="源微博id"></el-table-column>
                        <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                        <el-table-column prop="column5" label="内容"></el-table-column>
                        <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                        <!-- <el-table-column prop="column7" label="预测情感标签"></el-table-column> -->
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox5 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox5=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox5">
                          <br>
                        <el-table :data="tableDataels1" style="width: 100%" border>
                          <el-table-column prop="column1" label="作者昵称"></el-table-column>
                          <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                          <el-table-column prop="column3" label="源微博id"></el-table-column>
                          <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                          <el-table-column prop="column5" label="内容"></el-table-column>
                          <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                          <el-table-column prop="column7" label="预测情感标签"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>

                  <template v-if="selectedScene === '阿绿今天有猫了么'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDataal" style="width: 100%" border>
                        <el-table-column prop="column1" label="作者昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                        <el-table-column prop="column3" label="源微博id"></el-table-column>
                        <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                        <el-table-column prop="column5" label="内容"></el-table-column>
                        <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                        <!-- <el-table-column prop="column7" label="预测情感标签"></el-table-column> -->
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox6 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox6=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox6">
                          <br>
                        <el-table :data="tableDataal1" style="width: 100%" border>
                          <el-table-column prop="column1" label="作者昵称"></el-table-column>
                          <!-- <el-table-column prop="column2" label="作者id"></el-table-column>
                          <el-table-column prop="column3" label="源微博id"></el-table-column>
                          <el-table-column prop="column4" label="本微博id"></el-table-column> -->
                          <el-table-column prop="column5" label="内容"></el-table-column>
                          <el-table-column prop="column6" label="实际情感标签"></el-table-column>
                          <el-table-column prop="column7" label="预测情感标签"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>
              
                  </span>
                </div>
                <div>
                  <span v-if ="options.variety==3">
                    <h2>关键事件选择</h2>
                  <label for="scene">选择事件：</label>
                  <el-select id="scene" v-model="selectedScene" @change="displayTable">
                    <el-option value="请选择事件">请选择事件</el-option>
                    <el-option value=外交部回应佩洛西或今晚抵达台湾>外交部回应佩洛西或今晚抵达台湾</el-option>
                    <el-option value=国台办回应蔡英文为佩洛西授勋>国台办回应蔡英文为佩洛西授勋</el-option>
                    <el-option value=国防部回应取消中美两军三项交往活动>国防部回应取消中美两军三项交往活动</el-option>
                    <el-option value=中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神>中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神</el-option>
                    <el-option value=特朗普称佩洛西窜台是在帮中国圆梦>特朗普称佩洛西窜台是在帮中国圆梦</el-option>
                    <el-option value=佩洛西丈夫在港公司或被列入国家制裁>佩洛西丈夫在港公司或被列入国家制裁</el-option>
                    
                   
                    
                    
                  </el-select>
                  <template v-if="selectedScene === '请选择事件'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_" style="width: 50%" border>
                        <el-table-column prop="column1" label="用户昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="clusterid"></el-table-column>
                        <el-table-column prop="column3" label="作者id"></el-table-column> -->
                        <el-table-column prop="column4" label="实际参与情况"></el-table-column>
                        <el-table-column prop="column5" label="预测参与情况"></el-table-column>
                      </el-table>
                    </el-col>
                  </template>
                  <template v-if="selectedScene === '外交部回应佩洛西或今晚抵达台湾'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDataZKT_1" style="width: 100%"  border>
                        <!-- <el-table-column prop="column1" label="clusterid"></el-table-column>-->
                        <el-table-column prop="column2" label="作者昵称" width = 120></el-table-column>
                        <el-table-column prop="column3" label="内容"></el-table-column>
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox1 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox1=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox1">
                          <br>
                        <el-table :data="tableDataZKT_1_wxj" style="width: 50%" border>
                          <el-table-column prop="column1" label="用户昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="clusterid"></el-table-column>
                        <el-table-column prop="column3" label="作者id"></el-table-column> -->
                        <el-table-column prop="column4" label="实际参与情况"></el-table-column>
                        <el-table-column prop="column5" label="预测参与情况"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>

                  <template v-if="selectedScene === '国台办回应蔡英文为佩洛西授勋'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDataZKT_5" style="width: 100%" border>
                        <!-- <el-table-column prop="column1" label="clusterid"></el-table-column>-->
                        <el-table-column prop="column2" label="作者昵称" width=120></el-table-column>
                        <el-table-column prop="column3" label="内容"></el-table-column>
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox2 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox2=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox2">
                          <br>
                        <el-table :data="tableDataZKT_5_wxj" style="width: 50%" border>
                          <el-table-column prop="column1" label="用户昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="clusterid"></el-table-column>
                        <el-table-column prop="column3" label="作者id"></el-table-column> -->
                        <el-table-column prop="column4" label="实际参与情况"></el-table-column>
                        <el-table-column prop="column5" label="预测参与情况"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>

                  <template v-if="selectedScene === '国防部回应取消中美两军三项交往活动'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDataZKT_6" style="width: 100%" border>
                        <!-- <el-table-column prop="column1" label="clusterid"></el-table-column>-->
                        <el-table-column prop="column2" label="作者昵称" width=120></el-table-column>
                        <el-table-column prop="column3" label="内容"></el-table-column>
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox3 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox3=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox3">
                          <br>
                        <el-table :data="tableDataZKT_6_ysx" style="width: 50%" border>
                          <el-table-column prop="column1" label="用户昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="clusterid"></el-table-column>
                        <el-table-column prop="column3" label="作者id"></el-table-column> -->
                        <el-table-column prop="column4" label="实际参与情况"></el-table-column>
                        <el-table-column prop="column5" label="预测参与情况"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>

                  <template v-if="selectedScene === '中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDataZKT_9" style="width: 100%" border>
                        <!-- <el-table-column prop="column1" label="clusterid"></el-table-column>-->
                        <el-table-column prop="column2" label="作者昵称" width=120></el-table-column>
                        <el-table-column prop="column3" label="内容"></el-table-column>
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox4 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox4=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox4">
                          <br>
                        <el-table :data="tableDataZKT_9_ysx" style="width: 50%" border>
                          <el-table-column prop="column1" label="用户昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="clusterid"></el-table-column>
                        <el-table-column prop="column3" label="作者id"></el-table-column> -->
                        <el-table-column prop="column4" label="实际参与情况"></el-table-column>
                        <el-table-column prop="column5" label="预测参与情况"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>

                  <template v-if="selectedScene === '特朗普称佩洛西窜台是在帮中国圆梦'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDataZKT_15" style="width: 100%" border>
                        <!-- <el-table-column prop="column1" label="clusterid"></el-table-column>-->
                        <el-table-column prop="column2" label="作者昵称" width=120></el-table-column>
                        <el-table-column prop="column3" label="内容"></el-table-column>
                      </el-table>
                      <br><br>
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox5 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox5=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox5">
                          <br>
                        <el-table :data="tableDataZKT_15_agq" style="width: 50%" border>
                          <el-table-column prop="column1" label="用户昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="clusterid"></el-table-column>
                        <el-table-column prop="column3" label="作者id"></el-table-column> -->
                        <el-table-column prop="column4" label="实际参与情况"></el-table-column>
                        <el-table-column prop="column5" label="预测参与情况"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>

                  <template v-if="selectedScene === '佩洛西丈夫在港公司或被列入国家制裁'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableDataZKT_18" style="width: 100%" border>
                        <!-- <el-table-column prop="column1" label="clusterid"></el-table-column>-->
                        <el-table-column prop="column2" label="作者昵称" width=120></el-table-column>
                        <el-table-column prop="column3" label="内容"></el-table-column>
                      </el-table>
                      <br><br>
                      
                      
                    </el-col>
                    <br><br><br>
                    <div @click="showbox6 = false">
                        <br>
                        <div style="text-align: center;">
                          <br>
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox6=true">显示预测结果</el-button>
                        </div>
                        <div v-show="showbox6">
                          <br>
                        <el-table :data="tableDataZKT_18_wxj" style="width: 50%" border>
                          <el-table-column prop="column1" label="用户昵称"></el-table-column>
                        <!-- <el-table-column prop="column2" label="clusterid"></el-table-column>
                        <el-table-column prop="column3" label="作者id"></el-table-column> -->
                        <el-table-column prop="column4" label="实际参与情况"></el-table-column>
                        <el-table-column prop="column5" label="预测参与情况"></el-table-column>
                        </el-table>
                        </div>
                      </div>

                  </template>
                  </span>
                </div>

              </el-col>






            </span>
  

          <!-- <span v-else-if ="YQ_data.variety==2">
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
            </el-col> -->
<!--            <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">-->
<!--                <span>-->
<!--                  <br><br>-->
<!--                </span>-->
<!--              </el-col>-->

              <!-- <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
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
          </span> -->

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
          variety_value: '主客体关系研判分析',
          id:3,

          }, 
         
        ],
        showbox: false,
        showbox1:false,
        showbox2:false,
        showbox3:false,
        showbox4:false,
        showbox5:false,
        showbox6:false,
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
        
      selectedScene:'请选择事件',
      tableDatact1: [
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798146679144482",
            column4: "4798146964098959",
            column5: "草，拐进来了[傻眼] http://t.cn/A6akxely",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798146679144482",
            column4: "4798146964099080",
            column5: "草，拐进来了[傻眼] http://t.cn/A6akxely",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798146679144482",
            column4: "4798147530596975",
            column5: "9150ft了[傻眼] http://t.cn/A6akxkEt",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798146679144482",
            column4: "4798147530597062",
            column5: "9150ft了[傻眼] http://t.cn/A6akxkEt",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798146679144482",
            column4: "4798149144610210",
            column5: "3625ft，即将降落[傻眼] http://t.cn/A6akJzCI",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798146679144482",
            column4: "4798149144610299",
            column5: "3625ft，即将降落[傻眼] http://t.cn/A6akJzCI",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4821583175093106",
            column4: "4821583175093106",
            column5: "前海天员工曾发表关于佩洛西窜台的不当言论。\n\n如果你是因为这个原因抵制海天，我举双手支持。\n\n因为，这是底线问题，关乎立场。\n\n但你要是因为海天酱油里有添加剂而抵制海天。\n\n不好意思，这是反智问题，一旦扩大化，收到波及的可能是多个行业。\n\n一句话，我反对的从来都是反智，能明白这个道理吗？\n\n[黑线][黑线][黑线]\n\n#海天味业参与起草酱油行业现行标准#",
            column6: "负面",
            column7: "中性"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4826607744979491",
            column4: "4826631804290295",
            column5: "转发微博",
            column6: "中性",
            column7: "中性"
        },
    ],
      tableDatahq: [
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4799143674121004",
            column4: "4799143674121004",
            column5: "【#外交部宣布制裁佩洛西#】美国国会众议长佩洛西不顾中方严重关切和坚决反对执意窜台，严重干涉中国内政，严重损害中国主权和领土完整，严重践踏一个中国原则，严重威胁台海和平稳定。针对佩洛西恶劣挑衅行径，中方决定，根据中华人民共和国有关法律，对佩洛西及其直系亲属采取制裁措施。 ​​​#中方制裁佩洛西#",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4800131544648628",
            column4: "4800131544648628",
            column5: "【#吴谦回应取消中美两军三项交往活动# #中方反制措施是对美台挑衅必要警示#】8月8日，国防部新闻发言人吴谦就中方取消中美两军三项交往活动及美媒有关炒作答记者问。全文如下：\n\n问：近日，中方针对佩洛西窜台宣布八项反制措施，其中包括取消中美军事交往三项措施。有美国媒体报道，美军高层近日曾多次给中国军队领导打电话，但被中方拒绝。请问对此有何评论？\n\n答：当前台海形势紧张局面，完全是美方主动挑衅、一手制造的，美方必须为此承担全部责任和严重后果。中方曾就中美两国两军关系、台湾问题等表明严正立场，特别是针对美国会众议长佩洛西窜访多次严正交涉，美方却说一套、做一套，纵容支持佩窜访，蓄意制造台海紧张局势。\n\n针对美方恶劣挑衅行径，中方宣布了八项反制措施，其中包括取消安排中美两军战区领导通话、取消中美国防部工作会晤、取消中美海上军事安全磋商机制会议。中方有关反制措施是对美台挑衅的必要警示，对国家主权和安全的正当捍卫，完全合理、恰当适度。\n\n底线不容突破，沟通需要诚意。美方一面制造危机，一面又声称要管控危机，为其错误言行和挑衅举动找托词、打掩护，甚至对外炒作、混淆视听、甩锅推责，我们坚决反对。我们敦促美方切实尊重中方的核心利益和重大关切，放弃“以台制华”的幻想，不要在错误的道路上越走越远。（央视网）",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4800945488397175",
            column4: "4800945488397175",
            column5: "【外交部：#美方挑衅一次中方必定坚决斗争一次#】#外交部回应佩洛西最新言论#汪文斌在今日外交部记者会上表示：中方4个月前就已通过各种渠道、各个层级反复向美方表明坚决反对佩洛西窜台的严正立场，但美方对中方的劝阻和警告置若罔闻，一意孤行。美方挑衅滋事在前，中方正当反制在后，合理、合法、必要、适度。对于美方侵犯中国主权、干涉中国内政的严重挑衅行径，只要美方做一次，中方必定坚决斗争一次，决不允许中国主权和领土完整受到肆意践踏和破坏。http://t.cn/A6SwUpze",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4801060159883203",
            column4: "4801060159883203",
            column5: "【#台媒称佩洛西窜台留下一地鸡毛#】#台湾网友吐槽台当局赢了嘴炮苦了人民#美国国会众议长佩洛西窜访台湾，严重挑衅了一个中国原则，向“台独”势力传递了错误的信号，致使台海局势骤然升温。台湾《联合报》的社论指出，佩洛西利用“亚洲行”寻找自己最后的秀场，民进党当局不仅给她提供了最佳的表演舞台，还安排了“各种剧目”供她“演出”，结果就是让台湾人民受伤害。#佩洛西称仍坚持一个中国政策# #佩洛西称窜台是遵循拜登政策# http://t.cn/A6SwZsxj @央视网",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4801313784997646",
            column4: "4801313784997646",
            column5: "【外交部：#美方不要指望中方拿核心利益做交易#】据报道，美国商务部长雷蒙多日前在接受采访时表示，拜登总统正在审慎考虑“对华关税”问题。她表示，佩洛西访台导致的局势紧张让“减免部分中国输美商品关税”一事变得“尤其复杂”。对此，在今天（11日）举行的中国外交部例行记者会上，发言人汪文斌表示，贸易战没有赢家，尽早取消关税有利于美国，有利于中国，有利于世界。汪文斌指出，当前台海局势紧张，是非曲直一目了然。美方应立即纠正错误，不要指望中方拿自己的核心利益做交易，而应该老老实实回到一个中国原则和中美三个联合公报上来。（央视新闻客户端）",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4801958571147596",
            column4: "4801958571147596",
            column5: "【韩媒：韩国要从佩洛西访台中吸取教训】《韩国经济》8月12日文章，原题：佩洛西访台及美国、中国大陆、中国台湾的利害得失  中国有句成语叫作“杀鸡儆猴”。如果说“萨德”危机时韩国是那只“鸡”的话，那么佩洛西访台中那只“鸡”就是台湾地区。佩洛西离台后，中国大陆立即宣布对进口台湾农产品和出口天然砂实施管制。中国大陆的导弹飞过台岛上空，中国大陆的军舰进入台湾地区沿海，美国对此袖手旁观。归根结底，安全是要靠自己而不是祈求来获得。\n\n韩国要从佩洛西访台中吸取教训。首先，有必要通过佩洛西此次亚洲之行，看到台海和平并非仅仅是两岸之间的问题，任何时候都可能让韩国卷入。第二，中国演练了对台湾半导体工厂的轰炸。台半导体工厂的停摆将使美国半导体供应链崩溃，韩国也会受到影响。\n\n第三，当前韩美和韩中关系都处于微妙时刻，重要的不是自己说了什么，而是对方真正听到了什么。如果想改变以往“安保靠美国，经济靠中国”的局面，韩国领导人和政治人物就应该深刻思考，哪些言论真正有利于韩国国家利益。\n\n第四，与强敌对抗，弱国必以谋略取胜。据说韩国新政府正在寻求转换“安保靠美国，经济靠中国”的战略，但光是喊了几句口号并没有实际政策出台。从经济方面看，一个不争的事实就是中国越来越强而美国越来越弱。如果没有具体措施和战略，那种经济方面与中国“脱钩”的言论不符合韩国实际利益，也会不必要地刺激中国。（作者全炳瑞，张静译）",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4803484401008986",
            column4: "4803484401008986",
            column5: "#中方对普京总统的表态给予高度评价#【普京批佩洛西窜台是精心策划的挑衅，外交部：高度评价普京总统表态】8月17日外交部发言人汪文斌主持例行记者会。有记者提问称，俄罗斯总统普京出席第十届莫斯科国际安全会议期间，批评佩洛西访台是一次“精心策划的挑衅”，是美国蓄意破坏地区和世界稳定的图谋。普京还说美国试图维系世界霸权地位，西方将其国内的矛盾和问题归咎于俄罗斯和中国，来转移国内民众的注意力，请问中方对此有何评论？\n\n汪文斌表示，中方对普京总统的表态给予高度评价。美国会众议长佩洛西窜台以来，有170多个国家发出正义的声音，重申坚持一个中国原则，支持中国维护国家主权和领土完整。你提到的普京总统的最新表态，是中俄高水平战略协作的体现，也是两国在涉及彼此核心利益问题上一贯相互坚定支持的体现。中方愿继续同国际社会一道，共同捍卫《联合国宪章》宗旨和原则，共同维护地区及世界的和平稳定。（环球时报-环球网报道 记者张卉）",
            column6: "中性",
            column7: "/"
        },
    ],
      tableDatabr: [
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798137778574246",
            column4: "4798137778574246",
            column5: "🔺🇺🇸SPAR19 飞达巴士海峡。\n#台媒称警方证实佩洛西班机22时降落# #外交部回应佩洛西或今晚抵达台湾# ​​​​",
            column6: "中性",
            column7: "/"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798137778574246",
            column4: "4798138646272121",
            column5: "在我被服务器踢出去的最后一秒，我截下了这张截图，F24的航班信息已经变成了“目标TSA”。 TSA，台北松山机场。",
            column6: "中性",
            column7: "/"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798137778574246",
            column4: "4798138646272175",
            column5: "（转发）在我被服务器踢出去的最后一秒，我截下了这张截图，F24的航班信息已经变成了“目标TSA”。 TSA，台北松山机场。",
            column6: "中性",
            column7: "/"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798139264146197",
            column4: "4798139264146197",
            column5: "🔺🇺🇸SPAR19 从台湾岛东南向一侧接近台湾岛。\n🔺预计还将飞行40分钟。\n#台媒称警方证实佩洛西班机22时降落# #外交部回应佩洛西或今晚抵达台湾# ​​​​",
            column6: "中性",
            column7: "/"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798140861649839",
            column4: "4798140861649839",
            column5: "🔺🇺🇸22:06:23 SPAR19在台岛东南侧进入ADS-B追踪，高度35000ft，航速452ft。\n🔺想不到吧，我还有软件。\n#台媒称警方证实佩洛西班机22时降落# #外交部回应佩洛西或今晚抵达台湾# ​​​​",
            column6: "中性",
            column7: "/"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798141285269710",
            column4: "4798141285269710",
            column5: "🔺SPAR19正在继续接近台湾本岛。\n🔺台湾海峡上空几乎没有看到民用航班。\n#台媒称警方证实佩洛西班机22时降落# #外交部回应佩洛西或今晚抵达台湾# ​​​​",
            column6: "中性",
            column7: "/"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798142773470645",
            column4: "4798142773470645",
            column5: "🔺SPAR19 还在飞向台北松山，距离降落还剩30分钟。\n🔺目前台湾海峡上空已经没有民用航班。\n🔺刷蔡某坤基本资料的用户已经占领了台湾媒体在油管上的各大直播间评论区。\n🔺微博支棱点行不行，我好卡啊。\n#佩洛西专机信息显示目的地台北# #台媒称警方证实佩洛西班机22时降落# ​",
            column6: "负面",
            column7: "/"
        },
    ],
      tableDatabr1: [
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798157588794405",
            column4: "4798157588794405",
            column5: "🔺正在台北松山机场等待拍摄航班降落的世界各大媒体记者。\n#台媒称警方证实佩洛西班机22时降落# #外交部回应佩洛西或今晚抵达台湾# ​​​​  http://t.cn/A6akJWfj ​",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798160235135626",
            column4: "4798160235135626",
            column5: "🔺车队离开台北松山机场。\n#台媒称警方证实佩洛西班机22时降落# #佩洛西专机信息显示目的地台北# ​",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798193097770071",
            column4: "4798193097770071",
            column5: "🔺🇷🇺有读者问俄罗斯人怎么看待我们这件事。\n🔺有个视频我之前一直没发，可能不是毛子做的（也许是美国巨魔做的meme），但是被毛子下午开始发在了他们比较大的几个频道里，标题叫“中国人的酒吧”。\n🔺现在你们再想想呢？这应该代表了大部分俄罗斯人怎么看待我们这边事。\n🔺还有读者问克宫之主会不会高兴？\n🔺我相信他是一个成熟而优秀的大国政治家，不会做出这种误判的。\n#外交部回应佩洛西窜访中国台湾地区##台北民众高喊佩洛西滚回去# http://t.cn/A6ako7CE",
            column6: "负面",
            column7: "中性"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798201377587259",
            column4: "4798201377587259",
            column5: "🔺有始有终，这个视频我既然看到就还是发一下，也算是谁完整记录本次危机全程。\n🔺也许以后甚至更久以后再回顾，会有不一样的感受。\n🔺更新频率和对评论区的管理也会一如既往。\n#外交部回应佩洛西窜访中国台湾地区##解放军在台湾岛周边军事演训和实弹射击# http://t.cn/A6akoktV ​",
            column6: "正面",
            column7: "负面"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798204187247037",
            column4: "4798204187247037",
            column5: "🔺🇺🇸佩洛西更新了推文：\n💬“Our visit reiterates that America stands with Taiwan: a robust, vibrant democracy and our important partner in the Indo-Pacific.”\n💬“我们的访问重申，美国与台湾站在一起：一个强大的、充满活力的民主国家和我们在印太的重要伙伴。”\n🔺这里是一个非常险恶的双关，既可以认为“强大的、充满活力的民主国家”对应“美国”，“印太伙伴”对应“台湾”，也可以解读为佩洛西夸赞“台湾是国家”。\n🔺是的，这还是切香肠。\n#外交部回应佩洛西窜访中国台湾地区##解放军在台湾岛周边军事演训和实弹射击#",
            column6: "负面（原正面）",
            column7: "负面"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798204187247037",
            column4: "4798205239492956",
            column5: "democracy 是一个非常有水平且极恶毒的用法。",
            column6: "中性",
            column7: "负面"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798204187247037",
            column4: "4798205239492994",
            column5: "（转发）democracy 是一个非常有水平且极恶毒的用法。",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798204187247037",
            column4: "4798206090937391",
            column5: "请你们的评论克制一点。今晚每一条精选都不是我开的。在这样我连客观记录都发不了啦",
            column6: "负面",
            column7: "中性"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798204187247037",
            column4: "4798206090937709",
            column5: "（转发）请你们的评论克制一点。今晚每一条精选都不是我开的。在这样我连客观记录都发不了啦",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798204187247037",
            column4: "4798207718065820",
            column5: "封锁台岛六向的围岛演习，如果这叫失败，过去的二十年对台政策是什么？//@-悲剧-:放弃幻想，承认失败。",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798223446706264",
            column4: "4798223446706264",
            column5: "🔺估计是刚才那条的底图有问题。不让画“基线”。\n🔺看了下佩洛西的行程，我有种预感，她白天还要搞大活儿、烂活儿。\n🔺而我们的预案可能也才刚开始。\n🔺睡了，白天起来看你球💊。\n🔺我甚至有种感觉，跟未来几天的烈度比，大家的情绪上的太早太浅了。[吃瓜]\n🔺真晚安，不睡是狗。\n#东部战区将在台岛周边开展一系列联合军事行动##外交部回应佩洛西窜访中国台湾地区#",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798223446706264",
            column4: "4798224646539228",
            column5: "前段时间笑人家gdp不如广东的时候你们可不是这么说的，光见吃肉不见挨打，毛子举国在地狱里挣扎奋斗了二十年，你们连一晚上都忍不了。//@鹅鹅鹅城太守:还是睡不着，说两句梦话：一直说菜鹅菜鹅，人家菜鹅一个讲话就能越过边境线，什么“即将被侵略”的证据理由都是后找补的。",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798290082401663",
            column4: "4798290082401663",
            column5: "🔺继续更新我早上起来上厕所看到的一些主要外媒报道，看一下外媒在他们的角度如何看待昨晚的问题。由于时间关系，我就只翻标题和摘要了。\n🔺《华尔街日报》：“载有众议院议长南希佩洛西飞往台湾的美国空军飞机绕道了三个小时，以避免在北京已建立军事存在的南海发生直接的军事冲突。”\n#解放军在台湾岛周边军事演训和实弹射击##外交部回应佩洛西窜访中国台湾地区#",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798298194709534",
            column4: "4798298194709534",
            column5: "🔺🇷🇺整理一波毛子官媒今天的新闻：\n🔺塔斯社：“据 Flightradar 报道，来自世界各地的大约 292 万互联网用户在不同的网站上跟踪了美国众议院议长南希·佩洛西 (Nancy Pelosi) 的飞机飞往台湾。大约有70.8万人观看了飞机降落在台北机场。这两个数字都是该服务历史上的绝对记录。”\n🔺我昨天晚上退费失败了……降级到basic显示超时，白天继续退，太拉了。\n#东部战区将在台岛周边开展军事行动##外交部回应佩洛西窜访中国台湾地区#",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "包容万物恒河水",
            column2: "1671109627",
            column3: "4798300660697524",
            column4: "4798300660697524",
            column5: "🔺🇷🇺塔斯社：“中国商务部停止对台湾天然砂出口。”\n🔺重点是下面的表情符号，代表了普通俄罗斯人怎么看待这些新闻。\n🔺这里我再多介绍一下天然砂禁令的背景。天然砂是建筑业中最重要的基础原料之一，尤其是混凝土的重要骨料。台湾由于河川短小，大部分天然砂依靠进口，从大陆进口的天然砂台湾进口量超三分之一，尤其是优质天然砂，大部分从大陆进口。\n🔺2006年12月，商务部和海关总署发布了禁止天然砂出口的决定。这个禁令发布以来，台湾岛内天然砂价格飞涨，对台湾的建筑业造成巨大冲击，基于台湾的具体情况，同意解除对台湾输出河川砂料的禁令，2008年3月恢复对台砂石出口。\n#东部战区将在台岛周边开展军事行动##外交部回应佩洛西窜访中国台湾地区#",
            column6: "正面",
            column7: "负面"
        },
    ],
      tableDatahq1: [
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4803521612878129",
            column4: "4803521612878129",
            column5: "【#外交部回应美称将在台海进行海空通行#】#中方警告美方不要制造更大危机#8月17日，外交部例行记者会。有记者提问，美国白宫国安会印太事务协调员坎贝尔在电话吹风会上指责中方对佩洛西访台反应过度；称美将根据长期以来的政策予台支持，包括在台湾海峡进行标准化海空通行行动。中方对此有何评论？\n\n汪文斌说，美国高官的有关表态，完全是颠倒黑白、混淆是非，充分暴露了美方的强词夺理、强盗逻辑和强权做派。这次事件是美方一手策划和挑起的，前因后果一清二楚，是非曲直一目了然。破坏台海和平稳定的是美方，不是中方。我们严正警告美方，不要轻举妄动，不要制造更大的危机，玩火者绝对没有好下场，犯我中华者必将受到惩处。（人民日报）",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4804220149304400",
            column4: "4804220149304400",
            column5: "#中方奉劝美方不要误判#【外交部：#中方捍卫国家主权和领土完整决心坚定不移#】在今日外交部例行记者会上，有记者提问，近日美国务院亚太事务助卿康达称，中国对佩洛西访台反应过度，使用了胁迫和挑衅行为，增加对台压力，美国将负责任和坚决地采取行动。中方对此有何评论?\n\n外交部发言人汪文斌：佩洛西众议长窜访中国台湾地区的事实经纬清清楚楚，是非曲直一目了然。是美方违背对“一个中国”的承诺，损害中国主权和领土完整，而不是中方违背承诺，损害美国主权和领土完整。是美国领导人跑到台湾，支持“台独”分裂活动，而不是中方跑到美国，支持阿拉斯加“独立”。\n\n中方对美方挑衅作出坚决回应，合理合法，天经地义，得到国际社会广泛理解和支持。美方要想解决问题，出路只有一条，就是回到中美三个联合公报和一个中国原则上来，而不是推卸责任、倒打一耙，更不应轻举妄动，试图制造更大的危机。中方捍卫国家主权和领土完整的决心坚定不移，奉劝美方不要误判。（人民日报记者韩晓明）",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4826613428521685",
            column4: "4826613428521685",
            column5: "【#外交部称绝不接受教师爷的颐指气使#】二十大第四场记者招待会上，外交部党委委员、副部长马朝旭表示，我们有力回击佩洛西窜台等倒行逆施，坚决反对任何台独行径，坚决遏制外国势力干涉，进一步巩固“一个中国”的国际共识；我们坚定不移贯彻“一国两制”方针，助力香港国安法生效实施，#精准反制美西方的无理制裁#；我们以事实真相戳穿谎言，挫败一些势力“以疆制华”的政治图谋；我们稳步推进南海行为准则的磋商，维护南海局势总体稳定；我们坚持走中国人权发展道路，绝不接受任何“教师爷”的颐指气使，反对把人权问题政治化。详戳↓↓#国家主权安全发展利益得到有力维护# http://t.cn/A6o6xToH",
            column6: "中性（原正面）",
            column7: "负面"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4828970577562170",
            column4: "4828970577562170",
            column5: "【#环球时报社评#：美国应对气变行动，应跟上克里的姿态】美国总统气候问题特使克里近日向中国喊话，敦促中国重启与美国的气候变化商谈，称“需要中国的配合”。自中国方面回击佩洛西窜台等倒行逆施行为，宣布暂停中美气候变化商谈以来，克里已经多次在国际上释放希望与中方重启商谈的意向。相比之前，这一次克里的表态语气软化了不少，他肯定了中国在减碳和能源转型方面的成就，也透露出希望与中国合作的愿望。应该说，克里提到的这些部分相对是实事求是的。\n\n但是，包括最新表态在内，克里所有向中方释放的重谈“气球”，全“有意无意”绕开了为什么中方要暂停商谈这个根本问题。中国一贯积极参与应对气候变化的全球治理，当然也包括与美国的合作，是美方自己把两国合作的氛围搞坏了。即便如此，中方也只是“暂停”，不是“取消”，而重启的钥匙就在美国人自己手里。中美两国的任何合作，都不可能脱离中美关系的大环境。美方应该认真反思并纠正自身的错误行为，这是重启合作的基本条件，也是对因果规律的起码尊重。 http://t.cn/A6oCM2Zp",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4853603444201047",
            column4: "4853603444201047",
            column5: "【#环球时报社评#：2023年中美关系，美方也应提供稳定预期】随着2023年的到来，作为当今世界最重要双边关系之一的中美关系，能否在经历了过去一年的跌宕之后企稳，备受世界关注。新年伊始，中国外交部长秦刚大使在美国与美国务卿布林肯通电话，表示期待与布继续保持密切工作关系，推动中美关系改善发展。自两国元首去年11月巴厘岛会晤以来，双方在多个领域、各个层级的对话和接触在增多，这让不少观察人士对2023年的中美关系回温表达了谨慎乐观。​\n\n在过去的这一年里，中美关系可以说一度走到了危险的边缘。在台湾问题上，华盛顿在中方的底线附近进行疯狂的“极限试探”，尤其是时任众议院议长佩洛西窜台，严重冲击了中美关系的政治基础，让本已脆弱的两国互信雪上加霜。此外，华盛顿将中国视为“头号战略竞争对手”，在经贸领域不断加码对华制裁，在高科技产业链上大搞“脱钩”政策等，这些做法不仅冲击了中美双边关系，也危及世界的和平与稳定。 http://t.cn/A6KDMzxd",
            column6: "中性",
            column7: "负面"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4887451899791684",
            column4: "4887451899791684",
            column5: "【#环球时报社评#： 蔡英文窜美，“台独”穷途的又一路标】不顾中方的强烈反对和警告，美国国会众议长麦卡锡当地时间4月5日在洛杉矶与打着“过境”幌子窜美的中国台湾地区领导人蔡英文会面，这是在麦卡锡前任佩洛西去年8月窜台之后，美方又一起严重违反一个中国原则和损害中国主权和领土完整、破坏台海和平稳定的挑衅。中方的反击必将是坚决而强有力的，决不会让挑衅者好受。也让国际社会好好看看，究竟是谁在破坏台海的和平与稳定？谁才是危机动荡的制造方？\\n\\n为掩人耳目，美方一直声称蔡英文“过境”是私人性质的，也没有安排官员与其会面。那么现在麦卡锡见蔡英文是怎么回事？麦卡锡不仅有官方身份，还是美国政府的第三号人物，他与蔡的会面，彻底暴露了蔡此行的真正目的和性质，也让华盛顿自打自脸，更是严重的踩踏红线的行为。美方违背了仅与台湾保持非官方关系的政治承诺，如果这就是蔡英文和民进党当局千方百计谋求的“外交突破”，那么接下来，他们将一定会品尝到这种“突破”所带来的各种苦果。\\n\\n现在回过头看，去年8月中方对佩洛西窜台的一系列强力反制措施，已取得显著成效。解放军“围岛”实弹演习，以及东部战区在台海的诸军兵种联合战备警巡和实战化演练的常态化，都表明我们牢牢把握两岸关系的主导权和主动权。当时美国舆论大力渲染中国“反应过度”，难道他们就不想想中国不是早就把话说在了前面吗？挑衅中国核心利益中的核心，还能指望中国无动于衷吗？\\n\\n勿谓言之不预也，这句话的分量美国人要体会多少遍才能长记性。美台一些舆论将此次见面与佩洛西窜台对比，要么称其“政治复杂性没那么高”，要么强行说“后果没那么严重”，这都不过是掩耳盗铃、自欺欺人。中国大陆的反制，不会顺着他们的小心思，更不可能按照他们的剧本来。\\n\\n麦卡锡和蔡英文，一个是费尽周折才获得众议长位置的华盛顿“污点政客”；一个是不顾岛内民生一味“倚美谋独”的中华民族的不肖子孙，两人都有着做一场政治大秀的动机，可谓一拍即合。麦卡锡刚上台，想通过这种最廉价也是最有害的方式，来展现自己的存在感；蔡英文要下台，想通过向洋大人“卖台求荣”这种最无耻最可恨的方式，来为自己的政治生涯“贴金”。两人的丑恶姿态，都将被历史一一如实登记在册。\\n\\n美方最近频繁释放出希望与中方保持高层交流的信号，麦卡锡见蔡英文，只会让中美的战略互疑雪上加霜，这不是是否“激怒”中国的问题，事关国家主权和领土完整，事关中华民族的尊严，是美方必须知其轻重的大是大非。\\n\\n从蔡英文在岛内临出发，到“过境”窜美这一路，都有不少岛内民众或海外侨胞自发进行抗议。但凡有良知、有自尊的中华儿女，都会对蔡英文“媚美卖台”、破坏两岸关系的行为义愤填膺，都会对纵容和支持“台独”分裂分子的外国政客深感不齿。上台7年，民进党当局已经丢掉9个所谓“邦交国”，蔡英文每一次“过境”窜美前后几乎都有“友邦”从名单中消失。这就是历史大势。而佩洛西、麦卡锡，都将是“台独”势力一步步走向穷途末路的醒目路标。",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4887675238355315",
            column4: "4887675238355315",
            column5: "【#环球时报社评# ：我们的反制一定会让挑衅者“得”不偿失】打着“过境”幌子窜美的中国台湾地区领导人蔡英文，当地时间5日在洛杉矶与美国会众议长麦卡锡在一片抗议声中进行了提前预告的“会面”。尽管蔡麦二人自我吹嘘“美台纽带比以往任何时候更强劲”“台湾没有被孤立”，但明眼人都看得出来，这话没什么分量，尤其是对于蔡英文而言，恐怕除了自我打气并没有什么别的效果。有岛内网络民调显示将近七成台湾民众认为蔡英文此行对台美关系没有帮助，无疑也是一个很直白的回应了。\n\n与蔡英文所期待的恰恰相反，更多的人在关注蔡这一推动台美勾连、“倚美谋独”的挑衅行径又将给台湾招致怎样的风险。这次见面还向世人具体展示了“倚美谋独”的“倚”字是怎么写的，背叛国家和民族的人，在像麦卡锡这样的华盛顿政客面前是不可能有尊严的，没有骨头就只能“倚”别人。显而易见，麦卡锡们让其“倚”是临时性的，更是别有用心的，最终是靠不住的。麦卡锡当然是想通过挑衅别的国家制造冲突风险来实现“政治充值”，但如果超出美国能够承担的风险范围，更可能的结果将是不断贬值，直至破产。到那时，弃蔡如敝履，是唯一选项。\n\n坦白地讲，鬼鬼祟祟的蔡英文这一趟挺憋屈的。她本想通过此次窜美为自己捞取一些所谓的政治资本、帮助民进党拉抬一下在岛内低迷的选情。可悲的是，在纽约的诸多活动被“冷处理”，被美方要求低调和遮遮掩掩的蔡英文不仅充分暴露了自己“倚美谋独”“媚美卖台”的政治本性，还亲身例证了沦为美国打“台湾牌”棋子的囧境。与麦卡锡不到两小时的所谓“风光”会面，则是将她自己钉牢在了历史耻辱柱上。\n\n众所周知，求避战求和平是岛内的主流民意，蔡英文配合美国政治议程的挑衅带来的只能是又一次的兵凶战危。在美国眼中，台湾本质上只是一枚用来试图阻遏中国发展的棋子。不管美国政客说出多少漂亮话，他们更在乎的永远是利益。所谓利益，就会有各种基于自身的算计和比较，而被牺牲的自然是台湾民众的民生福祉和台湾的前途命运。在华盛顿的棋盘中求避战求和平，无异于痴人说梦。这也是为什么蔡英文此趟窜美之旅在岛内被冷淡、被唾弃的原因。\n\n与此相反，几乎与蔡英文“窜美”同一时期的马英九“登陆”，则受到了完全不同的关注和评价，连不少美西方媒体也关注到两者行程的强烈对比。当蔡英文如过街老鼠，在“过境”途中一路鬼鬼祟祟、低三下四“求见”洋大人的时候，马英九这个“湘潭伢子回来了”，受到大陆同胞热切的欢迎。与蔡英文在美国经历的忐忑不安、相互算计相比，马英九在大陆感受到的是“两岸一家”的亲切和温暖。蔡英文的这次“过境”窜美，谋划的是借助外人之手切断两岸的血脉相连；马英九的这次“寻根之旅”，顾名思义，就是用行动向全体台湾民众表明，台湾的根在大陆，两岸同胞都是中国人。蔡是不肖子孙，马是归乡游子；一个走的是绝路，一个行的是大道。人心向背、历史大势，都在这些对比中显现出来。\n\n麦卡锡和蔡英文会面，也再次提醒我们，在祖国统一、民族复兴的伟大征程中，内有分裂分子伺机而动，外有干涉势力见缝插针，这就是为什么我们以最大诚意尽最大努力争取和平统一前景的同时，决不承诺放弃使用武力，保留采取一切必要措施的选项的根本原因。美台勾连搞的每次所谓的“突破”，我们必定会以坚决的反击让其“得”不偿失。就像去年反制佩洛西窜台一样不是一次性的，它将以我们决定的方式和节奏展开，反击的结果将确保大陆对台海局势的主导权与主动权进一步巩固和加强。",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "环球时报",
            column2: "1974576991",
            column3: "4887874685903025",
            column4: "4887874685903025",
            column5: "【大陆制裁措施公布！专家：萧美琴成首个被两次点名且被加码制裁的“台独”顽固分子】7日，中共中央台办、国台办先后宣布，对“台独”顽固分子萧美琴实施制裁，对宣扬“台独”的台湾“远景基金会”和“亚洲自由民主联盟”予以惩戒。\n\n近期，中国台湾地区领导人蔡英文以“过境”为名窜美并与美众议长麦卡锡见面，推动台美勾连，企图“倚美谋独”。7日接受《环球时报》记者采访的台湾问题专家认为，中共中央台办、国台办在这一时间点对“台独”顽固分子和宣扬“台独”组织进行制裁和惩戒，清晰、有力地表明了在台湾问题上寸步不让的态度以及坚决反对“台独”、反对美台勾结的立场。对于在美台之间牵线搭桥、为拓展台所谓“国际空间”卖力的个人和组织，大陆方面绝不会纵容姑息。\n\n中共中央台办发言人7日表示，“台独”顽固分子萧美琴挟洋自重，“倚美谋独”，蓄意挑动两岸对立对抗，肆意破坏台海和平稳定，进一步暴露其冥顽不化的谋“独”本性。大陆方面决定对萧美琴实施进一步制裁，严禁萧及家属进入大陆和香港、澳门特别行政区，禁止其金主和关联企业与大陆组织、个人合作，并采取其它一切必要的惩戒措施，依法终身追责。\n\n值得注意的是，这是萧美琴第二次受到大陆制裁。去年8月，美国国会时任众议长南希·佩洛西窜访台湾后，中共中央台办曾宣布决定将萧美琴等人列入“台独”顽固分子清单，并对他们采取以下惩戒措施：禁止其本人及家属进入大陆和香港、澳门特别行政区，限制其关联机构与大陆有关组织、个人进行合作，绝不允许其关联企业和金主在大陆谋利，以及采取其它必要的惩戒措施，依法终身追责。\n\n 厦门大学台湾研究院讲座教授、全国台湾研究会理事郑剑7日向《环球时报》记者分析，相比于去年同时宣布将7人列入“台独”顽固分子并实施制裁，此次中共中央台办仅点名萧美琴一人，这让她成为首个被两次点名且被加码制裁的“台独”顽固分子。\n\n上海外国语大学学者、上海市台湾研究会理事文少彪7日对《环球时报》记者表示，萧美琴作为民进党当局“驻美代表”，是推动美台勾连的关键人物，在协调蔡英文近期“过境”窜美行程等事件中发挥了重要作用。另一名台湾问题学者则认为，萧美琴在去年被列入“台独”顽固分子清单、受到制裁后毫无悔改之意，在“倚美谋独”、出卖民族利益上变本加厉，被第二次惩戒可谓是罪有应得。\n\n1971年出生在日本的萧美琴在2020年6月被民进党当局任命为“驻美代表”。前往美国后，萧美琴不仅频繁散布谋“独”论，卖力策动美方政界人士赴台。2022年3月美国前国务卿蓬佩奥窜台、2022年8月佩洛西窜台，这些事件背后都有萧美琴的身影。此外，在萧美琴力邀下，同样遭中方制裁的美国前副国务卿克拉奇，以及美国前卫生与公共服务部长阿扎也先后窜台。\n\n为营造所谓“台美友好”氛围，萧美琴还在美国大肆“卖台”。她不仅费尽心思撮合了一单单美台军售，还公然支持进口美国“莱猪”（含瘦肉精的美猪）。以至于不少岛内民众批评称，萧美琴的种种行径不是在为台湾人民的利益工作，而仅仅是在讨美国开心。国台办发言人曾评论：萧美琴为了谋取政治私利，不惜充当外部反华势力棋子，损害中华民族根本利益，把台湾同胞推向危险深渊。\n\n郑剑说，对比两次制裁措施，此次制裁“严禁”萧及家属进入大陆和香港、澳门特别行政区，意味着萧及家属和大陆、港澳地区已经“绝缘”，任何理由、任何时机、任何情况下都不会被允许进入。此外，此次制裁“禁止”萧的金主和关联企业与大陆组织、个人合作，相比上一次的“限制”进一步升级。这些差别清楚体现出“台独”顽固分子如果不能悬崖勒马，只会面临更加严厉的制裁。\n\n在中共中央台办7日受权宣布对“台独”顽固分子萧美琴实施制裁同日，国台办也宣布对台湾“远景基金会”和“亚洲自由民主联盟”这两家宣扬“台独”的有关机构予以惩戒，大陆方面决定对上述2家机构采取惩戒措施，禁止其负责人进入大陆和香港、澳门特别行政区，禁止大陆有关组织和个人与其进行合作。\n\n国台办发言人朱凤莲表示，台湾“远景基金会”、“亚洲自由民主联盟”在民进党当局指使下，以“民主”、“自由”、“合作”为借口，打着“学术交流”、“研讨”等旗号，在国际上大肆兜售“台独”主张，极力拉拢贴靠反华势力，制造“一中一台”、“两个中国”等违反一个中国原则的事件，拓展台所谓“国际空间”。\n\n公开资料显示，台湾“远景基金会”成立于1997年，原名为“两岸交流远景基金会”，自称为“研究国际政经情势之民间学术智库”。然而，自民进党当局2016年上台以来，“远景基金会”不仅没有为推动两岸交流做出贡献，反而变成民进党当局鼓吹“台独”的平台以及假借“学术交流”幌子对外勾连的工具。\n\n根据“远景基金会”网站发布的信息，目前该机构的董事长为陈唐山，他曾在陈水扁执政时期担任台外事部门负责人和陈水扁办公室秘书长，长期公然鼓吹“台独”。该机构的执行长赖怡忠曾担任民进党驻美代表处主任。有媒体披露称，赖怡忠当时在美国的主要任务就是负责串联美国政客。\n\n近期“远景基金会”极力拉拢贴靠反华势力、帮助民进党当局勾连外部势力兜售“台独”的一个例证，就是去年3月邀请已被中国大陆制裁的蓬佩奥窜访台湾。此外，“远景基金会”还曾于2021年12月举办所谓“台美日印太安全对话”，邀请了已故日本前首相安倍晋三及美国前国家安全事务助理罗伯特·奥布莱恩通过视频发表演说。\n\n另一家受到惩戒的机构“亚洲自由民主联盟”也是民进党当局在国际上长期宣扬“台独”立场的平台之一。该机构于1993年10月在台北成立，民进党是其创始成员之一，并两次担任该机构主席。\n\n接受《环球时报》记者采访的台湾问题专家表示，近年来，蔡英文与民进党当局曾多次利用“亚洲自由民主联盟”这一平台向国际社会兜售“台独”主张。在民进党当局的指示下，“亚洲自由民主联盟”的“民主”“自由”成为鼓吹“民主与威权对抗”虚假叙事的借口，以及对中国大陆进行攻击、抹黑的幌子。在勾连外部势力、鼓吹“台独”上，“远景基金会”和“亚洲自由民主联盟”可谓是一丘之貉，同样劣迹斑斑。\n\n中国人民大学两岸关系研究中心主任王英津7日对《环球时报》记者表示，此次受到惩戒的“远景基金会”和“亚洲自由民主联盟”有一个共同点，它们都在民进党当局的指挥遥控下，企图通过“民主”“自由”等价值观话题，将台湾问题这一中国内政歪曲成“民主与威权的对抗”，并以此对外勾连、拓展台所谓“国际空间”。王英津认为，下一步，大陆对于打着“民主牌”鼓吹“台独”、破坏一个中国原则的行为将采取更为坚决的行动。（环球时报-环球网报道 记者 赵觉珵 王琪 丁雅栀）",
            column6: "负面",
            column7: "负面"
        },
    ],
      tableDatayga: [
        {
            column1: "粤港澳小小胖",
            column2: "2267219482",
            column3: "4798209517685429",
            column4: "4798209517685429",
            column5: "#粤港澳小小胖[超话]#【#东部战区已开始一系列联合军事行动#】能完全控制台湾海域空域就是大胜利了！🔥🔥\n\n#外交部回应佩洛西窜访中国台湾地区# ​",
            column6: "正面",
            column7: "/"
        },
        {
            column1: "粤港澳小小胖",
            column2: "2267219482",
            column3: "4798224416112981",
            column4: "4798224416112981",
            column5: "#粤港澳小小胖[超话]#【#外交部回应佩洛西窜访中国台湾地区#】这家店要是不改名从此以后不会有啥生意了！[二哈][二哈]#台北民众高喊佩洛西滚回去# #路人视角# \n\nhttp://t.cn/A6ak9Qq7 ​",
            column6: "正面",
            column7: "/"
        },
        {
            column1: "粤港澳小小胖",
            column2: "2267219482",
            column3: "4798227280822947",
            column4: "4798227280822947",
            column5: "#粤港澳小小胖[超话]#【#台北民众高喊佩洛西滚回去#】MD！幼稚是幼稚了点！[举手][举手]\n\n#外交部回应佩洛西窜访中国台湾地区# http://t.cn/A6ak9dEf ​",
            column6: "正面",
            column7: "/"
        },
        {
            column1: "粤港澳小小胖",
            column2: "2267219482",
            column3: "4798301880453545",
            column4: "4798301880453545",
            column5: "#粤港澳小小胖[超话]#【#台北民众高喊佩洛西滚回去#】佩洛西偷偷摸摸从地下车库进入酒店房间。#外交部回应佩洛西窜访中国台湾地区# http://t.cn/A6ak89uG ​",
            column6: "正面",
            column7: "/"
        },
        {
            column1: "粤港澳小小胖",
            column2: "2267219482",
            column3: "4798848948504874",
            column4: "4798848948504874",
            column5: "#粤港澳小小胖[超话]#【#外交部回应佩洛西窜访中国台湾地区# - 屈颖妍在线】EP75：别在愤怒时动手 http://t.cn/A6asjh3P ​",
            column6: "正面",
            column7: "/"
        },
        {
            column1: "粤港澳小小胖",
            column2: "2267219482",
            column3: "4799192084252125",
            column4: "4799197788766520",
            column5: "#粤港澳小小胖[超话]#【#只有一个中国#】🇨🇳🐰🐮🍻🔥",
            column6: "正面",
            column7: "/"
        },
        {
            column1: "粤港澳小小胖",
            column2: "2267219482",
            column3: "4799192084252125",
            column4: "4799197788766585",
            column5: "#粤港澳小小胖[超话]#【#只有一个中国#】🇨🇳🐰🐮🍻🔥",
            column6: "正面",
            column7: "/"
        },
    ],
      tableDatayga1: [
        {
            column1: "粤港澳小小胖",
            column2: "2267219482",
            column3: "4800945379345769",
            column4: "4800988688417251",
            column5: "#粤港澳小小胖[超话]#【#美方挑衅一次中方就坚决斗争一次#】美方若要一意孤行，那就别怪我们不客气！",
            column6: "正面",
            column7: "正面"
        },
        {
            column1: "粤港澳小小胖",
            column2: "2267219482",
            column3: "4801644686737674",
            column4: "4801690757239724",
            column5: "#粤港澳小小胖[超话]#【#不肖子孙看你们嚣张到几时#】",
            column6: "正面",
            column7: "正面"
        },
    ],
      
      tableDataal1: [
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799858021500117",
            column5: "回复@南书房五公里外行走:其实我也是这么认为的，原则问题跟国家大小无关呀，但是我看底下大家评论的意思是，可能大家都觉得小国构不成影响不用管[允悲][允悲]",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799858814225984",
            column5: "回复@在下王克帕:束手无策应该不至于吧[允悲]",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799860785550942",
            column5: "回复@南书房五公里外行走:对呀，但是我看这个楼里网友们不都是这个意思么，和美国是主要矛盾，其他国家构不成威胁，不用理[允悲][允悲]",
            column6: "负面（原中性）",
            column7: "负面"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799864704079751",
            column5: "回复@SylAynm:这个应该不可能，没来的前一两天就看到微博上有信息说要来，外交部肯定shi知情的，我现在更倾向于他们知道这事，但觉得不理睬是最好的处理方式",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4800025332287086",
            column5: "回复@树根的救赎:这位朋友，麻烦你看清楚我的发言时间，我是因为下午看到这条信息很疑惑，才发出来跟大家讨论了一会，此后从下午六点到现在我都没有再针对底下网友们的发言做任何回复了，因为我已经不纠结这个问题，只是当时看到的那会确实不理解而已，请你说话不要那么难听。",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4800026440631143",
            column5: "回复@性感的热心市民杨先生:麻烦你看一下我回复的发言时间段，不要被别人带节奏行不，我谢谢您",
            column6: "负面（原中性）",
            column7: "负面"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4800116805861997",
            column5: "那个…容我解释一下，我真的只是看到消息的那两三个小时纠结了一下，现在已经不纠结这个事情，谢谢各位的热情讨论，可以不用再回复了哈",
            column6: "中性",
            column7: "负面"
        },
    ],
      tableDataal: [
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799848085459329",
            column5: "#特朗普又双叒谴责佩洛西#‼️#立陶宛访台# \n我不理解啊，我非常的特别的不理解。\n为什么上次佩洛西访台，引起国家高度重视，官媒大肆报道，人民群众情绪高涨，但是今天立陶宛11人团在解放军仍于台海进行军事行动的情况下顺利抵台，国内却毫无舆论和水花？ ​",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799848664269477",
            column5: "回复@Peacockish:是两件事性质不同还是怎么说？请指教",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799849121452396",
            column5: "回复@宇宙甜心大妈:立陶宛挑现在这种情况来，不是赤裸裸的挑衅么，真的不理解啊",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799849323561001",
            column5: "回复@银月苍穹:那你的意思是苍蝇就能随便进出？",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799853181799437",
            column5: "回复@轻风白杨:好像…有点懂了，就是说他们过来的影响构不成威胁？然后也不属于是侵犯领主，违背建交章程的那种程度？",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799855250115851",
            column5: "回复@一路走一路爬:嗯，就是说美国那边才是主要矛盾，那还有看到消息说，下半年英法一些政客也要去，那他们这种算什么程度的，也是阿猫阿狗级别么",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "阿绿今天有猫了么",
            column2: "3027241727",
            column3: "4799848085459329",
            column4: "4799857393140827",
            column5: "回复@在下王克帕:对呀。我一开始发这条微博的意思，也是这样，我觉得是官媒对这件事有意压着。",
            column6: "中性",
            column7: "/"
        },
    ],
      tableDataels: [
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4799170948892194",
            column4: "4799170948892194",
            column5: "【克宫：佩洛西访台后的紧张局势不会很快平息】俄罗斯总统新闻秘书佩斯科夫对媒体表示，美国众议院议长佩洛西访台后的紧张局势不会很快平息。\n\nhttp://t.cn/A6SvYN4w ​",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4799230537371172",
            column4: "4799230537371172",
            column5: "【法国外长：中国不应该利用佩洛西访台来升级紧张局势】法国外长卡特琳•科隆纳认为，中国不应该利用美国众议院议长南希·佩洛西访问台湾当作升级局势的理由。http://t.cn/A6SvejcR ​",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4799849415050728",
            column4: "4799849415050728",
            column5: "【美《国会山报》：台湾或比美国更受因佩洛西访台中方反制措施的影响】据美国《国会山报》报道，中国不会对美国众议院议长佩洛西访台置之不理，如果北京的反制措施对美国来说没有那么痛苦，其或将对台湾的经济产生致命影响。http://t.cn/A6ShlisX ​",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4799864766728910",
            column4: "4799864766728910",
            column5: "【特朗普：佩洛西访台正合中国心意】美国前总统特朗普表示，美众议院议长佩洛西访问台湾正合中国心意，并保证在他执政期间不会发生这样的事情。http://t.cn/A6ShlNCu ​",
            column6: "正面",
            column7: "/"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4800318657797484",
            column4: "4800318657797484",
            column5: "【拜登称，他估计北京不会对台湾采取任何激进措施】美国总统乔•拜登称，中国在众议院议长南希•佩洛西访台后的举动令人担忧，但他估计，北京不会采取激进行动。http://t.cn/A6Sz5LiG ​",
            column6: "中性",
            column7: "/"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4801402603840324",
            column4: "4801402603840324",
            column5: "【台湾问题或将给中美关系带来更大冲击】中国专家在接受俄罗斯卫星通讯社采访时表示，中美目前在台海擦枪走火的可能性较低，但接下来美国国会很可能会通过“台湾政策法案”，这一法案若被签署成法，给中美关系造成的冲击或远远超过佩洛西访台。http://t.cn/A6SA8R9t ​",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4801676714180998",
            column4: "4801676714180998",
            column5: "【佩洛西的儿子持股一家中国公司】《纽约邮报》援引官方报告的数据报道称，随美国众议长佩洛西访台的她的儿子保罗持有一家中国科技公司的股份。http://t.cn/A6S2pfpA ​",
            column6: "中性",
            column7: "/"
        },
    ],
      tableDataels1: [
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4801988769874484",
            column4: "4801988769874484",
            column5: "新闻报道:\n美国在非洲不是中国的竞争对手\nhttp://t.cn/A6SZIcB7 \n五角大楼：美国不支持中国台湾独立\nhttp://t.cn/A6SzXzf0  \n台湾问题或将给中美关系带来更大冲击\nhttp://t.cn/A6SA8R9t \n佩洛西：美国不允许中国孤立台湾\nhttp://t.cn/A6SwQ6xL  \n特朗普：佩洛西访台正合中国心意\nhttp://t.cn/A6ShlNCu \n拜登将如何处理对华关税问题？\nhttp://t.cn/A6S2QAEI \n专访中俄合资企业：国际环境越恶劣，两国企业越团结 \nhttp://t.cn/A6SAyEb4 \n俄参议员：立陶宛决定除俄罗斯外与中国斗一斗\nhttp://t.cn/A6S2QAEV \n俄航天集团将在“军队-2022”国际军事技术论坛展示新的俄罗斯轨道站\nhttp://t.cn/A6S2CMtR \n妖魔化中国可能引起西方种族主义再次急速上升 \nhttp://t.cn/A6SwbxJh",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4803109945082132",
            column4: "4803109945082132",
            column5: "普京：佩洛西访台是一次冒险\n\nhttp://t.cn/A6SbyG0D ​",
            column6: "中性",
            column7: "负面"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4803486384918879",
            column4: "4803794003563222",
            column5: "#普京批评佩洛西窜访台湾#",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4803486384918879",
            column4: "4803794003563329",
            column5: "转发微博",
            column6: "中性",
            column7: "中性"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4804154993673769",
            column4: "4804154993673769",
            column5: "【中国驻美国大使：拜登政府没有为劝阻佩洛西访台尽力】中国驻美国大使秦刚近日接受媒体采访时表示，在佩洛西窜访台湾地区事件上，中方只看结果，美国国会有义务遵守和履行美国的外交政策。美国行政部门没有为劝阻佩洛西窜访尽力。http://t.cn/A6S5jlzy ​",
            column6: "负面",
            column7: "中性"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4804215442774165",
            column4: "4804215442774165",
            column5: "【“台独”势力盼中美关系破裂，美正式出兵护台】美国官员表示，北京利用佩洛西访台为“借口”对台湾施加军事压力，正在严重破坏台海稳定。此外，美国驻华使领馆也声称，中国在“挑战”台海现状。中国专家在接受俄罗斯卫星通讯社采访时强调，美国率先违反了《中美联合公报》和一个中国原则，导致现状改变，却反过来指责中国，这是典型的颠倒黑白。美方种种混淆视听的言论是在试图为日后介入台海制造舆论氛围及所谓的“正当性”。http://t.cn/A6S5BQoN",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4804521198356164",
            column4: "4804521198356164",
            column5: "【美驻华大使排除中美因佩洛西访台而发生危机的可能性】美驻华大使尼古拉斯·伯恩斯接受CNN采访时称，美国不认为华盛顿和北京之间会因美众议院议长佩洛西访台而出现危机。http://t.cn/A6Stkooa ​",
            column6: "正面",
            column7: "负面"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4811169254608803",
            column4: "4811169254608803",
            column5: "【法国政客效仿佩洛西窜台，“破窗效应”是否正在显现？】法国参议院欧洲事务委员会副主席贝勒发7日至12日率跨党派国会议员访台。中国专家在接受俄罗斯卫星通讯社采访时表示，这是自立陶宛设立所谓“台湾代表处”开始，到佩洛西访台后，关于台湾问题产生的“破窗效应”。但它不会产生实质影响，只会导致中国大陆加速解决台湾问题。\n\nhttp://t.cn/A6Sju4mK",
            column6: "负面",
            column7: "负面"
        },
        {
            column1: "俄罗斯卫星通讯社",
            column2: "2181597154",
            column3: "4836543200495387",
            column4: "4836543200495387",
            column5: "【美国副总统访问菲律宾或将引发南海局势紧张】美方正在准备堪比佩洛西访台的挑衅。在美国副总统访问巴拉望群岛之后，中国可能会加强对南沙群岛的防御。解决南海问题的进展剥夺了美国对华施压的工具。\nhttp://t.cn/A6osHsj4 ​",
            column6: "负面",
            column7: "负面"
        },
    ],

      tableDatact: [
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798137095160624",
            column4: "4798137095160624",
            column5: "#台媒称警方证实佩洛西班机22时降落# \n\n草，台媒的直播刚刚似乎消音了。\n\n说话的人在科普美国人当年怎么坑越南，今天同样也会坑台湾。\n\n[允悲][允悲][允悲]\n\n#日媒称8架美战机从嘉手纳基地起飞# ​",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798137095160624",
            column4: "4798138521492472",
            column5: "回复@CG-bless-me:http://t.cn/A6akciEz",
            column6: "正面",
            column7: "/"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798139720795326",
            column4: "4798139720795326",
            column5: "#台媒称警方证实佩洛西班机22时降落# \n\nFlightRadar24显示，佩洛西快到了。\n\n近在咫尺。\n\n[傻眼][傻眼][傻眼]\n\n#佩洛西专机信息显示目的地台北# ​",
            column6: "正面",
            column7: "/"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798143658726735",
            column4: "4798143658726735",
            column5: "#台媒称警方证实佩洛西班机22时降落#\n\n日媒消息：中方12架战斗机，两架电子侦察机已越过台海中线。\n\n[傻眼][傻眼][傻眼] ​",
            column6: "负面",
            column7: "/"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798143658726735",
            column4: "4798143944725240",
            column5: "环球网消息：中国人民解放军空军苏-35战机正在穿越台湾海峡！ http://t.cn/A6akxRS0",
            column6: "中性",
            column7: "/"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798143658726735",
            column4: "4798143944725355",
            column5: "环球网消息：中国人民解放军空军苏-35战机正在穿越台湾海峡！ http://t.cn/A6akxRS0",
            column6: "中性",
            column7: "/"
        },
        {
            column1: "拆台CT",
            column2: "6059492811",
            column3: "4798146679144482",
            column4: "4798146679144482",
            column5: "#中国网直播# \n\n佩罗西这飞机怎么拐来拐去的。\n\n在跟飞行员抢方向盘吗？\n\n[傻眼][傻眼][傻眼]\n\n#台媒称警方证实佩洛西班机22时降落# ​",
            column6: "负面",
            column7: "/"
        },
    ],
    tableDataZKT_1_wxj: [
        {
            column1: "小玲duang",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "liu137093",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "愛撿石頭小魚狗",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "波记98",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "Song230908",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "MDDOQ",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "勤劳的自由鸟",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "74辉哥仔",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "ExtremeMax",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "时间向左飞越",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "光之虚实",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "kakamens",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "是种花家野老",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "经济适用的西红柿",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "用户6193062126",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "努力辨别真伪",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "爱骑行的飘扬",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "做人当如陈道明",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "Newlife797",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "o猫美人o",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "软啊阮阿維",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "用户7193194985",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "我的letme",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "didi赤狄青",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "雨天_joe",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "sarawaltz",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "用户5294854314",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "正能量小坚果",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "筱薇紫cht",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "水会记住你",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "悠悠晴玫",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "辰星星星儿",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "梨棠lllllllll",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "蚊不叮人",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "Cindylizhu",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "winchachaina",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "肖申克的救赎嘿嘿嘿",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "吖嘉嘉Rozlynn",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "青奥也爱红",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "岚鹏友ovo",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "昆明设计师张张",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "华山论剑我在场",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "倾酒如故-",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "一钵春雨化苦酒",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "英明翼",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "SmileY0NG",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "老金G",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "林阿奔II",
            column2: "1",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "火锅女王KQ",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "鮱頭先生",
            column2: "1",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
    ],
    tableDataZKT_4_zxs: [
        {
            column1: "徽州反邪教",
            column2: "4",
            column3: "中新视频",
            column4: "1",
            column5: "0"
        },
    ],
    tableDataZKT_5_wxj: [
        {
            column1: "小玲duang",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "liu137093",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "愛撿石頭小魚狗",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "波记98",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "Song230908",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "MDDOQ",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "勤劳的自由鸟",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "74辉哥仔",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "ExtremeMax",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "时间向左飞越",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "光之虚实",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "kakamens",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "是种花家野老",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "经济适用的西红柿",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "用户6193062126",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "努力辨别真伪",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "爱骑行的飘扬",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "做人当如陈道明",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "Newlife797",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "o猫美人o",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "软啊阮阿維",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "用户7193194985",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "我的letme",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "didi赤狄青",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "雨天_joe",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "sarawaltz",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "用户5294854314",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "正能量小坚果",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "筱薇紫cht",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "水会记住你",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "悠悠晴玫",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "辰星星星儿",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "梨棠lllllllll",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "蚊不叮人",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "Cindylizhu",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "winchachaina",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "肖申克的救赎嘿嘿嘿",
            column2: "5",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "吖嘉嘉Rozlynn",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "青奥也爱红",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "岚鹏友ovo",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "昆明设计师张张",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "华山论剑我在场",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "倾酒如故-",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "一钵春雨化苦酒",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "英明翼",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "SmileY0NG",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "老金G",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "林阿奔II",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "火锅女王KQ",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "鮱頭先生",
            column2: "5",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
    ],
    tableDataZKT_6_ysx: [
        {
            column1: "唯一的晓茗",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "听说我们不曾落泪18",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "涂山胖子精",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "墨墨墨墨_妍",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "w_w2015",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "鲁白bai",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "小锤子君",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "木兰橘",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "海这边vs旭",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "柚子的小雯酱",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "十八子91221",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "木灯霞飞",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "盐丁儿1711",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "雄毅V",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "星落雾尘",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Right_Timing",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "杨小羊同学吖-",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "庄一瓶20260",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "I阿帕西诺",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "冥想n",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "凝小叶_",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "用户6271433177",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "菲琳雅",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "早开的长途班88",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "三方人子yy",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "快乐凌朦",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "楚風漢韻sir",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "李干观世界",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "露丝小师哥",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "明月当空下的小魔兽",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "一顿十个兔头",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "奔跑向前的蜗牛",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "林月明法律工作人员",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "一碗汤圆三毛钱呀Same",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "wo勇闯天涯",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "整天嘻嘻哈哈吖",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "木木不吃糖",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "安娜catfish1221",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "东篱外南山见",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "jingxialba",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "豆男爵",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "賀冲Z",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "什么时候可以养猫呀555",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Claire9717",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "茶亦醉人何必酒z",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "山田小猫咪的云朵枕头亚麻糖",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "轻风xuan",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Two蜜蜂",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "lnlnlyb",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "風見暉一",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "用户7315781092",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "畏止",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "goodgoodbaggioTwo",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Beijing731001",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "胖胖鱼吉祥",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "水流无限98254",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Jasonzou123",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "x初见n",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "肖意一肖宇齐",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "还是热水冲燕麦最经典",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "榆木上的佛铃",
            column2: "6",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
    ],
    tableDataZKT_9_ysx: [
        {
            column1: "唯一的晓茗",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "听说我们不曾落泪18",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "涂山胖子精",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "墨墨墨墨_妍",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "w_w2015",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "鲁白bai",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "小锤子君",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "木兰橘",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "海这边vs旭",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "柚子的小雯酱",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "十八子91221",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "木灯霞飞",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "盐丁儿1711",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "雄毅V",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "星落雾尘",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Right_Timing",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "杨小羊同学吖-",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "庄一瓶20260",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "I阿帕西诺",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "冥想n",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "凝小叶_",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "用户6271433177",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "菲琳雅",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "早开的长途班88",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "三方人子yy",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "快乐凌朦",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "楚風漢韻sir",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "李干观世界",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "露丝小师哥",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "明月当空下的小魔兽",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "一顿十个兔头",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "奔跑向前的蜗牛",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "林月明法律工作人员",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "一碗汤圆三毛钱呀Same",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "wo勇闯天涯",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "整天嘻嘻哈哈吖",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "木木不吃糖",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "安娜catfish1221",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "东篱外南山见",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "jingxialba",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "豆男爵",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "賀冲Z",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "什么时候可以养猫呀555",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Claire9717",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "茶亦醉人何必酒z",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "山田小猫咪的云朵枕头亚麻糖",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "轻风xuan",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Two蜜蜂",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "lnlnlyb",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "風見暉一",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "用户7315781092",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "畏止",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "goodgoodbaggioTwo",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Beijing731001",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "胖胖鱼吉祥",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "水流无限98254",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Jasonzou123",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "x初见n",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "肖意一肖宇齐",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "还是热水冲燕麦最经典",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
        {
            column1: "榆木上的佛铃",
            column2: "9",
            column3: "央视新闻",
            column4: "1",
            column5: "1"
        },
    ],
    tableDataZKT_13_ppx: [
        {
            column1: "Mr郭洪标",
            column2: "13",
            column3: "澎湃新闻",
            column4: "0",
            column5: "0"
        },
    ],
    tableDataZKT_17_ppx: [
        {
            column1: "Mr郭洪标",
            column2: "17",
            column3: "澎湃新闻",
            column4: "0",
            column5: "0"
        },
    ],
    tableDataZKT_15_agq: [
        {
            column1: "用户6643098914",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "1",
            column5: "0"
        },
        {
            column1: "用户7764240549",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
        {
            column1: "星辰v挚爱",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
        {
            column1: "空冥与橘子海",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
        {
            column1: "无问th之阳",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
        {
            column1: "LID-sina",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
        {
            column1: "迎莹比卡丘",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
        {
            column1: "数学可真是我的天敌",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
        {
            column1: "昊昊的愤怒",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
        {
            column1: "小狗味夹心饼干",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
        {
            column1: "夏夜悠悠长流萤乱星光",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
        {
            column1: "闷闷menmen_",
            column2: "15",
            column3: "爱国青年刘战神",
            column4: "0",
            column5: "0"
        },
    ],
    tableDataZKT_17_xgw: [
        {
            column1: "镂红剪翠",
            column2: "17",
            column3: "香港文匯網",
            column4: "1",
            column5: "0"
        },
        {
            column1: "杰少3923",
            column2: "17",
            column3: "香港文匯網",
            column4: "1",
            column5: "1"
        },
    ],
    tableDataZKT_26_xgw: [
        {
            column1: "镂红剪翠",
            column2: "26",
            column3: "香港文匯網",
            column4: "1",
            column5: "0"
        },
        {
            column1: "杰少3923",
            column2: "26",
            column3: "香港文匯網",
            column4: "1",
            column5: "1"
        },
    ],
    tableDataZKT_18_wxj: [
        {
            column1: "小玲duang",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "liu137093",
            column2: "18",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "愛撿石頭小魚狗",
            column2: "18",
            column3: "无心简影",
            column4: "1",
            column5: "1"
        },
        {
            column1: "波记98",
            column2: "18",
            column3: "无心简影",
            column4: "1",
            column5: "1"
        },
        {
            column1: "Song230908",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "MDDOQ",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "勤劳的自由鸟",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "74辉哥仔",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "ExtremeMax",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "时间向左飞越",
            column2: "18",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "光之虚实",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "kakamens",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "是种花家野老",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "经济适用的西红柿",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "用户6193062126",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "努力辨别真伪",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "爱骑行的飘扬",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "做人当如陈道明",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "Newlife797",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "o猫美人o",
            column2: "18",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "软啊阮阿維",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "用户7193194985",
            column2: "18",
            column3: "无心简影",
            column4: "1",
            column5: "1"
        },
        {
            column1: "我的letme",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "didi赤狄青",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "雨天_joe",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "sarawaltz",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "用户5294854314",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "正能量小坚果",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "筱薇紫cht",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "水会记住你",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "悠悠晴玫",
            column2: "18",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "辰星星星儿",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "梨棠lllllllll",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "蚊不叮人",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "Cindylizhu",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "winchachaina",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "肖申克的救赎嘿嘿嘿",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "吖嘉嘉Rozlynn",
            column2: "18",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "青奥也爱红",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "岚鹏友ovo",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "昆明设计师张张",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "华山论剑我在场",
            column2: "18",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "倾酒如故-",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "一钵春雨化苦酒",
            column2: "18",
            column3: "无心简影",
            column4: "1",
            column5: "0"
        },
        {
            column1: "英明翼",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "SmileY0NG",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "老金G",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "林阿奔II",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "0"
        },
        {
            column1: "火锅女王KQ",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
        {
            column1: "鮱頭先生",
            column2: "18",
            column3: "无心简影",
            column4: "0",
            column5: "1"
        },
    ],
    tableDataZKT_19_wlt: [
        {
            column1: "壹事之师",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "武统号",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "可见光_32792",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "朱明达47867",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "壹事之师",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "武统号",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "可见光_32792",
            column2: "19",
            column3: "武力统一",
            column4: "0",
            column5: "0"
        },
        {
            column1: "朱明达47867",
            column2: "19",
            column3: "武力统一",
            column4: "0",
            column5: "0"
        },
        {
            column1: "壹事之师",
            column2: "19",
            column3: "武力统一",
            column4: "0",
            column5: "0"
        },
        {
            column1: "武统号",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "可见光_32792",
            column2: "19",
            column3: "武力统一",
            column4: "0",
            column5: "0"
        },
        {
            column1: "朱明达47867",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "壹事之师",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "武统号",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "可见光_32792",
            column2: "19",
            column3: "武力统一",
            column4: "0",
            column5: "0"
        },
        {
            column1: "朱明达47867",
            column2: "19",
            column3: "武力统一",
            column4: "0",
            column5: "0"
        },
        {
            column1: "壹事之师",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "武统号",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "可见光_32792",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
        {
            column1: "朱明达47867",
            column2: "19",
            column3: "武力统一",
            column4: "1",
            column5: "0"
        },
    ],
    tableDataZKT_20_ppx: [
        {
            column1: "Mr郭洪标",
            column2: "20",
            column3: "澎湃新闻",
            column4: "1",
            column5: "0"
        },
    ],
    tableDataZKT_20_bjw: [
        {
            column1: "2022禅",
            column2: "20",
            column3: "北京晚报",
            column4: "0",
            column5: "0"
        },
        {
            column1: "天然心情--",
            column2: "20",
            column3: "北京晚报",
            column4: "0",
            column5: "0"
        },
        {
            column1: "恭谨谦卑未来可期",
            column2: "20",
            column3: "北京晚报",
            column4: "0",
            column5: "0"
        },
    ],
    tableDataZKT_1: [
        {
            column1: "1",
            column2: "无心简影",
            column3: "#外交部宣布中方制裁佩洛西# 制裁来了 ​"
        },
    ],
    tableDataZKT_4: [
        {
            column1: "4",
            column2: "中新视频",
            column3: "【#外交部有力回击佩洛西窜台等倒行逆施#】二十大第四场记者招待会上，外交部党委委员、副部长马朝旭表示，我们有力回击佩洛西窜台等倒行逆施，坚决反对任何台独行径，坚决遏制外国势力干涉，进一步巩固“一个中国”的国际共识。 http://t.cn/A6o6JmZ5 ​"
        },
    ],
    tableDataZKT_5: [
        {
            column1: "5",
            column2: "无心简影",
            column3: "拜登表态了，他在周一说，他并不担心台湾，但是他担心佩洛西窜台之后，中国大陆在该地区的军事行动。\n\"我很担心他们（中国）会像现在这样行动，\"拜登在出发去访问被洪水蹂躏的肯塔基州时说。\"但我不认为他们会比现在做更多的事情。\"\n\n#东部战区# ​"
        },
    ],
    tableDataZKT_6: [
        {
            column1: "6",
            column2: "央视新闻",
            column3: "【#吴谦回应取消中美两军三项交往活动# #中方反制措施是对美台挑衅必要警示#】8月8日，国防部新闻发言人吴谦就中方取消中美两军三项交往活动及美媒有关炒作答记者问。全文如下：\n\n问：近日，中方针对佩洛西窜台宣布八项反制措施，其中包括取消中美军事交往三项措施。有美国媒体报道，美军高层近日曾多次给中国军队领导打电话，但被中方拒绝。请问对此有何评论？\n\n答：当前台海形势紧张局面，完全是美方主动挑衅、一手制造的，美方必须为此承担全部责任和严重后果。中方曾就中美两国两军关系、台湾问题等表明严正立场，特别是针对美国会众议长佩洛西窜访多次严正交涉，美方却说一套、做一套，纵容支持佩窜访，蓄意制造台海紧张局势。\n\n针对美方恶劣挑衅行径，中方宣布了八项反制措施，其中包括取消安排中美两军战区领导通话、取消中美国防部工作会晤、取消中美海上军事安全磋商机制会议。中方有关反制措施是对美台挑衅的必要警示，对国家主权和安全的正当捍卫，完全合理、恰当适度。\n\n底线不容突破，沟通需要诚意。美方一面制造危机，一面又声称要管控危机，为其错误言行和挑衅举动找托词、打掩护，甚至对外炒作、混淆视听、甩锅推责，我们坚决反对。我们敦促美方切实尊重中方的核心利益和重大关切，放弃“以台制华”的幻想，不要在错误的道路上越走越远。"
        },
    ],
    tableDataZKT_9: [
        {
            column1: "9",
            column2: "央视新闻",
            column3: "#主播说联播#【#世界潮流浩荡公道自在人心#】佩洛西窜台，看似“挺台”，实际效果是“拆台”；她戴着伪善面纱，大搞政治投机，引发国际社会愤慨。170多个国家和国际组织发出正义之声，美方的霸凌嘴脸也再一次暴露于世。 “世界要公道，不要霸道。”世界潮流浩荡，倒行逆施则亡。那些以霸道、霸权为能事的国家，该认清现实，改邪归正，好好听听14亿多中国人民的呼声，听听国际社会的正义之声！ http://t.cn/A6S7AsIh"
        },
    ],
    tableDataZKT_13: [
        {
            column1: "13",
            column2: "澎湃新闻",
            column3: "【白宫无端指责中方军演，#美防长指派里根号穿越台海#】#白宫称中国对佩洛西访台反应过度#当地时间8月4日，美国国家安全委员会发言人约翰·柯比称中国对佩洛西访台“反应过度”，无端指责中方军演，却指派“里根”号穿越台海。#同中方建交国家不得与台湾官方往来#http://t.cn/A6SviRzO  http://t.cn/A6SvieIv"
        },
    ],
    tableDataZKT_17: [
        {
            column1: "17",
            column2: "澎湃新闻",
            column3: "【白宫无端指责中方军演，#美防长指派里根号穿越台海#】#白宫称中国对佩洛西访台反应过度#当地时间8月4日，美国国家安全委员会发言人约翰·柯比称中国对佩洛西访台“反应过度”，无端指责中方军演，却指派“里根”号穿越台海。#同中方建交国家不得与台湾官方往来#http://t.cn/A6SviRzO  http://t.cn/A6SvieIv"
        },
    ],
    tableDataZKT_15: [
        {
            column1: "15",
            column2: "爱国青年刘战神",
            column3: "法国外交部：佩洛西访台不应被中国用作升级紧张局势的借口。。。。\n\n#特朗普又双叒谴责佩洛西##解放军逾百舰机越所谓中线演练攻台# ​"
        },
    ],
    tableDataZKT_26: [
        {
            column1: "26",
            column2: "香港文匯網",
            column3: "【外交部：已有160多个国家谴责佩洛西窜台】华春莹表示，佩洛西窜台事件发生以来，已有160多个国家发出了正义的声音，纷纷谴责佩洛西访台是严重的挑衅，是非常鲁莽和不负责任的，而且都表示将坚持一个中国原则，支持中国维护国家主权和领土完整。http://t.cn/A6ShmbKb #这就是中国态度# #同中方建交国家不得与台湾官方往来# #解放军常规导弹穿越台岛意味着什么# #旺旺#  #取消安排中美两军战区领导通话# #外交部宣布制裁佩洛西# #东部战区出动海陆空英雄部队#"
        },
    ],
    tableDataZKT_18: [
        {
            column1: "18",
            column2: "无心简影",
            column3: "#佩洛西被抗议者连声质问# ​​​【#佩洛西又被当众怼#！多名抗议者质问：为什么窜台拱火？我们不想和中国开战】“嘿，佩洛西，你这个战争犯”“你为什么不承认伊拉克没有大规模杀伤性武器”？“为什么不说出关于‘北溪’的真相”？为什么要窜台拱火让“飞机降落在台湾”……这一幕，出现在纽约市立大学研究生中心当地时间3日举办的一场活动中。\\n\\n推特认证为记者的一名用户当地时间4日发推，晒出自己和多位朋友在活动中对台上的美国前众议院议长大声质疑的现场画面。他发推称，“我和我的朋友们质问佩洛西。我们提醒她承认（伊拉克）没有大规模杀伤性武器，告诉她金融系统因为她而崩溃，并且她会让台湾成为下一个乌克兰”。现场视频显示，抗议者冲台上的佩洛西发出质问，后者则举着麦克风试图平息现场的躁动。\\n\\n一名抗议者大声质疑，“你知道的，佩洛西，地狱深处对你来说是个非常好的地方，因为出于某种原因，你非常痴迷于让我们卷入战争。”“嘿，你为什么不承认伊拉克没有大规模杀伤性武器？你骗我们，让我们卷入了伊拉克战争。你让我们入侵阿富汗。现在（这些国家）超过90%的人处于贫困状态，濒临死亡。你为什么不说出关于‘北溪’的真相 ？我们为什么要摧毁 ‘北溪’管道？你让数百万德国人失去能源！像你这样的人应该被逮捕，你是战争犯。”\\n\\n另一名抗议者大声喊道，“嘿，国会女议员。我是来这里看战争贩的，但你是个可悲的老酒鬼！发生了什么事？你去台湾的时候，是在找寻下一个乌克兰吗？我们是无意还是故意炸了‘北溪’”？“你是否明天就该被起诉？你就是个战犯，佩洛西，你真有胆量 ，所以你才来曼哈顿的吗？这就是你来这里的原因吗？因为你明天就要被起诉了。你这个该死的战犯。有多少人死在你的名下？有多少人死于伊拉克战争？你都忘了伊拉克（战争）吗？还有伊朗？利比亚？叙利亚？”\\n\\n视频中，还有抗议者提到佩洛西窜台一事，指责她在涉台问题上拱火浇油，“你的飞机降落在台湾，与此同时，（这表现出）我们想和中国开战，我们都想让核弹落在我们头上……我在这里代表所有热爱和平的人，（我们）不想与俄罗斯开战，不想与中国开战，不想与东方开启新的热战。”\\n\\n视频背景声中还可以听到，上述抗议者发出一句句质问的同时，被现场安保人员不断催促带离现场。\\n\\n2022年8月2日，时任美国国会众议长佩洛西不顾中方强烈反对和严正交涉，窜访中国台湾地区，严重违反一个中国原则和中美三个联合公报规定，严重冲击中美关系政治基础，严重侵犯中国主权和领土完整，严重破坏台海和平稳定，向“台独”分裂势力发出严重错误信号。中方对此坚决反对，严厉谴责，已向美方提出严正交涉和强烈抗议。外交部发言人华春莹表示，佩洛西危险挑衅行为纯粹是为了捞取个人政治资本，而在这场丑陋的闹剧当中，民主不过是美方惯用的廉价工具和幌子，哗众取宠的是佩洛西个人，但遭殃受害的是中美关系及台海和平稳定。 http://t.cn/A6Nw90DQ"
        },
    ],
    tableDataZKT_19: [
        {
            column1: "19",
            column2: "武力统一",
            column3: "介文汲：佩洛西闯大祸，得罪了中国，美国没有实力同时和中俄对抗\n近日，台前“立委”介文汲称，佩洛西窜台，得罪中国。现在美国同时得罪中俄两国，美国不用玩了，不可能有实力同时和中俄两大国对抗#武统[超话]# http://t.cn/A6SzgN0R ​"
        },
    ],
    tableDataZKT_20: [
        {
            column1: "20",
            column2: "澎湃新闻",
            column3: "【#英外相称若当选首相不会访问台湾#，曾表态支持佩洛西访台】8月4日，英国外交大臣特拉斯接受天空新闻台采访时表示，若她当选首相，不会访问台湾。但此前，特拉斯曾表示支持佩洛西访台。#完全有决心有办法有能力维护国家统一#http://t.cn/A6SPCIn7 http://t.cn/A6SPCC4v ​"
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
