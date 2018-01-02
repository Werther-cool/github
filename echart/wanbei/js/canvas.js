var
data_x01 = ["2016年10月","2017年10月"],
data_y01 = [34000.9, 44523.9],
data_x02 =  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
data_y02 = [34000.9, 44523.9, 54523.9, 64523.9, 74523.9, 75523.9, 76523.9, 77523.9, 85523.9, 86523.9],
data_x03 = ["2016年10月","2017年10月"]
data_y03 = [34000.9, 44523.9]
data_x04 =  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
data_y04 = [34000.9, 44523.9, 54523.9, 64523.9, 74523.9, 75523.9, 76523.9, 77523.9, 85523.9, 86523.9]
data_x05 = ["2016年10月","2017年10月"]
data_y05 = [34000.9,44523.9]
data_x06 =  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
data_y06 = [34000.9, 44523.9, 54523.9, 64523.9, 74523.9, 75523.9, 76523.9, 77523.9, 85523.9, 86523.9]
data_x07 = ["2016年10月","2017年10月"]
data_y07 = [34000.9,44523.9]
data_x08 =  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
data_y08 = [34000.9, 44523.9, 54523.9, 64523.9, 74523.9, 75523.9, 76523.9, 77523.9, 85523.9, 86523.9]
data_x09 = ["2016年10月","2017年10月"]
data_y09 = [34000.9,44523.9]
data_x10 =  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
data_y10 = [34000.9, 44523.9, 54523.9, 64523.9, 74523.9, 75523.9, 76523.9, 77523.9, 85523.9, 86523.9],
pieData = [
    { name:"陈** 13112345678 10万元",value:10},
    { name:"li** 13112345678 10万元",value:9},
    { name:"as**  13112345678 10万元",value:8},
    { name:"12** 13112345678 10万元",value:7},
    { name:"ss** 13112345678 10万元",value:6},
    { name:"a** 13112345678 100万元",value:5},
    { name:"ll** 13112345678 1000万元",value:4},
    { name:"o** 13112345678 1000万元",value:3},
    { name:"l** 13112345678 1000万元",value:2},
    { name:"asd** 13112345678 100万元",value:2},
]

;
var option1 = 
{
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: [{
        name: '年月',
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

var option2 = 
{
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
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

var option3 = 
{
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: [{
        name: '年月',
        splitLine: {
            show: false
        },
        data:data_x03,
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
        data: data_y03,
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

var option4 = 
{
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: [{
        name: '月',
        splitLine: {
            show: false
        },
        data:data_x04,
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
        data: data_y04,
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

var  option5 = 
{
    color: ['#17ffd9'],
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            name: '年月',
            splitLine: {
                show: false
            },
            
            data : data_x05,
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
        }
    ],
    yAxis : [
        {
            type : 'value',
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
        }
    ],
    series : [
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            // areaStyle: {normal: {}},
            data:data_y05
        }
    ]
};
     
var  option6 = 
{
        color: ['#f9ff27'],
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                name: '月',
                splitLine: {
                    show: false
                },
                data : data_x06,
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
            }
        ],
        yAxis : [
            {
                type : 'value',
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
            }
        ],
        series : [
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                // areaStyle: {normal: {}},
                data:data_y06
            }
        ]
};


var option7 = 
{
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: [{
        name: '月',
        splitLine: {
            show: false
        },
        data:data_x07,
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
        data: data_y07,
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

var  option8 = 
{
        color: ['#f9ff27'],
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                name: '月',
                splitLine: {
                    show: false
                },
                data : data_x08,
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
            }
        ],
        yAxis : [
            {
                type : 'value',
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
            }
        ],
        series : [
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                // areaStyle: {normal: {}},
                data:data_y08
            }
        ]
};



var option9 = 
{
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: [{
        name: '年月',
        splitLine: {
            show: false
        },
        data:data_x07,
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
        data: data_y07,
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

var  option10 = 
{
        color: ['#f9ff27'],
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                name: '月',
                splitLine: {
                    show: false
                },
                data : data_x08,
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
            }
        ],
        yAxis : [
            {
                type : 'value',
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
            }
        ],
        series : [
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                // areaStyle: {normal: {}},
                data:data_y08
            }
        ]
};










var option0 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    textStyle:{
        fontSize:18,

    },
    legend: {
        orient:'vertical',
        x: 'right',
        y:'center',
        data: pieData,
        textStyle:{
            color:'#fff',
            fontSize:16
        }
    },
    series : [{
        name: '详细信息',
        type: 'pie',
        radius : '55%',
        center: ['28%', '50%'],
        data:pieData,
        itemStyle: {
            normal:{ 
                // label:{ 
                //     show: false, 
                //     // formatter: '{b} : {c} ({d}%)',
                //     color:'#fff' 
                // }, 
                labelLine :{
                    show:true,
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.8)'
                    },
                } 
            },
        },
        label:{           
            normal:{
                show:true,
                // position:'inner', //标签的位置
                textStyle : {
                    fontWeight : 300 ,
                    fontSize : 14,    //文字的字体大小
                    color:'#fff'
                },
                formatter:'{d}%', 
            }
        },
      
    }],
    color:['#17ff63','#d1ff17','#ffb017','#ff6917','#ee2213','#f74791','#c519df','#5817ff','#1085d7','#39b7a2']
};


//初始化echarts实例
var myChart01 = echarts.init(document.getElementById('chartmain01'));
var myChart02 = echarts.init(document.getElementById('chartmain02'));
var myChart03 = echarts.init(document.getElementById('chartmain03'));
var myChart04 = echarts.init(document.getElementById('chartmain04'));
var myChart05 = echarts.init(document.getElementById('chartmain05'));
var myChart06 = echarts.init(document.getElementById('chartmain06'));
var myChart07 = echarts.init(document.getElementById('chartmain07'));
var myChart08 = echarts.init(document.getElementById('chartmain08'));
var myChart09 = echarts.init(document.getElementById('chartmain09'));
var myChart10 = echarts.init(document.getElementById('chartmain10'));

// 扇形
var myChart00 = echarts.init(document.getElementById('chartmain00'));

//使用制定的配置项和数据显示图表
myChart01.setOption(option1);
myChart02.setOption(option2);
myChart03.setOption(option3);
myChart04.setOption(option4);
myChart05.setOption(option5);
myChart06.setOption(option6);
myChart07.setOption(option7);
myChart08.setOption(option8);
myChart09.setOption(option9);
myChart10.setOption(option10);
myChart00.setOption(option0);