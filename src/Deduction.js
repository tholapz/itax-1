import React from "react";
const data = [
  { value: "ค่าลดหย่อนส่วนตัว" },
  { value: "ค่าลดหย่อนคู่สมรส" },
  { value: "ค่าลดหย่อนบิดา มารดา บุตร, ผู้พิการ" },
  { value: "ค่าฝากครรภ์และทำคลอด" },
  { value: "กองทุนรวมและประกันชีวิต" },
  { value: "ประกันสุขภาพ" },
  { value: "ประกันสังคม" },
  { value: "กองทุนสำหรับเลี้ยงชีพ" }
];
export const Deduction = () => {
  React.useEffect(() => {
    document.title = "ลดหย่อน";
  });
  React.useLayoutEffect(() => {
    const list2 = new window.dhx.List("list-parse", {});
    list2.data.parse(data);
  }, []);
  return (
    <section>
      <h1>ลดหย่อน</h1>
      <div>
        <p>ใช้สิทธิลดหย่อนไปแล้ว</p>
        <h1>27%</h1>
        <div id="list-parse" />
      </div>
    </section>
  );
};
