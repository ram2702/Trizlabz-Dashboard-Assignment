import React from "react";
import "./dashStyle.css";

import ReactECharts from "echarts-for-react";
const option = {
  title: {
    text: "TempDB Usage",
    left: "center",
    padding: 10,
    textStyle: { color: "WHITE", fontSize: "13px" },
  },
  color: ["#22BAA0", "#F25656", "#F6D433", "#F8961C", "#A5A8AB"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["C:/", "D:/", "C:/Program Files", "D:/sql", "C:/Program Files/sql"],
    orient: "vertical",
    left: "right",
    top: "center",
    textStyle: { color: "white" },
  },

  grid: {
    containLabel: true,
    left: "3%",
    right: "24%",
    bottom: "0%",

    backgroundColor: "#000000",
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["06:00", "06:10", "06:20", "06:30", "06:40", "06:50", "07:00"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "C:/",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "D:/",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [0, 234, 0, 0, 0, 0, 0],
    },
    {
      name: "C:/Program Files",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "D:/sql",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [0, 145, 554, 30, 0, 0, 0],
    },
    {
      name: "C:/Program Files/sql",
      type: "line",
      stack: "Total",
      label: {
        show: true,
        position: "top",
      },
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
    },
  ],
};

export default function Chart() {
  return (
    <ReactECharts
      option={option}
      style={{ height: 180, "background-color": "transparent" }}
    />
  );
}
