import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";
import { Affix } from "./affix";
import { Button } from "../button";

/**
 * 将页面元素钉在可视范围。
 */
const meta = {
  title: "Affix 固钉",
  component: Affix,
  parameters: {
    layout: "fullscreen",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Affix>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 最简单的用法。
 */
// export const 代码演示 = () => {
//   return (
//     <div>
//       <Affix>
//         <Button>按钮</Button>
//       </Affix>
//     </div>
//   );
// };

export const 相对于Target定位 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [dom, setDom] = useState<HTMLDivElement>();
  useEffect(() => {
    if (ref.current) {
      setDom(ref.current);
    }
  }, [ref.current]);
  return (
    <div style={{ padding: "30px" }}>
      <div
        id="test"
        ref={ref}
        style={{
          width: "100%",
          height: "300px",
          overflow: "auto",
          border: "1px solid #eee",
        }}
      >
        <div style={{ width: "100%", height: "1000px" }}>
          <Affix target={dom ?? undefined}>
            <Button>按钮</Button>
          </Affix>
        </div>
      </div>
    </div>
  );
};
