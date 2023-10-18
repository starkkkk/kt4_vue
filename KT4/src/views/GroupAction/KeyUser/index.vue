<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

        <el-form ref="form" :model="form" :rules="rules" label-width="120px">

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
            <span v-if ="YQ_data.variety==1">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <!--功能描述-->
                  <div class="lodash-content">
                    <h2>功能描述</h2>
                     <span style="font-size: 18px; line-height: 30px">
                      实现群体行为中的关键个体发现技术。通过个体时序关联行为统一表征功能，并在行为挖掘的基础上支持个体开放意图的分析与抽取。
                      在此基础上定位核心用户和群体行为煽动者。
                    </span>

                  </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h2>
                  关键个体发现整体研究框架
                </h2>
              </el-col>
              <el-col>
                <div style="text-align: center;">
                  <span>
                    <img src="../figure/framework_keyuser.png" width="700" height="377">
                  </span>
                </div>
              </el-col>
<!--              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--              <h2>事件发现</h2>-->
<!--              <span style="font-size: 18px; line-height: 30px">-->
<!--              </span>-->
<!--                <el-table :data="tableData_event_pelosi" style="width: 100%" border>-->
<!--                  <el-table-column prop="column1" label="事件名称"></el-table-column>-->
<!--                  <el-table-column prop="column2" label="事件包含微博数"></el-table-column>-->
<!--&lt;!&ndash;                  <el-table-column prop="column3" label="开始时间"></el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;                  <el-table-column prop="column4" label="结束时间"></el-table-column>&ndash;&gt;-->
<!--                </el-table>-->
<!--                <span style="font-size: 18px; line-height: 30px">-->
<!--                  <br>-->
<!--                  事件词云展示-->
<!--                    <br>-->
<!--                  </span>-->
<!--                <label for="scene">选择事件：</label>-->
<!--                  <el-select id="scene" v-model="selectedScene3" @change="displayTable">-->
<!--                    <el-option value="请选择事件">请选择事件</el-option>-->
<!--                    <el-option value="佩洛西窜访台湾六宗罪">佩洛西窜访台湾六宗罪</el-option>-->
<!--                    <el-option value="外交部回应佩洛西或今晚抵达台湾">外交部回应佩洛西或今晚抵达台湾</el-option>-->
<!--                    <el-option value="解放军全程跟踪迫使佩洛西专机绕道菲律宾">解放军全程跟踪迫使佩洛西专机绕道菲律宾</el-option>-->
<!--                    <el-option value="拜登回应佩洛西窜台">拜登回应佩洛西窜台</el-option>-->
<!--                    <el-option value="国台办回应蔡英文为佩洛西授勋">国台办回应蔡英文为佩洛西授勋</el-option>-->
<!--                    <el-option value="国防部回应取消中美两军三项交往活动">国防部回应取消中美两军三项交往活动</el-option>-->
<!--                    <el-option value="美国游说公司借佩洛西窜台赚黑金">美国游说公司借佩洛西窜台赚黑金</el-option>-->
<!--                    <el-option value="解放军空军苏-35战机穿越台湾海峡">解放军空军苏-35战机穿越台湾海峡</el-option>-->
<!--                    <el-option value="中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神">中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神</el-option>-->
<!--                    <el-option value="若佩洛西敢去台湾那我们拭目以待">若佩洛西敢去台湾那我们拭目以待</el-option>-->
<!--                    <el-option value="东部战区组织环台岛战备警巡">东部战区组织环台岛战备警巡</el-option>-->
<!--                    <el-option value="美官方忧中国对佩洛西访台设禁飞区">美官方忧中国对佩洛西访台设禁飞区</el-option>-->
<!--                    <el-option value="解放军在台岛以东设靶逼退里根号">解放军在台岛以东设靶逼退里根号</el-option>-->
<!--                    <el-option value="践行二十大 青春心向党">践行二十大 青春心向党</el-option>-->
<!--                    <el-option value="特朗普称佩洛西窜台是在帮中国圆梦">特朗普称佩洛西窜台是在帮中国圆梦</el-option>-->
<!--                    <el-option value="台海局势观察">台海局势观察</el-option>-->
<!--                    <el-option value="华春莹称中国身后是160多个国家">华春莹称中国身后是160多个国家</el-option>-->
<!--                    <el-option value="佩洛西丈夫在港公司或被列入国家制裁">佩洛西丈夫在港公司或被列入国家制裁</el-option>-->
<!--                    <el-option value="武统">武统</el-option>-->
<!--                    <el-option value="佩洛西访台纯粹是针对中国的挑衅">佩洛西访台纯粹是针对中国的挑衅</el-option>-->
<!--                    <el-option value="佩洛西到哪了">佩洛西到哪了</el-option>-->
<!--                    <el-option value="外交部回应佩洛西最新涉台言论">外交部回应佩洛西最新涉台言论</el-option>-->
<!--                    <el-option value="台湾网友吐槽台当局赢了嘴炮苦了人民">台湾网友吐槽台当局赢了嘴炮苦了人民</el-option>-->
<!--                    <el-option value="王毅称佩洛西窜台是彻头彻尾的政治闹剧">王毅称佩洛西窜台是彻头彻尾的政治闹剧</el-option>-->
<!--                    <el-option value="解放军继续位台岛周边实战化演训">解放军继续位台岛周边实战化演训</el-option>-->
<!--                    <el-option value="佩洛西窜访后台海进入新常态">佩洛西窜访后台海进入新常态</el-option>-->
<!--                  </el-select>-->
<!--                <template v-if="selectedScene3 === '请选择事件'">-->
<!--                  </template>-->
<!--                  <template v-if="selectedScene3 === '佩洛西窜访台湾六宗罪'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_1.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '外交部回应佩洛西或今晚抵达台湾'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_2.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '解放军全程跟踪迫使佩洛西专机绕道菲律宾'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_3.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '佩洛西访问台湾是危险的挑衅行为'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_4.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '拜登回应佩洛西窜台'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_5.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '国台办回应蔡英文为佩洛西授勋'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_6.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '国防部回应取消中美两军三项交往活动'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_7.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '美国游说公司借佩洛西窜台赚黑金'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_8.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '解放军空军苏-35战机穿越台湾海峡'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_9.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_10.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '若佩洛西敢去台湾那我们拭目以待'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_11.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '东部战区组织环台岛战备警巡'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_12.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '美官方忧中国对佩洛西访台设禁飞区'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_13.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '解放军在台岛以东设靶逼退里根号'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_14.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '践行二十大 青春心向党'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_15.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '特朗普称佩洛西窜台是在帮中国圆梦'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_16.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '台海局势观察'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_17.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '华春莹称中国身后是160多个国家'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_18.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '佩洛西丈夫在港公司或被列入国家制裁'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_19.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '武统'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_20.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '佩洛西访台纯粹是针对中国的挑衅'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_21.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '佩洛西到哪了'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_22.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '外交部回应佩洛西最新涉台言论'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_23.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '台湾网友吐槽台当局赢了嘴炮苦了人民'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_24.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '王毅称佩洛西窜台是彻头彻尾的政治闹剧'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_25.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '解放军继续位台岛周边实战化演训'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_26.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--                  <template v-if="selectedScene3 === '佩洛西窜访后台海进入新常态'">-->
<!--                     <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                       <span>-->
<!--                         <img src="../figure/wordcloud_27.png" width="400" height="200" />-->
<!--                       </span>-->
<!--                     </el-col>-->
<!--                   </template>-->
<!--              </el-col>-->
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div >
                <h2>核心人物定位</h2>
                  <span style="font-size: 18px; line-height: 30px">
                  </span>
                  <label for="scene">选择事件：</label>
                  <el-select id="scene" v-model="selectedScene2" @change="displayTable">
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
<!--                    <el-option value="践行二十大 青春心向党">践行二十大 青春心向党</el-option>-->
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
                  <template v-if="selectedScene2 === '请选择事件'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="关键指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>
                  <template v-if="selectedScene2 === '佩洛西窜访台湾六宗罪'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_keyuser_pelosi1" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="关键指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>
                  <template v-if="selectedScene2 === '外交部回应佩洛西或今晚抵达台湾'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_keyuser_pelosi2" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="关键指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                      <span>
                        <br>
                        <h4>核心人物示例</h4>
                        <strong>用户昵称：</strong>拆台CT <br>
                        <strong>粉丝：</strong> 67.4万  <strong>关注：</strong>615 <br>
                        <strong>个人简介：</strong>民间脱口秀艺术家，不骂人。如果您感觉被冒犯了，请先反思自己的问题。<br>
                        <strong>代表微博：</strong>#佩洛西行程#

                          8月2日，台湾ETtoday新闻云发布消息称，佩洛西将在今晚10时20分抵达松山机场，有消息称，佩洛西她将夜宿台北信义区君悦酒店或台北中山区万豪酒店。

                          报道还援引消息称，佩洛西一行人有40人将四散在台北市不同饭店，台外事部门声称“一切保密”。

                          就此事，君悦酒店回应称，针对佩洛西访台一事君悦也相当关注，但“一直到现在都没收到任何讯息，目前跟业务确认过也说没有看到名单，若君悦有收到贵宾下榻情事，势必会需要了解贵宾相关信息，维安都会严阵以待，但目前馆内一切正常。”

                          另外，位于台北中山区大直的万豪酒店，截至出稿时间仍未接听电话。

                          据了解，台北君悦酒店是台北信义区五星级酒店，1990年开幕至今已有逾30年历史，拥有全台最多的850间客房及套房。今年3月美国前国务卿蓬佩奥访台，就选择下榻台北君悦。

                          而台北万豪酒店曾在2020年接待时任美国副国务卿克拉奇、时任美国卫生部长阿札尔，饭店保有隐密性，不会碰到一般旅客，且位置与松山机场仅隔一条河，距离“美国在台协会”在内湖办事处更仅15分钟车程，“是美国官员访台最爱”。

                          #佩洛西访问台湾是危险的挑衅行为#
                        <br>
                      </span>
                    </el-col>
                  </template>
                  <template v-if="selectedScene2 === '解放军全程跟踪迫使佩洛西专机绕道菲律宾'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi3" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>
                    <template v-if="selectedScene2 === '佩洛西访问台湾是危险的挑衅行为'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi4" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>
                    <template v-if="selectedScene2 === '解放军继续位台岛周边实战化演训'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi5" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '台湾网友吐槽台当局赢了嘴炮苦了人民'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi6" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '王毅称佩洛西窜台是彻头彻尾的政治闹剧'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi7" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '佩洛西窜访后台海进入新常态'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi8" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '外交部回应佩洛西最新涉台言论'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi9" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '佩洛西访台纯粹是针对中国的挑衅'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi10" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '佩洛西到哪了'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi11" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '武统'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi12" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '佩洛西丈夫在港公司或被列入国家制裁'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi13" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '华春莹称中国身后是160多个国家'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi14" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '台海局势观察'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi15" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '特朗普称佩洛西窜台是在帮中国圆梦'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi16" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '践行二十大 青春心向党'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi17" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '解放军在台岛以东设靶逼退里根号'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi18" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '美官方忧中国对佩洛西访台设禁飞区'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi19" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '解放军空军苏-35战机穿越台湾海峡'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi20" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '东部战区组织环台岛战备警巡'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi21" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '若佩洛西敢去台湾那我们拭目以待'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi22" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi23" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '美国游说公司借佩洛西窜台赚黑金'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi24" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '国防部回应取消中美两军三项交往活动'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi25" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '国台办回应蔡英文为佩洛西授勋'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi26" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>

                    <template v-if="selectedScene2 === '拜登回应佩洛西窜台'">
                      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-table :data="tableData_keyuser_pelosi27" style="width: 100%" border>
<!--                          <el-table-column prop="column1" label="用户id"></el-table-column>-->
                          <el-table-column prop="column2" label="用户昵称"></el-table-column>
                          <el-table-column prop="column3" label="关键指数"></el-table-column>
                          <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                        </el-table>
                      </el-col>
                    </template>
              </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div >
                <h2>群体行为煽动者定位</h2>
                  <label for="scene">选择事件：</label>
                  <el-select id="scene" v-model="selectedScene" @change="displayTable">
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
<!--                    <el-option value="践行二十大 青春心向党">践行二十大 青春心向党</el-option>-->
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
                <span style="font-size: 18px; line-height: 30px">
                  <br>
                  正面支持
                    <br>
                  </span>
                  <template v-if="selectedScene === '请选择事件'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>
                  <template v-if="selectedScene === '佩洛西窜访台湾六宗罪'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi1" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '外交部回应佩洛西或今晚抵达台湾'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi2" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
<!--                      <div v-if="selectedUser">-->
<!--                        凤凰卫视-->
<!--                      </div>-->
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '解放军全程跟踪迫使佩洛西专机绕道菲律宾'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi3" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '佩洛西访问台湾是危险的挑衅行为'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi4" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '解放军继续位台岛周边实战化演训'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi5" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '台湾网友吐槽台当局赢了嘴炮苦了人民'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi6" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '王毅称佩洛西窜台是彻头彻尾的政治闹剧'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi7" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '佩洛西窜访后台海进入新常态'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi8" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '外交部回应佩洛西最新涉台言论'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi9" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '佩洛西访台纯粹是针对中国的挑衅'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi10" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '佩洛西到哪了'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi11" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '武统'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi12" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '佩洛西丈夫在港公司或被列入国家制裁'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi13" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '华春莹称中国身后是160多个国家'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi14" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '台海局势观察'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi15" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '特朗普称佩洛西窜台是在帮中国圆梦'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi16" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '践行二十大 青春心向党'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi17" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '解放军在台岛以东设靶逼退里根号'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi18" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '美官方忧中国对佩洛西访台设禁飞区'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi19" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '解放军空军苏-35战机穿越台湾海峡'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi20" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '东部战区组织环台岛战备警巡'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi21" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '若佩洛西敢去台湾那我们拭目以待'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi22" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi23" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '美国游说公司借佩洛西窜台赚黑金'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi24" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '国防部回应取消中美两军三项交往活动'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi25" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '国台办回应蔡英文为佩洛西授勋'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi26" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>

                  <template v-if="selectedScene === '拜登回应佩洛西窜台'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_firebrand_pos_pelosi27" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                      </el-table>
                    </el-col>
                  </template>
                <span style="font-size: 18px; line-height: 30px">
                  <br>
                  负面反对
                  <br>
                  </span>
                <template v-if="selectedScene === '请选择事件'">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <el-table :data="tableData_" style="width: 100%" border>
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
                        <el-table-column prop="column2" label="用户昵称"></el-table-column>
                        <el-table-column prop="column3" label="煽动指数"></el-table-column>
                        <el-table-column label="用户详情">
                          <div @click="showbox = false">
                        <div style="text-align: center;">
                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox=true">显示详情</el-button>
                        </div>
                        </div>
                        </el-table-column>
                      </el-table>
                    </el-col>
                  </template>
                <template v-if="selectedScene === '佩洛西窜访台湾六宗罪'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi1" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
<!--                      <el-table-column label="用户详情">-->
<!--                          <div @click="showbox = false">-->
<!--                        <div style="text-align: center;">-->
<!--                          <el-button type="primary" round icon="el-icon-search" @click.stop="showbox=true">显示详情</el-button>-->
<!--                        </div>-->
<!--                        </div>-->
<!--                        </el-table-column>-->
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '外交部回应佩洛西或今晚抵达台湾'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi2" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '解放军全程跟踪迫使佩洛西专机绕道菲律宾'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi3" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '佩洛西访问台湾是危险的挑衅行为'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi4" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '解放军继续位台岛周边实战化演训'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi5" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '台湾网友吐槽台当局赢了嘴炮苦了人民'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi6" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '王毅称佩洛西窜台是彻头彻尾的政治闹剧'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi7" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '佩洛西窜访后台海进入新常态'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi8" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '外交部回应佩洛西最新涉台言论'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi9" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '佩洛西访台纯粹是针对中国的挑衅'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi10" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '佩洛西到哪了'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi11" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '武统'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi12" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '佩洛西丈夫在港公司或被列入国家制裁'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi13" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '华春莹称中国身后是160多个国家'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi14" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '台海局势观察'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi15" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '特朗普称佩洛西窜台是在帮中国圆梦'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi16" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '践行二十大 青春心向党'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi17" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '解放军在台岛以东设靶逼退里根号'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi18" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '美官方忧中国对佩洛西访台设禁飞区'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi19" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '解放军空军苏-35战机穿越台湾海峡'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi20" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '东部战区组织环台岛战备警巡'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi21" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '若佩洛西敢去台湾那我们拭目以待'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi22" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi23" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '美国游说公司借佩洛西窜台赚黑金'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi24" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '国防部回应取消中美两军三项交往活动'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi25" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '国台办回应蔡英文为佩洛西授勋'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi26" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>

                <template v-if="selectedScene === '拜登回应佩洛西窜台'">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table :data="tableData_firebrand_neg_pelosi27" style="width: 100%" border>
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
                      <el-table-column prop="column2" label="用户昵称"></el-table-column>
                      <el-table-column prop="column3" label="煽动指数"></el-table-column>
                      <el-table-column label="用户详情">
                        <template slot-scope="scope">
                          <div style="text-align: center;">
                            <a :href="getUserDetailLink(scope.row.column1)" target="_blank">用户详情</a>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
                </template>
              </div>
              </el-col>
            </span>
<!--          <span v-else-if ="YQ_data.variety==2">-->
<!--            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--              <h2>事件发现</h2>-->
<!--              <span style="font-size: 18px; line-height: 30px">-->
<!--              </span>-->
<!--                <el-table :data="tableData_event_ukraine" style="width: 100%" border>-->
<!--                  <el-table-column prop="column1" label="事件名称"></el-table-column>-->
<!--                  <el-table-column prop="column2" label="事件包含微博数"></el-table-column>-->
<!--&lt;!&ndash;                  <el-table-column prop="column3" label="开始时间"></el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;                  <el-table-column prop="column4" label="结束时间"></el-table-column>&ndash;&gt;-->
<!--                </el-table>-->
<!--              </el-col>-->
<!--              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--              <div >-->
<!--                <h2>关键个体发现</h2>-->
<!--                  <span style="font-size: 18px; line-height: 30px">-->
<!--                  </span>-->
<!--                  <label for="scene">选择事件：</label>-->
<!--                  <el-select id="scene" v-model="selectedScene2" @change="displayTable">-->
<!--                    <el-option value="请选择事件">请选择事件</el-option>-->
<!--                    <el-option value=乌克兰俄罗斯爆发军事冲突>乌克兰俄罗斯爆发军事冲突</el-option>-->
<!--                    <el-option value=普京举行自俄乌冲突以来的首次安理会面对面会议>普京举行自俄乌冲突以来的首次安理会面对面会议</el-option>-->
<!--                    <el-option value=波兰总统杜达视察导弹爆炸现场>波兰总统杜达视察导弹爆炸现场</el-option>-->
<!--                    <el-option value=英国首次向乌克兰提供直升机>英国首次向乌克兰提供直升机</el-option>-->
<!--                    <el-option value=亚速营>亚速营</el-option>-->
<!--                    <el-option value=南非每天每户停电约8个小时>南非每天每户停电约8个小时</el-option>-->
<!--                    <el-option value=乌克兰全境停电>乌克兰全境停电</el-option>-->
<!--                    <el-option value=匈外长称支持对俄制裁欧洲领导人应辞职>匈外长称支持对俄制裁欧洲领导人应辞职</el-option>-->
<!--                    <el-option value=卢布收复俄乌冲突以来全部失地>卢布收复俄乌冲突以来全部失地</el-option>-->
<!--                    <el-option value=俄乌冲突导致至少500万乌克兰人失业>俄乌冲突导致至少500万乌克兰人失业</el-option>-->
<!--                    <el-option value=美官员称击中波兰的导弹为乌克兰发射>美官员称击中波兰的导弹为乌克兰发射</el-option>-->
<!--                    <el-option value=乌外长催促美提供爱国者导弹>乌外长催促美提供爱国者导弹</el-option>-->
<!--                  </el-select>-->
<!--                  <template v-if="selectedScene2 === '请选择事件'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->
<!--                  <template v-if="selectedScene2 === '乌克兰俄罗斯爆发军事冲突'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine1" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '普京举行自俄乌冲突以来的首次安理会面对面会议'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine2" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '波兰总统杜达视察导弹爆炸现场'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine3" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '英国首次向乌克兰提供直升机'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine4" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '亚速营'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine5" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '南非每天每户停电约8个小时'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine6" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '乌克兰全境停电'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine7" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '匈外长称支持对俄制裁欧洲领导人应辞职'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine8" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '卢布收复俄乌冲突以来全部失地'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine9" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '俄乌冲突导致至少500万乌克兰人失业'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine10" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '美官员称击中波兰的导弹为乌克兰发射'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine11" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene2 === '乌外长催促美提供爱国者导弹'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_keyuser_ukraine12" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="关键指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->
<!--              </div>-->
<!--              </el-col>-->
<!--              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--              <div >-->
<!--                <h2>群体行为煽动者发现</h2>-->
<!--                  <label for="scene">选择事件：</label>-->
<!--                  <el-select id="scene" v-model="selectedScene" @change="displayTable">-->
<!--                    <el-option value="请选择事件">请选择事件</el-option>-->
<!--                    <el-option value=乌克兰俄罗斯爆发军事冲突>乌克兰俄罗斯爆发军事冲突</el-option>-->
<!--                    <el-option value=普京举行自俄乌冲突以来的首次安理会面对面会议>普京举行自俄乌冲突以来的首次安理会面对面会议</el-option>-->
<!--                    <el-option value=波兰总统杜达视察导弹爆炸现场>波兰总统杜达视察导弹爆炸现场</el-option>-->
<!--                    <el-option value=英国首次向乌克兰提供直升机>英国首次向乌克兰提供直升机</el-option>-->
<!--                    <el-option value=亚速营>亚速营</el-option>-->
<!--                    <el-option value=南非每天每户停电约8个小时>南非每天每户停电约8个小时</el-option>-->
<!--                    <el-option value=乌克兰全境停电>乌克兰全境停电</el-option>-->
<!--                    <el-option value=匈外长称支持对俄制裁欧洲领导人应辞职>匈外长称支持对俄制裁欧洲领导人应辞职</el-option>-->
<!--                    <el-option value=卢布收复俄乌冲突以来全部失地>卢布收复俄乌冲突以来全部失地</el-option>-->
<!--                    <el-option value=俄乌冲突导致至少500万乌克兰人失业>俄乌冲突导致至少500万乌克兰人失业</el-option>-->
<!--                    <el-option value=美官员称击中波兰的导弹为乌克兰发射>美官员称击中波兰的导弹为乌克兰发射</el-option>-->
<!--                    <el-option value=乌外长催促美提供爱国者导弹>乌外长催促美提供爱国者导弹</el-option>-->
<!--                  </el-select>-->
<!--                  <span style="font-size: 18px; line-height: 30px">-->
<!--                    <br>-->
<!--                    正面支持-->
<!--                      <br>-->
<!--                  </span>-->
<!--                  <template v-if="selectedScene === '请选择事件'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->
<!--                  <template v-if="selectedScene === '乌克兰俄罗斯爆发军事冲突'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine1" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '普京举行自俄乌冲突以来的首次安理会面对面会议'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine2" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '波兰总统杜达视察导弹爆炸现场'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine3" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '英国首次向乌克兰提供直升机'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine4" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '亚速营'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine5" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '南非每天每户停电约8个小时'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine6" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '乌克兰全境停电'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine7" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '匈外长称支持对俄制裁欧洲领导人应辞职'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine8" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '卢布收复俄乌冲突以来全部失地'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine9" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '俄乌冲突导致至少500万乌克兰人失业'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine10" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '美官员称击中波兰的导弹为乌克兰发射'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine11" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <template v-if="selectedScene === '乌外长催促美提供爱国者导弹'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_firebrand_pos_ukraine12" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->

<!--                  <span style="font-size: 18px; line-height: 30px">-->
<!--                  <br>-->
<!--                  负面反对-->
<!--                    <br>-->
<!--                  </span>-->
<!--                <template v-if="selectedScene === '请选择事件'">-->
<!--                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                      <el-table :data="tableData_" style="width: 100%" border>-->
<!--                        <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                        <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                        <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                      </el-table>-->
<!--                    </el-col>-->
<!--                  </template>-->
<!--                <template v-if="selectedScene === '乌克兰俄罗斯爆发军事冲突'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine1" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '普京举行自俄乌冲突以来的首次安理会面对面会议'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine2" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '波兰总统杜达视察导弹爆炸现场'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine3" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '英国首次向乌克兰提供直升机'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine4" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '亚速营'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine5" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '南非每天每户停电约8个小时'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine6" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '乌克兰全境停电'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine7" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '匈外长称支持对俄制裁欧洲领导人应辞职'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine8" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '卢布收复俄乌冲突以来全部失地'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine9" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '俄乌冲突导致至少500万乌克兰人失业'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine10" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '美官员称击中波兰的导弹为乌克兰发射'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine11" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->

<!--                <template v-if="selectedScene === '乌外长催促美提供爱国者导弹'">-->
<!--                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">-->
<!--                    <el-table :data="tableData_firebrand_neg_ukraine12" style="width: 100%" border>-->
<!--                      <el-table-column prop="column1" label="用户id"></el-table-column>-->
<!--                      <el-table-column prop="column2" label="用户昵称"></el-table-column>-->
<!--                      <el-table-column prop="column3" label="煽动指数"></el-table-column>-->
<!--                    </el-table>-->
<!--                  </el-col>-->
<!--                </template>-->
<!--              </div>>-->
<!--              </el-col>>-->
<!--          </span>-->

        </div>

      </el-card>
      <el-card shadow="hover">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
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
        tableData_event_pelosi: [
          { column1: '佩洛西窜访台湾六宗罪', column2: '468'},
          { column1: '外交部回应佩洛西或今晚抵达台湾', column2: '274'},
          { column1: '解放军全程跟踪迫使佩洛西专机绕道菲律宾', column2: '185'},
          { column1: '佩洛西访问台湾是危险的挑衅行为', column2: '104'},
          { column1: '拜登回应佩洛西窜台', column2: '77'},
          { column1: '国台办回应蔡英文为佩洛西授勋', column2: '74'},
          { column1: '国防部回应取消中美两军三项交往活动', column2: '50'},
          { column1: '美国游说公司借佩洛西窜台赚黑金', column2: '48'},
          { column1: '解放军空军苏-35战机穿越台湾海峡', column2: '46'},
          { column1: '中国驻美大使秦刚表示美方在台湾问题上应遵守契约精神', column2: '39'},
          { column1: '若佩洛西敢去台湾那我们拭目以待', column2: '38'},
          { column1: '东部战区组织环台岛战备警巡', column2: '37'},
          { column1: '美官方忧中国对佩洛西访台设禁飞区', column2: '36'},
          { column1: '解放军在台岛以东设靶逼退里根号', column2: '32'},
          { column1: '践行二十大 青春心向党', column2: '30'},
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
          { column1: '解放军继续位台岛周边实战化演训', column2: '16'},
          { column1: '佩洛西窜访后台海进入新常态', column2: '15'},
        ],
        tableData_event_ukraine: [
          { column1: '乌克兰俄罗斯爆发军事冲突', column2: '436'},
          { column1: '普京举行自俄乌冲突以来的首次安理会面对面会议', column2: '157'},
          { column1: '波兰总统杜达视察导弹爆炸现场', column2: '36'},
          { column1: '英国首次向乌克兰提供直升机', column2: '36'},
          { column1: '亚速营', column2: '31'},
          { column1: '南非每天每户停电约8个小时', column2: '27'},
          { column1: '乌克兰全境停电', column2: '26'},
          { column1: '匈外长称支持对俄制裁欧洲领导人应辞职', column2: '23'},
          { column1: '卢布收复俄乌冲突以来全部失地', column2: '23'},
          { column1: '俄乌冲突导致至少500万乌克兰人失业', column2: '22'},
          { column1: '美官员称击中波兰的导弹为乌克兰发射', column2: '19'},
          { column1: '乌外长催促美提供爱国者导弹', column2: '18'}
        ],
        selectedScene:'请选择事件',
        selectedScene2:'请选择事件',
        selectedScene3:'请选择事件',
        tableData_keyuser_pelosi5: [{'column1': '1263406744', 'column2': '司马南', 'column3': '14991'}, {'column1': '7040797671', 'column2': '玉渊谭天', 'column3': '940'}] ,
        tableData_keyuser_pelosi6: [{'column1': '3266943013', 'column2': '央视网', 'column3': '3332'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '1732'}] ,
        tableData_keyuser_pelosi7: [{'column1': '1496814565', 'column2': '封面新闻', 'column3': '17262'}, {'column1': '3266943013', 'column2': '央视网', 'column3': '2434'}] ,
        tableData_keyuser_pelosi8: [{'column1': '1663072851', 'column2': '中国日报', 'column3': '71669'}, {'column1': '2127460165', 'column2': '中国日报网', 'column3': '3436'}, {'column1': '2632236847', 'column2': '香港文匯網', 'column3': '2290'}] ,
        tableData_keyuser_pelosi9: [{'column1': '2803301701', 'column2': '人民日报', 'column3': '13627'}, {'column1': '1165975013', 'column2': '扎西德勒·天珠收藏', 'column3': '10280'}, {'column1': '3266943013', 'column2': '央视网', 'column3': '4998'}] ,
        tableData_keyuser_pelosi10: [{'column1': '5044281310', 'column2': '澎湃新闻', 'column3': '11998'}, {'column1': '6105713761', 'column2': '红星新闻', 'column3': '9429'}, {'column1': '6244553417', 'column2': '今日俄罗斯RT', 'column3': '3380'}] ,
        tableData_keyuser_pelosi11: [{'column1': '7327219328', 'column2': 'ChongSan冲先生', 'column3': '15807'}, {'column1': '2670985301', 'column2': '军旅菌', 'column3': '4028'}, {'column1': '2328007923', 'column2': '灰产圈_', 'column3': '2056'}] ,
        tableData_keyuser_pelosi12: [{'column1': '5715001158', 'column2': '彭国珩', 'column3': '17288'}, {'column1': '7411822184', 'column2': '二月如栢', 'column3': '6269'}, {'column1': '7286955267', 'column2': '赵立坚个人微博', 'column3': '3323'}] ,
        tableData_keyuser_pelosi13: [{'column1': '1654077857', 'column2': 'DQ视角', 'column3': '4696'}, {'column1': '1784473157', 'column2': '中国新闻网', 'column3': '2854'}, {'column1': '1453372141', 'column2': '赵盛烨', 'column3': '1604'}] ,
        tableData_keyuser_pelosi14: [{'column1': '2632236847', 'column2': '香港文匯網', 'column3': '13938'}, {'column1': '2127460165', 'column2': '中国日报网', 'column3': '6872'}, {'column1': '5044281310', 'column2': '澎湃新闻', 'column3': '4142'}] ,
        tableData_keyuser_pelosi15: [{'column1': '1726951785', 'column2': '吴薇', 'column3': '866'}, {'column1': '1026984762', 'column2': '北大王勇教授', 'column3': '402'}, {'column1': '7126148347', 'column2': '铸剑空天', 'column3': '322'}] ,
        tableData_keyuser_pelosi16: [{'column1': '6317134281', 'column2': '爱国青年刘战神', 'column3': '24546'}, {'column1': '3027241727', 'column2': '阿绿今天有猫了么', 'column3': '5238'}, {'column1': '3812400789', 'column2': '无为李爷', 'column3': '1694'}] ,
        tableData_keyuser_pelosi17: [{'column1': '2803301701', 'column2': '人民日报', 'column3': '95322'}, {'column1': '1752825395', 'column2': '光明网', 'column3': '4260'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '3156'}] ,
        tableData_keyuser_pelosi18: [{'column1': '1717257814', 'column2': '丁辰灵', 'column3': '116546'}, {'column1': '2087994353', 'column2': '美国时闻', 'column3': '6903'}, {'column1': '1263406744', 'column2': '司马南', 'column3': '3213'}] ,
        tableData_keyuser_pelosi19: [{'column1': '1703371307', 'column2': '北京晚报', 'column3': '10142'}, {'column1': '5108550554', 'column2': 'Ruptly国际新闻视频通讯社', 'column3': '2136'}, {'column1': '2375086267', 'column2': '参考消息', 'column3': '2007'}] ,
        tableData_keyuser_pelosi20: [{'column1': '1717257814', 'column2': '丁辰灵', 'column3': '367765'}, {'column1': '5933338496', 'column2': '娱乐探神', 'column3': '16547'}, {'column1': '5564927603', 'column2': '无心简影', 'column3': '5692'}] ,
        tableData_keyuser_pelosi4: [{'column1': '1703371307', 'column2': '北京晚报', 'column3': '83104'}, {'column1': '6105713761', 'column2': '红星新闻', 'column3': '56586'}, {'column1': '5564927603', 'column2': '无心简影', 'column3': '42218'}] ,
        tableData_keyuser_pelosi21: [{'column1': '2803301701', 'column2': '人民日报', 'column3': '30476'}, {'column1': '1784473157', 'column2': '中国新闻网', 'column3': '7722'}, {'column1': '1893278624', 'column2': '深圳特区报', 'column3': '3560'}, {'column1': '7462193109', 'column2': 'WS偏执狂', 'column3': '2645'}] ,
        tableData_keyuser_pelosi22: [{'column1': '1709286740', 'column2': '中国台湾网', 'column3': '8610'}, {'column1': '7327219328', 'column2': 'ChongSan冲先生', 'column3': '5269'}, {'column1': '1680950470', 'column2': '岳刚', 'column3': '5238'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '5071'}] ,
        tableData_keyuser_pelosi23: [{'column1': '2803301701', 'column2': '人民日报', 'column3': '55036'}, {'column1': '1700648435', 'column2': '成都商报', 'column3': '41418'}, {'column1': '2656274875', 'column2': '央视新闻', 'column3': '15632'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '4845'}] ,
        tableData_keyuser_pelosi24: [{'column1': '1784473157', 'column2': '中国新闻网', 'column3': '7957'}, {'column1': '2127460165', 'column2': '中国日报网', 'column3': '6872'}, {'column1': '1688864597', 'column2': '河南新闻广播', 'column3': '6682'}, {'column1': '1738004582', 'column2': '燕赵都市报纵览新闻', 'column3': '6352'}] ,
        tableData_keyuser_pelosi25: [{'column1': '1784473157', 'column2': '中国新闻网', 'column3': '88510'}, {'column1': '1618626114', 'column2': '新时代中国外交思想库', 'column3': '34851'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '7122'}, {'column1': '2656274875', 'column2': '央视新闻', 'column3': '6788'}] ,
        tableData_keyuser_pelosi26: [{'column1': '1663072851', 'column2': '中国日报', 'column3': '71669'}, {'column1': '2267219482', 'column2': '粤港澳小小胖', 'column3': '18390'}, {'column1': '1657269881', 'column2': '律师一姐', 'column3': '6007'}, {'column1': '5880895272', 'column2': '大嘴发言人', 'column3': '4207'}, {'column1': '7470181331', 'column2': '海峡导报 社', 'column3': '4121'}] ,
        tableData_keyuser_pelosi27: [{'column1': '2769885021', 'column2': '中新视频', 'column3': '595821'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '84238'}, {'column1': '1618626114', 'column2': '新时代中国外交思想库', 'column3': '34851'}, {'column1': '6105713761', 'column2': '红星新闻', 'column3': '28293'}, {'column1': '1812175903', 'column2': '科学未来人', 'column3': '17208'}] ,
        tableData_keyuser_pelosi3: [{'column1': '1717257814', 'column2': '丁辰灵', 'column3': '157433'}, {'column1': '1931376424', 'column2': '货币基因', 'column3': '76274'}, {'column1': '1609119537', 'column2': '2gua', 'column3': '19730'}, {'column1': '1989660417', 'column2': '胡锡进', 'column3': '14503'}, {'column1': '2503806417', 'column2': '俄罗斯驻华大使馆', 'column3': '8839'}, {'column1': '1165975013', 'column2': '扎西德勒·天珠收藏', 'column3': '7824'}, {'column1': '5264458483', 'column2': '一只小麻球__', 'column3': '7513'}, {'column1': '2087994353', 'column2': '美国时闻', 'column3': '6906'}, {'column1': '1612091764', 'column2': '荷塘月色1996a', 'column3': '6858'}, {'column1': '1647486362', 'column2': '上帝之鹰_5zn', 'column3': '5924'}, {'column1': '2181597154', 'column2': '俄罗斯卫星通讯社', 'column3': '5475'}, {'column1': '1567106610', 'column2': '猫警官', 'column3': '5379'}, {'column1': '1481944214', 'column2': '飞象网项立刚', 'column3': '5162'}] ,
        tableData_keyuser_pelosi2: [{'column1': '6059492811', 'column2': '拆台CT', 'column3': '212220'}, {'column1': '1717257814', 'column2': '丁辰灵', 'column3': '116546'}, {'column1': '1496883514', 'column2': '凯雷', 'column3': '96188'}, {'column1': '5564927603', 'column2': '无心简影', 'column3': '51505'}, {'column1': '6191604322', 'column2': '李小粥的茶水间', 'column3': '29001'}, {'column1': '1813047827', 'column2': 'TheLancet-Vivian', 'column3': '26586'}, {'column1': '6388416858', 'column2': '天上星河如海', 'column3': '25880'}, {'column1': '1734342702', 'column2': '徐量', 'column3': '22183'}, {'column1': '2803301701', 'column2': '人民日报', 'column3': '19672'}, {'column1': '1671109627', 'column2': '包容万物恒河水', 'column3': '14814'}, {'column1': '2150758415', 'column2': '孤烟暮蝉', 'column3': '9761'}, {'column1': '1659893422', 'column2': '小凡好摄', 'column3': '8768'}, {'column1': '1812175903', 'column2': '科学未来人', 'column3': '8604'}, {'column1': '5395667635', 'column2': '厦门广电', 'column3': '8247'}, {'column1': '1006550592', 'column2': '师伟微博', 'column3': '8152'}, {'column1': '6317134281', 'column2': '爱国青年刘战神', 'column3': '7685'}, {'column1': '7327219328', 'column2': 'ChongSan冲先生', 'column3': '5269'}, {'column1': '1678844014', 'column2': '克总评车', 'column3': '4982'}, {'column1': '2632236847', 'column2': '香港文匯網', 'column3': '4854'}] ,
        tableData_keyuser_pelosi1: [{'column1': '2656274875', 'column2': '央视新闻', 'column3': '1598223'}, {'column1': '1717257814', 'column2': '丁辰灵', 'column3': '522831'}, {'column1': '5933338496', 'column2': '娱乐探神', 'column3': '69621'}, {'column1': '5278015711', 'column2': '旧影社', 'column3': '61308'}, {'column1': '1671109627', 'column2': '包容万物恒河水', 'column3': '56894'}, {'column1': '3873096802', 'column2': '林哥观察', 'column3': '49580'}, {'column1': '6317134281', 'column2': '爱国青年刘战神', 'column3': '41596'}, {'column1': '5409311003', 'column2': '剋剋很忙', 'column3': '41089'}, {'column1': '7312024690', 'column2': '疾风中青勁草', 'column3': '36290'}, {'column1': '1657269881', 'column2': '律师一姐', 'column3': '30035'}, {'column1': '2267219482', 'column2': '粤港澳小小胖', 'column3': '28028'}, {'column1': '2803301701', 'column2': '人民日报', 'column3': '18374'}, {'column1': '1898268644', 'column2': '长江日报', 'column3': '17332'}, {'column1': '7327219328', 'column2': 'ChongSan冲先生', 'column3': '10538'}, {'column1': '3501653017', 'column2': '我要喝水 水水水', 'column3': '10360'}, {'column1': '6638821227', 'column2': '欧文酥', 'column3': '9312'}, {'column1': '2343014623', 'column2': '衝鋒号角', 'column3': '6850'}, {'column1': '5365769881', 'column2': '赵铮-同志', 'column3': '6309'}, {'column1': '1163858357', 'column2': '嘻笑堂HipHop', 'column3': '6170'}, {'column1': '3500866713', 'column2': 'flowers704', 'column3': '6154'}, {'column1': '1222382122', 'column2': '相三三三', 'column3': '4926'}, {'column1': '5709787958', 'column2': 'BSYBHeart', 'column3': '4610'}, {'column1': '3179561602', 'column2': '小小回车键', 'column3': '4562'}, {'column1': '7185868732', 'column2': '小K_老JOKER', 'column3': '4233'}, {'column1': '2039753857', 'column2': 'CCTV4', 'column3': '3674'}, {'column1': '1965565743', 'column2': '吐槽帝逍遥先森', 'column3': '3611'}] ,

        tableData_keyuser_ukraine12: [{'column1': '4836757059668132', 'column2': '玩糖的', 'column3': '7237'}, {'column1': '4837525430734638', 'column2': '环球时报', 'column3': '1310'}, {'column1': '4838970619333413', 'column2': '今日俄罗斯RT', 'column3': '1172'}] ,
        tableData_keyuser_ukraine11: [{'column1': '4837056583567100', 'column2': '大鹏守御千户所', 'column3': '374'}, {'column1': '4837540718448205', 'column2': '六爷阿旦', 'column3': '223'}, {'column1': '4838988440933567', 'column2': '星话大白', 'column3': '192'}] ,
        tableData_keyuser_ukraine10: [{'column1': '4839032385178967', 'column2': '转角遇贱叔', 'column3': '23010'}, {'column1': '4838550640526542', 'column2': '央视财经', 'column3': '21306'}, {'column1': '4837248606668695', 'column2': '央视财经', 'column3': '21288'}] ,
        tableData_keyuser_ukraine8: [{'column1': '4838046057371170', 'column2': '扎西德勒·天珠收藏', 'column3': '7378'}, {'column1': '4838589940631025', 'column2': 'Vista看天下', 'column3': '6563'}, {'column1': '4838298428639173', 'column2': '娱乐圈颜狗鉴赏', 'column3': '759'}, {'column1': '4838740944487834', 'column2': '环球时报', 'column3': '689'}] ,
        tableData_keyuser_ukraine9: [{'column1': '4838197815151957', 'column2': '正保会计网校面授课堂', 'column3': '1926'}, {'column1': '4837038949401577', 'column2': '八大商人', 'column3': '765'}, {'column1': '4838861731272529', 'column2': '王又又', 'column3': '543'}] ,
        tableData_keyuser_ukraine7: [{'column1': '4839275692560235', 'column2': '脑科学世界', 'column3': '382'}, {'column1': '4839247699771860', 'column2': '新浪军事', 'column3': '316'}, {'column1': '4838652431044343', 'column2': '金亮', 'column3': '237'}] ,
        tableData_keyuser_ukraine6: [{'column1': '4838005933605238', 'column2': '动静新闻', 'column3': '1451'}, {'column1': '4839105844481311', 'column2': '中国日报', 'column3': '772'}, {'column1': '4838067821871570', 'column2': '大鹏守御千户所', 'column3': '574'}, {'column1': '4838996377605219', 'column2': '财联社APP', 'column3': '518'}] ,
        tableData_keyuser_ukraine5: [{'column1': '4836786054895639', 'column2': '乌克兰信使', 'column3': '16551'}, {'column1': '4838552200544837', 'column2': '乌克兰信使', 'column3': '8433'}] ,
        tableData_keyuser_ukraine3: [{'column1': '4837221298086603', 'column2': '大鹏守御千户所', 'column3': '1425'}, {'column1': '4838965472924957', 'column2': '快乐的明哥哥', 'column3': '960'}, {'column1': '4838904114451630', 'column2': '大公報- 大公網', 'column3': '544'}, {'column1': '4836931802497262', 'column2': '大鹏守御千户所', 'column3': '420'}, {'column1': '4838179901542409', 'column2': '大鹏守御千户所', 'column3': '329'}] ,
        tableData_keyuser_ukraine4: [{'column1': '4837438322908200', 'column2': '每日经济新闻', 'column3': '2813'}, {'column1': '4838249069281787', 'column2': '凤凰网视频', 'column3': '1650'}, {'column1': '4838974982717524', 'column2': '中国日报', 'column3': '1562'}, {'column1': '4838965277103193', 'column2': '环球时报', 'column3': '1404'}] ,
        tableData_keyuser_ukraine2: [{'column1': '4836909127828251', 'column2': '货币基因', 'column3': '37766'}, {'column1': '4838729292973121', 'column2': '投行老人', 'column3': '30198'}, {'column1': '4837238536669090', 'column2': '环球人物杂志', 'column3': '3732'}, {'column1': '4838999924934114', 'column2': '刘芮东', 'column3': '3173'}, {'column1': '4838891595499188', 'column2': '卢克文', 'column3': '2871'}, {'column1': '4837925114353245', 'column2': '品茶说酒', 'column3': '2562'}, {'column1': '4837087645799895', 'column2': '任韧', 'column3': '1874'}, {'column1': '4838921455013646', 'column2': '科罗廖夫', 'column3': '1396'}, {'column1': '4838006424867677', 'column2': '无为客pra', 'column3': '1370'}, {'column1': '4839248467070508', 'column2': '_村西边老王_', 'column3': '1358'}, {'column1': '4837645995214216', 'column2': '陈营长极品投资', 'column3': '1342'}, {'column1': '4838647108993517', 'column2': '三个老爸实验室', 'column3': '1287'}, {'column1': '4837450541434981', 'column2': '科罗廖夫', 'column3': '1070'}, {'column1': '4838529647514875', 'column2': '徐嘉苧', 'column3': '1011'}, {'column1': '4837441821737953', 'column2': '让股票飞', 'column3': '1011'}, {'column1': '4836766223701418', 'column2': '雨农观察', 'column3': '1009'}] ,
        tableData_keyuser_ukraine1: [{'column1': '4838157445240664', 'column2': '杨柳青青林春增', 'column3': '10159'}, {'column1': '4837232873047160', 'column2': '打板能手七哥', 'column3': '9820'}, {'column1': '4836786054895639', 'column2': '乌克兰信使', 'column3': '7356'}, {'column1': '4838764977592399', 'column2': '萤火虫如我', 'column3': '5621'}, {'column1': '4837208260872734', 'column2': '舵手无畏', 'column3': '4898'}, {'column1': '4837195234153839', 'column2': '舵手无畏', 'column3': '4898'}, {'column1': '4839030137030833', 'column2': '萤火虫如我', 'column3': '4718'}, {'column1': '4838968317971213', 'column2': '萤火虫如我', 'column3': '4050'}, {'column1': '4837579797039365', 'column2': '泉水中的硬币', 'column3': '3914'}, {'column1': '4838552200544837', 'column2': '乌克兰信使', 'column3': '3748'}, {'column1': '4838885915888116', 'column2': '萤火虫如我', 'column3': '3458'}, {'column1': '4836762909933669', 'column2': '乌克兰信使', 'column3': '3448'}, {'column1': '4838748325415534', 'column2': '萤火虫如我', 'column3': '3402'}, {'column1': '4837665033421465', 'column2': ' 指尖上的乌克兰', 'column3': '3282'}, {'column1': '4838360666870138', 'column2': '指尖上的乌克兰', 'column3': '3279'}, {'column1': '4837270673163675', 'column2': '指尖上的乌克兰', 'column3': '3273'}, {'column1': '4838066411799617', 'column2': '指尖上的乌克兰', 'column3': '3273'}, {'column1': '4839351844078248', 'column2': '萤火虫如我', 'column3': '3255'}, {'column1': '4837845813170295', 'column2': '雒邑叔宽', 'column3': '3192'}] ,

        tableData_firebrand_pos_pelosi5: [{'column1': '1263406744', 'column2': '司马南', 'column3': '6.947036259580062'}, {'column1': '7040797671', 'column2': '玉渊谭天', 'column3': '0.9999999928395571'}] ,
        tableData_firebrand_neg_pelosi5: [] ,
        tableData_firebrand_pos_pelosi7: [{'column1': '3266943013', 'column2': '央视网', 'column3': '1.999999999999509'}, {'column1': '5608873424', 'column2': '大大大餅干丶', 'column3': '1.9998109652694098'}, {'column1': '7476748260', 'column2': ' 大公文匯網', 'column3': '1.0'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '0.9999999999736193'}, {'column1': '2964312303', 'column2': '富顺公安', 'column3': '0.4999999924524806'}, {'column1': '1726951785', 'column2': '吴薇', 'column3': '0.4938019795501166'}, {'column1': '1496814565', 'column2': '封面新闻', 'column3': '0.48236456078031065'}] ,
        tableData_firebrand_neg_pelosi7: [] ,
        tableData_firebrand_pos_pelosi6: [{'column1': '3057540037', 'column2': '人民日报海外版-海外网', 'column3': '1.4999999999546696'}, {'column1': '1958889463', 'column2': '沈阳铁路', 'column3': '1.4999999995545263'}, {'column1': '3266943013', 'column2': '央视网', 'column3': '0.9999999999990195'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '0.9999999999736193'}, {'column1': '1977460817', 'column2': '央视网快看', 'column3': '0.9999999999327058'}, {'column1': '5108550554', 'column2': 'Ruptly国际新闻视频通讯社', 'column3': '0.9908708948777465'}, {'column1': '1370674384', 'column2': ' 记者李翔', 'column3': '0.4985502030959156'}, {'column1': '1157864602', 'column2': '沈逸', 'column3': '0.3496289676706428'}] ,
        tableData_firebrand_neg_pelosi6: [{'column1': '2730765330', 'column2': '台海网', 'column3': '-0.4969041543110633'}] ,
        tableData_firebrand_pos_pelosi11: [{'column1': '2328007923', 'column2': '灰产圈_', 'column3': '0.9999994219277868'}, {'column1': '7371600205', 'column2': '哈哈哈4566A', 'column3': '0.49999999996518296'}, {'column1': '5375832358', 'column2': '笑圈少女', 'column3': '0.49999999994321453'}, {'column1': '1222382122', 'column2': '相三三三', 'column3': '0.4999999820055162'}, {'column1': '2774216477', 'column2': '靓靓AbBey', 'column3': '0.4999986027806347'}, {'column1': '1847123567', 'column2': '香港商報網', 'column3': '0.4999977646421828'}, {'column1': '6655322587', 'column2': '幫港出聲', 'column3': '0.4994191207037978'}, {'column1': '6480787356', 'column2': '翟海潮', 'column3': '0.4955092396636347'}] ,
        tableData_firebrand_neg_pelosi11: [{'column1': '7327219328', 'column2': 'ChongSan冲先生', 'column3': '-2.8265484047043543'}, {'column1': '2670985301', 'column2': '军旅菌', 'column3': '-0.5771687211284621'}, {'column1': '3170708142', 'column2': '茗茗念经', 'column3': '-0.41474941585756475'}, {'column1': '7653848767', 'column2': '冰淇淋先生--', 'column3': '-0.03469590762816499'}] ,
        tableData_firebrand_pos_pelosi16: [{'column1': '7476748260', 'column2': '大公文匯網', 'column3': '2.499999999999983'}, {'column1': '6221932120', 'column2': '直新闻', 'column3': '2.499999991967405'}, {'column1': '1847123567', 'column2': '香 港商報網', 'column3': '1.4999932939265483'}, {'column1': '3812400789', 'column2': '无为李爷', 'column3': '1.1127088700537038'}, {'column1': '2343014623', 'column2': '衝鋒号角', 'column3': '0.9996556216287673'}, {'column1': '3027241727', 'column2': '阿绿今天有猫了么', 'column3': '0.7330741931674145'}, {'column1': '1977460817', 'column2': '央视网快看', 'column3': '0.4999898096095641'}, {'column1': '2160553221', 'column2': '勤奋de班长', 'column3': '0.4999782579629347'}] ,
        tableData_firebrand_neg_pelosi16: [{'column1': '3016011261', 'column2': '情哥独白', 'column3': '-0.6584043602221561'}, {'column1': '6317134281', 'column2': '爱国青年刘战神', 'column3': '-0.601998726375458'}, {'column1': '1930854175', 'column2': '朱一卷儿', 'column3': '-0.24001060997704227'}] ,
        tableData_firebrand_pos_pelosi20: [{'column1': '5933338496', 'column2': '娱乐探神', 'column3': '1.9999978501905247'}, {'column1': '1884966615', 'column2': '毒眼观察', 'column3': '1.499999999999988'}, {'column1': '1369270154', 'column2': '天空永远蔚蓝', 'column3': '0.9999937688883356'}, {'column1': '1098532113', 'column2': '土楼先生', 'column3': '0.9999095220241219'}, {'column1': '6811582835', 'column2': '心有阳光就好', 'column3': '0.4999999964052664'}, {'column1': '3766890705', 'column2': 'Himoda黑猫大', 'column3': '0.49727197223316477'}, {'column1': '7128379433', 'column2': '怀歌', 'column3': '0.49570001675196995'}, {'column1': '5640062685', 'column2': '我是小妖怪的人', 'column3': '0.14671067948511607'}] ,
        tableData_firebrand_neg_pelosi20: [{'column1': '1717257814', 'column2': '丁辰灵', 'column3': '-4.467342208720622'}, {'column1': '2632236847', 'column2': '香港文匯網', 'column3': '-1.4991253897387327'}, {'column1': '5564927603', 'column2': '无心简影', 'column3': '-0.6589868360074076'}, {'column1': '3544142057', 'column2': '长期驻扎羊圈', 'column3': '-0.48645646592893876'}, {'column1': '5249486231', 'column2': '在等小羊', 'column3': '-0.3987466977407006'}, {'column1': '5082671548', 'column2': '肥美哒Mia', 'column3': '-0.388733951451093'}] ,
        tableData_firebrand_pos_pelosi10: [{'column1': '5044281310', 'column2': '澎湃新闻', 'column3': '1.999992702655837'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '1.0'}, {'column1': '7729834909', 'column2': '争做毛教员的好学 生', 'column3': '0.9999999999978284'}, {'column1': '1698823241', 'column2': '澎湃质量观', 'column3': '0.9999927026576965'}, {'column1': '6244553417', 'column2': '今日俄罗斯RT', 'column3': '0.9999799679759612'}, {'column1': '1830834613', 'column2': '飞飞_xu', 'column3': '0.9582921872551114'}, {'column1': '7467004060', 'column2': '军武吐槽', 'column3': '0.5'}, {'column1': '1026984762', 'column2': '北大王勇教授', 'column3': '0.49999997748098857'}, {'column1': '6105713761', 'column2': '红星新闻', 'column3': '0.42925170432564475'}] ,
        tableData_firebrand_neg_pelosi10: [{'column1': '1842606855', 'column2': '深圳卫视正午30分', 'column3': '-0.4999726041204591'}, {'column1': '7360738483', 'column2': '总为男人流眼泪', 'column3': '-0.35659075172368015'}] ,
        tableData_firebrand_pos_pelosi14: [{'column1': '2712601544', 'column2': '香港衛視HKS', 'column3': '2.0'}, {'column1': '2127460165', 'column2': '中国日报网', 'column3': '0.9999945302772677'}, {'column1': '1942357207', 'column2': '铜陵公安在 线', 'column3': '0.9984949490569892'}, {'column1': '2618638282', 'column2': '湖南日报', 'column3': '0.9984949490569892'}, {'column1': '5044281310', 'column2': '澎湃新闻', 'column3': '0.9780993812123391'}, {'column1': '1887344341', 'column2': '观察者网', 'column3': '0.5'}, {'column1': '1641561812', 'column2': '经济观察报', 'column3': '0.49996903673049653'}, {'column1': '6315206710', 'column2': '安康政法', 'column3': '0.49996903673049653'}, {'column1': '2966715562', 'column2': '听雨落的独白', 'column3': '0.4781222819083779'}] ,
        tableData_firebrand_neg_pelosi14: [{'column1': '2632236847', 'column2': '香港文匯網', 'column3': '-2.630075801756644'}, {'column1': '6221932120', 'column2': '直新闻', 'column3': '-0.9999231383903926'}] ,
        tableData_firebrand_pos_pelosi8: [{'column1': '5461853682', 'column2': '中国军视网', 'column3': '1.4998866670119604'}, {'column1': '2712601544', 'column2': '香港衛視HKS', 'column3': '0.5'}, {'column1': '1887344341', 'column2': '观察者网', 'column3': '0.499999999999996'}, {'column1': '2127460165', 'column2': '中国日报网', 'column3': '0.49999726513863385'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '0.4999693062990904'}, {'column1': '1647688972', 'column2': ' 环球人物杂志', 'column3': '0.4998369713888231'}, {'column1': '1453372141', 'column2': '赵盛烨', 'column3': '0.4997507898890835'}, {'column1': '1960433983', 'column2': '威海日报', 'column3': '0.498142628158861'}, {'column1': '1663072851', 'column2': '中国日报', 'column3': '0.49793583740779745'}, {'column1': '1849152565', 'column2': '叶建勛', 'column3': '0.4961134276225565'}] ,
        tableData_firebrand_neg_pelosi8: [{'column1': '2632236847', 'column2': '香港文匯網', 'column3': '-0.4960611701775254'}] ,
        tableData_firebrand_pos_pelosi9: [{'column1': '3266943013', 'column2': '央视网', 'column3': '1.4999999999985292'}, {'column1': '1752825395', 'column2': '光明网', 'column3': '0.9999959026729213'}, {'column1': '1895431523', 'column2': '大公報-大公網', 'column3': '0.999988257427729'}, {'column1': '3966129175', 'column2': '兰斌强', 'column3': '0.5'}, {'column1': '6345028642', 'column2': '云南政法', 'column3': '0.4999999316457393'}, {'column1': '2803301701', 'column2': '人民日报', 'column3': '0.4999999240761053'}, {'column1': '1663072851', 'column2': '中国日报', 'column3': '0.49999944613167935'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '0.49999863422337465'}, {'column1': '2280198017', 'column2': '解放军报', 'column3': '0.49999848297582317'}, {'column1': '5065571660', 'column2': '保定检察', 'column3': '0.4999983149789855'}] ,
        tableData_firebrand_neg_pelosi9: [] ,
        tableData_firebrand_pos_pelosi12: [{'column1': '5333693607', 'column2': '武力统一', 'column3': '2.3133610397844073'}, {'column1': '2181597154', 'column2': '俄罗斯卫星通讯社', 'column3': '0.710410889558012'}, {'column1': '7796701087', 'column2': 'lncRNA2024考研版', 'column3': '0.4999999999999658'}, {'column1': '7411822184', 'column2': '二月如栢', 'column3': '0.4993790442923881'}, {'column1': '7349633427', 'column2': '兵之佳', 'column3': '0.49346293101035266'}, {'column1': '7286955267', 'column2': '赵立坚个人微博', 'column3': '0.4299620854092041'}, {'column1': '6979740585', 'column2': '金融街电 讯新媒体', 'column3': '0.40746506936310645'}, {'column1': '1709286740', 'column2': '中国台湾网', 'column3': '0.3799165057225905'}, {'column1': '2178514797', 'column2': '军武季', 'column3': '0.20405825136055789'}, {'column1': '5883755378', 'column2': '广东台新闻频道', 'column3': '0.15783652548249627'}] ,
        tableData_firebrand_neg_pelosi12: [{'column1': '7646973504', 'column2': '观摩互联网的本人', 'column3': '-0.30074427799723125'}, {'column1': '7742705096', 'column2': '职业观众张阿姨', 'column3': '-0.30074427799723125'}, {'column1': '5715001158', 'column2': '彭国珩', 'column3': '-0.046691748967083946'}] ,
        tableData_firebrand_pos_pelosi13: [{'column1': '1686546714', 'column2': '环球网', 'column3': '1.0'}, {'column1': '5564927603', 'column2': '无心简影', 'column3': '0.9999999999999996'}, {'column1': '1644102472', 'column2': '摩羯商业评论', 'column3': '0.9977758475947096'}, {'column1': '1842606855', 'column2': '深圳卫视正午30分', 'column3': '0.8894388079671689'}, {'column1': '1717833412', 'column2': '华商报', 'column3': '0.5'}, {'column1': '1784473157', 'column2': '中国新闻网', 'column3': '0.4999895332060199'}, {'column1': '5182557162', 'column2': '轻蒸海味', 'column3': '0.49975985684669577'}, {'column1': '1453372141', 'column2': '赵盛烨', 'column3': '0.4997507898890835'}, {'column1': '2966715562', 'column2': '听雨落的独白', 'column3': '0.4781222819083779'}, {'column1': '1992424454', 'column2': '堯偂澍', 'column3': '0.47316379260544894'}] ,
        tableData_firebrand_neg_pelosi13: [{'column1': '1211615781', 'column2': '好女孩恩恩', 'column3': '-0.4893540060154119'}, {'column1': '5056746657', 'column2': '班长直言', 'column3': '-0.46275231104325454'}, {'column1': '5092881464', 'column2': '李小安0626', 'column3': '-0.4221387262368258'}, {'column1': '5887843798', 'column2': '薛定谔的种花兔', 'column3': '-0.2552266666358969'}, {'column1': '1497042545', 'column2': '张国庆看天下', 'column3': '-0.11962309123540094'}] ,
        tableData_firebrand_pos_pelosi15: [{'column1': '1197950454', 'column2': '萨苏', 'column3': '2.8472936944433904'}, {'column1': '1680950470', 'column2': '岳刚', 'column3': '1.4919502274555083'}, {'column1': '1026984762', 'column2': '北大王勇 教授', 'column3': '0.9999999549619771'}, {'column1': '1370674384', 'column2': '记者李翔', 'column3': '0.9985390699145037'}, {'column1': '7126148347', 'column2': '铸剑空天', 'column3': '0.9377669507922033'}, {'column1': '1743965223', 'column2': '马妍', 'column3': '0.5'}, {'column1': '6662138204', 'column2': '大磨坊小磨', 'column3': '0.5'}, {'column1': '1649014072', 'column2': '评论员李炜', 'column3': '0.49847539194879176'}, {'column1': '1726951785', 'column2': '吴薇', 'column3': '0.4938019795501166'}, {'column1': '7728608941', 'column2': '胡洪波说', 'column3': '0.4714308680992494'}] ,
        tableData_firebrand_neg_pelosi15: [{'column1': '2394530374', 'column2': '乌龙谈', 'column3': '-0.45438497206073136'}] ,
        tableData_firebrand_pos_pelosi17: [{'column1': '1929676450', 'column2': '海南共青团', 'column3': '1.5'}, {'column1': '1686546714', 'column2': '环球网', 'column3': '1.5'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '1.5'}, {'column1': '2803301701', 'column2': '人民日报', 'column3': '1.4999999999999993'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '1.4999999999999993'}, {'column1': '1752825395', 'column2': '光明网', 'column3': '1.4999999999999993'}, {'column1': '1590753120', 'column2': '中国反邪教', 'column3': '1.4999999999999993'}, {'column1': '6868583654', 'column2': '北京广播电视台', 'column3': '1.4999999999999993'}, {'column1': '5476386628', 'column2': '侠客岛', 'column3': '1.499999999999998'}, {'column1': '2286908003', 'column2': '人民网', 'column3': '0.999999999999996'}] ,
        tableData_firebrand_neg_pelosi17: [] ,
        tableData_firebrand_pos_pelosi18: [{'column1': '1263406744', 'column2': '司马南', 'column3': '1.4999999886603315'}, {'column1': '5608873424', 'column2': '大大大餅干丶', 'column3': '1.398711988190685'}, {'column1': '2313560661', 'column2': '三物集', 'column3': '1.0'}, {'column1': '6066193547', 'column2': '七环视频', 'column3': '0.9983373770024446'}, {'column1': '5401413107', 'column2': '东方时代环球时事解读', 'column3': '0.5'}, {'column1': '1884966615', 'column2': '毒眼观察', 'column3': '0.499999999999996'}, {'column1': '1098532113', 'column2': '土楼先生', 'column3': '0.49995476101206093'}, {'column1': '6268375888', 'column2': '看看新闻全球眼', 'column3': '0.499936118984042'}, {'column1': '2443744521', 'column2': '豫法阳光', 'column3': '0.4999193884492883'}, {'column1': '1838305432', 'column2': 'Koi-Zhou', 'column3': '0.4997259884172416'}] ,
        tableData_firebrand_neg_pelosi18: [{'column1': '1717257814', 'column2': '丁辰灵', 'column3': '-1.822447402906874'}, {'column1': '7483419041', 'column2': '一碗白瓷梅子汤', 'column3': '-0.9999667440139042'}, {'column1': '1408078073', 'column2': '梁湘', 'column3': '-0.49999999991741606'}] ,
        tableData_firebrand_pos_pelosi19: [{'column1': '6221932120', 'column2': '直新闻', 'column3': '3.971480389053849'}, {'column1': '6655322587', 'column2': '幫港出聲', 'column3': '2.9965147242227865'}, {'column1': '6987450530', 'column2': '用户唐泽源', 'column3': '1.9999999999975664'}, {'column1': '1395411312', 'column2': '神舟互通', 'column3': '1.49999999989326'}, {'column1': '2375086267', 'column2': '参考消息', 'column3': '1.4999999998814395'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '1.0'}, {'column1': '5108550554', 'column2': 'Ruptly国际新闻视频通讯社', 'column3': '0.9999999998312621'}, {'column1': '1893892941', 'column2': '北京日报', 'column3': '0.9999996445866453'}, {'column1': '1887344341', 'column2': '观察者网', 'column3': '0.9999443134819352'}, {'column1': '7774663009', 'column2': '媒体背包客', 'column3': '0.5'}] ,
        tableData_firebrand_neg_pelosi19: [] ,
        tableData_firebrand_pos_pelosi21: [{'column1': '1784473157', 'column2': '中国新闻网', 'column3': '1.4994314549316563'}, {'column1': '1977902724', 'column2': '看台海', 'column3': '0.9999999999999987'}, {'column1': '1974576991', 'column2': ' 环球时报', 'column3': '0.9999999999999725'}, {'column1': '2803301701', 'column2': '人民日报', 'column3': '0.9999999999999694'}, {'column1': '2580225544', 'column2': '种花守护神', 'column3': '0.9999999999998979'}, {'column1': '1895431523', 'column2': '大公報-大公網', 'column3': '0.999999999999512'}, {'column1': '6115560351', 'column2': '国是直通车', 'column3': '0.999999999999512'}, {'column1': '1806128454', 'column2': '凤凰网视频', 'column3': '0.9999999999994578'}, {'column1': '1893892941', 'column2': '北京日报', 'column3': '0.9999999999994578'}, {'column1': '1117069645', 'column2': '人民政协报', 'column3': '0.9999999999994578'}] ,
        tableData_firebrand_neg_pelosi21: [{'column1': '6244553417', 'column2': '今日俄罗斯RT', 'column3': '-0.4977668576758103'}] ,
        tableData_firebrand_pos_pelosi22: [{'column1': '1644102472', 'column2': '摩羯商业评论', 'column3': '2.497775785757746'}, {'column1': '1709286740', 'column2': '中国台湾网', 'column3': '1.4999907613107057'}, {'column1': '1201016517', 'column2': '广州恆大球迷论坛网', 'column3': '0.9998829995430096'}, {'column1': '6362308829', 'column2': '叫我月半就好了', 'column3': '0.9994194796167348'}, {'column1': '3441166914', 'column2': '卓卓其图', 'column3': '0.9974424494626994'}, {'column1': '7274787092', 'column2': '马虎爱剪辑', 'column3': '0.9818486535059385'}, {'column1': '5225822288', 'column2': '香港沉默之聲', 'column3': '0.9641963108336724'}, {'column1': '1849152565', 'column2': '叶建勛', 'column3': '0.6983720944213108'}, {'column1': '1643971635', 'column2': '凤凰卫视', 'column3': '0.5'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '0.5'}] ,
        tableData_firebrand_neg_pelosi22: [{'column1': '1680950470', 'column2': '岳刚', 'column3': '-1.4361729742967633'}, {'column1': '7327219328', 'column2': 'ChongSan冲先生', 'column3': '-0.9421828015681183'}, {'column1': '3307982575', 'column2': '没有会员的9526', 'column3': '-0.49967946482507275'}, {'column1': '6338609061', 'column2': '用户6338609061', 'column3': '-0.4993686584541266'}, {'column1': '6722219054', 'column2': '咕咕_咕_咕咕咕', 'column3': '-0.4222896105536139'}] ,
        tableData_firebrand_pos_pelosi23: [{'column1': '2803301701', 'column2': '人民日报', 'column3': '1.499999999342784'}, {'column1': '2280198017', 'column2': '解放军报', 'column3': '1.4999999990993693'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '1.4999975253963465'}, {'column1': '2343014623', 'column2': '衝鋒号角', 'column3': '1.4967303857599805'}, {'column1': '2656274875', 'column2': '央视新闻', 'column3': '1.0'}, {'column1': '1920901005', 'column2': '游仙公安', 'column3': '1.0'}, {'column1': '5634013749', 'column2': 'zfw平安浦城', 'column3': '1.0'}, {'column1': '3614752171', 'column2': '贵州省凯里监狱', 'column3': '1.0'}, {'column1': '5094103156', 'column2': '上海反邪教', 'column3': '1.0'}, {'column1': '2801287904', 'column2': '四川监狱', 'column3': '1.0'}] ,
        tableData_firebrand_neg_pelosi23: [] ,
        tableData_firebrand_pos_pelosi24: [{'column1': '1784473157', 'column2': '中国新闻网', 'column3': '1.499978075495315'}, {'column1': '5112028857', 'column2': '五峰检察', 'column3': '1.4999596976005525'}, {'column1': '1663072851', 'column2': '中国日报', 'column3': '1.2024683812122365'}, {'column1': '2127460165', 'column2': '中国日报网', 'column3': '0.9999945302772677'}, {'column1': '1895431523', 'column2': '大公報-大公網', 'column3': '0.9999780754953149'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '0.9999693021465483'}, {'column1': '1988438334', 'column2': '重庆发布', 'column3': '0.9999601822234545'}, {'column1': '1876265021', 'column2': 'BRTV新闻', 'column3': '0.9999601822234545'}, {'column1': '7012979622', 'column2': '清水融媒体中心', 'column3': '0.9999306541576143'}, {'column1': '1232121710', 'column2': '山西晚报', 'column3': '0.9999098688503572'}] ,
        tableData_firebrand_neg_pelosi24: [{'column1': '2880620770', 'column2': '梦想家陈轶亮', 'column3': '-0.4834203737421543'}, {'column1': '7212599981', 'column2': '继续热爱生活Ming', 'column3': '-0.3777642643010233'}] ,
        tableData_firebrand_pos_pelosi25: [{'column1': '7099422177', 'column2': '外交部发言人办公室', 'column3': '1.5'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '1.5'}, {'column1': '1717833412', 'column2': '华商报', 'column3': '1.4999999999998768'}, {'column1': '6066193547', 'column2': '七环视频', 'column3': '1.4999999801225103'}, {'column1': '1887344341', 'column2': '观察者网', 'column3': '1.4999196355434665'}, {'column1': '1991114285', 'column2': '你好台湾网', 'column3': '1.0'}, {'column1': '1977902724', 'column2': '看台海', 'column3': '1.0'}, {'column1': '1784473157', 'column2': '中国新闻网', 'column3': '1.0'}, {'column1': '1643971635', 'column2': '凤凰卫视', 'column3': '1.0'}, {'column1': '2656274875', 'column2': '央视新闻', 'column3': '1.0'}] ,
        tableData_firebrand_neg_pelosi25: [{'column1': '7056167644', 'column2': 'KS小芒果', 'column3': '-1.3549058240062393'}, {'column1': '2058022060', 'column2': '菡萏泪', 'column3': '-0.4998349693973584'}, {'column1': '1992424454', 'column2': ' 堯偂澍', 'column3': '-0.056097251441110885'}] ,
        tableData_firebrand_pos_pelosi26: [{'column1': '7470181331', 'column2': '海峡导报社', 'column3': '7.994056119900541'}, {'column1': '1849152565', 'column2': '叶建勛', 'column3': '2.535898424499636'}, {'column1': '5677083073', 'column2': '股 市V老滑头-', 'column3': '2.0'}, {'column1': '7609397798', 'column2': '桥边男孩May', 'column3': '1.9578992132202035'}, {'column1': '2267219482', 'column2': '粤港澳小小胖', 'column3': '1.94217552199914'}, {'column1': '2635045264', 'column2': '爱传播新传考研', 'column3': '1.5'}, {'column1': '6447640848', 'column2': '晴雨风曰', 'column3': '1.4903657635432443'}, {'column1': '1675822840', 'column2': '当不了村花当村长', 'column3': '1.3550502777581495'}, {'column1': '7783795638', 'column2': '今视', 'column3': '1.0'}, {'column1': '2353227834', 'column2': '为有书香来', 'column3': '0.5'}] ,
        tableData_firebrand_neg_pelosi26: [{'column1': '5979629331', 'column2': '五桶工坊', 'column3': '-0.4997833475237251'}, {'column1': '2066710903', 'column2': '温冬Libra', 'column3': '-0.49940107349181795'}, {'column1': '1272214722', 'column2': '昕飞扬1996', 'column3': '-0.49897046120809974'}, {'column1': '7293813897', 'column2': '通天書生諸葛臥龍', 'column3': '-0.4956048254958576'}, {'column1': '3261432575', 'column2': '简单一点____', 'column3': '-0.4911609836066825'}, {'column1': '5404155620', 'column2': '揽月cherry', 'column3': '-0.4608964508849096'}, {'column1': '2394530374', 'column2': '乌龙谈', 'column3': '-0.45438497206073136'}] ,
        tableData_firebrand_pos_pelosi27: [{'column1': '6221932120', 'column2': '直新闻', 'column3': '5.498953676224704'}, {'column1': '7040797671', 'column2': '玉渊谭天', 'column3': '2.492018443291325'}, {'column1': '1887344341', 'column2': '观察 者网', 'column3': '1.4999998722889325'}, {'column1': '1977460817', 'column2': '央视网快看', 'column3': '1.4999694288286922'}, {'column1': '1649014072', 'column2': '评论员李炜', 'column3': '1.4954261758463754'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '1.4533971517031814'}, {'column1': '2676828957', 'column2': '零度时评', 'column3': '1.4457263839586132'}, {'column1': '3164957712', 'column2': '中国网', 'column3': '0.999999999999976'}, {'column1': '1663072851', 'column2': '中国日报', 'column3': '0.9999998839576385'}, {'column1': '1499104401', 'column2': '新浪军事', 'column3': '0.9993171274595638'}] ,
        tableData_firebrand_neg_pelosi27: [{'column1': '2034347300', 'column2': '郑州晚报', 'column3': '-2.999999588187287'}, {'column1': '3173633817', 'column2': 'CGTN', 'column3': '-0.9331186832304169'}, {'column1': '2769885021', 'column2': '中新视频', 'column3': '-0.7868767702650842'}, {'column1': '1812175903', 'column2': '科学未来人', 'column3': '-0.5187112024687264'}, {'column1': '5044281310', 'column2': '澎湃新闻', 'column3': '-0.4826651813401668'}, {'column1': '6620287477', 'column2': '止戈军是我', 'column3': '-0.2675479465234041'}, {'column1': '2680915954', 'column2': '安泽Anzeeeeee', 'column3': '-0.18036975368225205'}] ,
        tableData_firebrand_pos_pelosi4: [{'column1': '7242699553', 'column2': '松花柚子', 'column3': '5.432116776350736'}, {'column1': '1189295834', 'column2': '帅车评', 'column3': '2.150575098471894'}, {'column1': '2328007923', 'column2': '灰产圈_', 'column3': '1.4999991328916802'}, {'column1': '1703371307', 'column2': '北京晚报', 'column3': '0.9838210881496834'}, {'column1': '1747366741', 'column2': '网眼八分斋', 'column3': '0.9764605034780642'}, {'column1': '6105713761', 'column2': '红星新闻', 'column3': '0.9404047158778788'}, {'column1': '5564927603', 'column2': '无心简影', 'column3': '0.8947371505195225'}, {'column1': '7575044830', 'column2': '痞王爷loc', 'column3': '0.49999999999971934'}, {'column1': '6244553417', 'column2': '今日俄罗斯RT', 'column3': '0.4999999998419631'}, {'column1': '1709286740', 'column2': '中国台湾网', 'column3': '0.4999969204369019'}] ,
        tableData_firebrand_neg_pelosi4: [{'column1': '7312024690', 'column2': '疾风中青勁草', 'column3': '-25.49996594659524'}, {'column1': '2632236847', 'column2': '香港文匯網', 'column3': '-5.99650155895493'}, {'column1': '7327219328', 'column2': 'ChongSan冲先生', 'column3': '-1.8843656031362364'}, {'column1': '6317134281', 'column2': '爱国青年刘战神', 'column3': '-0.7825156788439438'}, {'column1': '1678844014', 'column2': '克总评车', 'column3': '-0.4988788784411047'}, {'column1': '3966129175', 'column2': '兰斌强', 'column3': '-0.4783296275099663'}, {'column1': '5156168404', 'column2': '小狐狸爱喝 冰阔落', 'column3': '-0.02162902714063808'}] ,
        tableData_firebrand_pos_pelosi3: [{'column1': '2181597154', 'column2': '俄罗斯卫星通讯社', 'column3': '5.981473424020054'}, {'column1': '1654134123', 'column2': '早报网', 'column3': '3.490466092821899'}, {'column1': '1717257814', 'column2': '丁辰灵', 'column3': '3.406153039805835'}, {'column1': '1347322121', 'column2': '史凝眸', 'column3': '2.999991485044162'}, {'column1': '6508016609', 'column2': '风闻社区', 'column3': '1.9999999800828432'}, {'column1': '1647486362', 'column2': '上帝之鹰_5zn', 'column3': '1.9600630395988206'}, {'column1': '1845864154', 'column2': '看看新闻KNEWS', 'column3': '1.5024352150127875'}, {'column1': '2198692254', 'column2': '中国评论通讯社', 'column3': '1.5'}, {'column1': '2868676035', 'column2': '财联社APP', 'column3': '1.4732567087955353'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '1.0'}] ,
        tableData_firebrand_neg_pelosi3: [{'column1': '1224900857', 'column2': '马跃成', 'column3': '-0.8674188340530152'}, {'column1': '2770722975', 'column2': '每天读点正能量', 'column3': '-0.4999999989096042'}, {'column1': '1322847342', 'column2': '泉州那些事儿', 'column3': '-0.499999957222655'}, {'column1': '7722299178', 'column2': '爱吃西瓜的小鹿鹿', 'column3': '-0.31627512784280376'}, {'column1': '1567106610', 'column2': '猫警官', 'column3': '-0.29670323694227796'}, {'column1': '5631464467', 'column2': '蓝鲸小跟班', 'column3': '-0.20149664926916633'}, {'column1': '2623309085', 'column2': '浪里花花猫', 'column3': '-0.198449570146078'}, {'column1': '3956055188', 'column2': '甄姬不放瓜', 'column3': '-0.08250642527015895'}, {'column1': '6018358406', 'column2': '势必打倒偷电瓶贼', 'column3': '-0.009766190252366469'}] ,
        tableData_firebrand_pos_pelosi2: [{'column1': '6501823818', 'column2': '每天读文史', 'column3': '2.4999999993895083'}, {'column1': '1686546714', 'column2': '环球网', 'column3': '2.0'}, {'column1': '1974576991', 'column2': '环球时报', 'column3': '1.9410747244218618'}, {'column1': '6191604322', 'column2': '李小粥的茶水间', 'column3': '1.4999995666580876'}, {'column1': '5395667635', 'column2': '厦门广电', 'column3': '1.4999966690451914'}, {'column1': '1643971635', 'column2': '凤凰卫视', 'column3': '1.4590992410019266'}, {'column1': '2803301701', 'column2': '人民日报', 'column3': '1.0'}, {'column1': '2280198017', 'column2': '解放军报', 'column3': '1.0'}, {'column1': '1663072851', 'column2': '中国日报', 'column3': '0.9999999999998643'}, {'column1': '6189120710', 'column2': '央视军事', 'column3': '0.9998700636325238'}] ,
        tableData_firebrand_neg_pelosi2: [{'column1': '6317134281', 'column2': '爱国青年刘战神', 'column3': '-5.452712240263638'}, {'column1': '1671109627', 'column2': '包容万物恒河水', 'column3': '-5.44737052047258'}, {'column1': '2632236847', 'column2': '香港文匯網', 'column3': '-4.4973761692161975'}, {'column1': '7312024690', 'column2': '疾风中青勁草', 'column3': '-2.499996596428448'}, {'column1': '1717257814', 'column2': '丁辰灵', 'column3': '-1.822447402906874'}, {'column1': '6059492811', 'column2': '拆台CT', 'column3': '-1.5252112099975392'}, {'column1': '5333693607', 'column2': '武力统一', 'column3': '-1.4623545507698057'}, {'column1': '5564927603', 'column2': '无心简影', 'column3': '-1.1418227357557376'}, {'column1': '1659893422', 'column2': '小凡好摄', 'column3': '-0.9999997712817041'}, {'column1': '3562102550', 'column2': '胖 歆今天也要很健康哦', 'column3': '-0.9999811992879133'}] ,
        tableData_firebrand_pos_pelosi1: [{'column1': '5933338496', 'column2': '娱乐探神', 'column3': '13.49388002896445'}, {'column1': '1671109627', 'column2': '包容万物恒河水', 'column3': '5.053434269818595'}, {'column1': '7470181331', 'column2': '海峡导报社', 'column3': '3.999590907352652'}, {'column1': '2267219482', 'column2': '粤港澳小小胖', 'column3': '3.420126716043808'}, {'column1': '1717257814', 'column2': '丁辰灵', 'column3': '3.284783236402443'}, {'column1': '1222382122', 'column2': '相三三三', 'column3': '2.9999998920330975'}, {'column1': '5634013749', 'column2': 'zfw平安浦城', 'column3': '2.999962063224843'}, {'column1': '7609397798', 'column2': '桥边男孩May', 'column3': '2.954671511935196'}, {'column1': '1884966615', 'column2': '毒眼观察', 'column3': '2.49999999999998'}, {'column1': '1643971635', 'column2': '凤凰卫视', 'column3': '2.499994941648527'}] ,
        tableData_firebrand_neg_pelosi1: [{'column1': '6179147559', 'column2': '留白留白8899', 'column3': '-3.9999880415305133'}, {'column1': '7327219328', 'column2': 'ChongSan冲先生', 'column3': '-1.8843656031362364'}, {'column1': '6444839455', 'column2': 'gracenuo777', 'column3': '-0.9999874177103596'}, {'column1': '7642775855', 'column2': 'myru_', 'column3': '-0.7830555481626107'}, {'column1': '2632236847', 'column2': '香港文匯網', 'column3': '-0.4995879192932151'}, {'column1': '1272214722', 'column2': '昕飞扬1996', 'column3': '-0.49897046120809974'}, {'column1': '5991018120', 'column2': '邢铁蛋', 'column3': '-0.49489743354711957'}, {'column1': '1704252821', 'column2': '好梦留人睡Zz', 'column3': '-0.4947943365616736'}, {'column1': '6388187156', 'column2': '一名暴躁的美少女', 'column3': '-0.4919622546838752'}, {'column1': '2788285682', 'column2': '迷醉_沉沦', 'column3': '-0.48407103682424546'}] ,

        tableData_firebrand_pos_ukraine12: [{'column1': '4837485831527093', 'column2': '内蒙古反邪教', 'column3': '0.9999483899329584'}, {'column1': '4838590822220878', 'column2': '直新闻', 'column3': '0.9998532335131713'}, {'column1': '4837475287828341', 'column2': '央视军事', 'column3': '0.9992335967744681'}, {'column1': '4837525430734638', 'column2': '环球时报', 'column3': '0.9992335967744681'}, {'column1': '4839450616534511', 'column2': '央视军事', 'column3': '0.4999999994270845'}, {'column1': '4838299274841121', 'column2': '凤凰卫视', 'column3': '0.4999999970905593'}, {'column1': '4838987267576441', 'column2': '寰球镜头', 'column3': '0.49999942379148143'}, {'column1': '4838970619333413', 'column2': '今日俄罗斯RT', 'column3': '0.4999961215958687'}, {'column1': '4838948188197168', 'column2': '新浪军事', 'column3': '0.4999629519343769'}, {'column1': '4838947689858540', 'column2': '央广军事', 'column3': '0.4999224788349004'}] ,
        tableData_firebrand_neg_ukraine12: [{'column1': '4837242806209964', 'column2': '博闻视点', 'column3': '-0.39862535006649824'}] ,
        tableData_firebrand_pos_ukraine11: [{'column1': '4838988440933567', 'column2': '星话大白', 'column3': '1.4967683698747525'}, {'column1': '4837540718448205', 'column2': '六爷阿旦', 'column3': '0.5'}, {'column1': '4839641851102006', 'column2': '六爷阿旦', 'column3': '0.5'}, {'column1': '4838698996472865', 'column2': '枫冷慕诗', 'column3': '0.4999999999999065'}, {'column1': '4838746673382448', 'column2': '星话大白', 'column3': '0.4999999999502127'}, {'column1': '4837056583567100', 'column2': '大鹏守御千户所', 'column3': '0.49999999979745047'}, {'column1': '4839359361322332', 'column2': '喵斯拉大 王二号机', 'column3': '0.49996450064945797'}, {'column1': '4837072768074865', 'column2': '御史在野', 'column3': '0.48739774731184393'}, {'column1': '4836917772029072', 'column2': '张国庆看天下', 'column3': '0.47781940106924836'}, {'column1': '4839097057416232', 'column2': '星话大白', 'column3': '0.1164848136383766'}] ,
        tableData_firebrand_neg_ukraine11: [{'column1': '4838930115200154', 'column2': '蜗牛柯基', 'column3': '-0.8436085143216641'}, {'column1': '4838548509563521', 'column2': '蜗牛柯基', 'column3': '-0.7924190259408694'}, {'column1': '4839275991140009', 'column2': '星话大白', 'column3': '-0.4999999788284004'}, {'column1': '4839284118650925', 'column2': '蜗牛柯基', 'column3': '-0.4979960766792283'}, {'column1': '4839096885969442', 'column2': '星话大白', 'column3': '-0.44142897635339495'}] ,
        tableData_firebrand_pos_ukraine10: [{'column1': '4839129248433730', 'column2': '包容万物恒河水', 'column3': '1.482023116678751'}, {'column1': '4838316995782318', 'column2': '财经网', 'column3': '0.9999999995672848'}, {'column1': '4838298021794238', 'column2': '央视财经', 'column3': '0.9999999944741189'}, {'column1': '4837248606668695', 'column2': '央视财经', 'column3': '0.9999999518848448'}, {'column1': '4837887818859377', 'column2': '凤凰卫视', 'column3': '0.4999999999995035'}, {'column1': '4837919196451249', 'column2': '凤凰卫视', 'column3': '0.4999999970382918'}, {'column1': '4838373728977616', 'column2': '寰亚SYHP', 'column3': '0.49992243714958096'}, {'column1': '4838243814868991', 'column2': '参考消息', 'column3': '0.4996552778898514'}, {'column1': '4839104607161476', 'column2': '穗城流年', 'column3': '0.49475882100901636'}] ,
        tableData_firebrand_neg_ukraine10: [{'column1': '4838981366453558', 'column2': '每日经济新闻', 'column3': '-0.9999988368411767'}, {'column1': '4838550640526542', 'column2': '央视财经', 'column3': '-0.999944504485228'}, {'column1': '4839105844481311', 'column2': '中国日报', 'column3': '-0.4921224532914632'}, {'column1': '4838585729292695', 'column2': '海興一 號', 'column3': '-0.48712864757919594'}, {'column1': '4838581099824120', 'column2': '和珅的和_', 'column3': '-0.48686862294183786'}, {'column1': '4839032385178967', 'column2': '转角遇贱叔', 'column3': '-0.44965153443090555'}] ,
        tableData_firebrand_pos_ukraine8: [{'column1': '4838698996472865', 'column2': '枫冷慕诗', 'column3': '0.999999999999813'}, {'column1': '4837824904563523', 'column2': '参考消息', 'column3': '0.4999999999999971'}, {'column1': '4837522913887728', 'column2': '观察者网', 'column3': '0.49999999999999645'}, {'column1': '4838589940631025', 'column2': 'Vista看天下', 'column3': '0.4999999229711688'}, {'column1': '4837272505552528', 'column2': '观察者网', 'column3': '0.49999969587486925'}, {'column1': '4838912571478554', 'column2': '小央视频', 'column3': '0.49994315490513774'}, {'column1': '4839438251200835', 'column2': '澎湃新闻', 'column3': '0.49989800177184307'}, {'column1': '4838298428639173', 'column2': '娱乐圈颜狗鉴赏', 'column3': '0.4998397163812033'}, {'column1': '4837175872459757', 'column2': '央视网科技', 'column3': '0.4993278256848782'}, {'column1': '4837208843880879', 'column2': '小央视频', 'column3': '0.4993278256848782'}] ,
        tableData_firebrand_neg_ukraine8: [{'column1': '4838563512591074', 'column2': '凤凰卫视', 'column3': '-0.9999999990171302'}, {'column1': '4838001069263452', 'column2': '参考消息', 'column3': '-0.9990261361225048'}, {'column1': '4838029120245920', 'column2': '寰球镜头', 'column3': '-0.49999832394489363'}, {'column1': '4838046057371170', 'column2': '扎西德勒·天珠收藏', 'column3': '-0.4999695826778956'}, {'column1': '4838740944487834', 'column2': '环球时报', 'column3': '-0.397374691558825'}, {'column1': '4838899984110901', 'column2': '参考消息', 'column3': '-0.3555831776593954'}, {'column1': '4837488603955488', 'column2': '涨妈爱生活', 'column3': '-0.2969809555447859'}] ,
        tableData_firebrand_pos_ukraine9: [{'column1': '4837038949401577', 'column2': '八大商人', 'column3': '1.5'}, {'column1': '4838589722791431', 'column2': '孙国生', 'column3': '1.4999999999997695'}, {'column1': '4838197815151957', 'column2': '正保会计网校面授课堂', 'column3': '1.4999826126192946'}, {'column1': '4839295842782522', 'column2': 'GoddessCheng程女神', 'column3': '0.9997445192557843'}, {'column1': '4837589239205906', 'column2': '杨帆教授', 'column3': '0.4999999999999998'}, {'column1': '4836794506678911', 'column2': '吕璐Lumi', 'column3': '0.4999999946248401'}, {'column1': '4838670953614357', 'column2': '吕璐Lumi', 'column3': '0.49999988023764386'}, {'column1': '4838861731272529', 'column2': '王又又', 'column3': '0.4999982085397544'}, {'column1': '4838176574932927', 'column2': '正保会计网校中级会计职称辅导', 'column3': '0.4999973110120097'}, {'column1': '4837213109752940', 'column2': '中国军视网', 'column3': '0.4997082698179133'}] ,
        tableData_firebrand_neg_ukraine9: [{'column1': '4839299834974955', 'column2': 'GoddessCheng程女神', 'column3': '-0.9993696480755885'}, {'column1': '4838334507521918', 'column2': '评论员杜平', 'column3': '-0.4932832811869242'}, {'column1': '4837888041422328', 'column2': '股票股市实战军师-老金', 'column3': '-0.470057354966419'}] ,
        tableData_firebrand_pos_ukraine7: [{'column1': '4839382954019888', 'column2': '灵灵看世界', 'column3': '1.999998250180563'}, {'column1': '4839334736563940', 'column2': '灵灵看世界', 'column3': '1.9287028054245678'}, {'column1': '4838652431044343', 'column2': '金亮', 'column3': '1.499993304920879'}, {'column1': '4838996464637316', 'column2': '金亮', 'column3': '0.9999999999995017'}, {'column1': '4836794506678911', 'column2': '吕璐Lumi', 'column3': '0.4999999946248401'}, {'column1': '4839287462568107', 'column2': '钢七连Unbreakable7', 'column3': '0.49999999385287786'}, {'column1': '4837630195797147', 'column2': '王晓鹏海论', 'column3': '0.4926912944035531'}, {'column1': '4839275692560235', 'column2': '脑科学世界', 'column3': '0.48655921836425997'}, {'column1': '4839139851636858', 'column2': '金华身边事', 'column3': '0.47241760936047417'}, {'column1': '4838159349975947', 'column2': '钢七连Unbreakable7', 'column3': '0.11610675987182384'}] ,
        tableData_firebrand_neg_ukraine7: [{'column1': '4838334507521918', 'column2': '评论员杜平', 'column3': '-0.9865665623738484'}, {'column1': '4839247699771860', 'column2': '新浪军事', 'column3': '-0.49999988926915884'}, {'column1': '4839263253041595', 'column2': '宋敬亭', 'column3': '-0.4999819580554976'}, {'column1': '4839159943135494', 'column2': '戴斌', 'column3': '-0.49993566895310193'}, {'column1': '4839284118650925', 'column2': '蜗牛柯基', 'column3': '-0.4979960766792283'}, {'column1': '4839156780630458', 'column2': '水泊松山', 'column3': '-0.49140312695901'}] ,
        tableData_firebrand_pos_ukraine6: [{'column1': '4839286484243151', 'column2': '宋晓军', 'column3': '0.4999999993716471'}, {'column1': '4838690955992490', 'column2': 'CGTN俄语频道', 'column3': '0.4999999969373856'}, {'column1': '4836820787396625', 'column2': '财新网', 'column3': '0.4999999818152524'}, {'column1': '4838014334799841', 'column2': '身为里中横', 'column3': '0.4999999815585957'}, {'column1': '4839225927666442', 'column2': '游资赵老哥v', 'column3': '0.49999870914763445'}, {'column1': '4838996377605219', 'column2': '财联社APP', 'column3': '0.49996230543061404'}, {'column1': '4837076489733648', 'column2': '妖哥财经_', 'column3': '0.4999376873416834'}, {'column1': '4838005933605238', 'column2': '动静新闻', 'column3': '0.4998915448601847'}, {'column1': '4838988310909496', 'column2': '看看新闻全球眼', 'column3': '0.49985889640681147'}, {'column1': '4839031768615586', 'column2': '看看新闻KNEWS', 'column3': '0.4991892051666652'}] ,
        tableData_firebrand_neg_ukraine6: [{'column1': '4838405090050074', 'column2': '妖哥财经_', 'column3': '-0.5'}, {'column1': '4838348725687781', 'column2': '题材哥', 'column3': '-0.499999999999998'}, {'column1': '4837212154496834', 'column2': '财联社APP', 'column3': '-0.49999618542363256'}, {'column1': '4839105844481311', 'column2': '中国日报', 'column3': '-0.4921224532914632'}, {'column1': '4838636421650156', 'column2': '今年二多', 'column3': '-0.4910132063928948'}, {'column1': '4838724708344446', 'column2': '大鹏守御千户所', 'column3': '-0.13090574847207792'}] ,
        tableData_firebrand_pos_ukraine5: [{'column1': '4838552200544837', 'column2': '乌克兰信使', 'column3': '4.5'}, {'column1': '4836762909933669', 'column2': '乌克兰信使', 'column3': '4.499999998231312'}, {'column1': '4836786054895639', 'column2': '乌克兰信使', 'column3': '4.49999942031321'}, {'column1': '4837845813170295', 'column2': '雒邑叔宽', 'column3': '0.9999999999945293'}, {'column1': '4838221240866527', 'column2': '雒邑叔宽', 'column3': '0.49999953396050945'}] ,
        tableData_firebrand_neg_ukraine5: [{'column1': '4839174164972538', 'column2': '柯义就叫柯义', 'column3': '-0.49999211939788035'}] ,
        tableData_firebrand_pos_ukraine3: [{'column1': '4836868979956646', 'column2': '栾少湖董事长', 'column3': '0.4999999998710116'}, {'column1': '4837603125494280', 'column2': '君子和而不同999', 'column3': '0.49999999705553777'}, {'column1': '4836983651698054', 'column2': '桂强芳', 'column3': '0.499999983882049'}, {'column1': '4836887413922770', 'column2': '尼克 安闲', 'column3': '0.49999936601103045'}, {'column1': '4837190847170701', 'column2': '傲蕾一兰永不变心', 'column3': '0.49999921631151967'}, {'column1': '4837083615331194', 'column2': '好时代见证记录者', 'column3': '0.4999215506921181'}, {'column1': '4836915129361091', 'column2': '桂强芳', 'column3': '0.49974462375488515'}, {'column1': '4837953417511399', 'column2': '君子和而不同999', 'column3': '0.49954004197595847'}, {'column1': '4839329086573587', 'column2': '军武季', 'column3': '0.49951815728407645'}, {'column1': '4838179901542409', 'column2': '大鹏守御千户所', 'column3': '0.4994376281600049'}] ,
        tableData_firebrand_neg_ukraine3: [{'column1': '4838904114451630', 'column2': '大公報-大公網', 'column3': '-0.49999999994977573'}, {'column1': '4837823267998965', 'column2': '看看新闻KNEWS', 'column3': '-0.49999971313024394'}, {'column1': '4837360908633301', 'column2': '华尔街见闻APP', 'column3': '-0.4993094426393556'}, {'column1': '4837223583979157', 'column2': '博闻视点', 'column3': '-0.496224044384752'}, {'column1': '4838136070799673', 'column2': '老舍妹子', 'column3': '-0.49062877220887957'}, {'column1': '4838737915415914', 'column2': '晨雾', 'column3': '-0.4851130942589127'}, {'column1': '4838378547712475', 'column2': '七环视频', 'column3': '-0.3884790395580684'}, {'column1': '4836908481390260', 'column2': '美国丑事', 'column3': '-0.38126786172980875'}, {'column1': '4837087519968806', 'column2': '阿南Talk', 'column3': '-0.21855738228154897'}, {'column1': '4838655552132434', 'column2': '身为里中横', 'column3': '-0.14773392995003654'}] ,
        tableData_firebrand_pos_ukraine4: [{'column1': '4837471504567977', 'column2': '人民政协报', 'column3': '1.0'}, {'column1': '4837469747679058', 'column2': '人民政协网', 'column3': '1.0'}, {'column1': '4838974982717524', 'column2': '中国日报', 'column3': '0.9999922179030425'}, {'column1': '4838969042540413', 'column2': '中国水运报', 'column3': '0.9999922179030425'}, {'column1': '4838686347232851', 'column2': '中新经纬', 'column3': '0.9999920978859083'}, {'column1': '4838965277103193', 'column2': '环球时报', 'column3': '0.999972831676927'}, {'column1': '4839414750515024', 'column2': '雒邑叔宽', 'column3': '0.49999999999999933'}, {'column1': '4839601610951551', 'column2': '今日俄罗斯RT', 'column3': '0.4999999999999323'}, {'column1': '4837840003012905', 'column2': '雒邑叔宽', 'column3': '0.49999999999949307'}, {'column1': '4839289555255758', 'column2': '参考消息', 'column3': '0.49999999934485273'}] ,
        tableData_firebrand_neg_ukraine4: [{'column1': '4838249069281787', 'column2': '凤凰网视频', 'column3': '-0.979546484934982'}, {'column1': '4839247699771860', 'column2': '新浪军事', 'column3': '-0.49999988926915884'}, {'column1': '4837509965813588', 'column2': '参考消息', 'column3': '-0.4999981094924648'}, {'column1': '4836782489996558', 'column2': '新浪军事', 'column3': '-0.4750250188902362'}, {'column1': '4838637815204389', 'column2': '话说三秦', 'column3': '-0.4295979945967797'}, {'column1': '4838617459465206', 'column2': '如皋老猫', 'column3': '-0.4161856048165271'}, {'column1': '4838139694154263', 'column2': '新浪军事', 'column3': '-0.3407156182628497'}, {'column1': '4837167531299779', 'column2': '新浪军事', 'column3': '-0.1250878551127359'}, {'column1': '4839236900226046', 'column2': '新浪军事', 'column3': '-0.009424908002687249'}] ,
        tableData_firebrand_pos_ukraine2: [{'column1': '4837270231982844', 'column2': '4837270231982844', 'column3': '1.9999999999484386'}, {'column1': '4837238536669090', 'column2': '环球人物杂志', 'column3': '1.3900727229085317'}, {'column1': '4838212469531389', 'column2': '凤凰卫视', 'column3': '1.0'}, {'column1': '4837087645799895', 'column2': '任韧', 'column3': '0.9941566069482508'}, {'column1': '4837224674497453', 'column2': '彼得堡的肥天鹅', 'column3': '0.5'}, {'column1': '4838620144600593', 'column2': '凤凰卫视', 'column3': '0.5'}, {'column1': '4838514073799001', 'column2': '人间真实的佳凝姐', 'column3': '0.5'}, {'column1': '4837655353235725', 'column2': '山高县', 'column3': '0.5'}, {'column1': '4837520963800520', 'column2': '梁无咎', 'column3': '0.5'}, {'column1': '4836766223701418', 'column2': '雨农观察', 'column3': '0.5'}] ,
        tableData_firebrand_neg_ukraine2: [{'column1': '4838173966600773', 'column2': '娜娜要努力VIP', 'column3': '-0.7243964713717239'}, {'column1': '4839020279896869', 'column2': '财新网', 'column3': '-0.4999999989693471'}, {'column1': '4838529647514875', 'column2': '徐嘉苧', 'column3': '-0.49999995802179975'}, {'column1': '4837249377637022', 'column2': '俄乌战争 纪实', 'column3': '-0.49963896031834953'}, {'column1': '4839490314568229', 'column2': '台湾傻事', 'column3': '-0.49703052248517043'}, {'column1': '4838649671979482', 'column2': '丘赫尔加坚--', 'column3': '-0.4792849108304341'}, {'column1': '4838258930878983', 'column2': '房长沙V', 'column3': '-0.47885557221586317'}, {'column1': '4837146382830016', 'column2': '煮鹅大师', 'column3': '-0.45828008909845175'}, {'column1': '4836767167944510', 'column2': '大鹏守御千户所', 'column3': '-0.4241270330726987'}, {'column1': '4837116146095059', 'column2': '澎湃新闻', 'column3': '-0.39383945681263643'}] ,
        tableData_firebrand_pos_ukraine1: [{'column1': '4838968317971213', 'column2': '萤火虫如我', 'column3': '4.499989227967887'}, {'column1': '4838901531807129', 'column2': '萤火虫如我', 'column3': '4.499933438872885'}, {'column1': '4837845813170295', 'column2': '雒邑叔宽', 'column3': '3.999999999978116'}, {'column1': '4836778060546818', 'column2': '萤火虫如我', 'column3': '3.9999935945296343'}, {'column1': '4838764977592399', 'column2': '萤火虫如我', 'column3': '3.5'}, {'column1': '4839369464874861', 'column2': '萤火虫如我', 'column3': '3.5'}, {'column1': '4838304760991262', 'column2': '萤火虫如我', 'column3': '3.499999999786157'}, {'column1': '4839015679276424', 'column2': '萤火虫如我', 'column3': '3.499999997383414'}, {'column1': '4839351844078248', 'column2': '萤火虫如我', 'column3': '3.498724808182046'}, {'column1': '4836870065756288', 'column2': '仰望弗洛伊德', 'column3': '3.4983715248229337'}] ,
        tableData_firebrand_neg_ukraine1: [{'column1': '4839174164972538', 'column2': '柯义就叫柯义', 'column3': '-3.499944835785162'}, {'column1': '4838027689726143', 'column2': '萤火虫如我', 'column3': '-2.2424511758287617'}, {'column1': '4836897886830679', 'column2': '远山的呼唤_曾经的户外名', 'column3': '-1.8172971433287657'}, {'column1': '4837951915956728', 'column2': '远山的呼唤_曾经的户外名', 'column3': '-1.6725560357013287'}, {'column1': '4838737915415914', 'column2': '晨雾', 'column3': '-1.455339282776738'}, {'column1': '4838360666870138', 'column2': '指尖上的乌克兰', 'column3': '-1.4265923867615626'}, {'column1': '4837615583365941', 'column2': '远山的呼唤_曾经的户外名', 'column3': '-1.3771820134861334'}, {'column1': '4837057346667780', 'column2': '飞飞_xu', 'column3': '-1.327691031134202'}, {'column1': '4837435852981796', 'column2': '黄胜友', 'column3': '-1.1475879771099882'}, {'column1': '4838173966600773', 'column2': '娜娜要努力VIP', 'column3': '-0.9658619618289652'}] ,

        YQ_data: [
          {
            variety: "事件一",
            variety_value: "佩洛西访台舆情数据集",
            id:1,
          },
          // {
          //   variety: "事件二",
          //   variety_value: "俄乌冲突舆情数据集",
          //   id:2,
          // },
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
    methods: {
      getUserDetailLink(userId) {
        return `https://weibo.com/u/${userId}`;
      },
      openUserDetail(userId) {
        const userDetailUrl = `https://weibo.com/u/${userId}`;
        window.open(userDetailUrl, '_blank'); // 在新标签页中打开链接
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
      showUserDetails(user) {
        this.selectedUser = { nickname: '凤凰卫视' };
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
