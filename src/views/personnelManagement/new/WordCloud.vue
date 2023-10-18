<template>
  <div class="Echarts">
    <div id="main4" style="width: 100%;height:600px;"></div>
  </div>
</template>

<script>
export default {
  name: 'Cloud',
  props: {
      data: {
          type: Array,
          default: () => []
      }
  },
  watch: {
      data: function() {
          this.myEcharts();
      }
  },
  mounted() {
  	this.myEcharts();
  },
  methods:{
	myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
	var myChart = this.$echarts.init(document.getElementById('main4'));
    const option = {
            title: {
                text: '关键字词云',
                left: '40%'
            },
            backgroundColor:'#fff',
            tooltip: {
                show: false
            },
            series: [{
                type: 'wordCloud',
                gridSize: 1,
                shape: 'square',
                sizeRange: [12, 55],
                rotationRange: [-45, 0, 45, 90],
                // maskImage: maskImage,
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' +
                                    Math.round(Math.random() * 255) +
                                    ', ' + Math.round(Math.random() * 255) +
                                    ', ' + Math.round(Math.random() * 255) + ')'
                        }
                    }
                },
                left: '15%',
                top: 'center',
                // width: '96%',
                // height: '100%',
                right: null,
                bottom: null,
                // width: 300,
                // height: 200,
                // top: 20,
                data: this.data
                    }]
    }
    
    myChart.setOption(option);
    }
    
}
      

		  // 使用刚指定的配置项和数据显示图表。
	
	}

</script>

<style>

</style>



