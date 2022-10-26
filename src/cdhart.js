import React from "react";
import "./dashStyle.css";

import ReactECharts from "echarts-for-react";
const option = {
  title: {
    text: "Locations Free Space",
    left: "center",
    padding: 10,
    textStyle: { color: "WHITE", fontSize: "15px" },
  },
  color: ["#F8961C", "#F25656", "#F6D433", "#22BAA0", "#A5A8AB"],

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
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "D:/",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "C:/Program Files",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "D:/sql",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
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
      style={{ height: 245, "background-color": "black" }}
    />
  );
}
