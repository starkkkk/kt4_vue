<template>
  <!-- <Detailed></Detailed> -->
  <div class="main-index">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="event_id"
        label="事件id"
        width="60"
      ></el-table-column>
      <el-table-column
        prop="event_name"
        label="事件名称"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="event_type"
        label="类型"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="document_number"
        label="文档数"
        width="180"
      ></el-table-column>
      <!-- <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column
        prop="platform"
        label="平台"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="sender"
        label="发送人"
        width="180"
      ></el-table-column> -->
      <!-- <el-table-column prop="time" label="时间" width="180"></el-table-column> -->
      <el-table-column
        prop="platform"
        label="平台"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="situation_description"
        label="安全等级"
        width="180"
      ></el-table-column>
      <el-table-column fixed="right" label="态势详情" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import Detailed from "./detailed";
export default {
  components: { Detailed },
  data() {
    return {
      tableData: [],
      // tableData: [
      //   {
      //     name: "abc",
      //     category: "香港",
      //     platform: "twitter",
      //     sender: "Donald Trump",
      //     time: "2018/1/1",
      //     state: "emergency",
      //   },
      // ],
    };
  },
  //http://192.168.1.2
  mounted() {
    axios.get("http://202.121.180.70:8109/yqList").then((response) => {
      console.log(response);
      this.tableData = response.data.result;
    });
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.$router.push({
        name: "person.detail",
        params: {
          eventId: row["event_id"].toString(),
        },
      });
    },
  },
};
</script>

<style>
</style>
