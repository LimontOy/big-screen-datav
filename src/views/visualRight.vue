<template>
  <div class="visual_right">
    <div class="visual_box">
      <div class="visual_title">
        <span>总发电量</span>
        <img src="../assets/images/ksh33.png">
      </div>
      <div class="swiper-container visual_swiper1 visual_chart">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  id="main3"></div>
          <div class="swiper-slide"  id="main31"></div>
        </div>
      </div>
    </div>
    <div class="visual_box visualSfzsfl">
      <div class="visual_title">
        <span>总发电量</span>
        <img src="../assets/images/ksh33.png">
      </div>
      <div class="visual_chart" id="main9">

      </div>
      <div class="visual_table">
        <table>
          <tr >
            <td>小型车</td>
            <td>中型车</td>
            <td>大型车</td>
          </tr>
          <tr>
            <td>2486万</td>
            <td>2486万</td>
            <td>2486万</td>
          </tr>
          <tr>
            <td>2486万</td>
            <td>2486万</td>
            <td>2486万</td>
          </tr>
          <tr>
            <td>2486万</td>
            <td>2486万</td>
            <td>2486万</td>
          </tr>
          <tr>
            <td>2486万</td>
            <td>2486万</td>
            <td>2486万</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="visual_box">
      <div class="visual_title">
        <span>发电量排行</span>
        <img src="../assets/images/ksh33.png">
      </div>
      <div class="swiper-container visual_swiper2 visual_chart">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  id="main4"></div>
          <div class="swiper-slide"  id="main41"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//发电量1
let color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
let data = [
  {
    "name": "PV",
    "value": 30
  },
  {
    "name": "grid",
    "value": 30
  },
  {
    "name": "battery",
    "value": 42
  },
  {
    "name": "inverter",
    "value": 50
  },
  {
    "name": "sticker log",
    "value": 34
  }
];

let max = data[0].value;
data.forEach(function(d) {
  max = d.value > max ? d.value : max;
});

let renderData = [{
  value: [],
  name: "告警类型TOP5",
  symbol: 'none',
  lineStyle: {
    normal: {
      color: '#ecc03e',
      width: 2
    }
  },
  areaStyle: {
    normal: {
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
          [{
            offset: 0,
            color: 'rgba(203, 158, 24, 0.8)'
          }, {
            offset: 1,
            color: 'rgba(190, 96, 20, 0.8)'
          }],
          false)
    }
  }
}];


data.forEach(function(d, i) {
  let value = ['', '', '', '', ''];
  value[i] = max
  renderData[0].value[i] = d.value;
  renderData.push({
    value: value,
    symbol: 'circle',
    symbolSize: 12,
    lineStyle: {
      normal: {
        color: 'transparent'
      }
    },
    itemStyle: {
      normal: {
        color: color[i],
      }
    }
  })
})
let indicator = [];

data.forEach(function(d) {
  indicator.push({
    name: d.name,
    max: max,
    color: '#fff'
  })
})

let option3 = {
  tooltip: {
    show: true,
    trigger: "item"
  },
  radar: {
    center: ["50%", "50%"],//偏移位置
    radius: "80%",
    startAngle: 40, // 起始角度
    splitNumber: 4,
    shape: "circle",
    splitArea: {
      areaStyle: {
        color: 'transparent'
      }
    },
    axisLabel: {
      show: false,
      fontSize: 20,
      color: "#000",
      fontStyle: "normal",
      fontWeight: "normal"
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255, 255, 255, 0.5)"
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(255, 255, 255, 0.5)"
      }
    },
    indicator: indicator
  },
  series: [{
    type: "radar",
    data: renderData
  }]
}
//////////////////////发电量1 end
//发电量2
color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
data = [
  {
    "name": "PV",
    "value": 50
  },
  {
    "name": "grid",
    "value": 12
  },
  {
    "name": "battery",
    "value": 25
  },
  {
    "name": "inverter",
    "value": 31
  },
  {
    "name": "sticker log",
    "value": 10
  }
];

max = data[0].value;
data.forEach(function(d) {
  max = d.value > max ? d.value : max;
});

renderData = [{
  value: [],
  name: "告警类型TOP5",
  symbol: 'none',
  lineStyle: {
    normal: {
      color: '#ecc03e',
      width: 2
    }
  },
  areaStyle: {
    normal: {
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
          [{
            offset: 0,
            color: 'rgba(203, 158, 24, 0.8)'
          }, {
            offset: 1,
            color: 'rgba(190, 96, 20, 0.8)'
          }],
          false)
    }
  }
}];


data.forEach(function(d, i) {
  let value = ['', '', '', '', ''];
  value[i] = max
  renderData[0].value[i] = d.value;
  renderData.push({
    value: value,
    symbol: 'circle',
    symbolSize: 12,
    lineStyle: {
      normal: {
        color: 'transparent'
      }
    },
    itemStyle: {
      normal: {
        color: color[i],
      }
    }
  })
})
indicator = [];

data.forEach(function(d) {
  indicator.push({
    name: d.name,
    max: max,
    color: '#fff'
  })
})


let option31 = {
  tooltip: {
    show: true,
    trigger: "item"
  },
  radar: {
    center: ["50%", "50%"],//偏移位置
    radius: "80%",
    startAngle: 40, // 起始角度
    splitNumber: 4,
    shape: "circle",
    splitArea: {
      areaStyle: {
        color: 'transparent'
      }
    },
    axisLabel: {
      show: false,
      fontSize: 20,
      color: "#000",
      fontStyle: "normal",
      fontWeight: "normal"
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255, 255, 255, 0.5)"
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(255, 255, 255, 0.5)"
      }
    },
    indicator: indicator
  },
  series: [{
    type: "radar",
    data: renderData
  }]
}


// 排行1

maxData = 200;

let option4 = {
  "title": {
    "text": " ",
    "left": "center",
    "y": "10",
    "textStyle": {
      "color": "#fff"
    }
  },

  "grid": {
    "left": 30,
    "top": 0,
    "bottom": 10
  },
  "tooltip": {
    "trigger": "item",
    "textStyle": {
      "fontSize": 12
    },
    "formatter": "{b0}:{c0}"
  },
  "xAxis": {
    "max": 100,
    "splitLine": {
      "show": false
    },
    "axisLine": {
      "show": false
    },
    "axisLabel": {
      "show": false
    },
    "axisTick": {
      "show": false
    }
  },
  "yAxis": [
    {
      "type": "category",
      "inverse": false,
      "data": [
        "晋城",
        "太旧",
        "太原",
        "吕梁",
        "长治",
      ],
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "margin": -4,
        "textStyle": {
          "color": "#fff",
          "fontSize": 16.25
        }
      }
    },

  ],
  "series": [
    {
      "type": "pictorialBar",
      "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
      "symbolRepeat": "fixed",
      "symbolMargin": "5%",
      "symbolClip": true,
      "symbolSize": 22.5,
      "symbolPosition": "start",
      "symbolOffset": [
        20,
        0
      ],
      "symbolBoundingData": 300,
      "data": [
        13,
        42,
        67,
        81,
        86,

      ],
      "z": 10
    },
    {
      "type": "pictorialBar",
      "itemStyle": {
        "normal": {
          "opacity": 0.3
        }
      },
      "label": {
        "normal": {
          "show": false
        }
      },
      "animationDuration": 0,
      "symbolRepeat": "fixed",
      "symbolMargin": "5%",
      "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
      "symbolSize": 22.5,
      "symbolBoundingData": 300,
      "symbolPosition": "start",
      "symbolOffset": [
        20,
        0
      ],
      "data": [
        13,
        42,
        67,
        81,
        86,

      ],
      "z": 5
    }
  ]
};
// 排行1 end

// 排行2
let maxData = 200;

let option41 = {
  "title": {
    "text": " ",
    "left": "center",
    "y": "10",
    "textStyle": {
      "color": "#fff"
    }
  },
  "grid": {
    "left": 30,
    "top": 0,
    "bottom": 10
  },
  "tooltip": {
    "trigger": "item",
    "textStyle": {
      "fontSize": 12
    },
    "formatter": "{b0}:{c0}"
  },
  "xAxis": {
    "max": 100,
    "splitLine": {
      "show": false
    },
    "axisLine": {
      "show": false
    },
    "axisLabel": {
      "show": false
    },
    "axisTick": {
      "show": false
    }
  },
  "yAxis": [
    {
      "type": "category",
      "inverse": false,
      "data": [
        "朔州",
        "大同",
        "运城",
        "忻州",
        "临汾",
      ],
      "axisLine": {
        "show": false
      },
      "axisTick": {
        "show": false
      },
      "axisLabel": {
        "margin": -4,
        "textStyle": {
          "color": "#fff",
          "fontSize": 16.25
        }
      }
    },

  ],
  "series": [
    {
      "type": "pictorialBar",
      "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
      "symbolRepeat": "fixed",
      "symbolMargin": "5%",
      "symbolClip": true,
      "symbolSize": 22.5,
      "symbolPosition": "start",
      "symbolOffset": [
        20,
        0
      ],
      "symbolBoundingData": 300,
      "data": [
        51,
        32,
        82,
        42,
        81
      ],
      "z": 10
    },
    {
      "type": "pictorialBar",
      "itemStyle": {
        "normal": {
          "opacity": 0.3
        }
      },
      "label": {
        "normal": {
          "show": false
        }
      },
      "animationDuration": 0,
      "symbolRepeat": "fixed",
      "symbolMargin": "5%",
      "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
      "symbolSize": 22.5,
      "symbolBoundingData": 300,
      "symbolPosition": "start",
      "symbolOffset": [
        20,
        0
      ],
      "data": [
        51,
        32,
        82,
        42,
        81
      ],
      "z": 5
    }
  ]
};

// 排行2 end

function random() {
  return +(Math.random() * (maxData - 10)).toFixed(1);
}
//////////////////////排行2 end

//收费站收费量
let geoCoordMap = {
  "海门":[121.15,31.89],
  "鄂尔多斯":[109.781327,39.608266],
  "招远":[120.38,37.35],
  "舟山":[122.207216,29.985295],
  "齐齐哈尔":[123.97,47.33],
  "盐城":[120.13,33.38],
  "赤峰":[118.87,42.28],
  "青岛":[120.33,36.07],
  "乳山":[121.52,36.89],
  "金昌":[102.188043,38.520089],
  "泉州":[118.58,24.93],
  "莱西":[120.53,36.86],
  "日照":[119.46,35.42],
  "胶南":[119.97,35.88],
  "南通":[121.05,32.08],
  "拉萨":[91.11,29.97],
  "云浮":[112.02,22.93],
  "梅州":[116.1,24.55],
  "文登":[122.05,37.2],
  "上海":[121.48,31.22],
  "攀枝花":[101.718637,26.582347],
  "威海":[122.1,37.5],
  "承德":[117.93,40.97],
  "厦门":[118.1,24.46],
  "汕尾":[115.375279,22.786211],
  "潮州":[116.63,23.68],
  "丹东":[124.37,40.13],
  "太仓":[121.1,31.45],
  "曲靖":[103.79,25.51],
  "烟台":[121.39,37.52],
  "福州":[119.3,26.08],
  "瓦房店":[121.979603,39.627114],
  "即墨":[120.45,36.38],
  "抚顺":[123.97,41.97],
  "玉溪":[102.52,24.35],
  "张家口":[114.87,40.82],
  "阳泉":[113.57,37.85],
  "莱州":[119.942327,37.177017],
  "湖州":[120.1,30.86],
  "汕头":[116.69,23.39],
  "昆山":[120.95,31.39],
  "宁波":[121.56,29.86],
  "湛江":[110.359377,21.270708],
  "揭阳":[116.35,23.55],
  "荣成":[122.41,37.16],
  "连云港":[119.16,34.59],
  "葫芦岛":[120.836932,40.711052],
  "常熟":[120.74,31.64],
  "东莞":[113.75,23.04],
  "河源":[114.68,23.73],
  "淮安":[119.15,33.5],
  "泰州":[119.9,32.49],
  "南宁":[108.33,22.84],
  "营口":[122.18,40.65],
  "惠州":[114.4,23.09],
  "江阴":[120.26,31.91],
  "蓬莱":[120.75,37.8],
  "韶关":[113.62,24.84],
  "嘉峪关":[98.289152,39.77313],
  "广州":[113.23,23.16],
  "延安":[109.47,36.6],
  "太原":[112.53,37.87],
  "清远":[113.01,23.7],
  "中山":[113.38,22.52],
  "昆明":[102.73,25.04],
  "寿光":[118.73,36.86],
  "盘锦":[122.070714,41.119997],
  "长治":[113.08,36.18],
  "深圳":[114.07,22.62],
  "珠海":[113.52,22.3],
  "宿迁":[118.3,33.96],
  "咸阳":[108.72,34.36],
  "铜川":[109.11,35.09],
  "平度":[119.97,36.77],
  "佛山":[113.11,23.05],
  "海口":[110.35,20.02],
  "江门":[113.06,22.61],
  "章丘":[117.53,36.72],
  "肇庆":[112.44,23.05],
  "大连":[121.62,38.92],
  "临汾":[111.5,36.08],
  "吴江":[120.63,31.16],
  "石嘴山":[106.39,39.04],
  "沈阳":[123.38,41.8],
  "苏州":[120.62,31.32],
  "茂名":[110.88,21.68],
  "嘉兴":[120.76,30.77],
  "长春":[125.35,43.88],
  "胶州":[120.03336,36.264622],
  "银川":[106.27,38.47],
  "张家港":[120.555821,31.875428],
  "三门峡":[111.19,34.76],
  "锦州":[121.15,41.13],
  "南昌":[115.89,28.68],
  "柳州":[109.4,24.33],
  "三亚":[109.511909,18.252847],
  "自贡":[104.778442,29.33903],
  "吉林":[126.57,43.87],
  "阳江":[111.95,21.85],
  "泸州":[105.39,28.91],
  "西宁":[101.74,36.56],
  "宜宾":[104.56,29.77],
  "呼和浩特":[111.65,40.82],
  "成都":[104.06,30.67],
  "大同":[113.3,40.12],
  "镇江":[119.44,32.2],
  "桂林":[110.28,25.29],
  "张家界":[110.479191,29.117096],
  "宜兴":[119.82,31.36],
  "北海":[109.12,21.49],
  "西安":[108.95,34.27],
  "金坛":[119.56,31.74],
  "东营":[118.49,37.46],
  "牡丹江":[129.58,44.6],
  "遵义":[106.9,27.7],
  "绍兴":[120.58,30.01],
  "扬州":[119.42,32.39],
  "常州":[119.95,31.79],
  "潍坊":[119.1,36.62],
  "重庆":[106.54,29.59],
  "台州":[121.420757,28.656386],
  "南京":[118.78,32.04],
  "滨州":[118.03,37.36],
  "贵阳":[106.71,26.57],
  "无锡":[120.29,31.59],
  "本溪":[123.73,41.3],
  "克拉玛依":[84.77,45.59],
  "渭南":[109.5,34.52],
  "马鞍山":[118.48,31.56],
  "宝鸡":[107.15,34.38],
  "焦作":[113.21,35.24],
  "句容":[119.16,31.95],
  "北京":[116.46,39.92],
  "徐州":[117.2,34.26],
  "衡水":[115.72,37.72],
  "包头":[110,40.58],
  "绵阳":[104.73,31.48],
  "乌鲁木齐":[87.68,43.77],
  "枣庄":[117.57,34.86],
  "杭州":[120.19,30.26],
  "淄博":[118.05,36.78],
  "鞍山":[122.85,41.12],
  "溧阳":[119.48,31.43],
  "库尔勒":[86.06,41.68],
  "安阳":[114.35,36.1],
  "开封":[114.35,34.79],
  "济南":[117,36.65],
  "德阳":[104.37,31.13],
  "温州":[120.65,28.01],
  "九江":[115.97,29.71],
  "邯郸":[114.47,36.6],
  "临安":[119.72,30.23],
  "兰州":[103.73,36.03],
  "沧州":[116.83,38.33],
  "临沂":[118.35,35.05],
  "南充":[106.110698,30.837793],
  "天津":[117.2,39.13],
  "富阳":[119.95,30.07],
  "泰安":[117.13,36.18],
  "诸暨":[120.23,29.71],
  "郑州":[113.65,34.76],
  "哈尔滨":[126.63,45.75],
  "聊城":[115.97,36.45],
  "芜湖":[118.38,31.33],
  "唐山":[118.02,39.63],
  "平顶山":[113.29,33.75],
  "邢台":[114.48,37.05],
  "德州":[116.29,37.45],
  "济宁":[116.59,35.38],
  "荆州":[112.239741,30.335165],
  "宜昌":[111.3,30.7],
  "义乌":[120.06,29.32],
  "丽水":[119.92,28.45],
  "洛阳":[112.44,34.7],
  "秦皇岛":[119.57,39.95],
  "株洲":[113.16,27.83],
  "石家庄":[114.48,38.03],
  "莱芜":[117.67,36.19],
  "常德":[111.69,29.05],
  "保定":[115.48,38.85],
  "湘潭":[112.91,27.87],
  "金华":[119.64,29.12],
  "岳阳":[113.09,29.37],
  "长沙":[113,28.21],
  "衢州":[118.88,28.97],
  "廊坊":[116.7,39.53],
  "菏泽":[115.480656,35.23375],
  "合肥":[117.27,31.86],
  "武汉":[114.31,30.52],
  "大庆":[125.03,46.58]
};

let convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

// 地图数据
let option9 = {

  title: {
    text: ' ',
    x:'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return params.name + ' : ' + params.value[2];
    }
  },
  legend: {
    orient: 'vertical',
    y: 'bottom',
    x:'right',
    data:['pm2.5'],
    textStyle: {
      color: '#fff'
    }
  },
  visualMap: {
    min: 0,
    max: 200,
    calculable: true,
    color: ['#d94e5d','#eac736','#50a3ba'],
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: 'rgba(127,199,221,0.1)',
        borderColor: '#0177ff'
      },
      emphasis: {
        areaColor: '#071537'//鼠标指上市时的颜色
      }
    }
  },
  series: [
    {
      name: ' ',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData([
        {name: "海门", value: 9},
        {name: "鄂尔多斯", value: 12},
        {name: "招远", value: 12},
        {name: "舟山", value: 12},
        {name: "齐齐哈尔", value: 14},
        {name: "盐城", value: 15},
        {name: "赤峰", value: 16},
        {name: "青岛", value: 18},
        {name: "乳山", value: 18},
        {name: "金昌", value: 19},
        {name: "泉州", value: 21},
        {name: "莱西", value: 21},
        {name: "日照", value: 21},
        {name: "胶南", value: 22},
        {name: "南通", value: 23},
        {name: "拉萨", value: 24},
        {name: "云浮", value: 24},
        {name: "梅州", value: 25},
        {name: "文登", value: 25},
        {name: "上海", value: 25},
        {name: "攀枝花", value: 25},
        {name: "威海", value: 25},
        {name: "承德", value: 25},
        {name: "厦门", value: 26},
        {name: "汕尾", value: 26},
        {name: "潮州", value: 26},
        {name: "丹东", value: 27},
        {name: "太仓", value: 27},
        {name: "曲靖", value: 27},
        {name: "烟台", value: 28},
        {name: "福州", value: 29},
        {name: "瓦房店", value: 30},
        {name: "即墨", value: 30},
        {name: "抚顺", value: 31},
        {name: "玉溪", value: 31},
        {name: "张家口", value: 31},
        {name: "阳泉", value: 31},
        {name: "莱州", value: 32},
        {name: "湖州", value: 32},
        {name: "汕头", value: 32},
        {name: "昆山", value: 33},
        {name: "宁波", value: 33},
        {name: "湛江", value: 33},
        {name: "揭阳", value: 34},
        {name: "荣成", value: 34},
        {name: "连云港", value: 35},
        {name: "葫芦岛", value: 35},
        {name: "常熟", value: 36},
        {name: "东莞", value: 36},
        {name: "河源", value: 36},
        {name: "淮安", value: 36},
        {name: "泰州", value: 36},
        {name: "南宁", value: 37},
        {name: "营口", value: 37},
        {name: "惠州", value: 37},
        {name: "江阴", value: 37},
        {name: "蓬莱", value: 37},
        {name: "韶关", value: 38},
        {name: "嘉峪关", value: 38},
        {name: "广州", value: 38},
        {name: "延安", value: 38},
        {name: "太原", value: 39},
        {name: "清远", value: 39},
        {name: "中山", value: 39},
        {name: "昆明", value: 39},
        {name: "寿光", value: 40},
        {name: "盘锦", value: 40},
        {name: "长治", value: 41},
        {name: "深圳", value: 41},
        {name: "珠海", value: 42},
        {name: "宿迁", value: 43},
        {name: "咸阳", value: 43},
        {name: "铜川", value: 44},
        {name: "平度", value: 44},
        {name: "佛山", value: 44},
        {name: "海口", value: 44},
        {name: "江门", value: 45},
        {name: "章丘", value: 45},
        {name: "肇庆", value: 46},
        {name: "大连", value: 47},
        {name: "临汾", value: 47},
        {name: "吴江", value: 47},
        {name: "石嘴山", value: 49},
        {name: "沈阳", value: 50},
        {name: "苏州", value: 50},
        {name: "茂名", value: 50},
        {name: "嘉兴", value: 51},
        {name: "长春", value: 51},
        {name: "胶州", value: 52},
        {name: "银川", value: 52},
        {name: "张家港", value: 52},
        {name: "三门峡", value: 53},
        {name: "锦州", value: 54},
        {name: "南昌", value: 54},
        {name: "柳州", value: 54},
        {name: "三亚", value: 54},
        {name: "自贡", value: 56},
        {name: "吉林", value: 56},
        {name: "阳江", value: 57},
        {name: "泸州", value: 57},
        {name: "西宁", value: 57},
        {name: "宜宾", value: 58},
        {name: "呼和浩特", value: 58},
        {name: "成都", value: 58},
        {name: "大同", value: 58},
        {name: "镇江", value: 59},
        {name: "桂林", value: 59},
        {name: "张家界", value: 59},
        {name: "宜兴", value: 59},
        {name: "北海", value: 60},
        {name: "西安", value: 61},
        {name: "金坛", value: 62},
        {name: "东营", value: 62},
        {name: "牡丹江", value: 63},
        {name: "遵义", value: 63},
        {name: "绍兴", value: 63},
        {name: "扬州", value: 64},
        {name: "常州", value: 64},
        {name: "潍坊", value: 65},
        {name: "重庆", value: 66},
        {name: "台州", value: 67},
        {name: "南京", value: 67},
        {name: "滨州", value: 70},
        {name: "贵阳", value: 71},
        {name: "无锡", value: 71},
        {name: "本溪", value: 71},
        {name: "克拉玛依", value: 72},
        {name: "渭南", value: 72},
        {name: "马鞍山", value: 72},
        {name: "宝鸡", value: 72},
        {name: "焦作", value: 75},
        {name: "句容", value: 75},
        {name: "北京", value: 79},
        {name: "徐州", value: 79},
        {name: "衡水", value: 80},
        {name: "包头", value: 80},
        {name: "绵阳", value: 80},
        {name: "乌鲁木齐", value: 84},
        {name: "枣庄", value: 84},
        {name: "杭州", value: 84},
        {name: "淄博", value: 85},
        {name: "鞍山", value: 86},
        {name: "溧阳", value: 86},
        {name: "库尔勒", value: 86},
        {name: "安阳", value: 90},
        {name: "开封", value: 90},
        {name: "济南", value: 92},
        {name: "德阳", value: 93},
        {name: "温州", value: 95},
        {name: "九江", value: 96},
        {name: "邯郸", value: 98},
        {name: "临安", value: 99},
        {name: "兰州", value: 99},
        {name: "沧州", value: 100},
        {name: "临沂", value: 103},
        {name: "南充", value: 104},
        {name: "天津", value: 105},
        {name: "富阳", value: 106},
        {name: "泰安", value: 112},
        {name: "诸暨", value: 112},
        {name: "郑州", value: 113},
        {name: "哈尔滨", value: 114},
        {name: "聊城", value: 116},
        {name: "芜湖", value: 117},
        {name: "唐山", value: 119},
        {name: "平顶山", value: 119},
        {name: "邢台", value: 119},
        {name: "德州", value: 120},
        {name: "济宁", value: 120},
        {name: "荆州", value: 127},
        {name: "宜昌", value: 130},
        {name: "义乌", value: 132},
        {name: "丽水", value: 133},
        {name: "洛阳", value: 134},
        {name: "秦皇岛", value: 136},
        {name: "株洲", value: 143},
        {name: "石家庄", value: 147},
        {name: "莱芜", value: 148},
        {name: "常德", value: 152},
        {name: "保定", value: 153},
        {name: "湘潭", value: 154},
        {name: "金华", value: 157},
        {name: "岳阳", value: 169},
        {name: "长沙", value: 175},
        {name: "衢州", value: 177},
        {name: "廊坊", value: 193},
        {name: "菏泽", value: 194},
        {name: "合肥", value: 229},
        {name: "武汉", value: 273},
        {name: "大庆", value: 279}
      ]),
      symbolSize: 12,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        emphasis: {
          borderColor: '#fff',
          borderWidth: 1
        }
      }
    }
  ]
}
//地图数据 end

import echarts from "echarts"
import Swiper from '../assets/js/swiper.min.js'


export default {
  mounted() {
    //本月发生事件
    let myChart3 = echarts.init(document.getElementById('main3'));
    myChart3.setOption(option3);
    let myChart31 = echarts.init(document.getElementById('main31'));
    myChart31.setOption(option31);
    let mySwiper1 = new Swiper('.visual_swiper1', {
      autoplay: true,//可选选项，自动滑动
      speed:800,//可选选项，滑动速度
      autoplay: {
        delay: 5000,//1秒切换一次
      },
    })
    //收费站收费排行
    let myChart4 = echarts.init(document.getElementById('main4'));

    myChart4.setOption(option4);
    setInterval(function () {
      let dynamicData = [random(), random(), random(), random(),random(), random(), random(), random(),random(),random()];
      myChart4.setOption({
        series: [{
          data: dynamicData.slice()
        }, {
          data: dynamicData.slice()
        }]
      })
    }, 5000)
    let myChart41 = echarts.init(document.getElementById('main41'));
    myChart41.setOption(option41);
    setInterval(function () {
      let dynamicData = [random(), random(), random(), random(),random(), random(), random(), random(),random(),random()];
      myChart41.setOption({
        series: [{
          data: dynamicData.slice()
        }, {
          data: dynamicData.slice()
        }]
      })
    }, 5000)
    let mySwiper2 = new Swiper('.visual_swiper2', {
      autoplay: true,//可选选项，自动滑动
      direction : 'vertical',//可选选项，滑动方向
      speed:2000,//可选选项，滑动速度
    })
    //
    //收费站收费量
    let myChart9 = echarts.init(document.getElementById('main9'));
    myChart9.setOption(option9);
  }
}
</script>
