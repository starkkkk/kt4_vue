<template>
  <div class="weaklink">
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-divider content-position="left">
          <h1>基于内容生成</h1>
        </el-divider>
        <el-card shadow="hover">
          <div class="lodash-content">
            <h2 class="mt-25 mb-25">功能描述:</h2>
            <span style="font-size: 18px; line-height: 30px">
              <span style="margin-left: 70px">
                <span>在线社交网络成为大量怀有恶意的网民散播谣言,</span>
                <span>恶性竞争的有利之地。我们设定了一种基于</span>
                <b>长短期记忆人工神经网络(LSTM)</b>
                <span>的社交网络</span>
                <b>特定话题</b>
                <span>的评论</span>
                <b>内容生成</b>
                <span>的方法。</span>
                <span>此方法是利用循环神经</span>
                <span>网络模型来生成社交网络风格的评论。</span>
              </span>
              <br />
              <h2 class="mt-25 mb-25">生成策略:</h2>
              <div style="margin-left: 70px">
                首先，对评论文本进行按照句子模式进行分类；
                <br />
                然后，针对不同的分类，设计对应的循环神经网络模型来生成对应句子结构的初始评论文本；
                <br />
                最后，我们对生成的初始文本来通过主题词相关性来进行名词自动化替换，以达到更适应热点主题的效果。
              </div>
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-tabs type="border-card">
      <div class="three" style="position: relative">
        <div
          v-show="loading"
          v-loading="true"
          style="width: 100%; height: 800px; position: absolute; top: 0"
        ></div>
        <!-- <div class="ss">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="pageSizes"
            :page-size="PageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount / 1"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          ></el-pagination>
          <el-input
            v-model="input"
            placeholder="请输入内容"
            @input="sou()"
          ></el-input>

          <span>搜索</span>
        </div> -->

        <!-- <div>
          <el-select v-model="sel1" @change="indexSelect01(sel1)">
            <el-option
              v-for="(row, index) in select01"
              :key="index"
              :value="row.name"
              size="mini"
            ></el-option>
          </el-select>

          <el-select v-model="sel2" @change="huan2(sel1, sel2)">
            <el-option
              v-for="(row, index) in select02"
              :key="index"
              :value="row.name"
            ></el-option>
          </el-select>
        </div> -->
        <div class="bao">
          <div class="xbao_1">
            <p style="width: 97%">内容生成</p>
            <span>选择数据(请点击相应的标签,选择回复数据)</span>
            <br />
            <br />

            <br />

            <!-- <ul>
              <br />
              <br />
              <br />
              <br />

              <br />
              <br />
              <br />
              <br />

              <div style="width: 100%; height: 10px"></div>
              <br />
              <br />
              <br />
              <br />

              <div class="width:400px;margin-top:20px;height:100px"></div>
            </ul> -->
            <div class="shai">
              <h4 style="padding-left: 10px">数据标签 :</h4>

              <div class="big">
                <div class="left">
                  <span>类目1:</span>
                </div>
                <div class="right">
                  <li
                    v-for="(item, index) in subject"
                    :key="index"
                    :class="{ active: index == checkindex }"
                    @click="ck(item, index)"
                  >
                    {{ item.name }}
                  </li>
                </div>
              </div>
              <div class="big">
                <div class="left">
                  <span v-if="sub2 != ''">类目2:</span>
                </div>
                <div class="right">
                  <li
                    v-for="(item, index) in lei2"
                    :key="index"
                    :class="{ active: index == checkindex2 }"
                    @click="ck2(item, index)"
                  >
                    {{ item }}
                  </li>
                </div>
              </div>
              <div class="big">
                <div class="left">
                  <span v-if="sub3 != ''">类目3:</span>
                </div>
                <div class="right">
                  <li
                    v-for="(item, index) in sub3"
                    :key="index"
                    :class="{ active: index == checkindex3 }"
                    style="margin-bottom: 10px"
                    @click="rf(item, index)"
                  >
                    {{ item }}
                  </li>
                </div>
              </div>
              <div class="big">
                <div class="left">
                  <span v-if="sub4 != ''" style="margin-top: 10px">类目4:</span>
                </div>
                <div class="right">
                  <li
                    v-for="(item, index) in sub4"
                    :key="index"
                    :class="{ active: index == checkindex4 }"
                    style="margin-bottom: 10px"
                    @click="r4(item, index)"
                  >
                    {{ item }}
                  </li>
                </div>
              </div>
            </div>

            <span>编辑文本 :</span>
            <template>
              <quill-editor
                ref="edit"
                v-model="content"
                :options="editorOption"
                style="
                  width: 100%;
                  height: 200px;
                  border-bottm: 1px solid #ccc;
                  float: left;
                "
              ></quill-editor>
              <el-button
                type="primary"
                style="margin-left: 16px; float: left; margin-top: 80px"
                @click="drawerr()"
              >
                预览
              </el-button>
              <el-button
                type="success"
                style="margin-top: 80px; float: left"
                @click="downloadText()"
              >
                保存
              </el-button>
              <el-drawer :visible.sync="drawer" :with-header="false">
                <div v-html="aaa"></div>
              </el-drawer>
            </template>
          </div>
          <div class="xbao_2">
            <div class="xb2_t">
              <br />
              <br />
              <br />
              <span
                v-if="itee != ''"
                style="
                  padding: 10px;
                  border: 1px solid #ccc;
                  border-radius: 30px;
                  margin: 10px;
                "
              >
                {{ itee }}
              </span>
              <span
                v-if="ite2 != ''"
                style="
                  padding: 10px;
                  border: 1px solid #ccc;
                  border-radius: 30px;
                  margin: 10px;
                "
              >
                {{ ite2 }}
              </span>
              <span
                v-if="ite3 != ''"
                style="
                  padding: 10px;
                  border: 1px solid #ccc;
                  border-radius: 30px;
                  margin: 10px;
                "
              >
                {{ ite3 }}
              </span>
              <span
                v-if="ite4 != ''"
                style="
                  padding: 10px;
                  border: 1px solid #ccc;
                  border-radius: 30px;
                  margin: 10px;
                "
              >
                {{ ite4 }}
              </span>
            </div>
            <el-table
              id="tab"
              :data="tableData4"
              style="width: 100%"
              :default-sort="{ prop: 'date', order: 'descending' }"
            >
              <el-table-column prop="domain" label="选择" sortable width="150">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="success"
                    @click="handleDelete(scope.row.review)"
                  >
                    选择
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column prop="review" label="语料内容" width="500">
                <template slot-scope="scope">
                  <el-popover
                    placement="top-start"
                    width="700"
                    trigger="hover"
                    :disabled="scope.row.review.length <= 10"
                  >
                    <div>{{ scope.row.review }}</div>
                    <span v-if="scope.row.review.length <= 10" slot="reference">
                      {{ scope.row.review }}
                    </span>
                    <span v-if="scope.row.review.length > 10" slot="reference">
                      {{ scope.row.review.substr(0, 40) }}
                    </span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                prop="domain"
                label="领域"
                sortable
                width="150"
              ></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </el-tabs>
  </div>
</template>

<script>
import { selectbydomainand } from "@/api/selectbydomainand.js";
import { Loading } from "element-ui";
import { quillEditor, Quill } from "vue-quill-editor";

// 工具栏配置
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["link", "image"],
  ["clean"],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
];
export default {
  name: "",
  components: {
    "quill-editor": quillEditor,
  },
  data() {
    return {
      sel1: "",
      drawer: false,
      sel2: "",
      loading: true,
      isBtnLoading: false,
      select01: [], //获取的一级数组数据
      select02: [], //获取的二级数组数据
      indexId: "选择一级菜单", //定义分类一的默认值
      indexId2: "选择二级菜单",
      indexNum: 0, //定义一级菜单的下标
      input: "",
      // 总数据
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 1,
      // 个数选择器（可修改）
      pageSizes: [10, 20, 30, 40],
      // 默认每页显示的条数（可修改）
      PageSize: 10,
      chek: 0,
      tableData: [],
      tableData2: [],
      tableData3: [],
      tableData4: [],
      sub2: [],
      sub3: [],
      sub4: [],
      sub5: [],
      subject: [
        {
          id: "政治类 event_08",
          name: "政治类",
        },
        {
          id: "社会类 event_07",
          name: "社会类",
        },
        {
          id: "经济类 event_11",
          name: "经济类",
        },
      ],
      content: "",
      ite: "",
      itee: "",

      editorOption: {
        placeholder: "请选择需要编辑内容",
        modules: {
          toolbar: {
            container: toolbarOptions,
          },
        },
      },
      ite2: "",
      ite3: "",
      ite4: "",
      checkindex: -1,
      checkindex2: -1,
      checkindex3: -1,
      checkindex4: -1,
      lei2: [],
      aaa: "",
    };
  },

  mounted() {
    this.getData();

    this.select01 = this.subject;

    this.indexSelect01();
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  methods: {
    // 导出生成文本

    downloadText() {
      // this.$refs.
      let reg = /<\/?.+?\/?>/g;
      console.log();
      var blob = new Blob(
        [JSON.stringify(this.$refs.edit.value.replace(reg, ""))],
        {
          type: "text/plain;charset=utf-8",
        }
      );
      saveAs(blob, this.ite + this.ite2 + this.ite3 + this.ite4 + ".txt");
    },
    drawerr() {
      this.drawer = true;
      // console.log(this.$refs);

      let reg = /<\/?.+?\/?>/g;
      console.log(this.$refs.edit.value.replace(reg, ""));
      this.aaa = this.$refs.edit.value;
    },
    handleDelete(item) {
      console.log(item);
      this.content += item;
    },
    rf(item, index) {
      // alert(item);
      this.ite3 = item;
      this.checkindex3 = index;
      this.sub4 = [];
      this.ite4 = "";
      selectbydomainand(this.ite, this.ite2, this.ite3).then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (this.sub4.indexOf(res[i].tagl2) === -1) {
            this.sub4.push(res[i].tagl2);
          }
        }
      });
    },
    r4(item, index) {
      this.ite4 = item;
      this.checkindex4 = index;
      selectbydomainand(this.ite, this.ite2, this.ite3, this.ite4).then(
        (res) => {
          // for (let i = 0; i < res.length; i++) {
          //   if (this.sub5.indexOf(res[i].tagl3) === -1) {
          //     this.sub5.push(res[i].tagl3);
          //   }
          // }
          this.tableData4 = res;
          console.log(this.tableData4);
        }
      );
    },
    ck(item, index) {
      this.sub2 = item.obj;
      this.ite = item.id;
      this.itee = item.name;
      this.checkindex = index;
      this.checkindex2 = -1;
      this.checkindex3 = -1;
      this.checkindex4 = -1;
      this.ite2 = "";
      this.ite3 = "";
      this.ite4 = "";
      this.lei2 = [];
      this.sub3 = [];
      this.sub4 = [];
      selectbydomainand(this.ite).then((res) => {
        for (let i = 0; i < res.length; i++) {
          if (this.lei2.indexOf(res[i].event) === -1) {
            this.lei2.push(res[i].event);
          }
        }
      });
    },
    ck2(item, index) {
      this.ite2 = item;
      this.checkindex2 = index;
      this.checkindex3 = -1;
      this.checkindex4 = -1;
      this.sub3 = [];
      this.sub4 = [];
      this.ite3 = "";
      this.ite4 = "";
      selectbydomainand(this.ite, item).then((res) => {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          if (this.sub3.indexOf(res[i].tagl1) === -1) {
            this.sub3.push(res[i].tagl1);
          }
        }
        // this.tableData = res;
        // let arr = [];
        // for (let i = 0; i < res.length; i++) {
        //   let a = res[i].tags.split(",");
        //   let b = a.slice(2);
        //   arr.push(b.join(","));
        // }
        // for (let i = 0; i < arr.length; i++) {
        //   for (let j = i + 1; j < arr.length; j++) {
        //     if (arr[i] == arr[j]) {
        //       arr.splice(j, 1);
        //       j--;
        //     }
        //   }
        // }
        // this.sub3 = arr;
        // console.log(this.tableData);
        // console.log(arr);
      });
    },
    sendRequest() {
      // 在方法的最顶部设置，防止多次弹出相同提示信息
      this.isBtnLoading = true;
      setTimeout(() => {
        this.isBtnLoading = false;
      }, 2000);
    },
    formatter(row) {
      return row.address;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    ///分页
    getData() {
      // 这里使用axios，使用时请提前引入
    },
    // 分页
    // 每页显示的条数
    handleSizeChange(val) {
      // 改变每页显示的条数
      this.PageSize = val;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1;
    },
    // 显示第几页
    handleCurrentChange(val) {
      // 改变默认的页数
      this.currentPage = val;
    },
    indexSelect01(data) {
      let i = 0;
      for (i = 0; i < this.select01.length; i++) {
        if (this.select01[i].name == data) {
          this.indexNum = i;
          break;
        }
      }

      this.select02 = this.select01[this.indexNum].obj;
    },
    huan2(one, two) {
      console.log(one, two);

      selectbydomainand(one, two).then((res) => {
        this.tableData4 = res;
        this.tableData2 = res;
        this.tableData = res;
        this.tableData2 = res;
        //    将数据的长度赋值给totalCount
        this.totalCount = res.length;
        console.log(res);
      });
    },
    sou() {
      let da = [];
      this.tableData = this.tableData2;
      for (let i = 0; i < this.tableData2.length; i++) {
        if (this.tableData2[i].nickname.indexOf(this.input) > -1) {
          da.push(this.tableData[i]);
        }
      }
      this.tableData = da;
      console.log(da);
      if (this.input === "") {
        this.tableData = this.tableData2;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.weaklink {
  width: 100%;
  height: 100%;
}
.el-tabs--border-card {
  height: 100%;
  width: 100%;
}
>>> .el-tabs__nav {
  margin-left: 10px;
  margin-top: 10px;
}
>>> .el-tabs__nav-scroll {
  background: #eef2f4;
  border-bottom: 1px solid #cccccc;
}
>>> .el-tabs--top .el-tabs__item.is-top {
  /* background: #71b1d2;
    margin-right: 10px;
    color: white; */
}
>>> .el-tabs__item .is-top .is-active {
  border-bottom: 0;
  background: white;
}
>>> .el-tabs__content {
  width: 100%;
  height: 95%;
  padding: 0;
}
.three {
  width: 98%;
  height: 700px;
  margin: 10px;
  border: 1px solid #cccccc;

  background: #f2f4f4;
}

.three p {
  width: 100%;
  height: 40px;
  background: #2678b8;
  text-align: left;
  padding-left: 20px;
  line-height: 40px;
  color: white;
}

.ss {
  width: 100%;
  height: 60px;
}
.el-pagination {
  width: 20%;
  margin: 0;
  float: left;
  margin-top: 10px;
}
.el-input {
  width: 20%;
  /* float: right; */
  margin-right: 10px;
  margin-top: 10px;
}
.ss span {
  line-height: 60px;
  float: right;
  margin-right: 10px;
  font-size: 14px;
}
.f {
  float: right;
}
.d {
  float: left;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 14px;
}
.el-table--fit {
  height: 600px;
  overflow: scroll;
  overflow-x: hidden;
}
>>> .el-table .cell {
  height: 28px;
}
.el-table__body {
  height: 600px;
}
.el-table__body tbody {
  height: 600px;
}
>>> .el-table--scrollable-x .el-table__body-wrapper {
  width: 100%;
  /* height: 100%; */
}
>>> .el-table__body-wrapper {
  overflow: scroll;
  height: 550px;
  /* position: relative; */
}
.el-table--fit::-webkit-scrollbar {
  width: 5px;
  height: 10px;

  background-color: #eeeeee;
}
.el-table--fit::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #eeeeee;
}

.el-table--fit::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #9fd2f7;
}

#c_td {
  max-width: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
.bao {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: initial;
}
.xbao_1 {
  flex: 1;
  background: white;
  border-right: 1px solid #ccc;
  overflow: scroll;
  overflow-x: auto;
}
.xbao_1 span {
  margin: 10px;
  font-weight: bold;
  float: left;
}
.xbao_1 ul {
  width: 90%;
  height: 0px;
  float: left;
  list-style: none;
  padding: 0;
}
.shai {
  width: 90%;
  height: 400px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: auto;
}
.big {
  flex: 1;
}
.left {
  width: 30%;
  height: 100%;
  float: left;
}
.right {
  width: 70%;
  height: 100%;
  float: right;
}
.shai::-webkit-scrollbar {
  width: 15px;
  height: 10px;

  background-color: #eeeeee;
}
.shai::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #eeeeee;
}

.shai::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #9fd2f7;
}
.xbao_1 li {
  list-style: none;
  padding-left: 4px;
  padding-right: 4px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  float: left;
  margin-right: 10px;
  border-radius: 30px;
  font-size: 10px;
}
li {
  border: 1px solid #ccc;
}
.xbao_2 {
  flex: 1;
}
>>> .ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-bottom: 0px;
}
.xb2_t {
  width: 100%;
  height: 100px;
  background: white;
}
.active {
  color: #9fd2f7;
  border: 1px solid #9fd2f7;
}
</style>
