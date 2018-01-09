var
data_x01 = ["累计出借人数量","当期出借人数量"],
data_y01 = [50000, 12000],
data_x02 = ["累计借款人数量","当期借款人数量"],
data_y02 = [34000.9, 44523.9],

pieData03 = [
    {value:335, name:'其他借款人待还金额占比'},
    {value:310, name:'最大单一借款人以外代还金额占比'},
    {value:369, name:'最大单一借款人代还金额占比'},
    {value:679, name:'前十大借款人待还金额占比'},
];
pieData04 = [
    { name:"总金额",value:10},
    { name:"逾期金额（万元），5000笔数",value:9},
    { name:"逾期90天以上（万元），600笔数",value:8},
];

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
    textStyle:{
        fontSize:24,

    },
    legend: {
        orient:'vertical',
        x: 'right',
        y:'center',
        data: pieData03,
        textStyle:{
            color:'#f5e109',
            fontSize:20
        }
    },
    series : [{
        name: '详细信息',
        type: 'pie',
        radius : '70%',
        center: ['28%', '50%'],
        data:pieData03,
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
                    fontSize : 24,    //文字的字体大小
                    color:'#fff'
                },
                formatter:'{d}%', 
            }
        },
      
    }],
    color:['#ffffff','#f5e109','#ff8150']
};
var option4 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    textStyle:{
        fontSize:24,

    },
    legend: {
        orient:'vertical',
        x: 'right',
        y:'center',
        data: pieData04,
        textStyle:{
            color:'#f5e109',
            fontSize:20
        }
    },
    series : [{
        name: '详细信息',
        type: 'pie',
        radius : '70%',
        center: ['35%', '50%'],
        data:pieData04,
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
                    fontSize : 24,    //文字的字体大小
                    color:'#fff'
                },
                formatter:'{d}%', 
            }
        },
      
    }],
    color:['#ffcb2d','#b245ff','#ff70b8']
};

var option5 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient:'vertical',
        x: 'right',
        y:'center',
        data: pieData03,
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
            data:[
                {value:335, name:'其他借款人待还金额占比'},
                {value:679, name:'前十大借款人待还金额占比'},
             
            ]
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
            data:[
                {value:335, name:'其他借款人待还金额占比'},
                {value:310, name:'最大单一借款人以外代还金额占比'},
                {value:369, name:'最大单一借款人代还金额占比'},
              
            ]
        }
    ],
    color:['#f5e109','#ff8150','#ff5611','#ff70b8','#b245ff']
};

//初始化echarts实例
var myChart01 = echarts.init(document.getElementById('chartmain01'));
var myChart02 = echarts.init(document.getElementById('chartmain02'));
var myChart03 = echarts.init(document.getElementById('chartmain03'));
var myChart04 = echarts.init(document.getElementById('chartmain04'));



//使用制定的配置项和数据显示图表
myChart01.setOption(option1);
myChart02.setOption(option2);
myChart03.setOption(option5);
myChart04.setOption(option4);
