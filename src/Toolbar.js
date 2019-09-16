import React from "react";

export const Toolbar = props => {
  const onClick = path => e => {
    e.preventDefault();
    props.setPath(path);
  };
  return (
    <section>
      <button onClick={onClick("1")}>หน้าหลัก</button>
      <button onClick={onClick("2")}>รายได้</button>
      <button onClick={onClick("3")}>ลดหย่อน</button>
      <button onClick={onClick("4")}>วางแผน</button>
      <button onClick={onClick("5")}>สรุป</button>
    </section>
  );
};
