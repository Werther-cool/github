var data_y02 = [34000.9, 44523.9, 54523.9, 64523.9, 74523.9, 75523.9, 76523.9, 77523.9, 85523.9, 86523.9],
data_y01 = [34000.9, 44523.9],
data_x02 =  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
data_x01 = ["2016年10月","2017年10月"];

option1 = {
        xAxis: [{
            name: '月',
            splitLine: {
                show: false
            },
            data:data_x01,
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
        }, ],
        yAxis: {
            splitLine: {
                show: false
            },
            name: '万元',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
        },
        series: [{
            type: 'bar',
            data: data_y01,
            barWidth: 28,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: "#f9ff27"
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f9ff27'
                    }, {
                        offset: 1,
                        color: '#17ffd9'
                    }]),

                }
            },
        }]
    };


option2 = {
        xAxis: [{
            name: '月',
            splitLine: {
                show: false
            },
            data:data_x02,
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
        }, ],
        yAxis: {
            splitLine: {
                show: false
            },
            name: '万元',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
        },
        series: [{
            type: 'bar',
            data: data_y02,
            barWidth: 28,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: "#f9ff27"
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f9ff27'
                    }, {
                        offset: 1,
                        color: '#17ffd9'
                    }]),

                }
            },
        }]
    };


//初始化echarts实例
var myChart01 = echarts.init(document.getElementById('chartmain01'));
var myChart02 = echarts.init(document.getElementById('chartmain02'));
var myChart03 = echarts.init(document.getElementById('chartmain03'));
var myChart04 = echarts.init(document.getElementById('chartmain04'));
//使用制定的配置项和数据显示图表
myChart01.setOption(option1);
myChart02.setOption(option2);
myChart03.setOption(option1);
myChart04.setOption(option2);