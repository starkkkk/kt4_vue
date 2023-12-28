

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






          <div >
            <span v-show ="YQ_data.variety==1">


              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h2>事件发现</h2>
              <span style="font-size: 18px; line-height: 30px">
              </span>
                <el-table :data="tableData_event_pelosi" style="width: 100%" border>
                  <el-table-column prop="column1" label="事件名称"></el-table-column>
                  <el-table-column prop="column2" label="事件包含微博数"></el-table-column>
                  <!--                  <el-table-column prop="column3" label="开始时间"></el-table-column>-->
                  <!--                  <el-table-column prop="column4" label="结束时间"></el-table-column>-->
                </el-table>
                <span style="font-size: 18px; line-height: 30px">
                  <br>
                  事件词云展示
                    <br>
                  </span>
                <label for="scene">选择事件：</label>
                  <el-select id="scene" v-model="selectedScene3" @change="displayTable">
                    <el-option value="请选择事件">请选择事件</el-option>
                    <el-option value="佩洛西窜访台湾六宗罪">佩洛西窜访台湾六宗罪</el-option>
                    <el-option value="外交部回应佩洛西或今晚抵达台湾">外交部回应佩洛西或今晚抵达台湾</el-option>
                    <el-option value="解放军全程跟踪迫使佩洛西专机绕道菲律宾">解放军全程跟踪迫使佩洛西专机绕道菲律宾</el-option>
                    <el-option value="拜登回应佩洛西窜台">拜登回应佩洛西窜台</el-option>
                    <el-option value="国台办回应蔡英文为佩洛西授勋">国台办回应蔡英文为佩洛西授勋</el-option>
                    <el-option value="国防部回应取消中美两军三项交往活动">国防部回应取消中美两军三项交往活动</el-option>
                    <el-option value="美国游说公司借佩洛西窜台赚黑金">美国游说公司借佩洛西窜台赚黑金</el-option>
                    <el-option value="解放军空军苏-35战机穿越台湾海峡">解放军空军苏-35战机穿越台湾海峡</el-option>
                    <el-option value="中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神">中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神</el-option>
                    <el-option value="若佩洛西敢去台湾那我们拭目以待">若佩洛西敢去台湾那我们拭目以待</el-option>
                    <el-option value="东部战区组织环台岛战备警巡">东部战区组织环台岛战备警巡</el-option>
                    <el-option value="美官方忧中国对佩洛西访台设禁飞区">美官方忧中国对佩洛西访台设禁飞区</el-option>
                    <el-option value="解放军在台岛以东设靶逼退里根号">解放军在台岛以东设靶逼退里根号</el-option>
                    <el-option value="践行二十大 青春心向党">践行二十大 青春心向党</el-option>
                    <el-option value="特朗普称佩洛西窜台是在帮中国圆梦">特朗普称佩洛西窜台是在帮中国圆梦</el-option>
                    <el-option value="台海局势观察">台海局势观察</el-option>
                    <el-option value="华春莹称中国身后是160多个国家">华春莹称中国身后是160多个国家</el-option>
                    <el-option value="佩洛西丈夫在港公司或被列入国家制裁">佩洛西丈夫在港公司或被列入国家制裁</el-option>
                    <el-option value="武统">武统</el-option>
                    <el-option value="佩洛西访台纯粹是针对中国的挑衅">佩洛西访台纯粹是针对中国的挑衅</el-option>
                    <el-option value="佩洛西到哪了">佩洛西到哪了</el-option>
                    <el-option value="外交部回应佩洛西最新涉台言论">外交部回应佩洛西最新涉台言论</el-option>
                    <el-option value="台湾网友吐槽台当局赢了嘴炮苦了人民">台湾网友吐槽台当局赢了嘴炮苦了人民</el-option>
                    <el-option value="王毅称佩洛西窜台是彻头彻尾的政治闹剧">王毅称佩洛西窜台是彻头彻尾的政治闹剧</el-option>
                    <el-option value="解放军继续位台岛周边实战化演训">解放军继续位台岛周边实战化演训</el-option>
                    <el-option value="佩洛西窜访后台海进入新常态">佩洛西窜访后台海进入新常态</el-option>
                  </el-select>
                <template v-if="selectedScene3 === '请选择事件'">
                  </template>
                  <template v-if="selectedScene3 === '佩洛西窜访台湾六宗罪'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_1.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '外交部回应佩洛西或今晚抵达台湾'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_2.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '解放军全程跟踪迫使佩洛西专机绕道菲律宾'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_3.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '佩洛西访问台湾是危险的挑衅行为'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_4.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '拜登回应佩洛西窜台'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_5.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '国台办回应蔡英文为佩洛西授勋'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_6.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '国防部回应取消中美两军三项交往活动'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_7.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '美国游说公司借佩洛西窜台赚黑金'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_8.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '解放军空军苏-35战机穿越台湾海峡'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_9.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_10.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '若佩洛西敢去台湾那我们拭目以待'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_11.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '东部战区组织环台岛战备警巡'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_12.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '美官方忧中国对佩洛西访台设禁飞区'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_13.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '解放军在台岛以东设靶逼退里根号'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_14.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '践行二十大 青春心向党'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_15.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '特朗普称佩洛西窜台是在帮中国圆梦'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_16.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '台海局势观察'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_17.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '华春莹称中国身后是160多个国家'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_18.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '佩洛西丈夫在港公司或被列入国家制裁'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_19.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '武统'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_20.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '佩洛西访台纯粹是针对中国的挑衅'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_21.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '佩洛西到哪了'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_22.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '外交部回应佩洛西最新涉台言论'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_23.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '台湾网友吐槽台当局赢了嘴炮苦了人民'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_24.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '王毅称佩洛西窜台是彻头彻尾的政治闹剧'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_25.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '解放军继续位台岛周边实战化演训'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_26.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
                  <template v-if="selectedScene3 === '佩洛西窜访后台海进入新常态'">
                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                       <span>
                         <img src="../figure/wordcloud_27.png" width="400" height="200" />
                       </span>
                     </el-col>
                   </template>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h2> 事件情感分析</h2>

              <el-row>

                         <div
                          id="chart-user_2"
                          style="width: 1200px; height: 600px;
                          margin-top: 0px;margin-bottom: 0px;margin-right: 0px"
           ></div>

           </el-row>

              <h2> 事件因果关系图</h2>

              <el-row>

                         <div
                          id="chart-user_1"
                          style="width: 1200px; height: 600px;
                          margin-top: 0px;margin-bottom: 0px;margin-right: 0px"
           ></div>

           </el-row>

                </el-col>


             <div class="container">
             <label for="scene">选择事件：</label>
                  <el-select id="scene" v-model="selectedNode" @change="updateChart">
                    <el-option v-for="(node, index) in nodes" :key="index" :label="node" :value="index"></el-option>
                     </el-select>
                     <div class="side-by-side">
                     <div  ref="chart" class="chart" style="width: 1000px; height: 400px;
                          margin-top: 0px;margin-bottom: 0px;margin-right: 0px;"></div>
                     <div id="node-description" style="width: 1000px; height: 200px;" ></div>
                     </div>
             </div>

              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div ref="chartContainer" class="chart-container"></div>
              <div >
                <h2>用户群体行为溯因</h2>
                  <span style="font-size: 18px; line-height: 30px">
                  </span>

                  <label for="scene">选择事件：</label>
                  <el-select id="scene" v-model="selectedScene2" @change="displayTable">
                    <el-option value="请选择事件">请选择事件</el-option>
                    <el-option value="佩洛西窜访台湾六宗罪">佩洛西窜访台湾六宗罪</el-option>

                    <el-option value="解放军全程跟踪迫使佩洛西专机绕道菲律宾">解放军全程跟踪迫使佩洛西专机绕道菲律宾</el-option>
                    <el-option value="拜登回应佩洛西窜台">拜登回应佩洛西窜台</el-option>
                    <el-option value="国台办回应蔡英文为佩洛西授勋">国台办回应蔡英文为佩洛西授勋</el-option>
                    <el-option value="国防部回应取消中美两军三项交往活动">国防部回应取消中美两军三项交往活动</el-option>
                    <el-option value="美国游说公司借佩洛西窜台赚黑金">美国游说公司借佩洛西窜台赚黑金</el-option>
                    <el-option value="解放军空军苏-35战机穿越台湾海峡">解放军空军苏-35战机穿越台湾海峡</el-option>
                    <el-option value="中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神">中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神</el-option>

                    <el-option value="东部战区组织环台岛战备警巡">东部战区组织环台岛战备警巡</el-option>
                    <el-option value="美官方忧中国对佩洛西访台设禁飞区">美官方忧中国对佩洛西访台设禁飞区</el-option>
                    <el-option value="解放军在台岛以东设靶逼退里根号">解放军在台岛以东设靶逼退里根号</el-option>

                    <el-option value="特朗普称佩洛西窜台是在帮中国圆梦">特朗普称佩洛西窜台是在帮中国圆梦</el-option>
                    <el-option value="台海局势观察">台海局势观察</el-option>
                    <el-option value="华春莹称中国身后是160多个国家">华春莹称中国身后是160多个国家</el-option>
                    <el-option value="佩洛西丈夫在港公司或被列入国家制裁">佩洛西丈夫在港公司或被列入国家制裁</el-option>
                    <el-option value="武统">武统</el-option>
                    <el-option value="佩洛西访台纯粹是针对中国的挑衅">佩洛西访台纯粹是针对中国的挑衅</el-option>
                    <el-option value="佩洛西到哪了">佩洛西到哪了</el-option>
                    <el-option value="外交部回应佩洛西最新涉台言论">外交部回应佩洛西最新涉台言论</el-option>
                    <el-option value="台湾网友吐槽台当局赢了嘴炮苦了人民">台湾网友吐槽台当局赢了嘴炮苦了人民</el-option>
                    <el-option value="王毅称佩洛西窜台是彻头彻尾的政治闹剧">王毅称佩洛西窜台是彻头彻尾的政治闹剧</el-option>

                    <el-option value="佩洛西窜访后台海进入新常态">佩洛西窜访后台海进入新常态</el-option>
                  </el-select>
                  <template v-if="selectedScene2 === '请选择事件'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                         </el-table>
                    </el-col>
                  </template>
                  <template v-if="selectedScene2 === '佩洛西窜访台湾六宗罪'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_keyuser_pelosi1" style="width: 85%" border>

                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                         </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene2 === '解放军全程跟踪迫使佩洛西专机绕道菲律宾'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi2" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                         </el-table>
                      </el-col>
                    </template>
                    <template v-if="selectedScene2 === '佩洛西访问台湾是危险的挑衅行为'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi3" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '拜登回应佩洛西窜台'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi4" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                   <template v-if="selectedScene2 === '国台办回应蔡英文为佩洛西授勋'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi5" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '国防部回应取消中美两军三项交往活动'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi6" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '美国游说公司借佩洛西窜台赚黑金'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi7" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '解放军空军苏-35战机穿越台湾海峡'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi8" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi9" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>



                    <template v-if="selectedScene2 === '东部战区组织环台岛战备警巡'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi10" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '美官方忧中国对佩洛西访台设禁飞区'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi11" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '解放军在台岛以东设靶逼退里根号'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi12" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>



                    <template v-if="selectedScene2 === '特朗普称佩洛西窜台实在帮中国圆梦'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi13" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '台海局势观察'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi14" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '华春莹称中国身后是160多个国家'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi15" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '佩洛西丈夫在港公司或被列入国家制裁'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi16" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                     <template v-if="selectedScene2 === '武统'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi17" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        <el-table-column prop="column5" label="转发数" width="80"></el-table-column>
                        <el-table-column prop="column6" label="评论数" width="80"></el-table-column>
                        <el-table-column prop="column7" label="点赞数" width="80"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '佩洛西访台是对中国的挑衅'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi18" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '佩洛西到哪了'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi19" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '外交部回应佩洛西最新涉台言论'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi20" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '台湾网友吐槽当局赢了嘴炮输了人民'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi21" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '王毅称佩洛西窜台是彻头彻尾的政治闹剧'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi22" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>



                    <template v-if="selectedScene2 === '佩洛西窜访后台海进入新常态'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi23" style="width: 85%" border>
                        <el-table-column prop="column2" label="用户昵称" width="100"></el-table-column>
                        <el-table-column prop="column3" label="关键博文" width="800"></el-table-column>
                        <el-table-column prop="column8" label="微博类别" width="80"></el-table-column>
                        <el-table-column prop="column4" label="情感分析" width="80"></el-table-column>
                        </el-table>
                      </el-col>
                    </template>


              </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

              </el-col>



            </span>
          <span v-show ="YQ_data.variety==2">
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

 import tableData from './tableData_output_new.json';
 import links from './links.json'


  import echarts from 'echarts';
  import { getList } from "@/api/blacklist";
  import { mapGetters } from "vuex";
  import { tokenTableName } from "@/config/settings";
  import JsonEditor from "@/components/JsonEditor";

  export default {

    data() {
      return {

        selectedScene:'请选择事件',
        selectedScene2:'请选择事件',
        selectedScene3:'请选择事件',

        selectedNode: '请选择事件',
        nodes:["佩洛西窜访台湾六宗罪", "解放军全程跟踪迫使佩洛西专机绕道菲律宾","佩洛西访问台湾是危险的挑衅行为","拜登回应佩洛西窜台","国台办回应蔡英文为佩洛西授勋","国防部回应取消中美两军三项交往活动", "美国游说公司借佩洛西窜台赚黑金", "解放军空军苏-35战机穿越台湾海峡",
      "中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神","东部战区组织环台岛战备警巡","美官方忧中国对佩洛西访台设禁飞区","解放军在台岛以东设靶逼退里根号","特朗普称佩洛西窜台是在帮中国圆梦",
      "台海局势观察","华春莹称中国身后是160多个国家","佩洛西丈夫在港公司或被列入国家制裁","武统","佩洛西访台纯粹是针对中国的挑衅","佩洛西到哪了","外交部回应佩洛西最新涉台言论","台湾网友吐槽台当局\n赢了嘴炮苦了人民","王毅称佩洛西窜台\n是彻头彻尾的政治闹剧",
      "佩洛西窜访后\n台海进入新常态"],




       nodes_data:[
			{"name": "佩洛西窜访台湾六宗罪", "value":"250"},
			{"name": "解放军全程跟踪迫使佩洛西专机绕道菲律宾", "value":"350"},
			{"name": "佩洛西访问台湾是危险的挑衅行为", "value":"150"},
			{"name": "拜登回应佩洛西窜台", "value":"100"},
			{"name": "国台办回应蔡英文为佩洛西授勋", "value":"450"},
			{"name": "国防部回应取消中美两军三项交往活动", "value":"50"},
			{"name": "美国游说公司借佩洛西窜台赚黑金", "value":"490"},
			{"name": "解放军空军苏-35战机穿越台湾海峡","value":"180"},
			{"name": "中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神","value":"300"},

			{"name": "东部战区组织环台岛战备警巡","value":"0"},
			{"name": "美官方忧中国对佩洛西访台设禁飞区","value":"530"},
			{"name": "解放军在台岛以东设靶逼退里根号", "value":"400"},

			{"name": "特朗普称佩洛西窜台是在帮中国圆梦", "value":"150"},
			{"name": "台海局势观察", "value":"50"},
			{"name": "华春莹称中国身后是160多个国家", "value":"500"},
			{"name": "佩洛西丈夫在港公司或被列入国家制裁","value":"450"},
			{"name": "武统","value":"0"},
			{"name": "佩洛西访台纯粹是针对中国的挑衅", "value":"400"},
			{"name": "佩洛西到哪了", "value":"320"},
			{"name": "外交部回应佩洛西最新涉台言论", "value":"150"},
			{"name": "台湾网友吐槽台当局\n赢了嘴炮苦了人民", "value":"100"},
			{"name": "王毅称佩洛西窜台是\n彻头彻尾的政治闹剧", "value":"350"},

			{"name": "佩洛西窜访后\n台海进入新常态", "value":"250"},
		],

        link:[
			{'source': 16, 'target': 18, 'weight': 0.5196008261589741, 'edgeDescriptions': "source:武统[超话], target:佩洛西到哪了[超话], weight:0.5196008261589741"},
{'source': 14, 'target': 18, 'weight': 0.37693564877349817, 'edgeDescriptions': 'source:华春莹称中国身后是160多个国家, target:佩洛西到哪了[超话], weight:0.37693564877349817'},
{'source': 17, 'target': 18, 'weight': 0.02235052760056439, 'edgeDescriptions': 'source:佩洛西访台纯粹是针对中国的挑衅, target:佩洛西到哪了[超话], weight:0.02235052760056439'},
{'source': 1, 'target': 17, 'weight': 0.8540949316170554, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:佩洛西访台纯粹是针对中国的挑衅, weight:0.8540949316170554'},
{'source': 7, 'target': 17, 'weight': 0.7706461639527741, 'edgeDescriptions': 'source:解放军空军苏-35战机穿越台湾海峡, target:佩洛西访台纯粹是针对中国的挑衅, weight:0.7706461639527741'},
{'source': 9, 'target': 17, 'weight': 0.5740625224922626, 'edgeDescriptions': 'source:东部战区组织环台岛战备警巡, target:佩洛西访台纯粹是针对中国的挑衅, weight:0.5740625224922626'},
{'source': 13, 'target': 22, 'weight': 0.880620879077388, 'edgeDescriptions': 'source:台海局势观察, target:佩洛西窜访后台海进入新常态, weight:0.880620879077388'},
{'source': 20, 'target': 22, 'weight': 0.8445121607556838, 'edgeDescriptions': 'source:台湾网友吐槽台当局赢了嘴炮苦了人民, target:佩洛西窜访后台海进入新常态, weight:0.8445121607556838'},
{'source': 15, 'target': 22, 'weight': 0.8312619576031223, 'edgeDescriptions': 'source:佩洛西丈夫在港公司或被列入国家制裁, target:佩洛西窜访后台海进入新常态, weight:0.8312619576031223'},
{'source': 8, 'target': 10, 'weight': 0.07442906574394464, 'edgeDescriptions': 'source:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, target:美官方忧中国对佩洛西访台设禁飞区, weight:0.07442906574394464'},
{'source': 9, 'target': 10, 'weight': 0.04811509532296566, 'edgeDescriptions': 'source:东部战区组织环台岛战备警巡, target:美官方忧中国对佩洛西访台设禁飞区, weight:0.04811509532296566'},
{'source': 5, 'target': 10, 'weight': 0.040611173924583424, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:美官方忧中国对佩洛西访台设禁飞区, weight:0.040611173924583424'},
{'source': 4, 'target': 20, 'weight': 0.7614284541187915, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:台湾网友吐槽台当局赢了嘴炮苦了人民, weight:0.7614284541187915'},
{'source': 13, 'target': 20, 'weight': 0.5107066811297256, 'edgeDescriptions': 'source:台海局势观察, target:台湾网友吐槽台当局赢了嘴炮苦了人民, weight:0.5107066811297256'},
{'source': 18, 'target': 20, 'weight': 0.24011231768338123, 'edgeDescriptions': 'source:佩洛西到哪了[超话], target:台湾网友吐槽台当局赢了嘴炮苦了人民, weight:0.24011231768338123'},
{'source': 1, 'target': 7, 'weight': 0.20576126614732285, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:解放军空军苏-35战机穿越台湾海峡, weight:0.20576126614732285'},
{'source': 5, 'target': 7, 'weight': 0.0994340063017855, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:解放军空军苏-35战机穿越台湾海峡, weight:0.0994340063017855'},
{'source': 6, 'target': 7, 'weight': 0.07810606357543211, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:解放军空军苏-35战机穿越台湾海峡, weight:0.07810606357543211'},
{'source': 0, 'target': 2, 'weight': 0.014542972385659473, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:佩洛西访问台湾是危险的挑衅行为, weight:0.014542972385659473'},
{'source': 1, 'target': 2, 'weight': 0.00029201948243492927, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:佩洛西访问台湾是危险的挑衅行为, weight:0.00029201948243492927'},
{'source': 1, 'target': 12, 'weight': 0.46166307485529967, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:特朗普称佩洛西窜台是在帮中国圆梦, weight:0.46166307485529967'},
{'source': 6, 'target': 12, 'weight': 0.08036890645586296, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:特朗普称佩洛西窜台是在帮中国圆梦, weight:0.08036890645586296'},
{'source': 3, 'target': 12, 'weight': 0.042872028054304, 'edgeDescriptions': 'source:拜登回应佩洛西窜台, target:特朗普称佩洛西窜台是在帮中国圆梦, weight:0.042872028054304'},
{'source': 7, 'target': 11, 'weight': 0.22426954857581866, 'edgeDescriptions': 'source:解放军空军苏-35战机穿越台湾海峡, target:解放军在台岛以东设靶逼退里根号, weight:0.22426954857581866'},
{'source': 10, 'target': 11, 'weight': 0.019987424729752602, 'edgeDescriptions': 'source:美官方忧中国对佩洛西访台设禁飞区, target:解放军在台岛以东设靶逼退里根号, weight:0.019987424729752602'},
{'source': 8, 'target': 11, 'weight': 0.017244744642508587, 'edgeDescriptions': 'source:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, target:解放军在台岛以东设靶逼退里根号, weight:0.017244744642508587'},
{'source': 5, 'target': 8, 'weight': 0.6092378174642795, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, weight:0.6092378174642795'},
{'source': 6, 'target': 8, 'weight': 0.2287203325181979, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, weight:0.2287203325181979'},
{'source': 4, 'target': 8, 'weight': 0.11969423324191546, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, weight:0.11969423324191546'},
{'source': 5, 'target': 21, 'weight': 0.839584114858643, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:王毅称佩洛西窜台是彻头彻尾的政治闹剧, weight:0.839584114858643'},
{'source': 0, 'target': 21, 'weight': 0.7473468857229126, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:王毅称佩洛西窜台是彻头彻尾的政治闹剧, weight:0.7473468857229126'},
{'source': 20, 'target': 21, 'weight': 0.6672517336912567, 'edgeDescriptions': 'source:台湾网友吐槽台当局赢了嘴炮苦了人民, target:王毅称佩洛西窜台是彻头彻尾的政治闹剧, weight:0.6672517336912567'},
{'source': 2, 'target': 5, 'weight': 0.38445021645021604, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:国防部回应取消中美两军三项交往活动, weight:0.38445021645021604'},
{'source': 4, 'target': 5, 'weight': 0.29869571252080246, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:国防部回应取消中美两军三项交往活动, weight:0.29869571252080246'},
{'source': 3, 'target': 5, 'weight': 0.04202895803200468, 'edgeDescriptions': 'source:拜登回应佩洛西窜台, target:国防部回应取消中美两军三项交往活动, weight:0.04202895803200468'},
{'source': 0, 'target': 6, 'weight': 0.6996565620137147, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:美国游说公司借佩洛西窜台赚黑金, weight:0.6996565620137147'},
{'source': 4, 'target': 6, 'weight': 0.6588152611632695, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:美国游说公司借佩洛西窜台赚黑金, weight:0.6588152611632695'},
{'source': 5, 'target': 6, 'weight': 0.23098837271150918, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:美国游说公司借佩洛西窜台赚黑金, weight:0.23098837271150918'},
{'source': 6, 'target': 13, 'weight': 0.013651051856411158, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:台海局势观察, weight:0.013651051856411158'},
{'source': 10, 'target': 13, 'weight': 0.0076716390252941705, 'edgeDescriptions': 'source:美官方忧中国对佩洛西访台设禁飞区, target:台海局势观察, weight:0.0076716390252941705'},
{'source': 12, 'target': 13, 'weight': 0.0038113475046721223, 'edgeDescriptions': 'source:特朗普称佩洛西窜台是在帮中国圆梦, target:台海局势观察, weight:0.0038113475046721223'},
{'source': 16, 'target': 19, 'weight': 0.2677540914966048, 'edgeDescriptions': 'source:武统[超话], target:外交部回应佩洛西最新涉台言论, weight:0.2677540914966048'},
{'source': 13, 'target': 19, 'weight': 0.20215637078727877, 'edgeDescriptions': 'source:台海局势观察, target:外交部回应佩洛西最新涉台言论, weight:0.20215637078727877'},
{'source': 18, 'target': 19, 'weight': 0.12556860341323353, 'edgeDescriptions': 'source:佩洛西到哪了[超话], target:外交部回应佩洛西最新涉台言论, weight:0.12556860341323353'},
{'source': 2, 'target': 9, 'weight': 0.13262221506631497, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:东部战区组织环台岛战备警巡, weight:0.13262221506631497'},
{'source': 1, 'target': 9, 'weight': 0.10715499237552215, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:东部战区组织环台岛战备警巡, weight:0.10715499237552215'},
{'source': 6, 'target': 9, 'weight': 0.02057912824526183, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:东部战区组织环台岛战备警巡, weight:0.02057912824526183'},
{'source': 2, 'target': 3, 'weight': 0.1591753695730336, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:拜登回应佩洛西窜台, weight:0.1591753695730336'},
{'source': 0, 'target': 3, 'weight': 0.020063616266981756, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:拜登回应佩洛西窜台, weight:0.020063616266981756'},
{'source': 1, 'target': 3, 'weight': 0.004379559274120872, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:拜登回应佩洛西窜台, weight:0.004379559274120872'},
{'source': 1, 'target': 14, 'weight': 0.5001984450726089, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:华春莹称中国身后是160多个国家, weight:0.5001984450726089'},
{'source': 0, 'target': 14, 'weight': 0.1369941730069882, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:华春莹称中国身后是160多个国家, weight:0.1369941730069882'},
{'source': 4, 'target': 14, 'weight': 0.11635066861618687, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:华春莹称中国身后是160多个国家, weight:0.11635066861618687'},
{'source': 4, 'target': 15, 'weight': 0.7000246938127569, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:佩洛西丈夫在港公司或被列入国家制裁, weight:0.7000246938127569'},
{'source': 1, 'target': 15, 'weight': 0.2819954446120226, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:佩洛西丈夫在港公司或被列入国家制裁, weight:0.2819954446120226'},
{'source': 13, 'target': 15, 'weight': 0.24626642771804066, 'edgeDescriptions': 'source:台海局势观察, target:佩洛西丈夫在港公司或被列入国家制裁, weight:0.24626642771804066'},
{'source': 10, 'target': 16, 'weight': 0.4168516627447498, 'edgeDescriptions': 'source:美官方忧中国对佩洛西访台设禁飞区, target:武统[超话], weight:0.4168516627447498'},
{'source': 6, 'target': 16, 'weight': 0.3689627288098214, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:武统[超话], weight:0.3689627288098214'},
{'source': 14, 'target': 16, 'weight': 0.3490193788426085, 'edgeDescriptions': 'source:华春莹称中国身后是160多个国家, target:武统[超话], weight:0.3490193788426085'},
{'source': 1, 'target': 4, 'weight': 0.32317481829543226, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:国台办回应蔡英文为佩洛西授勋, weight:0.32317481829543226'},
{'source': 2, 'target': 4, 'weight': 0.2735580633231504, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:国台办回应蔡英文为佩洛西授勋, weight:0.2735580633231504'},
{'source': 3, 'target': 4, 'weight': 0.08616097124552667, 'edgeDescriptions': 'source:拜登回应佩洛西窜台, target:国台办回应蔡英文为佩洛西授勋, weight:0.08616097124552667'},
{'source': 0, 'target': 1, 'weight': 0.010741453264749365, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:解放军全程跟踪迫使佩洛西专机绕道菲律宾, weight:0.010741453264749365'}


		],
         chart: null, // 图表对象

        tableData_event_pelosi: [
          { column1: '佩洛西窜访台湾六宗罪', column2: '468'},
          { column1: '解放军全程跟踪迫使佩洛西专机绕道菲律宾', column2: '185'},
          { column1: '佩洛西访问台湾是危险的挑衅行为', column2: '104'},
          { column1: '拜登回应佩洛西窜台', column2: '77'},
          { column1: '国台办回应蔡英文为佩洛西授勋', column2: '74'},
          { column1: '国防部回应取消中美两军三项交往活动', column2: '50'},
          { column1: '美国游说公司借佩洛西窜台赚黑金', column2: '48'},
          { column1: '解放军空军苏-35战机穿越台湾海峡', column2: '46'},
          { column1: '中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神', column2: '39'},
          { column1: '东部战区组织环台岛战备警巡', column2: '37'},
          { column1: '美官方忧中国对佩洛西访台设禁飞区', column2: '36'},
          { column1: '解放军在台岛以东设靶逼退里根号', column2: '32'},
          { column1: '特朗普称佩洛西窜台是在帮中国圆梦', column2: '28'},
          { column1: '台海局势观察', column2: '26'},
          { column1: '华春莹称中国身后是160多个国家', column2: '25'},
          { column1: '佩洛西丈夫在港公司或被列入国家制裁', column2: '21'},
          { column1: '武统', column2: '20'},
          { column1: '佩洛西访台纯粹是针对中国的挑衅', column2: '19'},
          { column1: '佩洛西到哪了', column2: '19'},
          { column1: '外交部回应佩洛西最新涉台言论', column2: '18'},
          { column1: '台湾网友吐槽台当局赢了嘴炮苦了人民', column2: '17'},
          { column1: '王毅称佩洛西窜台是彻头彻尾的政治闹剧', column2: '17'},
          { column1: '佩洛西窜访后台海进入新常态', column2: '15'},
        ],


         tableData_keyuser_pelosi1: tableData.tableData_keyuser_pelosi1,
         tableData_keyuser_pelosi2: tableData.tableData_keyuser_pelosi2,
         tableData_keyuser_pelosi3: tableData.tableData_keyuser_pelosi3,
         tableData_keyuser_pelosi4: tableData.tableData_keyuser_pelosi4,
         tableData_keyuser_pelosi5: tableData.tableData_keyuser_pelosi5,
         tableData_keyuser_pelosi6: tableData.tableData_keyuser_pelosi6,
         tableData_keyuser_pelosi7: tableData.tableData_keyuser_pelosi7,
         tableData_keyuser_pelosi8: tableData.tableData_keyuser_pelosi8,
         tableData_keyuser_pelosi9: tableData.tableData_keyuser_pelosi9,
         tableData_keyuser_pelosi10: tableData.tableData_keyuser_pelosi10,
         tableData_keyuser_pelosi11: tableData.tableData_keyuser_pelosi11,
         tableData_keyuser_pelosi12: tableData.tableData_keyuser_pelosi12,
         tableData_keyuser_pelosi13: tableData.tableData_keyuser_pelosi13,
         tableData_keyuser_pelosi14: tableData.tableData_keyuser_pelosi14,
         tableData_keyuser_pelosi15: tableData.tableData_keyuser_pelosi15,
         tableData_keyuser_pelosi16: tableData.tableData_keyuser_pelosi16,
         tableData_keyuser_pelosi17: tableData.tableData_keyuser_pelosi17,
         tableData_keyuser_pelosi18: tableData.tableData_keyuser_pelosi18,
         tableData_keyuser_pelosi19: tableData.tableData_keyuser_pelosi19,
         tableData_keyuser_pelosi20: tableData.tableData_keyuser_pelosi20,
         tableData_keyuser_pelosi21: tableData.tableData_keyuser_pelosi21,
         tableData_keyuser_pelosi22: tableData.tableData_keyuser_pelosi22,
         tableData_keyuser_pelosi23: tableData.tableData_keyuser_pelosi23,
         tableData_keyuser_pelosi24: tableData.tableData_keyuser_pelosi24,
         tableData_keyuser_pelosi25: tableData.tableData_keyuser_pelosi25,
         tableData_keyuser_pelosi26: tableData.tableData_keyuser_pelosi26,
         tableData_keyuser_pelosi27: tableData.tableData_keyuser_pelosi27,





        //tableData_keyuser_pelosi1: [{'column1': '2656274875', 'column2': '央视新闻', 'column3': '#佩洛西赴台是重大政治挑衅#【#外交部回应佩洛西窜访中国台湾地区# #外交部正告美方玩火者必自焚#】8月2日，美国国会众议长佩洛西不顾中方强烈反对和严正交涉，窜访中国台湾地区，严重违反一个中国原则和中美三个联合公报规定，严重冲击中美关系政治基础，严重侵犯中国主权和领土完整，严重破坏台海和平稳定，向“台独”分裂势力发出严重错误信号。中方对此坚决反对，严厉谴责，已向美方提出严正交涉和强烈抗议。'},] ,



        YQ_data: [
          {
            variety: "事件一",
            variety_value: "佩洛西访台舆情数据集",
            id:1,
          },
          {
            variety: "事件二",
            variety_value: "香港数据集",
            id:2,
          },
        ],
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

    created() {
  for (let i = 1; i <= 26; i++) {
    const key = `tableData_keyuser_pelosi${i}`;
    this.tableData_keyuser_pelosi.push(tableData[key]);
  }
},

    mounted(){
       this.myEcharts();
       this.initChart();
    },




    methods: {



      myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("chart-user_1"));
      var myChart_2 = this.$echarts.init(document.getElementById("chart-user_2"));
      // 指定图表的配置项和数据



      const axisData = ["佩洛西窜访台湾六宗罪", "解放军全程跟踪迫使佩洛西专机绕道菲律宾","佩洛西访问台湾是危险的挑衅行为","拜登回应佩洛西窜台","国台办回应蔡英文为佩洛西授勋","国防部回应取消中美两军三项交往活动", "美国游说公司借佩洛西窜台赚黑金", "解放军空军苏-35战机穿越台湾海峡",
      "中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神","东部战区组织环台岛战备警巡","美官方忧中国对佩洛西访台设禁飞区","解放军在台岛以东设靶逼退里根号","特朗普称佩洛西窜台是在帮中国圆梦",
      "台海局势观察","华春莹称中国身后是160多个国家","佩洛西丈夫在港公司或被列入国家制裁","武统","佩洛西访台纯粹是针对中国的挑衅","佩洛西到哪了","外交部回应佩洛西最新涉台言论","台湾网友吐槽台当局\n赢了嘴炮苦了人民","王毅称佩洛西窜台\n是彻头彻尾的政治闹剧",
      "佩洛西窜访后\n台海进入新常态"];

      //const data = ["450","700","300","400","500","350","600","700","550","130","230","200","300","400","600","500","140","100","700","800","500","450","700","300","200","100"]
      //const data = axisData.map(function (item, i) { return Math.round(Math.random() * 1000 * (i + 1)); });
      //const links = data.map(function (item, i) {
         //return {
            // source: i,
             //target: i + 1
         //};
       //});

       const data = [
			{"name": "佩洛西窜访台湾六宗罪", "value":"250"},
			{"name": "解放军全程跟踪迫使佩洛西专机绕道菲律宾", "value":"350"},
			{"name": "佩洛西访问台湾是危险的挑衅行为", "value":"150"},
			{"name": "拜登回应佩洛西窜台", "value":"100"},
			{"name": "国台办回应蔡英文为佩洛西授勋", "value":"450"},
			{"name": "国防部回应取消中美两军三项交往活动", "value":"50"},
			{"name": "美国游说公司借佩洛西窜台赚黑金", "value":"490"},
			{"name": "解放军空军苏-35战机穿越台湾海峡","value":"180"},
			{"name": "中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神","value":"300"},

			{"name": "东部战区组织环台岛战备警巡","value":"0"},
			{"name": "美官方忧中国对佩洛西访台设禁飞区","value":"530"},
			{"name": "解放军在台岛以东设靶逼退里根号", "value":"400"},

			{"name": "特朗普称佩洛西窜台是在帮中国圆梦", "value":"150"},
			{"name": "台海局势观察", "value":"50"},
			{"name": "华春莹称中国身后是160多个国家", "value":"500"},
			{"name": "佩洛西丈夫在港公司或被列入国家制裁","value":"450"},
			{"name": "武统","value":"0"},
			{"name": "佩洛西访台纯粹是针对中国的挑衅", "value":"400"},
			{"name": "佩洛西到哪了", "value":"320"},
			{"name": "外交部回应佩洛西最新涉台言论", "value":"150"},
			{"name": "台湾网友吐槽台当局\n赢了嘴炮苦了人民", "value":"100"},
			{"name": "王毅称佩洛西窜台是\n彻头彻尾的政治闹剧", "value":"350"},

			{"name": "佩洛西窜访后\n台海进入新常态", "value":"250"},


		];

       const links =  [
			{'source': 16, 'target': 18, 'weight': 0.5196008261589741, 'edgeDescriptions': "source:武统[超话], target:佩洛西到哪了[超话], weight:0.5196008261589741"},
{'source': 14, 'target': 18, 'weight': 0.37693564877349817, 'edgeDescriptions': 'source:华春莹称中国身后是160多个国家, target:佩洛西到哪了[超话], weight:0.37693564877349817'},
{'source': 17, 'target': 18, 'weight': 0.02235052760056439, 'edgeDescriptions': 'source:佩洛西访台纯粹是针对中国的挑衅, target:佩洛西到哪了[超话], weight:0.02235052760056439'},
{'source': 1, 'target': 17, 'weight': 0.8540949316170554, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:佩洛西访台纯粹是针对中国的挑衅, weight:0.8540949316170554'},
{'source': 7, 'target': 17, 'weight': 0.7706461639527741, 'edgeDescriptions': 'source:解放军空军苏-35战机穿越台湾海峡, target:佩洛西访台纯粹是针对中国的挑衅, weight:0.7706461639527741'},
{'source': 9, 'target': 17, 'weight': 0.5740625224922626, 'edgeDescriptions': 'source:东部战区组织环台岛战备警巡, target:佩洛西访台纯粹是针对中国的挑衅, weight:0.5740625224922626'},
{'source': 13, 'target': 22, 'weight': 0.880620879077388, 'edgeDescriptions': 'source:台海局势观察, target:佩洛西窜访后台海进入新常态, weight:0.880620879077388'},
{'source': 20, 'target': 22, 'weight': 0.8445121607556838, 'edgeDescriptions': 'source:台湾网友吐槽台当局赢了嘴炮苦了人民, target:佩洛西窜访后台海进入新常态, weight:0.8445121607556838'},
{'source': 15, 'target': 22, 'weight': 0.8312619576031223, 'edgeDescriptions': 'source:佩洛西丈夫在港公司或被列入国家制裁, target:佩洛西窜访后台海进入新常态, weight:0.8312619576031223'},
{'source': 8, 'target': 10, 'weight': 0.07442906574394464, 'edgeDescriptions': 'source:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, target:美官方忧中国对佩洛西访台设禁飞区, weight:0.07442906574394464'},
{'source': 9, 'target': 10, 'weight': 0.04811509532296566, 'edgeDescriptions': 'source:东部战区组织环台岛战备警巡, target:美官方忧中国对佩洛西访台设禁飞区, weight:0.04811509532296566'},
{'source': 5, 'target': 10, 'weight': 0.040611173924583424, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:美官方忧中国对佩洛西访台设禁飞区, weight:0.040611173924583424'},
{'source': 4, 'target': 20, 'weight': 0.7614284541187915, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:台湾网友吐槽台当局赢了嘴炮苦了人民, weight:0.7614284541187915'},
{'source': 13, 'target': 20, 'weight': 0.5107066811297256, 'edgeDescriptions': 'source:台海局势观察, target:台湾网友吐槽台当局赢了嘴炮苦了人民, weight:0.5107066811297256'},
{'source': 18, 'target': 20, 'weight': 0.24011231768338123, 'edgeDescriptions': 'source:佩洛西到哪了[超话], target:台湾网友吐槽台当局赢了嘴炮苦了人民, weight:0.24011231768338123'},
{'source': 1, 'target': 7, 'weight': 0.20576126614732285, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:解放军空军苏-35战机穿越台湾海峡, weight:0.20576126614732285'},
{'source': 5, 'target': 7, 'weight': 0.0994340063017855, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:解放军空军苏-35战机穿越台湾海峡, weight:0.0994340063017855'},
{'source': 6, 'target': 7, 'weight': 0.07810606357543211, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:解放军空军苏-35战机穿越台湾海峡, weight:0.07810606357543211'},
{'source': 0, 'target': 2, 'weight': 0.014542972385659473, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:佩洛西访问台湾是危险的挑衅行为, weight:0.014542972385659473'},
{'source': 1, 'target': 2, 'weight': 0.00029201948243492927, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:佩洛西访问台湾是危险的挑衅行为, weight:0.00029201948243492927'},
{'source': 1, 'target': 12, 'weight': 0.46166307485529967, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:特朗普称佩洛西窜台是在帮中国圆梦, weight:0.46166307485529967'},
{'source': 6, 'target': 12, 'weight': 0.08036890645586296, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:特朗普称佩洛西窜台是在帮中国圆梦, weight:0.08036890645586296'},
{'source': 3, 'target': 12, 'weight': 0.042872028054304, 'edgeDescriptions': 'source:拜登回应佩洛西窜台, target:特朗普称佩洛西窜台是在帮中国圆梦, weight:0.042872028054304'},
{'source': 7, 'target': 11, 'weight': 0.22426954857581866, 'edgeDescriptions': 'source:解放军空军苏-35战机穿越台湾海峡, target:解放军在台岛以东设靶逼退里根号, weight:0.22426954857581866'},
{'source': 10, 'target': 11, 'weight': 0.019987424729752602, 'edgeDescriptions': 'source:美官方忧中国对佩洛西访台设禁飞区, target:解放军在台岛以东设靶逼退里根号, weight:0.019987424729752602'},
{'source': 8, 'target': 11, 'weight': 0.017244744642508587, 'edgeDescriptions': 'source:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, target:解放军在台岛以东设靶逼退里根号, weight:0.017244744642508587'},
{'source': 5, 'target': 8, 'weight': 0.6092378174642795, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, weight:0.6092378174642795'},
{'source': 6, 'target': 8, 'weight': 0.2287203325181979, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, weight:0.2287203325181979'},
{'source': 4, 'target': 8, 'weight': 0.11969423324191546, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, weight:0.11969423324191546'},
{'source': 5, 'target': 21, 'weight': 0.839584114858643, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:王毅称佩洛西窜台是彻头彻尾的政治闹剧, weight:0.839584114858643'},
{'source': 0, 'target': 21, 'weight': 0.7473468857229126, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:王毅称佩洛西窜台是彻头彻尾的政治闹剧, weight:0.7473468857229126'},
{'source': 20, 'target': 21, 'weight': 0.6672517336912567, 'edgeDescriptions': 'source:台湾网友吐槽台当局赢了嘴炮苦了人民, target:王毅称佩洛西窜台是彻头彻尾的政治闹剧, weight:0.6672517336912567'},
{'source': 2, 'target': 5, 'weight': 0.38445021645021604, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:国防部回应取消中美两军三项交往活动, weight:0.38445021645021604'},
{'source': 4, 'target': 5, 'weight': 0.29869571252080246, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:国防部回应取消中美两军三项交往活动, weight:0.29869571252080246'},
{'source': 3, 'target': 5, 'weight': 0.04202895803200468, 'edgeDescriptions': 'source:拜登回应佩洛西窜台, target:国防部回应取消中美两军三项交往活动, weight:0.04202895803200468'},
{'source': 0, 'target': 6, 'weight': 0.6996565620137147, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:美国游说公司借佩洛西窜台赚黑金, weight:0.6996565620137147'},
{'source': 4, 'target': 6, 'weight': 0.6588152611632695, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:美国游说公司借佩洛西窜台赚黑金, weight:0.6588152611632695'},
{'source': 5, 'target': 6, 'weight': 0.23098837271150918, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:美国游说公司借佩洛西窜台赚黑金, weight:0.23098837271150918'},
{'source': 6, 'target': 13, 'weight': 0.013651051856411158, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:台海局势观察, weight:0.013651051856411158'},
{'source': 10, 'target': 13, 'weight': 0.0076716390252941705, 'edgeDescriptions': 'source:美官方忧中国对佩洛西访台设禁飞区, target:台海局势观察, weight:0.0076716390252941705'},
{'source': 12, 'target': 13, 'weight': 0.0038113475046721223, 'edgeDescriptions': 'source:特朗普称佩洛西窜台是在帮中国圆梦, target:台海局势观察, weight:0.0038113475046721223'},
{'source': 16, 'target': 19, 'weight': 0.2677540914966048, 'edgeDescriptions': 'source:武统[超话], target:外交部回应佩洛西最新涉台言论, weight:0.2677540914966048'},
{'source': 13, 'target': 19, 'weight': 0.20215637078727877, 'edgeDescriptions': 'source:台海局势观察, target:外交部回应佩洛西最新涉台言论, weight:0.20215637078727877'},
{'source': 18, 'target': 19, 'weight': 0.12556860341323353, 'edgeDescriptions': 'source:佩洛西到哪了[超话], target:外交部回应佩洛西最新涉台言论, weight:0.12556860341323353'},
{'source': 2, 'target': 9, 'weight': 0.13262221506631497, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:东部战区组织环台岛战备警巡, weight:0.13262221506631497'},
{'source': 1, 'target': 9, 'weight': 0.10715499237552215, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:东部战区组织环台岛战备警巡, weight:0.10715499237552215'},
{'source': 6, 'target': 9, 'weight': 0.02057912824526183, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:东部战区组织环台岛战备警巡, weight:0.02057912824526183'},
{'source': 2, 'target': 3, 'weight': 0.1591753695730336, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:拜登回应佩洛西窜台, weight:0.1591753695730336'},
{'source': 0, 'target': 3, 'weight': 0.020063616266981756, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:拜登回应佩洛西窜台, weight:0.020063616266981756'},
{'source': 1, 'target': 3, 'weight': 0.004379559274120872, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:拜登回应佩洛西窜台, weight:0.004379559274120872'},
{'source': 1, 'target': 14, 'weight': 0.5001984450726089, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:华春莹称中国身后是160多个国家, weight:0.5001984450726089'},
{'source': 0, 'target': 14, 'weight': 0.1369941730069882, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:华春莹称中国身后是160多个国家, weight:0.1369941730069882'},
{'source': 4, 'target': 14, 'weight': 0.11635066861618687, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:华春莹称中国身后是160多个国家, weight:0.11635066861618687'},
{'source': 4, 'target': 15, 'weight': 0.7000246938127569, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:佩洛西丈夫在港公司或被列入国家制裁, weight:0.7000246938127569'},
{'source': 1, 'target': 15, 'weight': 0.2819954446120226, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:佩洛西丈夫在港公司或被列入国家制裁, weight:0.2819954446120226'},
{'source': 13, 'target': 15, 'weight': 0.24626642771804066, 'edgeDescriptions': 'source:台海局势观察, target:佩洛西丈夫在港公司或被列入国家制裁, weight:0.24626642771804066'},
{'source': 10, 'target': 16, 'weight': 0.4168516627447498, 'edgeDescriptions': 'source:美官方忧中国对佩洛西访台设禁飞区, target:武统[超话], weight:0.4168516627447498'},
{'source': 6, 'target': 16, 'weight': 0.3689627288098214, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:武统[超话], weight:0.3689627288098214'},
{'source': 14, 'target': 16, 'weight': 0.3490193788426085, 'edgeDescriptions': 'source:华春莹称中国身后是160多个国家, target:武统[超话], weight:0.3490193788426085'},
{'source': 1, 'target': 4, 'weight': 0.32317481829543226, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:国台办回应蔡英文为佩洛西授勋, weight:0.32317481829543226'},
{'source': 2, 'target': 4, 'weight': 0.2735580633231504, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:国台办回应蔡英文为佩洛西授勋, weight:0.2735580633231504'},
{'source': 3, 'target': 4, 'weight': 0.08616097124552667, 'edgeDescriptions': 'source:拜登回应佩洛西窜台, target:国台办回应蔡英文为佩洛西授勋, weight:0.08616097124552667'},
{'source': 0, 'target': 1, 'weight': 0.010741453264749365, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:解放军全程跟踪迫使佩洛西专机绕道菲律宾, weight:0.010741453264749365'}


		];



		const nodeDescriptions = ["#佩洛西窜访台湾六宗罪#:首先就是佩洛西窜访台湾严重违反美方在中美三个联合公报中所作承诺，属于背信弃义。第二则是践踏了法制，佩洛西窜访台湾严重违反一个中国原则，这一原则是国际社会的普遍共识和公认的国际关系基本准则。第三就是破坏了区域和平，佩洛西窜台是美纵容支持“台独”分裂势力的最新例证，严重破坏台海和平和地区稳定，美国应该也必须为此负全部责任。第四则是佩洛西涉嫌干涉中国内政。第五则是佩洛西进行的政治操弄，佩洛西所作所为绝不是为了捍卫民主，而是打着“民主”的幌子，侵犯中国主权、破坏中国稳定、遏制中国发展，是赤裸裸的政治操弄。第六则是她以权谋私，佩洛西妄图借打“台湾牌”获得“政治加分”，留下所谓政治遗产。",

		"#解放军全程跟踪迫使佩洛西专机绕道菲律宾#:佩洛西专机起飞后，解放军全程跟踪监控，迫使佩洛西专机舍近求远，绕到菲律宾上空后再回到台湾松山机场\n -------------------------- \n 前序事件：\n 1)佩洛西窜访台湾六宗罪",
		"安理会轮值主席、中国常驻联合国代表张军就安理会8月工作在纽约联合国总部向媒体吹风时，就台湾问题、美国众议长佩洛西访台表明立场。安理会轮值主席、中国常驻联合国代表张军就安理会8月工作在纽约联合国总部向媒体吹风时，就台湾问题、美国众议长佩洛西访台表明立场。\n -------------------------- \n 前序事件：\n 1)佩洛西窜访台湾六宗罪 \n 2)佩洛西访问台湾是危险的挑衅行为",
		"#拜登回应佩洛西窜台#:众议院议长南希·佩洛西窜访台湾后，国际局势紧张加剧。拜登表示，他“关心”但“不担心”中国在台湾附近的军事行动，“我不感到忧虑，我注意到中方的行动部署得十分频繁，我不认为他们会有更进一步的行动。\n -------------------------- \n 前序事件: \n 1)佩洛西窜访台湾六宗罪\n 2)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 3)佩洛西访问台湾是危险的挑衅行动",

		"#国台办回应蔡英文为佩洛西授勋#:国台办负责人马晓光应询说，佩洛西窜访台湾是台美实质关系升级的重大事件。佩此次窜台是其一贯顽固挺台反华错误言行的进一步发展，性质十分恶劣。我们严厉谴责和强烈抗议，并已宣布一系列坚决有力的反制措施。民进党当局在“倚美谋独”的分裂道路上一条道走到黑，留下一连串奴颜婢膝的劣迹，必将付出越来越难以承受的代价，只能以失败告终。至于那个所谓“勋章”，大家都知道，以“撒谎、欺骗、偷盗”为荣、品行恶劣的蓬佩奥之流接受过此类“勋章”，可以想象民进党当局给佩洛西“授勋”是怎么一场政治闹剧。\n -------------------------- \n 前序事件: \n 1)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 2)佩洛西访问台湾是危险的挑衅行动 \n 3)拜登回应佩洛西窜台",
		"#国防部回应取消中美两军三项交往活动#:国防部发言人吴谦作出回应，当前台海形势紧张局面，完全是美方主动挑衅、一手制造的，美方必须为此承担全部责任和严重后果。中方曾就中美两国两军关系、台湾问题等表明严正立场，特别是针对美国会众议长佩洛西窜访多次严正交涉，美方却说一套、做一套，纵容支持佩窜访，蓄意制造台海紧张局势。吴谦表示，针对美方恶劣挑衅行径，中方宣布了八项反制措施，其中包括取消安排中美两军战区领导通话、取消中美国防部工作会晤、取消中美海上军事安全磋商机制会议。中方有关反制措施是对美台挑衅的必要警示，对国家主权和安全的正当捍卫，完全合理、恰当适度。\n -------------------------- \n  前序事件: \n 1)佩洛西访问台湾是危险的挑衅行动 \n 2)拜登回应佩洛西窜台\n 3)国台办回应蔡英文为佩洛西授勋",
		 "#美国游说公司借佩洛西窜台赚黑金#:有台灣網友爆料稱“台當局支付300萬美元游說佩洛西”，但該說法被台灣地區主管“外交”的部門矢口否認。@起底工作室 順藤摸瓜，調查了網友提到的格普哈特公司（Gephardt）和台北經濟文化代表處（TECRO）。據美國司法部數據，TECRO早在2013年就與格普哈特簽訂了合同，每月需支付相應的服務費并一直保持至今，共計支付384萬美元。此外，交易記錄中還有多筆26美元的賬單，這是格普哈特到美國國會往返的出租車費。即便是從台灣當局那賺得盆滿鉢滿，美國游說公司也不忘記報銷車費。\n -------------------------- \n 前序事件: \n 1)佩洛西窜访台湾六宗罪 \n 2)国台办回应蔡英文为佩洛西授勋 \n 3)国防部回应取消中美两军三项交往活动",
		  "#解放军空军苏-35战机穿越台湾海峡#:中国人民解放军空军苏-35战机正在穿越台湾海峡。\n -------------------------- \n 前序事件: \n 1)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 2)国防部回应取消中美两军三项交往活动 \n 3)美国游说公司借佩洛西窜台赚黑金",
      "#中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神#:中国驻美国大使秦刚在出席福布斯第四届美中商业论坛时指出，美国众议长佩洛西执意窜访中国台湾地区严重违背了美方在台湾问题上的承诺，有违契约精神。秦刚表示，美国众议长佩洛西窜访中国台湾地区严重违反一个中国原则和中美三个联合公报规定，严重冲击中美关系政治基础，严重侵犯中国主权和领土完整，严重破坏台海和平稳定。\n -------------------------- \n 前序事件:\n 1)国台办回应蔡英文为佩洛西授勋 \n 2)国防部回应取消中美两军三项交往活动 \n 3)美国游说公司借佩洛西窜台赚黑金",


      "#东部战区组织环台岛战备警巡#:中国人民解放军东部战区按计划于4月8日至10日在台湾海峡和台岛北部、南部、台岛以东海空域组织环台岛战备警巡和“联合利剑”演习。国防大学国家安全学院副教授张弛接受中新社记者专访时指出，此次全军兵种联合行动，塑造全向围岛慑压态势，山东舰航母编队出第一岛链进行部署，战巡、演习相结合可能会成为解放军今后惩戒“台独”分裂势力的新模式。\n -------------------------- \n  前序事件:\n 1)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 2)佩洛西访问台湾是危险的挑衅行为 \n 3)美国游说公司借佩洛西窜台赚黑金",
      "#美官方忧中国对佩洛西访台设禁飞区#:美国不具名官员向美国有线电视网（CNN）透露，拜登政府官员担心，在美国众议长佩洛西可能访问台湾之前，中国可能寻求在台湾岛上空划设禁飞区，还可能派出战机进一步进入台湾自行宣布的“防空识别区”。\n -------------------------- \n 前序事件: \n 1)国防部回应取消中美两军三项交往活动 \n 2)中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神 \n 3)东部战区组织环台岛战备警巡",
      "#解放军在台岛以东设靶逼退里根号#:中国人民解放军在台岛周边海空域进行重要军事演训行动，并组织实弹射击。国防大学教授孟祥青介绍：此次台海演习，①航母编队首次威慑性演练，核潜艇参演，构建了海上立体式的作战体系；②首次在台岛以东设置靶场，将当时给佩洛西护航的美国“里根”号航母舰，逼退约几百公里。\n -------------------------- \n 前序事件: \n 1)国防部回应取消中美两军三项交往活动 \n 2)中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神 \n 3)美官方忧中国对佩洛西访台设禁飞区",

      "#特朗普称佩洛西窜台是在帮中国圆梦#:特朗普声称，佩洛西窜访台湾“助力了中国梦”，因为她给了中方“一直在寻找的借口”，中方现在可以去做他们正在做的任何事情。特朗普还强调，如果美国在特朗普的领导下，这种事情永远不会发生。特朗普在佩洛西窜台之前，就明确表示了反对。特朗普的反对并不是为了美国好，根本目的还是为了自己牟利，这是共和党人的一个策略，佩洛西坚持要去，共和党人就会站在对立面。\n -------------------------- \n  前序事件: \n 1)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 2)拜登回应佩洛西窜台 \n 3)东部战区组织环岛战备警巡",
      "#台海局势观察#:8月2日晚开始，中国人民解放军东部战区陆续在台岛周边开展一系列联合军事行动，在台岛北部、西南、东南海空域进行联合海空演训，将在台湾海峡进行远程火力实弹射击。 \n -------------------------- \n  前序事件: \n 1)美国游说公司借佩洛西窜台赚黑金 \n 2)美官方忧中国对佩洛西访台设禁飞区 \n 3)特朗普称佩洛西窜台是在帮中国圆梦",
      "#华春莹称中国身后是160多个国家#:中国外交部发言人华春莹8月5日在例行记者会上称，佩洛西窜台事件发生以来，已有160多个国家发出了正义的声音。现在中国的身后是160多个国家，共同站在历史正确的一边，站在公平正义的一边。 \n -------------------------- \n 前序事件: \n 1)佩洛西窜访台湾六宗罪 \n 2)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 3)国台办回应蔡英文为佩洛西授勋",

      "#佩洛西丈夫在港公司或被列入国家制裁#:外交部周五宣布，针对美国国会众议长佩洛西恶劣挑衅行径，对佩洛西及其直系亲属依法采取制裁措施。\n -------------------------- \n 前序事件: \n 1) 解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 2)国台办回应蔡英文为佩洛西授勋 \n 3)台海局势观察",
      "武统 \n -------------------------- \n 前序事件: \n 1)美国游说公司借佩洛西窜台赚黑金 \n 2)美官方忧中国对佩洛西访台设禁飞区 \n 3)华春莹称中国身后是160多个国家",
      "#佩洛西访台纯粹是针对中国的挑衅#:俄罗斯总统普京16日在第十届莫斯科国际安全会议上发表讲话时指出，美国国会众议长佩洛西窜访中国台湾地区是一次精心策划的挑衅。普京说，美国再次蓄意火上浇油，使亚太地区局势复杂化。美国针对台湾的冒险行为不仅是某个不负责任政客的窜访，而是美国有目的、有意识破坏和扰乱地区及全球局势稳定的战略的一部分，是对他国主权和本国国际义务的蔑视。普京表示，西方集团正试图把类似北约的体系扩展到亚太地区，形成具有侵略性的军事政治联盟，如美英澳三边安全伙伴关系协定等。他表示，除此之外，西方正试图转移本国民众的注意力，将生活水平下降、失业、贫困等自身社会经济问题归咎于俄罗斯和中国等国家。\n -------------------------- \n 前序事件:\n 1)解放军全程跟踪迫使佩洛西专机绕道菲律宾\n 2)解放军空军苏-35战机穿越台湾海峡 \n 3)东部战区组织环台岛战备警巡",
      "佩洛西到哪了 \n -------------------------- \n 前序事件: \n 1)华春莹称中国身后是160多个国家 \n 2)佩洛西到哪了 \n 3)佩洛西访台纯粹是对中国的挑衅",
      "#外交部回应佩洛西最新涉台言论#:美国众议院议长佩洛西等参与亚洲之行的美议员日前举行记者会，佩洛西在会上公然声称“台湾是世界上最自由的国家之一”。她同时称此访事关台湾的民主，符合美国政府一贯的“一中政策”，并未寻求改变台海现状。对此，中国外交部发言人汪文斌12日表示，佩洛西的言论进一步证明其窜访中国台湾地区是对“台独”分裂势力的纵容支持。\n -------------------------- \n  前序事件: \n 1)台海局势观察 \n 2)武统 \n 3)佩洛西到哪了",
      "#台湾网友吐槽台当局赢了嘴炮苦了人民#:美国国会众议长佩洛西窜访台湾，严重挑衅了一个中国原则，向“台独”势力传递了错误的信号，致使台海局势骤然升温。台湾《联合报》的社论指出，佩洛西利用“亚洲行”寻找自己最后的秀场，民进党当局不仅给她提供了最佳的表演舞台，还安排了“各种剧目”供她“演出”，结果就是让台湾人民受伤害。\n -------------------------- \n  前序事件: \n 1)国台办回应蔡英文为佩洛西授勋 \n 2)台海局势观察 \n 3)佩洛西到哪了",
      "#王毅称佩洛西窜台是彻头彻尾的政治闹剧#:当地时间8月3日，中国国务委员兼外长王毅在柬埔寨出席东盟外长会时表示，美国国会众议长佩洛西窜访中国台湾地区是一场“彻头彻尾的闹剧”。玩火者绝对没有好下场，犯我中华者必将受到惩处。 \n -------------------------- \n  前序事件:\n 1)佩洛西窜访台湾六宗罪 \n 2)国防部回应取消中美两军三项交往活动 \n 3)台湾人民吐槽当局赢了嘴炮苦了人民",

      "#佩洛西窜访后台海进入新常态# \n -------------------------- \n 前序事件: \n 1)台海局势观察 \n 2)佩洛西丈夫在港公司或被列入国家制裁 \n 3)台湾网友吐槽台当局赢了嘴炮苦了人民"];





      var option = {
           title: {
             text: ''

           },
           tooltip: {

           trigger:"item",
           triggerOn:"mousemove",

           enterable:true,//鼠标是否可进入提示框浮层中
           formatter:formatterHover,//修改鼠标悬停显示的内容

           },
           xAxis: {
               type: 'category',
               boundaryGap: false,
               data: axisData,
               show:false
             },
           yAxis: {
               type: 'value',
               show:false
            },

            series: [
    {
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      symbolSize: 10,
      label: {
        show: true,
         position: 'right',
         color: '#000',
         fontSize: 12,

      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      data: data,
      links: links,
      lineStyle: {
        color: '#2f4554'
      },

      itemStyle: {
      color: function(params) {
        // 根据节点索引设置不同的颜色
        var colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff', '#ff8000', '#8000ff', '#00ff80', '#ff0080', '#80ff00', '#0080ff', '#ff80ff', '#ff0080', '#ffff80', '#80ffff', '#8000ff', '#0080ff', '#80ff00', '#ff8000', '#00ffff', '#ffff00', '#00ff00', '#ff0000', '#ff00ff'];
        return colors[params.dataIndex % colors.length];
      }
    },
    }]

      };

		function formatterHover(params){
		    if (params.dataType === 'edge') {
		          var weight = params.data.edgeDescriptions;
              return weight;
            } else {
              return params.name;
            }

        };



     myChart.setOption(option);

     var option_pie = {
  title: {
    text: '佩洛西访台情感分析',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      var data = params.data;
      return `${data.name}: ${data.value}%`;
    },
    position: ['50%', '50%'],  // 设置提示框位置在饼图中心
    textStyle: { fontSize: 14 },
    extraCssText: 'text-align: center;'  // 居中显示文本
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      selectedMode: 'single',
      data: [
        { id:0,value: 55.8, name: '消极' },
        { id:1,value: 26.5, name: '中性' },
        { id:2,value: 17.7, name: '积极' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        textBorderColor: '#fff',
        textBorderWidth: 2,
        textShadowBlur: 5,
        textShadowColor: '#000',
        formatter: function(params) {
          return params.name + '：' + params.value + '%'+'<br/>' + params.seriesName + '：' + params.percent + '%';
        },
        position: 'right'
      }
    }
  ]
};




     myChart_2.setOption(option_pie)
     const pieDescriptions = ["消极的评价中主要观点为:","中性的评价中主要观点为:","积极的评价中主要观点为:"]

     myChart_2.on('click', function(params) {
     console.log(params.data.id);
    var pieIndex = params.data.id;
    var pieDescription = pieDescriptions[pieIndex];
    document.getElementById("pie-description").innerText = pieDescription;

});



      },

      initChart() {
      // 初始化图表实例
      this.chartInstance = echarts.init(this.$refs.chart);

      // 设置初始数据和选项
      const options = {
        series: [
          {
            type: 'graph',

            // 其他配置项...
          }
        ]
      };

      // 将初始选项应用于图表
      this.chartInstance.setOption(options);

      this.chartInstance.on('click', (params) => {
        if (params.dataType === 'node') {
          // 当点击的是节点时
          this.updateChart(params.data.id);
          const nodeId = params.data.id;
          const nodeDescription = this.getNodeDescription(nodeId);
          document.getElementById("node-description").innerText = nodeDescription;
          this.updateChart(nodeId);

        } else if (params.dataType === 'edge') {
          // 当点击的是边时
          const edgeIndex = params.dataIndex;
          const edgeDescription = this.edgeDescriptions[edgeIndex];
          document.getElementById("edge-description").innerText = edgeDescription;
          document.getElementById("node-description").innerText = "";
        }
      });
    },
    updateChart(nodeId) {
      // 在选择器的选项改变时触发的方法
      // 获取选中的节点

      const selectedNodeID = this.selectedNode;
      const data = [
			{"id":0,"name": "佩洛西窜访台湾六宗罪", "value":"250"},
			{"id":1,"name": "解放军全程跟踪迫使佩洛西专机绕道菲律宾", "value":"350"},
			{"id":2,"name": "佩洛西访问台湾是危险的挑衅行为", "value":"150"},
			{"id":3,"name": "拜登回应佩洛西窜台", "value":"100"},
			{"id":4,"name": "国台办回应蔡英文为佩洛西授勋", "value":"450"},
			{"id":5,"name": "国防部回应取消中美两军三项交往活动", "value":"50"},
			{"id":6,"name": "美国游说公司借佩洛西窜台赚黑金", "value":"490"},
			{"id":7,"name": "解放军空军苏-35战机穿越台湾海峡","value":"180"},
			{"id":8,"name": "中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神","value":"300"},
			{"id":9,"name": "东部战区组织环台岛战备警巡","value":"0"},
			{"id":10,"name": "美官方忧中国对佩洛西访台设禁飞区","value":"530"},
			{"id":11,"name": "解放军在台岛以东设靶逼退里根号", "value":"400"},
			{"id":12,"name": "特朗普称佩洛西窜台是在帮中国圆梦", "value":"150"},
			{"id":13,"name": "台海局势观察", "value":"50"},
			{"id":14,"name": "华春莹称中国身后是160多个国家", "value":"500"},
			{"id":15,"name": "佩洛西丈夫在港公司或被列入国家制裁","value":"450"},
			{"id":16,"name": "武统","value":"0"},
			{"id":17,"name": "佩洛西访台纯粹是针对中国的挑衅", "value":"400"},
			{"id":18,"name": "佩洛西到哪了", "value":"320"},
			{"id":19,"name": "外交部回应佩洛西最新涉台言论", "value":"150"},
			{"id":20,"name": "台湾网友吐槽台当局赢了嘴炮苦了人民", "value":"100"},
			{"id":21,"name": "王毅称佩洛西窜台是彻头彻尾的政治闹剧", "value":"350"},
			{"id":22,"name": "佩洛西窜访后台海进入新常态", "value":"250"},

		];

		   const links_node = require('./links.json');
       

       const links_node_1 =  [
			{'source': 16, 'target': 18, 'weight': 0.5196008261589741, 'edgeDescriptions': "source:武统[超话], target:佩洛西到哪了[超话], weight:0.5196008261589741"},
{'source': 14, 'target': 18, 'weight': 0.37693564877349817, 'edgeDescriptions': 'source:华春莹称中国身后是160多个国家, target:佩洛西到哪了[超话], weight:0.37693564877349817'},
{'source': 17, 'target': 18, 'weight': 0.02235052760056439, 'edgeDescriptions': 'source:佩洛西访台纯粹是针对中国的挑衅, target:佩洛西到哪了[超话], weight:0.02235052760056439'},
{'source': 1, 'target': 17, 'weight': 0.8540949316170554, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:佩洛西访台纯粹是针对中国的挑衅, weight:0.8540949316170554'},
{'source': 7, 'target': 17, 'weight': 0.7706461639527741, 'edgeDescriptions': 'source:解放军空军苏-35战机穿越台湾海峡, target:佩洛西访台纯粹是针对中国的挑衅, weight:0.7706461639527741'},
{'source': 9, 'target': 17, 'weight': 0.5740625224922626, 'edgeDescriptions': 'source:东部战区组织环台岛战备警巡, target:佩洛西访台纯粹是针对中国的挑衅, weight:0.5740625224922626'},
{'source': 13, 'target': 22, 'weight': 0.880620879077388, 'edgeDescriptions': 'source:台海局势观察, target:佩洛西窜访后台海进入新常态, weight:0.880620879077388'},
{'source': 20, 'target': 22, 'weight': 0.8445121607556838, 'edgeDescriptions': 'source:台湾网友吐槽台当局赢了嘴炮苦了人民, target:佩洛西窜访后台海进入新常态, weight:0.8445121607556838'},
{'source': 15, 'target': 22, 'weight': 0.8312619576031223, 'edgeDescriptions': 'source:佩洛西丈夫在港公司或被列入国家制裁, target:佩洛西窜访后台海进入新常态, weight:0.8312619576031223'},
{'source': 8, 'target': 10, 'weight': 0.07442906574394464, 'edgeDescriptions': 'source:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, target:美官方忧中国对佩洛西访台设禁飞区, weight:0.07442906574394464'},
{'source': 9, 'target': 10, 'weight': 0.04811509532296566, 'edgeDescriptions': 'source:东部战区组织环台岛战备警巡, target:美官方忧中国对佩洛西访台设禁飞区, weight:0.04811509532296566'},
{'source': 5, 'target': 10, 'weight': 0.040611173924583424, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:美官方忧中国对佩洛西访台设禁飞区, weight:0.040611173924583424'},
{'source': 4, 'target': 20, 'weight': 0.7614284541187915, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:台湾网友吐槽台当局赢了嘴炮苦了人民, weight:0.7614284541187915'},
{'source': 13, 'target': 20, 'weight': 0.5107066811297256, 'edgeDescriptions': 'source:台海局势观察, target:台湾网友吐槽台当局赢了嘴炮苦了人民, weight:0.5107066811297256'},
{'source': 18, 'target': 20, 'weight': 0.24011231768338123, 'edgeDescriptions': 'source:佩洛西到哪了[超话], target:台湾网友吐槽台当局赢了嘴炮苦了人民, weight:0.24011231768338123'},
{'source': 1, 'target': 7, 'weight': 0.20576126614732285, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:解放军空军苏-35战机穿越台湾海峡, weight:0.20576126614732285'},
{'source': 5, 'target': 7, 'weight': 0.0994340063017855, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:解放军空军苏-35战机穿越台湾海峡, weight:0.0994340063017855'},
{'source': 6, 'target': 7, 'weight': 0.07810606357543211, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:解放军空军苏-35战机穿越台湾海峡, weight:0.07810606357543211'},
{'source': 0, 'target': 2, 'weight': 0.014542972385659473, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:佩洛西访问台湾是危险的挑衅行为, weight:0.014542972385659473'},
{'source': 1, 'target': 2, 'weight': 0.00029201948243492927, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:佩洛西访问台湾是危险的挑衅行为, weight:0.00029201948243492927'},
{'source': 1, 'target': 12, 'weight': 0.46166307485529967, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:特朗普称佩洛西窜台是在帮中国圆梦, weight:0.46166307485529967'},
{'source': 6, 'target': 12, 'weight': 0.08036890645586296, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:特朗普称佩洛西窜台是在帮中国圆梦, weight:0.08036890645586296'},
{'source': 3, 'target': 12, 'weight': 0.042872028054304, 'edgeDescriptions': 'source:拜登回应佩洛西窜台, target:特朗普称佩洛西窜台是在帮中国圆梦, weight:0.042872028054304'},
{'source': 7, 'target': 11, 'weight': 0.22426954857581866, 'edgeDescriptions': 'source:解放军空军苏-35战机穿越台湾海峡, target:解放军在台岛以东设靶逼退里根号, weight:0.22426954857581866'},
{'source': 10, 'target': 11, 'weight': 0.019987424729752602, 'edgeDescriptions': 'source:美官方忧中国对佩洛西访台设禁飞区, target:解放军在台岛以东设靶逼退里根号, weight:0.019987424729752602'},
{'source': 8, 'target': 11, 'weight': 0.017244744642508587, 'edgeDescriptions': 'source:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, target:解放军在台岛以东设靶逼退里根号, weight:0.017244744642508587'},
{'source': 5, 'target': 8, 'weight': 0.6092378174642795, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, weight:0.6092378174642795'},
{'source': 6, 'target': 8, 'weight': 0.2287203325181979, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, weight:0.2287203325181979'},
{'source': 4, 'target': 8, 'weight': 0.11969423324191546, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神, weight:0.11969423324191546'},
{'source': 5, 'target': 21, 'weight': 0.839584114858643, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:王毅称佩洛西窜台是彻头彻尾的政治闹剧, weight:0.839584114858643'},
{'source': 0, 'target': 21, 'weight': 0.7473468857229126, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:王毅称佩洛西窜台是彻头彻尾的政治闹剧, weight:0.7473468857229126'},
{'source': 20, 'target': 21, 'weight': 0.6672517336912567, 'edgeDescriptions': 'source:台湾网友吐槽台当局赢了嘴炮苦了人民, target:王毅称佩洛西窜台是彻头彻尾的政治闹剧, weight:0.6672517336912567'},
{'source': 2, 'target': 5, 'weight': 0.38445021645021604, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:国防部回应取消中美两军三项交往活动, weight:0.38445021645021604'},
{'source': 4, 'target': 5, 'weight': 0.29869571252080246, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:国防部回应取消中美两军三项交往活动, weight:0.29869571252080246'},
{'source': 3, 'target': 5, 'weight': 0.04202895803200468, 'edgeDescriptions': 'source:拜登回应佩洛西窜台, target:国防部回应取消中美两军三项交往活动, weight:0.04202895803200468'},
{'source': 0, 'target': 6, 'weight': 0.6996565620137147, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:美国游说公司借佩洛西窜台赚黑金, weight:0.6996565620137147'},
{'source': 4, 'target': 6, 'weight': 0.6588152611632695, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:美国游说公司借佩洛西窜台赚黑金, weight:0.6588152611632695'},
{'source': 5, 'target': 6, 'weight': 0.23098837271150918, 'edgeDescriptions': 'source:国防部回应取消中美两军三项交往活动, target:美国游说公司借佩洛西窜台赚黑金, weight:0.23098837271150918'},
{'source': 6, 'target': 13, 'weight': 0.013651051856411158, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:台海局势观察, weight:0.013651051856411158'},
{'source': 10, 'target': 13, 'weight': 0.0076716390252941705, 'edgeDescriptions': 'source:美官方忧中国对佩洛西访台设禁飞区, target:台海局势观察, weight:0.0076716390252941705'},
{'source': 12, 'target': 13, 'weight': 0.0038113475046721223, 'edgeDescriptions': 'source:特朗普称佩洛西窜台是在帮中国圆梦, target:台海局势观察, weight:0.0038113475046721223'},
{'source': 16, 'target': 19, 'weight': 0.2677540914966048, 'edgeDescriptions': 'source:武统[超话], target:外交部回应佩洛西最新涉台言论, weight:0.2677540914966048'},
{'source': 13, 'target': 19, 'weight': 0.20215637078727877, 'edgeDescriptions': 'source:台海局势观察, target:外交部回应佩洛西最新涉台言论, weight:0.20215637078727877'},
{'source': 18, 'target': 19, 'weight': 0.12556860341323353, 'edgeDescriptions': 'source:佩洛西到哪了[超话], target:外交部回应佩洛西最新涉台言论, weight:0.12556860341323353'},
{'source': 2, 'target': 9, 'weight': 0.13262221506631497, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:东部战区组织环台岛战备警巡, weight:0.13262221506631497'},
{'source': 1, 'target': 9, 'weight': 0.10715499237552215, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:东部战区组织环台岛战备警巡, weight:0.10715499237552215'},
{'source': 6, 'target': 9, 'weight': 0.02057912824526183, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:东部战区组织环台岛战备警巡, weight:0.02057912824526183'},
{'source': 2, 'target': 3, 'weight': 0.1591753695730336, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:拜登回应佩洛西窜台, weight:0.1591753695730336'},
{'source': 0, 'target': 3, 'weight': 0.020063616266981756, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:拜登回应佩洛西窜台, weight:0.020063616266981756'},
{'source': 1, 'target': 3, 'weight': 0.004379559274120872, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:拜登回应佩洛西窜台, weight:0.004379559274120872'},
{'source': 1, 'target': 14, 'weight': 0.5001984450726089, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:华春莹称中国身后是160多个国家, weight:0.5001984450726089'},
{'source': 0, 'target': 14, 'weight': 0.1369941730069882, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:华春莹称中国身后是160多个国家, weight:0.1369941730069882'},
{'source': 4, 'target': 14, 'weight': 0.11635066861618687, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:华春莹称中国身后是160多个国家, weight:0.11635066861618687'},
{'source': 4, 'target': 15, 'weight': 0.7000246938127569, 'edgeDescriptions': 'source:国台办回应蔡英文为佩洛西授勋, target:佩洛西丈夫在港公司或被列入国家制裁, weight:0.7000246938127569'},
{'source': 1, 'target': 15, 'weight': 0.2819954446120226, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:佩洛西丈夫在港公司或被列入国家制裁, weight:0.2819954446120226'},
{'source': 13, 'target': 15, 'weight': 0.24626642771804066, 'edgeDescriptions': 'source:台海局势观察, target:佩洛西丈夫在港公司或被列入国家制裁, weight:0.24626642771804066'},
{'source': 10, 'target': 16, 'weight': 0.4168516627447498, 'edgeDescriptions': 'source:美官方忧中国对佩洛西访台设禁飞区, target:武统[超话], weight:0.4168516627447498'},
{'source': 6, 'target': 16, 'weight': 0.3689627288098214, 'edgeDescriptions': 'source:美国游说公司借佩洛西窜台赚黑金, target:武统[超话], weight:0.3689627288098214'},
{'source': 14, 'target': 16, 'weight': 0.3490193788426085, 'edgeDescriptions': 'source:华春莹称中国身后是160多个国家, target:武统[超话], weight:0.3490193788426085'},
{'source': 1, 'target': 4, 'weight': 0.32317481829543226, 'edgeDescriptions': 'source:解放军全程跟踪迫使佩洛西专机绕道菲律宾, target:国台办回应蔡英文为佩洛西授勋, weight:0.32317481829543226'},
{'source': 2, 'target': 4, 'weight': 0.2735580633231504, 'edgeDescriptions': 'source:佩洛西访问台湾是危险的挑衅行为, target:国台办回应蔡英文为佩洛西授勋, weight:0.2735580633231504'},
{'source': 3, 'target': 4, 'weight': 0.08616097124552667, 'edgeDescriptions': 'source:拜登回应佩洛西窜台, target:国台办回应蔡英文为佩洛西授勋, weight:0.08616097124552667'},
{'source': 0, 'target': 1, 'weight': 0.010741453264749365, 'edgeDescriptions': 'source:佩洛西窜访台湾六宗罪, target:解放军全程跟踪迫使佩洛西专机绕道菲律宾, weight:0.010741453264749365'}


		];

    const nodeDescriptions = require('./node_description.json');

		const nodeDescriptions_1 = ["#佩洛西窜访台湾六宗罪#:首先就是佩洛西窜访台湾严重违反美方在中美三个联合公报中所作承诺，属于背信弃义。第二则是践踏了法制，佩洛西窜访台湾严重违反一个中国原则，这一原则是国际社会的普遍共识和公认的国际关系基本准则。第三就是破坏了区域和平，佩洛西窜台是美纵容支持“台独”分裂势力的最新例证，严重破坏台海和平和地区稳定，美国应该也必须为此负全部责任。第四则是佩洛西涉嫌干涉中国内政。第五则是佩洛西进行的政治操弄，佩洛西所作所为绝不是为了捍卫民主，而是打着“民主”的幌子，侵犯中国主权、破坏中国稳定、遏制中国发展，是赤裸裸的政治操弄。第六则是她以权谋私，佩洛西妄图借打“台湾牌”获得“政治加分”，留下所谓政治遗产。",

		"#解放军全程跟踪迫使佩洛西专机绕道菲律宾#:佩洛西专机起飞后，解放军全程跟踪监控，迫使佩洛西专机舍近求远，绕到菲律宾上空后再回到台湾松山机场\n -------------------------- \n 前序事件：\n 1)佩洛西窜访台湾六宗罪",
		"安理会轮值主席、中国常驻联合国代表张军就安理会8月工作在纽约联合国总部向媒体吹风时，就台湾问题、美国众议长佩洛西访台表明立场。安理会轮值主席、中国常驻联合国代表张军就安理会8月工作在纽约联合国总部向媒体吹风时，就台湾问题、美国众议长佩洛西访台表明立场。\n -------------------------- \n 前序事件：\n 1)佩洛西窜访台湾六宗罪 \n 2)佩洛西访问台湾是危险的挑衅行为",
		"#拜登回应佩洛西窜台#:众议院议长南希·佩洛西窜访台湾后，国际局势紧张加剧。拜登表示，他“关心”但“不担心”中国在台湾附近的军事行动，“我不感到忧虑，我注意到中方的行动部署得十分频繁，我不认为他们会有更进一步的行动。\n -------------------------- \n 前序事件: \n 1)佩洛西窜访台湾六宗罪\n 2)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 3)佩洛西访问台湾是危险的挑衅行动",

		"#国台办回应蔡英文为佩洛西授勋#:国台办负责人马晓光应询说，佩洛西窜访台湾是台美实质关系升级的重大事件。佩此次窜台是其一贯顽固挺台反华错误言行的进一步发展，性质十分恶劣。我们严厉谴责和强烈抗议，并已宣布一系列坚决有力的反制措施。民进党当局在“倚美谋独”的分裂道路上一条道走到黑，留下一连串奴颜婢膝的劣迹，必将付出越来越难以承受的代价，只能以失败告终。至于那个所谓“勋章”，大家都知道，以“撒谎、欺骗、偷盗”为荣、品行恶劣的蓬佩奥之流接受过此类“勋章”，可以想象民进党当局给佩洛西“授勋”是怎么一场政治闹剧。\n -------------------------- \n 前序事件: \n 1)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 2)佩洛西访问台湾是危险的挑衅行动 \n 3)拜登回应佩洛西窜台",
		"#国防部回应取消中美两军三项交往活动#:国防部发言人吴谦作出回应，当前台海形势紧张局面，完全是美方主动挑衅、一手制造的，美方必须为此承担全部责任和严重后果。中方曾就中美两国两军关系、台湾问题等表明严正立场，特别是针对美国会众议长佩洛西窜访多次严正交涉，美方却说一套、做一套，纵容支持佩窜访，蓄意制造台海紧张局势。吴谦表示，针对美方恶劣挑衅行径，中方宣布了八项反制措施，其中包括取消安排中美两军战区领导通话、取消中美国防部工作会晤、取消中美海上军事安全磋商机制会议。中方有关反制措施是对美台挑衅的必要警示，对国家主权和安全的正当捍卫，完全合理、恰当适度。\n -------------------------- \n  前序事件: \n 1)佩洛西访问台湾是危险的挑衅行动 \n 2)拜登回应佩洛西窜台\n 3)国台办回应蔡英文为佩洛西授勋",
		 "#美国游说公司借佩洛西窜台赚黑金#:有台灣網友爆料稱“台當局支付300萬美元游說佩洛西”，但該說法被台灣地區主管“外交”的部門矢口否認。@起底工作室 順藤摸瓜，調查了網友提到的格普哈特公司（Gephardt）和台北經濟文化代表處（TECRO）。據美國司法部數據，TECRO早在2013年就與格普哈特簽訂了合同，每月需支付相應的服務費并一直保持至今，共計支付384萬美元。此外，交易記錄中還有多筆26美元的賬單，這是格普哈特到美國國會往返的出租車費。即便是從台灣當局那賺得盆滿鉢滿，美國游說公司也不忘記報銷車費。\n -------------------------- \n 前序事件: \n 1)佩洛西窜访台湾六宗罪 \n 2)国台办回应蔡英文为佩洛西授勋 \n 3)国防部回应取消中美两军三项交往活动",
		  "#解放军空军苏-35战机穿越台湾海峡#:中国人民解放军空军苏-35战机正在穿越台湾海峡。\n -------------------------- \n 前序事件: \n 1)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 2)国防部回应取消中美两军三项交往活动 \n 3)美国游说公司借佩洛西窜台赚黑金",
      "#中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神#:中国驻美国大使秦刚在出席福布斯第四届美中商业论坛时指出，美国众议长佩洛西执意窜访中国台湾地区严重违背了美方在台湾问题上的承诺，有违契约精神。秦刚表示，美国众议长佩洛西窜访中国台湾地区严重违反一个中国原则和中美三个联合公报规定，严重冲击中美关系政治基础，严重侵犯中国主权和领土完整，严重破坏台海和平稳定。\n -------------------------- \n 前序事件:\n 1)国台办回应蔡英文为佩洛西授勋 \n 2)国防部回应取消中美两军三项交往活动 \n 3)美国游说公司借佩洛西窜台赚黑金",


      "#东部战区组织环台岛战备警巡#:中国人民解放军东部战区按计划于4月8日至10日在台湾海峡和台岛北部、南部、台岛以东海空域组织环台岛战备警巡和“联合利剑”演习。国防大学国家安全学院副教授张弛接受中新社记者专访时指出，此次全军兵种联合行动，塑造全向围岛慑压态势，山东舰航母编队出第一岛链进行部署，战巡、演习相结合可能会成为解放军今后惩戒“台独”分裂势力的新模式。\n -------------------------- \n  前序事件:\n 1)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 2)佩洛西访问台湾是危险的挑衅行为 \n 3)美国游说公司借佩洛西窜台赚黑金",
      "#美官方忧中国对佩洛西访台设禁飞区#:美国不具名官员向美国有线电视网（CNN）透露，拜登政府官员担心，在美国众议长佩洛西可能访问台湾之前，中国可能寻求在台湾岛上空划设禁飞区，还可能派出战机进一步进入台湾自行宣布的“防空识别区”。\n -------------------------- \n 前序事件: \n 1)国防部回应取消中美两军三项交往活动 \n 2)中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神 \n 3)东部战区组织环台岛战备警巡",
      "#解放军在台岛以东设靶逼退里根号#:中国人民解放军在台岛周边海空域进行重要军事演训行动，并组织实弹射击。国防大学教授孟祥青介绍：此次台海演习，①航母编队首次威慑性演练，核潜艇参演，构建了海上立体式的作战体系；②首次在台岛以东设置靶场，将当时给佩洛西护航的美国“里根”号航母舰，逼退约几百公里。\n -------------------------- \n 前序事件: \n 1)国防部回应取消中美两军三项交往活动 \n 2)中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神 \n 3)美官方忧中国对佩洛西访台设禁飞区",

      "#特朗普称佩洛西窜台是在帮中国圆梦#:特朗普声称，佩洛西窜访台湾“助力了中国梦”，因为她给了中方“一直在寻找的借口”，中方现在可以去做他们正在做的任何事情。特朗普还强调，如果美国在特朗普的领导下，这种事情永远不会发生。特朗普在佩洛西窜台之前，就明确表示了反对。特朗普的反对并不是为了美国好，根本目的还是为了自己牟利，这是共和党人的一个策略，佩洛西坚持要去，共和党人就会站在对立面。\n -------------------------- \n  前序事件: \n 1)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 2)拜登回应佩洛西窜台 \n 3)东部战区组织环岛战备警巡",
      "#台海局势观察#:8月2日晚开始，中国人民解放军东部战区陆续在台岛周边开展一系列联合军事行动，在台岛北部、西南、东南海空域进行联合海空演训，将在台湾海峡进行远程火力实弹射击。 \n -------------------------- \n  前序事件: \n 1)美国游说公司借佩洛西窜台赚黑金 \n 2)美官方忧中国对佩洛西访台设禁飞区 \n 3)特朗普称佩洛西窜台是在帮中国圆梦",
      "#华春莹称中国身后是160多个国家#:中国外交部发言人华春莹8月5日在例行记者会上称，佩洛西窜台事件发生以来，已有160多个国家发出了正义的声音。现在中国的身后是160多个国家，共同站在历史正确的一边，站在公平正义的一边。 \n -------------------------- \n 前序事件: \n 1)佩洛西窜访台湾六宗罪 \n 2)解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 3)国台办回应蔡英文为佩洛西授勋",

      "#佩洛西丈夫在港公司或被列入国家制裁#:外交部周五宣布，针对美国国会众议长佩洛西恶劣挑衅行径，对佩洛西及其直系亲属依法采取制裁措施。\n -------------------------- \n 前序事件: \n 1) 解放军全程跟踪迫使佩洛西专机绕道菲律宾 \n 2)国台办回应蔡英文为佩洛西授勋 \n 3)台海局势观察",
      "武统 \n -------------------------- \n 前序事件: \n 1)美国游说公司借佩洛西窜台赚黑金 \n 2)美官方忧中国对佩洛西访台设禁飞区 \n 3)华春莹称中国身后是160多个国家",
      "#佩洛西访台纯粹是针对中国的挑衅#:俄罗斯总统普京16日在第十届莫斯科国际安全会议上发表讲话时指出，美国国会众议长佩洛西窜访中国台湾地区是一次精心策划的挑衅。普京说，美国再次蓄意火上浇油，使亚太地区局势复杂化。美国针对台湾的冒险行为不仅是某个不负责任政客的窜访，而是美国有目的、有意识破坏和扰乱地区及全球局势稳定的战略的一部分，是对他国主权和本国国际义务的蔑视。普京表示，西方集团正试图把类似北约的体系扩展到亚太地区，形成具有侵略性的军事政治联盟，如美英澳三边安全伙伴关系协定等。他表示，除此之外，西方正试图转移本国民众的注意力，将生活水平下降、失业、贫困等自身社会经济问题归咎于俄罗斯和中国等国家。\n -------------------------- \n 前序事件:\n 1)解放军全程跟踪迫使佩洛西专机绕道菲律宾\n 2)解放军空军苏-35战机穿越台湾海峡 \n 3)东部战区组织环台岛战备警巡",
      "佩洛西到哪了 \n -------------------------- \n 前序事件: \n 1)华春莹称中国身后是160多个国家 \n 2)佩洛西到哪了 \n 3)佩洛西访台纯粹是对中国的挑衅",
      "#外交部回应佩洛西最新涉台言论#:美国众议院议长佩洛西等参与亚洲之行的美议员日前举行记者会，佩洛西在会上公然声称“台湾是世界上最自由的国家之一”。她同时称此访事关台湾的民主，符合美国政府一贯的“一中政策”，并未寻求改变台海现状。对此，中国外交部发言人汪文斌12日表示，佩洛西的言论进一步证明其窜访中国台湾地区是对“台独”分裂势力的纵容支持。\n -------------------------- \n  前序事件: \n 1)台海局势观察 \n 2)武统 \n 3)佩洛西到哪了",
      "#台湾网友吐槽台当局赢了嘴炮苦了人民#:美国国会众议长佩洛西窜访台湾，严重挑衅了一个中国原则，向“台独”势力传递了错误的信号，致使台海局势骤然升温。台湾《联合报》的社论指出，佩洛西利用“亚洲行”寻找自己最后的秀场，民进党当局不仅给她提供了最佳的表演舞台，还安排了“各种剧目”供她“演出”，结果就是让台湾人民受伤害。\n -------------------------- \n  前序事件: \n 1)国台办回应蔡英文为佩洛西授勋 \n 2)台海局势观察 \n 3)佩洛西到哪了",
      "#王毅称佩洛西窜台是彻头彻尾的政治闹剧#:当地时间8月3日，中国国务委员兼外长王毅在柬埔寨出席东盟外长会时表示，美国国会众议长佩洛西窜访中国台湾地区是一场“彻头彻尾的闹剧”。玩火者绝对没有好下场，犯我中华者必将受到惩处。 \n -------------------------- \n  前序事件:\n 1)佩洛西窜访台湾六宗罪 \n 2)国防部回应取消中美两军三项交往活动 \n 3)台湾人民吐槽当局赢了嘴炮苦了人民",

      "#佩洛西窜访后台海进入新常态# \n -------------------------- \n 前序事件: \n 1)台海局势观察 \n 2)佩洛西丈夫在港公司或被列入国家制裁 \n 3)台湾网友吐槽台当局赢了嘴炮苦了人民"];


      // 根据选项内容进行相应的操作
      // 更新数据或选项等...

       let selectedNodes = []
       let selectedLinks = []



      links_node.forEach(link => {

      if (link.target === this.selectedNode) {
        if (selectedNodes.indexOf(link.source) < 0) {
          selectedNodes.push(data.find(item => item.id ===link.source))
          selectedLinks.push({
          source: data.find(item => item.id ===link.source).name,
          target: data.find(item => item.id ===link.target).name,
          value: link.weight
          }
          )
        }
      }
    })
    selectedNodes.push(data.find(item => item.id === this.selectedNode))
    links_node.forEach(link => {

      if (link.source === this.selectedNode) {
        if (selectedNodes.indexOf(link.target) < 0) {
          selectedNodes.push(data.find(item => item.id ===link.target))
          selectedLinks.push({
          source: data.find(item => item.id ===link.source).name,
          target: data.find(item => item.id ===link.target).name,
          value: link.weight
          })
        }
      }
    })

   const centerX = this.chartInstance.getWidth() / 4;
  const centerY = this.chartInstance.getHeight() / 2;
  const layoutRadius = Math.min(centerX, centerY) / 2; // 假设布局半径为图表中心的一半
  const xScaleFactor = 0.5;

  let angleIncrement = (2 * Math.PI) / selectedNodes.length; // 为了均匀分布，对角度按节点数量分割

  selectedNodes.forEach((node, idx) => {
    if (node.id === selectedNodeID) {
      // 如果节点是被选中的节点，则将它置于中心位置
      node.x = centerX;
      node.value = centerY;
    } else {
      // 其他节点按照环形布局排布
      let angle = angleIncrement * idx; // 计算当前节点的角度
      node.x = centerX + layoutRadius * Math.cos(angle)*xScaleFactor; // 通过角度和半径计算 x 坐标
      node.value = centerY + layoutRadius * Math.sin(angle); // 通过角度和半径计算 y 坐标
    }
    node.fixed = true; // 将节点的位置固定
  });

    const links_new = selectedLinks.map(link => {
  const sourceIndex = selectedNodes.findIndex(node => node.name === link.source);
  const targetIndex = selectedNodes.findIndex(node => node.name === link.target);


  return {
    source: sourceIndex,
    target: targetIndex,
    value: link.weight
  };
});


      // 重新绘制图表
      var options = {
           title: {
             text: ''

           },

           xAxis: {
               type: 'category',
               boundaryGap: false,

               show:false
             },
           yAxis: {
               type: 'value',
               show:false
            },

            series: [
    {
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'cartesian2d',
      symbolSize: 10,

      label: {
        show: true,
         position: 'right',
         color: '#000',
         fontSize: 12,

      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      data: selectedNodes,
      links: links_new,
      lineStyle: {
        color: '#2f4554'
      },

      itemStyle: {
      color: function(params) {
        // 根据节点索引设置不同的颜色
        var colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff', '#ff8000', '#8000ff', '#00ff80', '#ff0080', '#80ff00', '#0080ff', '#ff80ff', '#ff0080', '#ffff80', '#80ffff', '#8000ff', '#0080ff', '#80ff00', '#ff8000', '#00ffff', '#ffff00', '#00ff00', '#ff0000', '#ff00ff'];
        return colors[params.dataIndex % colors.length];
      }
    },
    }]
    }
      this.chartInstance.setOption(options,true);

      const nodeIndex = data.findIndex(item => item.id === nodeId);
      if (nodeIndex >= 0) {
        var nodeDescription = nodeDescriptions[nodeIndex];
        document.getElementById("node-description").innerText = nodeDescription;
      }

      function formatterHover(params){
		    if (params.dataType === 'edge') {
		          var weight = params.data.edgeDescriptions;
              return weight;
            } else {
              return params.name;
            }

        };



    },











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
</style>











