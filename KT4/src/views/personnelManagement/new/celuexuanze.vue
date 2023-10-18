<template>
  <div class="form-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h3>态势评估结果： 中级</h3>
        </el-divider>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card shadow="never">
          <div slot="header">
            <h3>弹性需求选择</h3>
            <el-row :gutter="10">
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <el-select v-model="selectfloor.floorid" placeholder="请选择事件敏感程度">
                  <el-option v-for="item in selectfloor"
                             :key="item.floorid"
                             :label="item.floorname"
                             :value="item.id"
                  ></el-option>

                </el-select>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <el-select v-model="options.value" placeholder="请选择事件响范围" style="float:left">
                  <el-option v-for="item in options"
                             :key="item.value"
                             :label="item.label"
                             :value="item.id"></el-option>
                </el-select>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <el-select v-model="purpose.rank" placeholder="请选择事件引导目标" style="float:left">
                  <el-option v-for="item in purpose"
                             :key="item.rank"
                             :label="item.rank_value"
                             :value="item.id"></el-option>
                </el-select>
              </el-col>
            </el-row>
            <br><br><br>
            <span>
              <h3>引导策略选择说明</h3>
<!--              <span  v-if ="selectfloor.floorid==1 " >-->
<!--                <span v-if="strategy.variety==1">-->
<!--                  <span v-if="purpose.rank==1">-->
<!--                基于结构化阻断的引导策略646-->
<!--              </span>-->
<!--              </span>-->
<!--              </span>-->
              <span v-if="purpose.rank==1">
                基于结构阻断的YQ引导策略技术提供了一种在社交网络中封锁YQ社区并抑制YQ传播的方法。采用局部节点或边的阻断方法，解决单一传播环境下最小代价YQ社区封锁优化问题。
                利用基于最小顶点覆盖的贪婪(MVCBG) 算法来寻找合适的节点进行封锁，阻断YQ事件进一步扩散。

              </span>
              <span v-else-if="purpose.rank==2">
                竞争环境下的影响力最大化引导算法
              </span>
              <span v-else>
                心理引导
                <br><br>
                <img src="../figure/xinli.jpg" width="700" height="700" />
              </span>

            </span>
            <br><br>
<!--            <img src="../figure/yindao1.jpg" width="420" height="300" />-->
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card shadow="never">
          <div slot="header">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm"
        >

          <el-form-item label="策略选择" >
            <el-select v-model="strategy.variety" placeholder="基于结构化阻断的引导策略">
              <el-option v-for="item in strategy"
                         :key="item.variety"
                         :label="item.variety_value"
                         :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <br>
          <span>
            <span  v-if ="strategy.variety==1" >
            基于竞争的传播引导策略<br><br>
          </span>
          <span v-else>
            基于结构阻断的YQ引导策略技术提供了一种在社交网络中封锁YQ社区并抑制YQ传播的方法。
            采用局部节点或边的阻断方法，解决单一传播环境下最小代价YQ社区封锁优化问题。 利用基于最小顶点覆盖的贪婪(MVCBG) 算法来寻找合适的节点进行封锁，
            阻断YQ事件进一步扩散。
            <br><br>
            <img src="../figure/miaoshu.png" width="740" height="186" />
          </span>


          </span>

<!--          <el-form-item>-->
<!--            <el-button type="primary" @click="submitForm('ruleForm')">-->
<!--              立即创建-->
<!--            </el-button>-->
<!--            <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--          </el-form-item>-->
        </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Form",
    data() {
      return {
        ruleForm: {
          name: "",
          region: "",
          delivery: false,
          type: [],
          resource: "",
          desc: "",
        },
        rules: {
          name: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            {

            },
          ],
        },
        selectfloor:[
          {
            floorid:'等级1',
            floorname:'高',
            id:1
          },{
            floorid:'等级2',
            floorname:'中',
            id:2
          },
          {
            floorid:'等级3',
            floorname:'低',
            id:3
          },
        ],
        options: [
          {
            value: "等级1",
            label: "大",
            id:1
          },
          {
            value: "等级2",
            label: "中",
            id:2
          },
          {
            value: "等级3",
            label: "小",
            id:3
          },
        ],
        purpose: [
          {
            rank: "等级1",
            rank_value: "消除",
            id:1
          },
          {
            rank: "等级2",
            rank_value: "控制",
            id:2
          },
          {
            rank: "等级3",
            rank_value: "引导",
            id:3
          },
        ],
        strategy: [
          {
            variety: "基于竞争的传播引导策略",
            variety_value: "基于竞争的传播引导策略",
            id:1
          },
          {
            variety: "基于结构化阻断的引导策略",
            variety_value: "基于结构化阻断的引导策略",
            id:2
          },


        ],
        value: "",
      };
    },

  };
</script>
