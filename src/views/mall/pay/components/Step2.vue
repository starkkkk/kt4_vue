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
            <span v-if ="YQ_data.variety==1">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <h2>数据集介绍</h2>
              <span style="font-size: 18px; line-height: 30px">
                微博和推特的快速发展极大的促进了人与人之间的交流，也改变了人们的交际和交流的方式，有了更多表达的机会与渠道。社交网络的公开数据集包含了用户发布的信息内容还有用户间的转发、评论等行为数据。
                为了更好的显示用户之间的交互关系，我们剔除了网络中的不活跃用户，保留参与程度高的用户。
              </span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div >
                <h2>应用场景描述</h2>
                  <span style="font-size: 18px; line-height: 30px">
                    自2019年6月以来，香港反对派和一些激进势力借和平游行集会之名，进行各种激进抗争活动。虽然特区政府已多次表示修订《逃犯条例》工作已彻底停止，
                    但他们继续以“反修例”为幌子，得寸进尺、变本加厉，暴力行为不断升级，社会波及面越来越广。从6月开始的游行屡屡演变为暴力冲突，其行动完全超出了和平游行示威的范畴。
                    激进分子有组织袭击警察事件开始发生，警察总部两度被包围，政府部门受到滋扰，特区立法会大楼更遭到严重冲击和大肆破坏。
                    <br><br>
                  </span>
              </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h2>
                  网络整体结构
                </h2>
              </el-col>
<!--              <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">-->
<!--                <span><br></span>-->
<!--              </el-col>-->
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <span>
                  <img src="../figure/HK_original_structure.png" width="665" height="648" />
                </span>
              </el-col>
<!--              <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">-->
<!--                <span><br></span>-->
<!--              </el-col>-->
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <span style="font-size: 18px; line-height: 30px">
                  左图是从Twitter（推特）中抽取的一部分数据构成的网络,总共包括3240个节点，3465条边。Twitter是国外的一个拥有大量用户的社交网络，Twitter（推特）是一家美国社交网络及微博客服务的公司，致力于服务公众对话。
                  它可以让用户更新不超过140个字符的消息（除中文、日文和韩文外已提高上限至280个字符），这些消息也被称作“推文（Tweet）”，
                  Twitter（推特）被形容为“互联网的短信服务”。我们抽取了Twitter（推特）中的一部分用户进行可视化展示。
                  <br><br>
                </span>
              </el-col>
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
            <span v-else>
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
                  2020年4月30日，丰巢快递柜开始对滞留快件的非会员用户收费，超时12小时后收费0.5元/12小时，3元封顶，法定节假日不计费。
                  此外，丰巢推出“会员服务”，会员用户将以5元/月的价格享受滞留包裹保管7天，并获得5元的丰巢寄件优惠券以及视频网站7折购买折扣券。
                  丰巢方面表示，此上会员服务消费者可在线上进行选择，未经消费者同意的情况下，将不产生任何费用。针对多次滞留包裹在柜占用资源的用户，
                  丰巢将在两次免费取件过程中询问消费者是否要选择延期保管服务，如仍不同意使用的用户可选择不再允许其快件投递入柜。
                  2020年5月13日，中消协首次就丰巢快件箱事件发表观点。中消协表示设立在小区内为消费者提供的智能快件箱服务，应当纳入小区物业服务业务范围，合理保管期限内不应单独收取服务费用。
                  <br><br>
                </span>
                <span style="font-size: 18px; line-height: 30px">

                  2020年5月13日，中消协首次就丰巢快件箱事件发表观点。中消协表示设立在小区内为消费者提供的智能快件箱服务，应当纳入小区物业服务业务范围，合理保管期限内不应单独收取服务费用。
                  <br><br>
                </span>
                <span style="font-size: 18px; line-height: 30px">

                  2020年5月13日，国家邮政局相关负责人强调，丰巢此次调整免费保管期限的行为虽未违反规章禁止性规定，但在调整过程中，
                  存在着全局站位不高、风险评估不够，征询意见不足、应对处置不妥等问题，应进行深刻反思，汲取教训。
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
                  <img src="../figure/FengChao_1_structure.png" width="664" height="646" />
                </span>
              </el-col>

              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <span style="font-size: 18px; line-height: 30px">
                   左图是从微博中抽取的一部分数据构成的网络,总共包括3573个节点，3458条边。
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
            variety_value: "HK事件数据集",
            id:1,
          },
          {
            variety: "事件二",
            variety_value: "李文亮事件数据集",
            id:2,
          },
          {
            variety: "事件三",
            variety_value: "丰巢收费事件数据集",
            id:3,
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
</style>
