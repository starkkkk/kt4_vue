<template>
  <div class="permissions-container">

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

      <el-card shadow="hover">
        <div slot="header">

      </div>
      <div class="lodash-content">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-divider content-position="left"><h3>引导效果展示</h3></el-divider>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-card shadow="hover">
              <div slot="header">
                <span>不添加引导策略时网络状态图</span>
<!--                <img src="../figure/qian.png" width="631" height="604" />-->
              </div>
<!--              <img src="../image/qian.png" width="631" height="604">-->

            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-card shadow="hover">
              <div slot="header">
                <span>添加引导策略后网络状态图</span>

              </div>
<!--              <img src="../image/hou.png" width="631" height="604">-->
            </el-card>
          </el-col>

        </el-row>
      </div>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <span>
          <h3>引导效果说明</h3>
          将添加引导策略后的网络状态图和不加引导策略的网路状态图进行对比，直观的显示引导效果。
          <br><br>
        </span>
        </el-col>
    </el-card>

      </el-col>



      <el-card shadow="hover">
    <el-divider content-position="left">
      <h3>阻断节点热度展示</h3>
    </el-divider>
    <br />

      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="ID" label="账号" width="180"></el-table-column>
          <el-table-column prop="day1" label="第一天热度"></el-table-column>
          <el-table-column prop="day2" label="第二天热度"></el-table-column>
          <el-table-column prop="day3" label="第三天热度"></el-table-column>
          <el-table-column prop="day4" label="第四天热度"></el-table-column>
          <el-table-column prop="day5" label="第五天热度"></el-table-column>
          <el-table-column prop="day6" label="第六天热度"></el-table-column>
          <el-table-column prop="day7" label="第七天热度"></el-table-column>
          <el-table-column prop="day8" label="第八天热度"></el-table-column>
          <el-table-column prop="day9" label="第九天热度"></el-table-column>
          <el-table-column prop="day10" label="第十天热度"></el-table-column>
          <el-table-column prop="day11" label="第十一天热度"></el-table-column>
          <el-table-column prop="day12" label="第十二天热度"></el-table-column>
          <el-table-column prop="day13" label="第十三天热度"></el-table-column>
          <el-table-column prop="day14" label="第十四天热度"></el-table-column>


        </el-table>
      </el-col>
      </el-card>
    </el-row>
  </div>
</template>

<script>
  import { getList } from "@/api/blacklist";
  import { mapGetters } from "vuex";
  import { tokenTableName } from "@/config/settings";
  import JsonEditor from "@/components/JsonEditor";


  export default {
    name: "Permissions",
    components: {
      JsonEditor,
    },

    data() {
      return {
        YQ_data: [
          {
            variety: "数据集一",
            variety_value: "香港事件数据集-twitter",
            id:1,
          },
          {
            variety: "数据集二",
            variety_value: "香港事件数据集-微博",
            id:2,
          },

        ],
        form: {
          account: "",
        },
        tableData: [],
        res: [],
        selected:[],
        // currentsel:this.selectModel(id),
      };
    },
    computed: {
      ...mapGetters({
        username: "user/username",
        permissions: "user/permissions",
      }),
    },
    created() {
      this.fetchData();
    },
    mounted() {
      this.form.account = this.username;
    },
    methods: {

      selectModel(id) {
        let obj = {};
        obj = this.YQ_data.find((item) => {
          return item.id === id;//筛选出匹配数据
        });
      },
        handleChangePermission() {
        localStorage.setItem(
          tokenTableName,
          `${this.form.account}-accessToken`
        );
        location.reload();
      },
      fetchData() {
        getList().then(({ data }) => {
          this.tableData = data;
        });
      },

    },
  };
</script>
