<template>
  <div class="Echarts">
    <div id="main1" style="width: 100%;height:600px;"></div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
      datalist: {
          type: [Array, Object],
          default: () => []
      }
  },
  watch: {
      datalist: function () {
          this.myEcharts();
      }
  },
  mounted() {
  	this.myEcharts();
  },
  methods:{
	  myEcharts(){
          // 基于准备好的dom，初始化echarts实例
          console.log(this.datalist.mapData);
		var myChart = this.$echarts.init(document.getElementById('main1'));

    // var dataList=[
    //         {name:"南海诸岛",value:0},
    //         {name: '北京', value: 3},
    //         {name: '天津', value: 4},
    //         {name: '上海', value: 12},
    //         {name: '重庆', value: 123}];

    const option = {
            title: {
                text: '舆情地域分布',
                left: 'center'
            },
            tooltip: {
                    formatter:function(params,ticket, callback){
                        return params.seriesName+'<br />'+params.name+'：'+params.value
                    }//数据格式化
                },
            visualMap: {
                min: 0,
                max: 1000,
                left: 'left',
                top: 'bottom',
                inRange: {
                    color: ['#34d5eb', '#eb3434']//取值范围的颜色
                },
                show:false//图注
            },
            geo: {
                map: 'china',
                roam: false,//不开启缩放和平移
                zoom:1.23,//视角缩放比例
                label: {
                    normal: {
                        show: true,
                        fontSize:'10',
                        color: 'rgba(0,0,0,0.7)'
                    }
                },
                itemStyle: {
                    normal:{
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis:{
                        areaColor: '#F3B329',//鼠标选择区域颜色
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series : [
                {
                    name: '信息量',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    geoIndex: 0,
                    data:this.datalist.mapData
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

</style>



