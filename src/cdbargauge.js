import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
let dataAxis = [
  "C:/",
  "D:/",
  "C:/Program Files",
  "D:/sql",
  "C:/Program Files/sql",
];
// prettier-ignore
let data = [220, 182, 191, 234, 290];
const option = {
  title: {
    text: "Locations Free Space %",
    left: "center",
    padding: 20,
    textStyle: { color: "WHITE", fontSize: "13px" },
  },
  xAxis: {
    axisLabel: {
      outside: true,
      color: "#fff",
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    z: 10,
  },
  yAxis: {
    data: dataAxis,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "white",
    },
  },
  grid: {
    containLabel: true,
    left: "3%",
    right: "24%",
    bottom: "0%",

    backgroundColor: "#000000",
  },
  grid: {
    containLabel: true,
    left: "3%",
    right: "14%",
    top: "35%",
    bottom: "-10%",

    backgroundColor: "#000000",
  },
  series: [
    {
      type: "bar",
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#22BAA0" },
          { offset: 0.5, color: "#F6D433" },
          { offset: 1, color: "#F25656" },
        ]),
      },
      data: data,
    },
  ],
};
export default function GaugeChart() {
  return (
    <ReactECharts
      option={option}
      style={{ height: 164, "background-color": "transparent" }}
    />
  );
}
