        <el-card shadow="hover" style="padding-left: 30px;">
          <div slot="header" class="clearfix">
            <span style="font-size: 20px; font-weight: bold;margin-right: 20px;">事件数据分析</span>
          </div>
          <div class="table" style="margin-bottom: 20px;">

          </div>
          <div style="padding: 20px; display: flex;flex-direction: row; justify-content: space-between;">
            <div id="echarts" style="width: 30%;height:500px;"></div>
            <div id="Pursue" style="width: 30%;height:500px;"></div>
            <div id="Emotion" style="width: 30%;height:500px;"></div>
          </div>
          <div style="margin-bottom: 30px;">
            <div style="display: flex;flex-direction: row;justify-content: space-between;">
              <h2>推荐策略</h2>
              <el-link>
                <!-- <h3 style="color: #409EFF;" @click="showStrategy">策略库</h3> -->
                <h2 style="color: #409EFF;" @click="showStrategy2">策略库</h2>
              </el-link>
            </div>
            <div style="padding-left: 10px;">
              <h3>根据敏感类型、核心诉求、负面情绪分析结果推荐恰当的策略</h3>
            </div>
            <div style="display: flex;justify-content: space-between; align-items: center;">
              <div style="display: flex;justify-content: space-around;align-items: center; width: 40%;font-size: 20px;color: #606266;height: 200px;">
                <div style="display: flex;flex-direction:column;justify-content: space-between;height: 150px; ">
                  <span>敏感：<el-tag effect="plain">
                      {{responseDataEventData.mingan}}
                    </el-tag></span>
                  <span>诉求：<el-tag type="success" effect="plain">{{responseDataEventData.suqiu}}</el-tag></span>
                  <span>情感：<el-tag type="warning" effect="plain">{{responseDataEventData.qingxu}}</el-tag></span>
                </div>
                <span><i style="font-size: 60px;" class="iconfont icon-cs-jt-xy-1-1"></i></span>
                <span>{{responseDataEventData.strategy}}<span style="color: #409EFF;padding-left: 10px;" type="primary"
                    @click="recomment">查看介绍</span></span>
              </div>
              <div style="width: 60%;">
                <div v-show="isShowStrage" style="100%">
                  <h2>推荐使用<span style="color: #cc0000;">{{responseDataEventData.strategy}}</span></h2>
                  <p style="color: #110000;font-size: 20px;line-height: 25px;">
                    {{responseDataEventData.strategyDetail}}
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div>
            <h2>干预效果</h2>
            <div style="padding-left: 30px;">
              <el-button type="primary" @click="showDuiResult">查看干预效果</el-button>
            </div>
            <!-- <el-button type="primary" @click="showCard">查看干预效果</el-button> -->

          </div>
        </el-card>