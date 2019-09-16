import React from "react";
var pieData = [
  { id: "Jan", value: 44.33, color: "#394E79", month: "Jan" },
  { id: "Feb", value: 22.12, color: "#5E83BA", month: "Feb" },
  { id: "Mar", value: 53.21, color: "#C2D2E9", month: "Mar" },
  { id: "Apr", value: 34.25, color: "#9A8BA5", month: "Apr" },
  { id: "May", value: 24.65, color: "#E3C5D5", month: "May" }
];
var config = {
  type: "pie",
  series: [
    {
      value: "value",
      color: "color",
      stroke: "#FFFFFF",
      strokeWidth: 2
    }
  ]
};

export const Plan = () => {
  React.useLayoutEffect(() => {
    var chart = new window.dhx.Chart("chart", config);
    chart.data.parse(pieData);
  }, []);
  return (
    <section className="dhx_sample-container">
      <div className="dhx_sample-container__widget" id="chart"></div>
    </section>
  );
};
