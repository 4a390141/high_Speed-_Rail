$(function(){
		// 基于准备好的dom，初始化echarts实例
        var myChart2 = echarts.init(document.getElementById('main2'));

        var data = [92, 90, 89, 80, 79,70, 69, 100, 100]
		var titlename = ['08~09', '09~10', '10~11', '11~12', '13~14', '14~15', '15~16', '16~17', '17~18'];
		var valdata = ['92%','90%','89%','80%','79%','70%','69%','100%','100%']
		var myColor = ['#3a87d9', '#3a87d9', '#fc8435','#fc8435', '#d7393e', '#d7393e', '#d7393e'];
		option = { 
			grid: {
	          left: '18%',   
	          width: '65%',
	          top: '5%',
	          height: '80%',
	        },
	
		    xAxis: {
		        show: true,
		        axisLabel: {
		            textStyle: {
		                fontSize:20,
		                color: '#9c9c9c',
		                fontFamily: "Helvetica",
		            },
		           
		        },
		        
		    },
		    yAxis: [
		    {
		        show: true,
		        data: titlename,
		        inverse: true,
		        axisLine: {
		            show: false
		        },
		        splitLine: {
		            show: false
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            textStyle: {
		                fontSize:18,
		                color: '#58666e',
		                fontFamily: "Helvetica",
		            },
		           
		        },

		    }, 
		    {
		        show: true,
		        inverse: true,
		        data: valdata,
		        label: {
		            normal: {
		                formatter: '{c}%'
		            }
		        },
		        axisLabel: {
		            textStyle: {
		            	fontSize:28,

		            	fontFamily: "Helvetica",
		            	align: 'right',
		            	padding: [0, -60, 0, 0],
		                color: function(value, index) {
		                    var num = myColor.length;
		                    return myColor[index % num]
		                }
		            },
		        },
		        axisLine: {
		            show: false
		        },
		        splitLine: {
		            show: false
		        },
		        axisTick: {
		            show: false
		        },

		    }],
		    series: [{
		        name: '接聽率',
		        type: 'bar',
		        yAxisIndex: 1,
		        data: data,
		        barWidth: 32,

		        itemStyle: {
		            normal: {
		            	barBorderRadius: 4,
		                color: function(params) {
		                    var num = myColor.length;
		                    return myColor[params.dataIndex % num]
		                },
		            }
		        },
		        label: {
		            normal: {
		                show: false,
		                position: 'inside',
		                formatter: '{c}%'
		            }
		        },
		    }]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option);


 
        


        
});


