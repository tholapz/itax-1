import React from "react";
var pieData = [
  { id: "Jan", value: 44.33, color: "#394E79", month: "Jan" },
  { id: "Feb", value: 22.12, color: "#5E83BA", month: "Feb" },
  { id: "Mar", value: 53.21, color: "#C2D2E9", month: "Mar" },
  { id: "Apr", value: 34.25, color: "#9A8BA5", month: "Apr" },
  { id: "May", value: 24.65, color: "#E3C5D5", month: "May" }
];
var config = {
  type: "donut",
  series: [
    {
      value: "value",
      color: "color"
    }
  ]
};

export const Plan = () => {
  const sliders = [
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null)
  ];
  React.useLayoutEffect(() => {
    const chart = new window.dhx.Chart("chart", config);
    chart.data.parse(pieData);
    const _sliders = sliders
      .map(slider => {
        return new window.dhx.Slider(slider.current, {
          min: 0,
          max: 10,
          step: 1
        });
      })
      .forEach(slider => {
        slider.setValue(Math.random() * 10);
        slider.config.thumbLabel = false;
      });
  }, []);
  return (
    <section className="dhx_sample-container">
      <div className="dhx_sample-container__widget" id="chart" />
      <div style={{ marginTop: 80 }}>
        <button>วางแผน AUTO</button>
      </div>
      <ul
        className="dhx_widget dhx_list"
        style={{
          position: "relative",
          maxWidth: 400,
          margin: "40px auto"
        }}
      >
        <li className="dhx_list-item dhx_list-item--text">
          <span>ซื้อกองทุนลดหย่อนภาษี LTF</span>
          <div ref={sliders[0]} />
        </li>
        <li className="dhx_list-item dhx_list-item--text">
          <span>ซื้อกองทุนประหยัดภาษี RMF</span>
          <div ref={sliders[1]} />
        </li>
        <li className="dhx_list-item dhx_list-item--text">
          <span>เบี้ยประกันชีวิตทั่วไป</span>
          <div ref={sliders[2]} />
        </li>
        <li className="dhx_list-item dhx_list-item--text">
          <span>เบี้ยประกันชีวิตแบบบำนาญ</span>
          <div ref={sliders[3]} />
        </li>
      </ul>
    </section>
  );
};
