<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    <el-form ref="form" :model="form" :rules="rules" >
<!--      <el-form-item >-->
<!--        <el-alert>从策略库中选择策略</el-alert>-->
<!--      </el-form-item>-->
      <el-card shadow="hover">
        <div slot="header" style="font-size: 20px; font-weight: bold;">
          请选择策略：
            <el-select id="select1" v-model="strategy.variety" style="font-size: 18px"  placeholder="基于结构化阻断的引导策略" @change="aa" >
          <el-option v-for="item in strategy"
                     :key="item.variety"
                     :label="item.variety_value"
                     :value="item.id"></el-option>
        </el-select>
        </div>

        <div class="lodash-content">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <span  v-if ="strategy.variety==1" >
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <h1>基于竞争的传播引导策略</h1>
<!--              <span style="font-size: 18px; line-height: 30px" >-->
<!--                在社交网络中，信息的传播速度很快，一些负面的信息在网络中出现后，会以极快的速度在社交网络中传播，特别是一些虚假的信息会对人们的生活产生负面的影响，甚至会影响社会的稳定。-->
<!--                因此对社交网络中的舆情进行引导具有很重要的现实意义。-->
<!--                基于竞争的传播引导策略提供了一种在社交网络中投放正面信息的方法，使正面信息与负面信息竞争的传播，在一定程度上抑制负面信息的传播，并使正面信息的传播范围最大化。-->
<!--            <br>-->
<!--              </span>-->
            </el-col>
<!--            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">-->
<!--                <h2>策略目标</h2>-->
<!--                  <span style="font-size: 18px; line-height: 30px">-->

<!--                    基于竞争的传播引导策略选择一定数量的影响力比较大的节点投放正面信息，与社交网络中负面信息竞争的传播，经过传播后，使得网络中受正面信息影响的节点数量大于受负面信息影响的节点的数量。-->

<!--                    <br><br>-->
<!--                  </span>-->
<!--              </el-col>-->
<!--            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">-->
<!--                <h2>引导程度</h2>-->
<!--                <span style="font-size: 18px; line-height: 30px">-->
<!--                  舆情事件的影响范围、安全等级各不相同，需要选择不同的引导策略，根据舆情事件的安全等级选择不同的引导策略，基于竞争的传播引导策略适用安全等级比较低的舆情事件。-->

<!--                <br><br><br>-->
<!--                </span>-->
<!--            </el-col>-->
            <el-col :xs="12" :sm="10" :md="10" :lg="10" :xl="10">
            <h2>功能描述</h2>
              <span style="font-size: 18px; line-height: 30px">
                基于竞争的传播引导策略提供了一种在社交网络中投放正面信息与负面信息相互竞争传播使正面信息传播范围最大化的方法。
                <br><br>
              </span>
              <h2>策略目标</h2>
              <span style="font-size: 18px; line-height: 30px">
                选取指定大小的初始种子点集S，使得最终受到正面信息影响的用户数量大于受到负面信息影响的用户数量。
                <br><br>
              </span>
              <h2>引导机制</h2>
              <span style="font-size: 18px; line-height: 30px">
                基于传播的引导策略应用LCH-TU启发式算法选取影响力最大的n个种子节点投放正面信息，与负面信息进行竞争传播，从而减小负面信息的传播范围。
                <br><br>
              </span>
              <h2>引导程度</h2>
              <span style="font-size: 18px; line-height: 30px">
                适用安全等级中等的舆情事件，属于一种中等的引导程度的传播优化策略。
                <br><br><br><br>
              </span>

            </el-col>
            <span>

<!--            <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">-->
<!--              <span><br></span>-->
<!--            </el-col>-->
            <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
              <h2>竞争信息在网络上的传播过程示意图</h2>
              <img src="../figure/cs_1_3.png" width="835" height="488" style="margin: 0 auto;"/>
            </el-col>
<!--              <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">-->
<!--              <span></span>-->
<!--            </el-col>-->

              <span style="font-size: 18px; line-height: 30px">
                基于竞争的传播引导策略采用了基于竞争改进的独立级联模型，
                上图用一个简单的网络解释了如何通过竞争的信息抑制负面信息在社交网络中的传播过程，从图中我们可以看到
                经过传播引导后，原本受负面信息影响的蓝色节点变为了受正面信息影响的红色节点。
                <br><br>
              </span>


            </span>
          </span>
          <span v-else>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <h1>基于结构化阻断的引导策略</h1>
<!--              <span style="font-size: 18px; line-height: 30px">-->
<!--                  基于结构阻断的YQ引导策略技术提供了一种在社交网络中封锁YQ社区并抑制YQ传播的方法。采用局部节点或边的阻断方法，解决单一传播环境下最小代价YQ社区封锁优化问题。-->
<!--                  利用基于最小顶点覆盖的贪婪(MVCBG) 算法来寻找合适的节点进行封锁，阻断YQ事件进一步扩散。-->
<!--              <br>-->
<!--              </span>-->
            </el-col>
            <el-col :xs="12" :sm="10" :md="10" :lg="10" :xl="10">
            <h2>功能描述</h2>
              <span style="font-size: 18px; line-height: 30px">
                基于结构阻断的舆情引导策略技术提供了一种在社交网络中封锁舆情社区并抑制舆情传播的方法。
                <br><br>
              </span>
              <h2>策略目标</h2>
              <span style="font-size: 18px; line-height: 30px">
                封锁舆情传播社区向外部（其他临近社区）的扩散，并将传播范围控制到社区内部的10%。
                <br><br>
              </span>
              <h2>引导机制</h2>
              <span style="font-size: 18px; line-height: 30px">
                基于最小顶点覆盖的贪婪(MVCBG)算法来寻找合适的节点进行封锁，以最小代价来阻断舆情事件进一步扩散。
                <br><br>
              </span>
              <h2>引导程度</h2>
              <span style="font-size: 18px; line-height: 30px">
                适用安全等级比较高的舆情事件，属于最强的一种传播优化策略。
                <br><br>
              </span>

            </el-col>
<!--            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">-->
<!--                <h2>策略的引导程度</h2>-->
<!--                <span style="font-size: 18px; line-height: 30px">-->
<!--                  舆情事件的影响范围、安全等级各不相同，需要选择不同的引导策略，根据舆情事件的安全等级选择不同的引导策略，基于结-->
<!--                  构化阻断的引导策略适用安全等级比较高的舆情事件。-->
<!--                <br><br>-->
<!--                </span>-->
<!--            </el-col>-->
            <span>

<!--            <el-col :xs="3" :sm="3" :md="5" :lg="5" :xl="5">-->
<!--              <span><br></span>-->
<!--            </el-col>-->
            <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
              <h2>在线社交网络的非重叠社区划分示例</h2>
              <img src="../figure/jgzd.jpg" width="845" height="393" style="margin: 0 auto;"/>
              <br>
              <span style="font-size: 18px; line-height: 30px">
                <br>
                在线社交网络的社区结构性质在信息传播控制、影响力评估、用户推荐等诸多领域中都起着重要的作用，上图显示了在线社交网络中的社区划分。
                左边的显示的是对有向网络的社区划分，右边的图是对无向网络的社区划分。
                <br><br>
              </span>
            </el-col>
<!--              <el-col :xs="3" :sm="3" :md="1" :lg="1" :xl="1">-->
<!--              <span><br></span>-->
<!--            </el-col>-->
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
<!--              <span style="font-size: 18px; line-height: 30px">-->
<!--                <br>-->
<!--                在线社交网络的社区结构性质在信息传播控制、精准营销、影响力评估、用户推荐等诸多在线社交网络的分析领域中都起着重要的作用，上图显示了在线社交网络中的社区划分。-->
<!--                左边的显示的是对有向网络的社区划分，右边的图是对无向网络的社区划分。-->
<!--                <br><br>-->
<!--              </span>-->
            </el-col>

            </span>
          </span>

          </el-col>
        </div>

      </el-card>

    </el-form>
      </el-col>
    </el-row>
    <div class="pay-button-group">
      <el-button  style="font-size: 18px; font-weight: bold;" type="primary" @click="handleSubmit">下一步</el-button>
    </div>
  </div>
</template>
<script>

  // function aa(id, type) {
  //   var inner = document.getElementById('select1').innerHTML;
  //   // var index1=inner.selectIndex
  //   alert(inner)
  //   return id
  // }
  export default {
    data() {
      // var a=this.methods.aa();

      return {
        form: {
          payAccount: "",
          gatheringAccount: "1204505",
          gatheringName: "123",
          price: "100",
        },
        strategy: [
          {
            variety: "第一个",
            variety_value: "基于竞争的传播引导策略",
            id:1,
          },
          {
            variety: "第二个",
            variety_value: "基于结构化阻断的引导策略",
            id:2,
          },


        ],
        rules: {
          // payAccount: [
          //   { required: true, message: "请选择付款账户", trigger: "blur" },
          // ],
          // gatheringAccount: [
          //   { required: true, message: "请输入收款账户", trigger: "blur" },
          //   { type: "email", message: "账户名应为邮箱格式", trigger: "blur" },
          // ],
          // gatheringName: [
          //   { required: true, message: "请输入收款人姓名", trigger: "blur" },
          // ],
          // price: [
          //   { required: true, message: "请输入转账金额", trigger: "blur" },
          //   { pattern: /^(\d+)((?:\.\d+)?)$/, message: "请输入合法金额数字" },
          // ],
        },
      };
    },
    created(){
    },
    methods: {
      // get(){
      //   var b=this.aa(1,'sss');
      //   alert(b)
      // },

      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$emit("change-step", 2, this.form);
          }
        });
      },
      aa(id, type){
        this.form.payAccount=id
        return id;
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
