import React from "react";

export const Main = () => {
  React.useEffect(() => {
    document.title = "หน้าหลัก";
  });
  return (
    <section>
      <h4>เงินคืนภาษี</h4>
      <h1>฿51,204.25</h1>
      <p>
        คุณยังลดภาษีได้อีก <b>฿41,204.25</b>
      </p>
      <div>
        <p>ใช้สิทธิลดหย่อนไปแล้ว</p>
        <h1>27%</h1>
      </div>
    </section>
  );
};
