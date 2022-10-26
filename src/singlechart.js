import React from "react";
import "./dashStyle.css";

import ReactECharts from "echarts-for-react";
const option = {
  title: {
    text: "Total IO/Sec",
    left: "center",
    padding: 10,
    textStyle: { color: "WHITE", fontSize: "10px" },
  },
  color: ["#22baa0"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },

  grid: {
    containLabel: true,
    left: "3%",
    right: "4%",
    top: "20%",
    bottom: "0%",

    backgroundColor: "#000000",
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["06:00", "06:10", "06:20", "06:30", "06:40", "06:50", "07:00"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "C:/",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [0, 32, 213, 64, 0, 0, 0, 0],
    },
  ],
};

export default function Sinchart() {
  return (
    <ReactECharts
      option={option}
      style={{ height: 144, "background-color": "transparent" }}
    />
  );
}
