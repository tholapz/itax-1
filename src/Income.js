import React from "react";

const data = [
  {
    value: "เงินเดือน/ค่าจ้าง 40(1), (2)"
  },
  {
    value: "ดอกเบี้ย 40(4)"
  },
  {
    value: "เงินปันผล"
  },
  {
    value: "Cryptocurrency/Digital token"
  },
  { value: "รายได้อื่นๆ" }
];
export const Income = () => {
  React.useEffect(() => {
    document.title = "รายได้";
  });
  React.useLayoutEffect(() => {
    const list2 = new window.dhx.List("list-parse", {});
    list2.data.parse(data);
  }, []);
  return (
    <section>
      <h1>รายได้รวม</h1>
      <h1>฿51,204.25</h1>
      <p>
        ภาษีหัก ณ ที่จ่าย รวม <b>฿41,204.25</b>
      </p>
      <div id="list-parse" />
    </section>
  );
};
