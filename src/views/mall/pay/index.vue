<template>
  <div class="pay-container">
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="{ span: 20, offset: 0 }"
        :md="{ span: 20, offset: 0 }"
        :lg="{ span: 24, offset: 0 }"
        :xl="{ span: 24, offset: 0 }"
      >
        <span>
        <el-steps :space="200" :active="active" align-center class="steps" style="font-size: 40px">
          <el-step title="引导策略选择"></el-step>
          <el-step title="策略参数配置"></el-step>
          <el-step title="策略参数确认"></el-step>
        </el-steps>
        </span>
        <step1 v-if="active === 1" @change-step="handleSetStep"></step1>
        <step2
          v-if="active === 2"
          :info-data="form"
          @change-step="handleSetStep"
        ></step2>
        <step3
          v-if="active === 3"
          :info-data="form"
          @change-step="handleSetStep"
        ></step3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Step1 from "./components/Step1";
  import Step2 from "./components/Step2";
  import Step3 from "./components/Step3";
  export default {
    name: "Pay",
    components: { Step1, Step2, Step3 },
    data() {
      return {
        active: 1,
        form: {},
      };
    },
    methods: {
      handleSetStep(active, form) {
        this.active = active;
        if (form) this.form = Object.assign(this.form, form);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .pay-container {
    .steps {
      justify-content: center;
      margin-bottom: 20px;
    }
  }
</style>
