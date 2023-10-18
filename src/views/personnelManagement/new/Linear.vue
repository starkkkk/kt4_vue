<template>
  <div class="Echarts">
    <div id="main3" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script>
export default {
  name: 'Linear',
  props: {
      date: {
          type: Array,
          default: () => []
      }, 
      data: {
          type: Array,
          default: () => []
      }
  },
  watch: {
      date: function () {
          this.myEcharts();
      }, 
      data: function () {
          this.myEcharts();
      }
  },
  mounted() {
  	this.myEcharts();
  },
  methods:{
	  myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		var myChart = this.$echarts.init(document.getElementById('main3'));
		
		// var base = +new Date(1968, 9, 3);
		// var oneDay = 24 * 3600 * 1000;
		// var date = [];

		// var data = [Math.random() * 300];

		// for (var i = 1; i < 20000; i++) {
		// 	var now = new Date(base += oneDay);
		// 	date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
		// 	data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        // }
        
        // console.log(data);

		  // 指定图表的配置项和数据
		var option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '舆情发展趋势',
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.date,
	},
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
	},
	grid: {
		right: '10%',
		left: '10%'
	},
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: 'blue'
            },
            data: this.data
        }
    ]
};

		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  }
  },

}
</script>

<style>
#main3 {
	width: 1200px;
}
</style>