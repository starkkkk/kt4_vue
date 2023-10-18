<template>
  <div class="Echarts">
    <div id="main2" style="width: 400px;height:400px;margin: 0 auto"></div>
  </div>
</template>

<script>
export default {
  name: 'Radar',
  props: {
      'data': {
          'type': [Array, Object],
          'default': () => []
      }
  },
//   data() {
//       return {
//         'graphData': this.data
//       };
//   },
  watch: {
        data: function() {
            // console.log(this.graphData);
            this.myEcharts();
        }
  },
  mounted() {
      this.myEcharts();
  },

  methods:{
	  myEcharts(){
          // 基于准备好的dom，初始化echarts实例
        //   console.log('render');
		var myChart = this.$echarts.init(document.getElementById('main2'));

    const option = {
    title: {
        text: '舆情指数雷达图',
    },
    tooltip: {},
    // legend: {
    //     data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    // },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '情感', max: 100},
            { name: '认知', max: 100},
            { name: '传播', max: 100},
            { name: '行为', max: 100},
        ],
        center: ['50%', '54%']
    },
    // grid: {
    //     left: '-20%',
    //     bottom: '50%'
    // },
    series: [{
        name: '态势',
        type: 'radar',
        data: [
            {
                value: this.data,
            }
        ]
    }]
};


		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  }
  },

}
</script>

<style>

</style>



