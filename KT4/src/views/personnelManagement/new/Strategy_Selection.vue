<template>
  <div class="tree-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
        <el-divider content-position="left">YQ事件选择</el-divider>
        <el-input v-model="filterText" placeholder="输入关键字查询" />
        <el-tree
          ref="demoTree"
          :data="data2"
          :default-checked-keys="defaultCheckedKeys"
          :default-expanded-keys="defaultExpendedKeys"
          :expand-on-click-node="false"
          :filter-node-method="filterNode"
          :highlight-current="true"
          :props="defaultProps"
          class="vab-filter-tree"
          node-key="id"
          show-checkbox
          @check="checkNode"
          @node-click="nodeClick"
          @node-collapse="nodeCollapse"
          @node-expand="nodeExpand"
        >

        </el-tree>
      </el-col>
<!--      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">-->
<!--        <el-card shadow="never">-->
<!--          <div slot="header">-->
<!--            <h3>舆情态势评估和引导策略</h3>-->
<!--            <span>-->
<!--              舆情态势评估和引导策略舆情态势评估和引导策略舆情态势评估和引导策略舆情态势评估和引导策略舆情态势评估和引导策略舆情态势评估和引导策略舆情态势评估和引导策略-->
<!--            </span>-->
<!--            <br><br>-->
<!--            <img src="../figure/yindao1.jpg" width="420" height="300" />-->
<!--          </div>-->
<!--        </el-card>-->
<!--      </el-col>-->
      <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="6">
        <el-divider content-position="left">YQ事件相关信息</el-divider>
          <el-card shadow="never">
            <div slot="header">
              <h3>香港非法占中事件</h3>
              <span>
                香港非法占中事件香港非法占中事件香港非法占中事件香港非法占中事件香港非法占中事件香港非法占中事件香港非法占中事件香港非法占中事件香港非法占中事件香港非法占中事件香港非法占中事件。
              </span>
              <br><br>
              <img src="../figure/HKzhanzhong.jpg" width="1010" height="300" />
            </div>
          </el-card>

      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="6">
<!--        <el-divider content-position="left">YQ事件评级</el-divider>-->
        <el-card shadow="never">
          <div slot="header">
            <h3>YQ事件评分</h3>

            <br>
            <img src="../figure/leidapingfentu.gif" width="600" height="624"  align="left" hspace="20" vspace="20"/>
            <h5>
              从四分维度对YQ事件进行评分从四分维度对YQ事件进行评分从四分维度对YQ事件进行评分从四分维度对YQ事件进行评分从四分维度对YQ事件进行评分从四分维度对YQ事件进行评分从四分维度对YQ事件进行评分从四分维度对YQ事件进行评分从四分维度对YQ事件进行评分
            </h5>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<!--            <img src="../figure/HKzhanzhong.jpg" width="1010" height="300" />-->
          </div>
        </el-card>
      </el-col>
<!--      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">-->
<!--        <el-divider content-position="left">多选树</el-divider>-->
<!--        <el-select-->
<!--          v-model="multipleSelectTreeVal"-->
<!--          class="vab-tree-select"-->
<!--          clearable-->
<!--          collapse-tags-->
<!--          multiple-->
<!--          popper-class="select-tree-popper"-->
<!--          @change="changeMultipleSelectTreeHandle"-->
<!--          @clear="selectTreeClearHandle('multiple')"-->
<!--          @remove-tag="removeSelectTreeTag"-->
<!--        >-->
<!--          <el-option :value="multipleSelectTreeKey">-->
<!--            <el-tree-->
<!--              id="multipleSelectTree"-->
<!--              ref="multipleSelectTree"-->
<!--              :current-node-key="multipleSelectTreeKey"-->
<!--              :data="selectTreeData"-->
<!--              :default-checked-keys="selectTreeDefaultSelectedKeys"-->
<!--              :default-expanded-keys="selectTreeDefaultSelectedKeys"-->
<!--              :highlight-current="true"-->
<!--              :props="selectTreeDefaultProps"-->
<!--              node-key="id"-->
<!--              show-checkbox-->
<!--              @check="multipleSelectTreeCheckNode"-->
<!--            ></el-tree>-->
<!--          </el-option>-->
<!--        </el-select>-->
<!--      </el-col>-->
    </el-row>
    <!--添加/编辑节点弹框-------------------start-->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="treeDialogVisible"
      class="tree-operate-dialog"
      width="400px"
      @close="treeDialogVisible = false"
    >
      <el-form ref="treeForm" :model="treeForm">
        <el-form-item label="节点名称" required>
          <el-input v-model="treeForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="treeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveTree">确 定</el-button>
      </div>
    </el-dialog>
    <!--添加/编辑节点弹框-------------------end-->
  </div>
</template>

<script>
  import { getTreeList } from "@/api/tree";

  export default {
    name: "Tree",
    data() {
      return {
        dialogTitle: "添加节点",
        treeFlag: 0,
        treeDialogVisible: false,
        treeForm: {
          id: "",
          name: "",
        },
        checkNodeKeys: [],
        filterText: "",
        data2: [],
        defaultProps: {
          children: "children",
          label: "name",
        },
        defaultExpendedKeys: [],
        defaultCheckedKeys: [],
        loading: true,
        keyW: "",
        filterDevLlist: [],
        isShow: false,
        updateTree: true,
        /* 单选树-多选树---------开始 */
        selectLevel: 4, // 树可选叶子level等级
        singleSelectTreeVal: "", //单选树默认label值
        singleSelectTreeKey: "", //单选树默认key值
        selectTreeData: [], //单选树的值
        selectTreeDefaultSelectedKeys: [], //单选树默认展开的key值数组
        selectTreeDefaultProps: {
          children: "children",
          label: "name",
        },
        multipleSelectTreeVal: [], //多选树默认label值
        multipleSelectTreeKey: "", //多选树默认key值
        /* 单选树-多选树---------结束 */
      };
    },
    watch: {
      filterText(val) {
        this.$refs.demoTree.filter(val);
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.getTreeListFuc(1);
        this.setCheckedKeys();
        // 初始化单选树

      });
    },
    methods: {
      // 树level小于n级展开方法
      openTree(treeData, n) {
        const each = (data) => {
          data.forEach((e) => {
            if (e.rank <= n) {
              this.defaultExpendedKeys.push(e.id);
            }
            if (e.children.length > 0) {
              each(e.children);
            }
          });
        };

        each(treeData);
      },
      // 获取tree数据
      async getTreeListFuc(flag) {
        const { data } = await getTreeList();
        this.data2 = data;
        if (flag) {
          this.openTree(this.data2, 2);
        }
      },
      // 节点过滤操作
      filterNode(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1;
      },
      // 添加节点操作
      append(node, data, flag) {
        this.treeFlag = flag;
        this.dialogTitle = "添加节点";
        this.treeForm = {
          id: "",
          name: "",
        };
        this.treeDialogVisible = true;
      },
      // 编辑节点操作
      edit(node, data, flag) {
        this.treeFlag = flag;
        this.dialogTitle = "编辑节点";
        this.treeForm = {
          id: data.id,
          name: data.name,
        };
        this.treeDialogVisible = true;
      },
      // 删除节点操作
      remove(node, data) {
        this.$baseConfirm("你确定要删除该节点?", null, async () => {
          const { msg } = getTreeList();
          this.$baseMessage(msg, "success");
          this.getTreeListFuc(0);
        });
      },
      // 保存添加和编辑
      saveTree() {
        this.$refs.treeForm.validate(async (valid) => {
          if (valid) {
            const { msg } = await getTreeList();
            this.$baseMessage(msg, "success");
            this.treeDialogVisible = false;
            this.getTreeListFuc(0);
          }
        });
      },
      // 设置节点选中
      setCheckedKeys() {
        this.$refs.demoTree.setCheckedKeys([1]);
      },
      // 点击叶子节点
      nodeClick(data, node, el) {},
      // 节点选中操作
      checkNode(data, node, el) {
        this.checkNodeKeys = node.checkedKeys;
      },
      // 节点展开操作
      nodeExpand(data, node, el) {
        this.defaultExpendedKeys.push(data.id);
      },
      // 节点关闭操作
      nodeCollapse(data, node, el) {
        this.defaultExpendedKeys.splice(
          this.defaultExpendedKeys.findIndex((item) => item.id === data.id),
          1
        );
      },
      async loadNode(node, resolve) {
        if (node.level === 0) {
          const { data } = await getTreeList();
          this.loading = false;
          return resolve(data);
        } else {
          const { data } = await getTreeList();
          return resolve(res.data);
        }
      },
      //懒加载树输入框筛选方法

      /* 单选/多选树方法-------------------开始 */
      // 初始化单选树的值

      // 清除单选树选中
      selectTreeClearHandle(type) {
        this.selectTreeDefaultSelectedKeys = [];
        this.clearSelected();
        if (type == "single") {
          this.singleSelectTreeVal = "";
          this.singleSelectTreeKey = "";
          this.$refs.singleSelectTree.setCurrentKey(""); // 设置默认选中
        } else {
          this.multipleSelectTreeVal = [];
          this.multipleSelectTreeKey = "";
          this.$refs.multipleSelectTree.setCheckedKeys([]);
        }
      },
      /* 清空选中样式 */
      clearSelected() {
        const allNode = document.querySelectorAll(
          "#singleSelectTree .el-tree-node"
        );
        allNode.forEach((element) => element.classList.remove("is-current"));
      },
      // select多选时移除某项操作
      removeSelectTreeTag(val) {
        const stack = JSON.parse(JSON.stringify(this.selectTreeData));
        while (stack.length) {
          const curr = stack.shift();
          if (curr.name == val) {
            return this.$refs.multipleSelectTree.setChecked(curr.id, false);
          }
          if (curr.children && curr.children.length) {
            stack.unshift(...curr.children);
          }
        }
      },
      changeMultipleSelectTreeHandle(val) {},
      // 点击叶子节点
      selectTreeNodeClick(data, node, el) {
        if (data.rank >= this.selectLevel) {
          this.singleSelectTreeVal = data.name;
          this.singleSelectTreeKey = data.id;
          this.$refs.singleTree.blur();
        }
      },
      // 节点选中操作
      multipleSelectTreeCheckNode(data, node, el) {
        const checkedNodes = this.$refs.multipleSelectTree.getCheckedNodes();
        const keyArr = [];
        const valueArr = [];
        checkedNodes.forEach((item) => {
          if (item.rank >= this.selectLevel) {
            keyArr.push(item.id);
            valueArr.push(item.name);
          }
        });
        this.multipleSelectTreeVal = valueArr;
        this.multipleSelectTreeKey = keyArr.join(",");
      },
      /* 单选/多选树方法-------------------结束 */
    },
  };
</script>
