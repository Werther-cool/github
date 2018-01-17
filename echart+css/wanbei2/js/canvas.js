var
data_x01 = ["累计出借人数量","当期出借人数量"],
data_y01 = [50000, 12000],
data_x02 = ["累计借款人数量","当期借款人数量"],
data_y02 = [34000.9, 44523.9],

pieData03_len = [
    {value:335, name:'其他借款人待还金额占比'},
    {value:310, name:'最大单一借款人以外代还金额占比'},
    {value:369, name:'最大单一借款人代还金额占比'},
    {value:679, name:'前十大借款人待还金额占比'},
];
pieData03_in = [
    {value:335, name:'其他借款人待还金额占比'},
    {value:679, name:'前十大借款人待还金额占比'},
];
pieData03_out = [
    {value:335, name:'其他借款人待还金额占比'},
    {value:310, name:'最大单一借款人以外代还金额占比'},
    {value:369, name:'最大单一借款人代还金额占比'},
];



pieData04_in = [
    { name:"未逾期",value:13},    
    { name:"逾期金额（万元），5000笔数",value:9},
]
pieData04_out = [
    { name:"未逾期",value:13},
    { name:"逾期90天以内",value:5},
    { name:"逾期90天以上（万元），600笔数",value:4},
];
pieData04_len =[
    { name:"未逾期",value:13},    
    { name:"逾期金额（万元），5000笔数",value:9},
    { name:"逾期90天以内",value:5},
    { name:"逾期90天以上（万元），600笔数",value:4},
]


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
        // name: '年月',
        splitLine: {
            show: false
        },
        data:data_x01,
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize:28
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                fontSize:28
            }
        },
    }, ],
    yAxis: {
        splitLine: {
            show: false
        },
        name: '人',
        nameTextStyle : {
            fontSize : 28
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                fontSize:28
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize:28
            }
        },
    
    },
    series: [{
        type: 'bar',
        data: data_y01,
        barWidth: 86,
        label: {
            normal: {
                show: true,
                position: 'top',
                color: "#ffd200",
                fontSize:28
            }
        },
        itemStyle: {
            normal: {
                color: "#ffd200",
            }
        },
        }]
};

var option2 = 
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
        // name: '年月',
        splitLine: {
            show: false
        },
        data:data_x02,
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize:28
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                fontSize:28
            }
        },
    }, ],
    yAxis: {
        splitLine: {
            show: false
        },
        name: '人',
        nameTextStyle : {
            fontSize : 28
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                fontSize:28
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize:28
            }
        },
    
    },
    series: [{
        type: 'bar',
        data: data_y02,
        barWidth: 86,
        label: {
            normal: {
                show: true,
                position: 'top',
                color: "#9fff07",
                fontSize:28
            }
        },
        itemStyle: {
            normal: {
                color: "#9fff07",
            }
        },
        }]
};

var option3 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient:'vertical',
        x: 'right',
        y:'center',
        data: pieData03_len,
        textStyle:{
            color:'#f5e109',
            fontSize:20
        }
    },
    calculable : false,
    series : [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius : [0, '45%'],
            center: ['35%', '50%'],
            // for funnel
            x: '20%',
            width: '40%',
            funnelAlign: 'right',
            max: 1548,
            itemStyle: {
                normal:{ 
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
                    position:'inner', //标签的位置
                    textStyle : {
                        fontWeight : 300 ,
                        fontSize : 24,    //文字的字体大小
                        color:'#fff'
                    },
                    formatter:'{d}%', 
                }
            },
            data:pieData03_in
        },
        {
            name:'访问来源',
            type:'pie',
            radius : ['55%', '75%'],
            center: ['35%', '50%'],
            // for funnel
            x: '60%',
            width: '35%',
            funnelAlign: 'left',
            max: 1048,
            itemStyle: {
                normal:{ 
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
                        fontSize : 24,    //文字的字体大小
                        color:'#fff'
                    },
                    formatter:'{d}%', 
                }
            },
            data:pieData03_out
        }
    ],
    color:["#ff8150",
        "#f5e109",
        "#88e64a",
        '#39d016',]
};

var option4 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient:'vertical',
        x: 'right',
        y:'20%',
        data: pieData04_len,
        textStyle:{
            color:'#f5e109',
            fontSize:20
        }
    },
    calculable : false,
    series : [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius : [0, '45%'],
            center: ['35%', '50%'],
            // for funnel
            x: '18%',
            width: '40%',
            funnelAlign: 'right',
            max: 1548,
            itemStyle: {
                normal:{ 
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
                    position:'inner', //标签的位置
                    textStyle : {
                        fontWeight : 300 ,
                        fontSize : 24,    //文字的字体大小
                        color:'#fff'
                    },
                    formatter:'{d}%', 
                }
            },
            data:pieData04_in
        },
        {
            name:'访问来源',
            type:'pie',
            radius : ['55%', '75%'],
            center: ['35%', '50%'],
            // for funnel
            x: '60%',
            width: '35%',
            funnelAlign: 'left',
            max: 1048,
            itemStyle: {
                normal:{ 
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
                        fontSize : 24,    //文字的字体大小
                        color:'#fff'
                    },
                    formatter:'{d}%', 
                }
            },
            data:pieData04_out
        }
    ],
    color:['#9c28ee','#555cf1','#ff65b8','#27c9f2']
};

//初始化echarts实例
var myChart01 = echarts.init(document.getElementById('chartmain01'));
var myChart02 = echarts.init(document.getElementById('chartmain02'));
var myChart03 = echarts.init(document.getElementById('chartmain03'));
var myChart04 = echarts.init(document.getElementById('chartmain04'));



//使用制定的配置项和数据显示图表
myChart01.setOption(option1);
myChart02.setOption(option2);
myChart03.setOption(option3);
myChart04.setOption(option4);
