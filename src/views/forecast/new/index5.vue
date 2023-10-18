<template>
  <div class="permissions-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card shadow="hover">
          <!-- <div slot="header"></div> -->
          <div class="lodash-content">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-divider content-position="left">
                  <h2>基于时空特征的传播预测</h2>
                </el-divider>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-card shadow="hover">
                  <div class="lodash-content">
                    <span
                      class="mt-25 mb-25"
                      style="font-size: 16px; line-height: 30px"
                    >
                      <h3>功能描述</h3>
                      实现基于用户时空特征的传播链路预测，得到社会网络中用户节点之间下一步产生连边的概率。具体来说，结合社会网络中用户之间的拓扑结
                      构信息以及用户所携带的属性信息来挖掘用户的传播特征，基于神经网络表示学习得到用户的传播表征。通过计算用户的传播表征之间的距离
                      得到传播激活概率，作为用户的传播链路预测。
                      <h3>整体框架</h3>
                      结合社会网络中用户之间的拓扑结构信息以及用户所携带的属性信息来挖掘用户的传播特征，基于神经网络表示学习模型来学习得到用户的传播表征。
                      通过计算用户的传播表征之间的距离得到传播激活时间，进行传播链路预测。

                      <h3>验证数据集</h3>
                      Twitter是一个具有发送电子邮件功能的社交新闻网站。Twitter的公开数据集包含了用户发布的信息内容还有用户间的转发、评论等行为数据。
                      Twitter的原始数据集也是个稀疏网络，我们剔除网络中的不活跃用户，保留参与程度高的用户。处理好的网络数据集中共包含3298个节点，
                      46747条连边，节点表示twitter用户，连边表示转发、评论等关系。
                      <h3>展示内容</h3>
                      在真实社交网络witter上进行实验，基于用户的结构信息和属性信息得到用户的表示，进行可视化展示，并且给出本模型的传播链路预测准确
                      率吧，即本模型预测会产生的用户节点对中真实存在连边的比例。
                    </span>
                    <!-- <img src="../figure/qian.png" width="631" height="604" /> -->
                  </div>
                </el-card>

                <el-card shadow="hover">
                  <div class="lodash-content">
                    <span
                      class="mt-25 mb-25"
                      style="font-size: 16px; line-height: 30px"
                    >
                      <h3>表征结果可视化</h3>
                      选取数据集中的一个小型子集，其结构信息与属性信息如图(a)所示。将基于表征模型所学习得到的表征用现有的在线降维工具映射到二维空间中，
                      得到图(b)。可以看到，结构连接紧密、属性信息相似的用户节点，在二维空间中距离相近，产生传播链路的概率更大。

                      <el-row>
                        <el-col :span="24">
                          <div class="grid-content bg-purple-dark">
                            <h3 style="text-align: center"></h3>

                            <!-- <div class="container" :style="conheight">
                              <div class="left" :style="conheight">
                                <img src="../figure/pic2_400.png" />
                              </div>
                            </div> -->

                            <el-row>
                              <!-- <el-col :span="20"> -->
                              <div align="center">
                                <img src="../figure/pic1.png" />
                              </div>
                              <!-- </el-col> -->
                            </el-row>
                          </div>
                        </el-col>
                      </el-row>

                      <h3>链路预测定量结果</h3>
                      <span
                        class="mt-25 mb-25"
                        style="font-size: 16px; line-height: 30px"
                      >
                        本研究基于神经网络表征模型学习得到网络中用户节点的表征向量，计算用户表征两两之间的相似度后按大小排序，排名越靠前的用户对产生传播链路的概率越大。
                        precision@k指的是排序列表中排名在前k位的用户对真实存在链路的比例。
                      </span>
                      <div align="center">
                        <template>
                          <el-table :data="tableData" style="width: 100%">
                            <el-table-column
                              prop="precision"
                              label="precision@k"
                              width="180"
                            ></el-table-column>
                            <el-table-column
                              prop="num"
                              label="数值"
                              width="180"
                            ></el-table-column>
                          </el-table>
                        </template>
                      </div>
                    </span>
                    <!-- <img src="../figure/qian.png" width="631" height="604" /> -->
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>

      <el-card shadow="hover"></el-card>
    </el-row>
  </div>
</template>

<script>
import { getList } from "@/api/blacklist";
import { mapGetters } from "vuex";
import { tokenTableName } from "@/config/settings";
import JsonEditor from "@/components/JsonEditor";
export default {
  data() {
    return {
      tableData: [
        {
          precision: "precision@1000",
          num: " 0.9540",
        },
        {
          precision: "precision@3000",
          num: "0.9657",
        },
        {
          precision: "precision@5000",
          num: "0.7254",
        },
        {
          precision: "precision@7000",
          num: "0.5563",
        },
        {
          precision: "precision@9000",
          num: " 0.4517",
        },
        {
          precision: "precision@10000",
          num: "0.4136",
        },
      ],
    };
  },
};
</script>