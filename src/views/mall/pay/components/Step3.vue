<template>
  <div>
    <div class="pay-top-content">
      <vab-icon class="pay-success" :icon="['fas', 'check-circle']"></vab-icon>
        <p style="font-size: 24px; font-weight: bold; line-height: 30px">策略选择及配置完成</p>
    </div>
    <el-card shadow="hover">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-card>
          <h2>策略的参数</h2>
<!--        <span style="font-size: 24px; font-weight: bold; line-height: 30px"> 选择的策略： </span>-->
          <el-col :xs="8" :sm="8" :md="8" :lg="12" :xl="12">
            <el-card>
              <span style="font-size: 18px; font-weight: bold; line-height: 30px"> 选择的策略： </span>
              <span  v-if ="infoData.payAccount==1" style="font-size: 18px; line-height: 30px">
                基于竞争的传播引导策略
              </span>

              <span v-else-if="infoData.payAccount==2" style="font-size: 18px; line-height: 30px">
                基于结构化阻断的引导策略
              </span>
              <span v-else style="font-size: 18px; line-height: 30px">
                基于社区阻断的引导策略
              </span>
            </el-card>
          </el-col>
          <el-col :xs="8" :sm="8" :md="8" :lg="12" :xl="12">
            <el-card>
              <span style="font-size: 18px; font-weight: bold; line-height: 30px"> 选择的数据： </span>
      <!--        {{ infoData.gatheringAccount }}-->
              <span v-if ="infoData.gatheringAccount==1" style="font-size: 18px; line-height: 30px">
                香港事件数据集
              </span>
              <span v-else-if ="infoData.gatheringAccount==2"  style="font-size: 18px; line-height: 30px">
                李文亮事件数据集
              </span>
              <span v-else style="font-size: 18px; line-height: 30px">
                丰巢收费事件数据集
              </span>
            </el-card>
          </el-col>
<!--          <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" >-->
<!--            <el-card>-->
<!--              <span style="font-size: 18px; font-weight: bold; line-height: 30px"> 引导的级别： </span>-->
<!--      &lt;!&ndash;        {{ infoData.gatheringName }}&ndash;&gt;-->
<!--              <span v-if ="infoData.gatheringName==1" style="font-size: 18px; line-height: 30px">-->
<!--                  级别一-->
<!--                </span>-->
<!--              <span v-else-if="infoData.gatheringName==2" style="font-size: 18px; line-height: 30px">-->
<!--                  级别二-->
<!--                </span>-->
<!--              <span v-else style="font-size: 18px; line-height: 30px">-->
<!--                  级别三-->
<!--                </span>-->
<!--            </el-card>-->
<!--          </el-col>-->
          </el-card>
      </el-col>
        <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
          <el-card>
            <span  v-if ="infoData.payAccount==1" >
              <h2>引导策略的具体实现过程</h2>
              <span style="font-size: 20px; line-height: 30px">
                <p style="font-size: 18px; font-weight: bold;"> 第一步: 初始网络信息传播以及数据标注</p>
                初始时，负面信息在社交网络中进行大规模传播，根据节点接受的信息种类将节点分为三类：被正面信息影响的节点；被负面信息影响的节点；既没有被正面信息影响，有没有被负面信息影响的节点，
                也叫中立节点。被正面信息影响的节点用蓝色表示，被负面信息影响的节点用红色表示，中立的节点用黑色表示。
                 <p style="font-size: 18px; font-weight: bold;"> 第二步: 选取种子节点投放正面信息进行传播</p>
                根据启发式算法和引导的级别选择选择特定数量的节点为种子节点，对其他节点进行有针对的引导传播。
                <p style="font-size: 18px; font-weight: bold;"> 第三步: 引导效果评估</p>
                将添加引导策略后的网络状态图与不添加引导策略的网络状态图进行对比的展示，直观的展示引导效果。
              </span>
            </span>

            <span v-else-if="infoData.payAccount==2" >
              <h2>引导策略的具体实现过程</h2>
              <span style="font-size: 20px; line-height: 30px">
                <p style="font-size: 18px; font-weight: bold;"> 第一步: 筛选有效用户节点</p>
                筛选有效用户节点，例如议论“XXX”事件的所有活跃用户，并确定舆情扩展时间范围（具体到年月日）筛选有效用户节点，例如议论“XXX”事件的所有活跃用户，并确定舆情扩展时间范围（具体到年月日）。
                 <p style="font-size: 18px; font-weight: bold;"> 第二步: 选择社区</p>
                  选择最为活跃的社区之一作为引导目标。
                <p style="font-size: 18px; font-weight: bold;"> 第三步: 施加策略</p>
                施加基于结构阻断策略——封锁必要节点。
                <p style="font-size: 18px; font-weight: bold;"> 第四步: 引导效果评估</p>
                引导效果评估展示——采取引导策略前后的对比。
              </span>
            </span>
            <span v-else style="font-size: 18px; line-height: 30px">
              基于社区阻断的引导策略
            </span>
          </el-card>
        </el-col>

<!--        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">-->
<!--          <el-card>-->
<!--            <span  v-if ="infoData.payAccount==1" >-->
<!--              <h2>引导策略的展示效果说明</h2>-->
<!--            </span>-->

<!--            <span v-else-if="infoData.payAccount==2" style="font-size: 18px; line-height: 30px">-->
<!--              基于结构化阻断的引导策略-->
<!--            </span>-->
<!--            <span v-else style="font-size: 18px; line-height: 30px">-->
<!--              基于社区阻断的引导策略-->
<!--            </span>-->
<!--          </el-card>-->
<!--        </el-col>-->
      </el-row>
    </el-card>
    <div class="pay-button-group">
      <el-button style="font-size: 18px; font-weight: bold;" type="primary" @click="handlePrev">重新选择策略  </el-button>
      <span  v-if ="infoData.payAccount==1" >
        <span v-if ="infoData.gatheringAccount==1" style="font-size: 18px; line-height: 30px">

            <el-button style="font-size: 18px; font-weight: bold;" type="link" @click="handle1">引导效果展示   </el-button>
        </span>
        <span v-else-if ="infoData.gatheringAccount==2"  style="font-size: 18px; line-height: 30px">
                <el-button style="font-size: 18px; font-weight: bold;" type="link" @click="handle1_1">引导效果展示   </el-button>
        </span>
        <span v-else style="font-size: 18px; line-height: 30px">
          <el-button style="font-size: 18px; font-weight: bold;" type="link" @click="handle1_2">引导效果展示   </el-button>
        </span>
          </span>
      <span v-else-if="infoData.payAccount==2" >
        <span v-if ="infoData.gatheringAccount==1" style="font-size: 18px; line-height: 30px">

            <el-button style="font-size: 18px; font-weight: bold;" type="link" @click="handle2">引导效果展示   </el-button>
        </span>
        <span v-else-if ="infoData.gatheringAccount==2"  style="font-size: 18px; line-height: 30px">
                <el-button style="font-size: 18px; font-weight: bold;" type="link" @click="handle2_1">引导效果展示   </el-button>
        </span>
        <span v-else style="font-size: 18px; line-height: 30px">
          <el-button style="font-size: 18px; font-weight: bold;" type="link" @click="handle2_2">引导效果展示   </el-button>
        </span>



          </span>
      <span v-else>
            <el-button style="font-size: 18px; font-weight: bold;" type="link" @click="handle3">引导效果展示</el-button>
          </span>

<!--      <el-button type="link" @click="handle">引导效果展示</el-button>-->
    </div>

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

    created(){
      this.getinfo();
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
      getinfo(){
        var sel1=this.$route.params.num;
        return sel1;
      },
      handlePrev() {
        this.$emit("change-step", 1);
      },
      handle1(){
        this.$router.push({name:'Results_show1'})
      },
      handle1_1(){
        this.$router.push({name:'Results_show1_1'})
      },
      handle1_2(){
        this.$router.push({name:'Results_show1_2'})
      },
      handle2(){
        this.$router.push({name:'Results_show2'})
      },
      handle2_1(){
        this.$router.push({name:'Results_show2_1'})
      },
      handle2_2(){
        this.$router.push({name:'Results_show2_2'})
      },
      handle3(){
        this.$router.push({name:'Results_show3'})
      },
    },
  };
</script>
<style lang="scss" scoped>
  .pay-top-content {
    text-align: center;

    .pay-success {
      display: block;
      margin: 20px auto 5px auto;
      font-size: 40px;
      color: $base-color-green;
    }
  }

  .pay-bottom {
    padding: 20px;
    margin-top: 20px;
    background: #f5f7f8;
    border: 1px dashed $base-color-gray;
  }

  .pay-button-group {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
</style>
