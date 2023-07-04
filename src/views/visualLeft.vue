<template>
  <div class="visual_left">
    <div class="visual_box">
      <div class="visual_title">
        <span>总发电量</span>
        <img src="../assets/images/ksh33.png" alt="">
      </div>
      <div class="visual_chart" id="main1" />
    </div>
    <div class="visual_box">
      <div class="visual_title">
        <span>总发电量</span>
        <img src="../assets/images/ksh33.png" alt="">
      </div>
      <div class="visual_chart" id="main2" />
    </div>
    <div class="visual_box">
      <div class="visual_title">
        <span>总发电量</span>
        <img src="../assets/images/ksh33.png" alt="">
      </div>
      <div class="visual_chart sfzcll">
        <a>运输方式</a>
        <a>客运量</a>
        <a>货运量</a>
        <div class="sfzcll_pos_box">
          <div class="sfzcll_box">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <div class="sfzcll_box_first">
              <img src="../assets/images/ksh35.png">
              <span>公路运输</span>
            </div>
            <div class="sfzcll_smallBk">
              <div class="ygl">
                <span>4347.2万</span>人
              </div>
            </div>
            <div class="sfzcll_smallBk">
              <div class="ygh">
                <span>4347.2万</span>人
              </div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="sfzcll_box">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <div class="sfzcll_box_first">
              <img src="../assets/images/ksh35.png">
              <span>公路运输</span>
            </div>
            <div class="sfzcll_smallBk">
              <div class="ygl">
                <span>4347.2万</span>人
              </div>
            </div>
            <div class="sfzcll_smallBk">
              <div class="ygh">
                <span>4347.2万</span>人
              </div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="sfzcll_box">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <img class="sfzcll_bkJk" src="../assets/images/ksh34.png">
            <div class="sfzcll_box_first">
              <img src="../assets/images/ksh35.png">
              <span>公路运输</span>
            </div>
            <div class="sfzcll_smallBk">
              <div class="ygl">
                <span>4347.2万</span>人
              </div>
            </div>
            <div class="sfzcll_smallBk">
              <div class="ygh">
                <span>4347.2万</span>人
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts"

let data = {
  id: 'multipleBarsLines',
  legendBar: ['高速公路', '城镇公路'],
  legendLine: ['环比', '同比'],
  xAxis: ['2014', '2015', '2016', '2017', '2018',
    '2019'
  ],
  yAxis: [
    [8, 10, 10, 11, 4, 13],
    [10, 7, 8, 8, 7, 9]
  ],
  lines: [
    [10, 10, 9, 11, 7, 4],
    [6, 12, 12, 2, 4, 4]
  ],
  barColor: ['#009883', '#e66922'], //柱子颜色 必填参数
  lineColor: ['#fd6665', '#fba73b'], // 折线颜色
}

let myData = (function test() {
  let yAxis = data.yAxis || []
  let lines = data.lines || []
  let legendBar = data.legendBar || []
  let legendLine = data.legendLine || []
  let seriesArr = []
  let legendArr = []
  yAxis && yAxis.forEach((item, index) => {
    legendArr.push({
      name: legendBar && legendBar.length > 0 && legendBar[index]
    })
    seriesArr.push({
      name: legendBar && legendBar.length > 0 && legendBar[index],
      type: 'bar',
      barGap: '0.5px',
      data: item,
      barWidth: data.barWidth || 12,
      label: {
        normal: {
          show: false,
          formatter: '{c}',
          position: 'top',
          textStyle: {
            color: '#000',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            textAlign: 'left',
            fontSize: 11,
          },
        },
      },
      itemStyle: { //图形样式
        normal: {
          barBorderRadius:0,
          borderWidth:1,
          borderColor:'#ddd',
          color: data.barColor[index]
        },
      }
    })
  })

  lines && lines.forEach((item, index) => {
    legendArr.push({
      name: legendLine && legendLine.length > 0 && legendLine[index]
    })
    seriesArr.push({
      name: legendLine && legendLine.length > 0 && legendLine[index],
      type: 'line',
      data: item,
      itemStyle: {
        normal: {
          color: data.lineColor[index],
          lineStyle: {
            width: 2,//折线宽度
            type: 'solid',
          }
        }
      },
      label: {
        normal: {
          show: false, //折线上方label控制显示隐藏
          position: 'top',
        }
      },
      symbol: 'circle',
      symbolSize: 5
    })
  })

  return {
    seriesArr,
    legendArr
  }
})()

let option1 = {
  title: {
    show: true,
    text: data.title,
    link: '1111'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      let time = '';
      let str = '';
      for (let i of params) {
        time = i.name.replace(/\n/g, '') + '<br/>';
        if (i.data === 'null' || i.data == null) {
          str += i.seriesName + '：无数据' + '<br/>'
        } else {
          str += i.seriesName + '：' + i.data + '%<br/>'
        }

      }
      return time + str;
    },
    axisPointer: {
      type: 'none'
    },
  },
  legend: {
    right: 2,
    top: 0,
    itemGap: 16,
    itemWidth: 10,
    itemHeight: 10,
    data: myData.legendArr,
    textStyle: {
      color: '#fff',
      fontStyle: 'normal',
      fontFamily: '微软雅黑',
      fontSize: 12,
    }
  },
  grid: {
    x: 0,
    y: 30,
    x2: 0,
    y2: 25,
  },
  xAxis: {
    type: 'category',
    data: data.xAxis,
    axisTick: {
      show: false,
    },

    axisLine: {
      show: false,
    },
    axisLabel: {       //轴标
      show: true,
      interval: '0',
      textStyle: {
        lineHeight:5,
        padding: [2, 2, 0, 2],
        height: 50,
        fontSize: 12,
        color:'#fff',
      },
      rich: {
        Sunny: {
          height: 50,
          // width: 60,
          padding: [0, 5, 0, 5],
          align: 'center',
        },
      },
      formatter: function(params) {
        let newParamsName = "";
        let splitNumber = 5;
        let paramsNameNumber = params && params.length;
        if (paramsNameNumber && paramsNameNumber <= 4) {
          splitNumber = 4;
        } else if (paramsNameNumber >= 5 && paramsNameNumber <= 7) {
          splitNumber = 4;
        } else if (paramsNameNumber >= 8 && paramsNameNumber <= 9) {
          splitNumber = 5;
        } else if (paramsNameNumber >= 10 && paramsNameNumber <= 14) {
          splitNumber = 5;
        } else {
          params = params && params.slice(0, 15);
        }

        let provideNumber = splitNumber; //一行显示几个字
        let rowNumber = Math.ceil(paramsNameNumber / provideNumber) || 0;
        if (paramsNameNumber > provideNumber) {
          for (let p = 0; p < rowNumber; p++) {
            let tempStr = "";
            let start = p * provideNumber;
            let end = start + provideNumber;
            if (p === rowNumber - 1) {
              tempStr = params.substring(start, paramsNameNumber);
            } else {
              tempStr = params.substring(start, end) + "\n";
            }
            newParamsName += tempStr;
          }

        } else {
          newParamsName = params;
        }
        params = newParamsName
        return '{Sunny|' + params + '}';
      },
      color: '#687284',
    },

  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#F1F3F5',
        type: 'solid'
      },
      interval: 2
    },
    splitNumber: 4,
  },
  series: myData.seriesArr
}
//////////////////////交通流量 end

//交通工具流量
let option2 = {

  tooltip: {//鼠标指上时的标线
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ['小型车', '中型车', '大型车'],
    right: '10px',
    top: '0px',
    textStyle: {
      fontSize: 12,
      color: '#fff'
    }
  },
  grid: {
    x: 35,
    y: 25,
    x2: 12,
    y2: 25,
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      textStyle: {
        color:'#fff',
      },
    },
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 14,
        color:'#fff'
      },
    },
    splitLine: {
      lineStyle: {
        color: '#57617B'
      }
    }
  }],
  series: [{
    name: '小型车',
    type: 'line',
    smooth: true,
    lineStyle: {
      normal: {
        width: 2
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(137, 189, 27, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(137, 189, 27, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(137,189,27)'
      }
    },
    data: [20,35,34,45,52,41,49,64,24,52.4,24,33]
  }, {
    name: '中型车',
    type: 'line',
    smooth: true,
    lineStyle: {
      normal: {
        width: 2
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(0, 136, 212, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(0, 136, 212, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(0,136,212)'
      }
    },
    data: [97.3,99.2,99.3,100.0,99.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
  }, {
    name: '大型车',
    type: 'line',
    smooth: true,
    lineStyle: {
      normal: {
        width: 2
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(219, 50, 51, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(219, 50, 51, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(219,50,51)'
      }
    },
    data: [84.2,81.0,67.5,62.1,43.7,68.5,51.9,71.8,76.7,67.6,62.9,0]
  }, ]
};
export default {
  name: 'visualLeft',
  mounted() {
    //交通流量
    let myChart1 = echarts.init(document.getElementById('main1'));
    myChart1.setOption(option1);
    //交通工具流量
    let myChart2 = echarts.init(document.getElementById('main2'));
    myChart2.setOption(option2);
    setInterval(() => {
      let rd1 = [this.rd(), this.rd(), this.rd(), this.rd(),this.rd(), this.rd(), this.rd(), this.rd(),this.rd(),this.rd(),this.rd(),this.rd()];
      let rd2 = [this.rd(), this.rd(), this.rd(), this.rd(),this.rd(), this.rd(), this.rd(), this.rd(),this.rd(),this.rd(),this.rd(),this.rd()];
      let rd3 = [this.rd(), this.rd(), this.rd(), this.rd(),this.rd(), this.rd(), this.rd(), this.rd(),this.rd(),this.rd(),this.rd(),this.rd()];
      myChart2.setOption({
        series: [{
          data: rd1.slice()
        }, {
          data: rd2.slice()
        }, {
          data: rd3.slice()
        }]
      })
    }, 7000)
  },
  methods: {
    rd() {
      return +(Math.random() * 100).toFixed(1);
    }
  }
}
</script>