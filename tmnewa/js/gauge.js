$(function(){
		var myChart = echarts.init(document.getElementById('chart-panel'));

		var targetValue = 400;
		var realValue = 380;
        var data = {
        	value: (100*realValue/targetValue).toFixed(2),    
        }
		option = {
				title: {
					text:'今日業績',  
					left:'center',
        	        top:'70%',    
		        	textStyle:{
		        	    color:'#162442',
		        	    fontSize:56, 
		        	    align:'center'
		        	},
				},
				series: [{
					    name: '刻度',
					    type: 'gauge',
					    radius: '88%',
					    min:0,//最小刻度
					    max:100,//最大刻度
					    splitNumber: 10, //刻度数量
					    startAngle: 225,
					    endAngle: -45,
					    axisLine: {
					      show: true,
					      lineStyle: {
					        width: 1,
					        color: [[1,'rgba(0,0,0,0)']]
					      }
					    },//仪表盘轴线
					    axisLabel: {
					      show: true,
					      color:'#019092',
					      distance:70,
					      textStyle:{
				        	fontSize:20, 
				        	} ,
					    },//刻度标签。
					    axisTick: {
					      show: true,
					       splitNumber: 5,
					      lineStyle: {
					        color: '#019092',
					        width: 2,
					      },
					      length: -24
					    },//刻度样式
					    splitLine: {
					      show: true,
					      length: -60,
					      lineStyle: {
					        color: '#019092'
					      }
					    },//分隔线样式
					    detail: {
					      show: false
					    },
					    pointer: {
					      show: false
					    },
	    
				},
				{
				    type: 'gauge',
				    radius: '75%',
				    center: ['50%', '50%'],

				    splitNumber: 0, //刻度数量
				    startAngle: 225,
				    endAngle: -45,
				    axisLine: {
				        show: true,
				        lineStyle: {
				          width: 65,
				          color: [
				            [
				              0.95, new echarts.graphic.LinearGradient(
				              0, 0, 1, 0, [{
				              offset: 0,
				              color: '#1376df'
				            },
				              {
				                offset: 1,
				                color: '#1376df'
				              }
				            ]
				              )
				            ],
				            [
				              1, '#e9e9e9'
				            ]
				          ]
				        }
				    },
				    //分隔线样式。
				    splitLine: {
				        show: false,
				    },
				    axisLabel: {
				        show: false
				    },
				    axisTick: {
				        show: false
				    },
				    pointer: {
				        show: false
				    },
				    title: {
				        show: true,
				        offsetCenter: [0, '-40%'], // x, y，单位px
				        textStyle: {
				          color: '#162442',
				          fontSize: 30,
				          fontWeight: '700',
				        }

				    },
				    //仪表盘详情，用于显示数据。
				    detail: {
				        show: true,
				        offsetCenter: [0, '15%'],
				        color: '#1376df',
					    formatter:'{value}{percent|%}',
					    textStyle: {
					    	fontFamily: 'Arial',
					      	fontSize: 250,
					      	fontWeight: '700',
					      	textShadowColor: '#c7d8d2',
					      	textShadowBlur: 5,
					      	textShadowOffsetX: 8,
					      	textShadowOffsetY: 8,
					    },
					    rich: {
	                        percent: {
	                        	fontFamily: 'Arial',
	                            fontSize: 122,
	                            fontWeight: '700',
	                            color: '#1376df',
	                            verticalAlign: 'center',
	                        },
	                    }

				    },
				    // data: [{name: "目標值：400萬",value: 96}]
				    data: [{
	                	name: "目標值："+targetValue+"萬",
	                	value: data.value,
	                }],
				}
			  ]
			};
 
        myChart.setOption(option);


        
});


