<template>
  <div class="form-container">
    <el-row :gutter="20">

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
        <el-card shadow="never">
          <div slot="header">
            <h3>弹性需求选择</h3>
            <el-row :gutter="10">
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <el-select v-model="selectfloor.floorname" placeholder="请选择事件敏感程度">
                  <el-option v-for="item in selectfloor"
                             :key="item.floorid"
                             :label="item.floorname"
                             :value="item.floorid"
                  ></el-option>

                </el-select>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <el-select v-model="value" placeholder="请选择事件响范围" style="float:left">
                  <el-option v-for="item in options"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value"></el-option>
                </el-select>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <el-select v-model="purpose.rank_value" placeholder="请选择事件引导目标" style="float:left">
                  <el-option v-for="item in purpose"
                             :key="item.rank"
                             :label="item.rank_value"
                             :value="item.rank"></el-option>
                </el-select>
              </el-col>
            </el-row>
            <br><br><br>
            <span>
              舆情态势评估和引导策略舆情态势评估和引导策略舆情态势评估和引导策略舆情态势评估和引导策略舆情态势评估和引导策略舆情态势评估和引导策略舆情态势评估和引导策略
            </span>
            <br><br>
<!--            <img src="../figure/yindao1.jpg" width="420" height="300" />-->
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
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
            <el-select v-model="strategy.variety" placeholder="请选择策略">
              <el-option v-for="item in strategy"
                         :key="item.variety"
                         :label="item.variety_value"
                         :value="item.variety"></el-option>
            </el-select>
          </el-form-item>
          <br>
            <span>
              <el-divider content-position="left">
                <h3>Selected: {{ strategy.variety }}</h3>
              </el-divider>
              <br>
              基于竞争的引导策略基于竞争的引导策略基于竞争的引导策略基于竞争的引导策略基于竞争的引导策略
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
            floorname:'高'
          },{
            floorid:'等级2',
            floorname:'中'
          },
          {
            floorid:'等级3',
            floorname:'低'
          },
        ],
        options: [
          {
            value: "等级1",
            label: "大"
          },
          {
            value: "等级2",
            label: "中"
          },
          {
            value: "等级3",
            label: "小"
          },
        ],
        purpose: [
          {
            rank: "等级1",
            rank_value: "消除"
          },
          {
            rank: "等级2",
            rank_value: "控制"
          },
          {
            rank: "等级3",
            rank_value: "引导"
          },
        ],
        strategy: [
          {
            variety: "基于竞争的传播引导策略",
            variety_value: "基于竞争的传播引导策略"
          },
          {
            variety: "基于结构化阻断的引导策略",
            variety_value: "基于结构化阻断的引导策略"
          },

        ],
        value: "",
      };
    },

  };
</script>
