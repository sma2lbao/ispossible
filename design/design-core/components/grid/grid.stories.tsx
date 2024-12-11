import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Row, Col } from "./";
import "@design/icon/user";

/**
 * 栅格可以有效的保证页面的一致性、逻辑性、加强团队协作和统一。
 */
const meta = {
  title: "Grid 栅格",
  component: Row,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Row>;

export default meta;

/**
 * 展示了最基本的 24 等分应用。
 */
export const 基本用法 = () => (
  <div style={{ boxSizing: "border-box", padding: "20px", overflow: "auto" }}>
    <Row>
      <Col span={24}>
        <div style={{ background: "rgba(203,231,254, 1)" }}>col-24</div>
      </Col>
    </Row>
    <br />
    <Row>
      <Col span={12}>
        <div style={{ background: "rgba(203,231,254, 1)" }}>col-12</div>
      </Col>
      <Col span={12}>
        <div style={{ background: "rgba(203,231,254, 1)" }}>col-12</div>
      </Col>
    </Row>
    <br />
    <Row>
      <Col span={8}>
        <div style={{ background: "rgba(203,231,254, 1)" }}>col-8</div>
      </Col>
      <Col span={8}>
        <div style={{ background: "rgba(203,231,254, 1)" }}>col-8</div>
      </Col>
      <Col span={8}>
        <div style={{ background: "rgba(203,231,254, 1)" }}>col-8</div>
      </Col>
    </Row>
    <br />
    <Row>
      <Col span={6}>
        <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
      </Col>
    </Row>
  </div>
);

/**
 * 通过在 Row 上指定 gutter 可以增加栅格的区域间隔。
 */
export const Gutter间隔 = () => {
  return (
    <div style={{ boxSizing: "border-box", padding: "20px", overflow: "auto" }}>
      <Row gutter={16}>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
      </Row>
      <p>vertical</p>
      <hr />
      <Row gutter={[16, 24]}>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
      </Row>
    </div>
  );
};

/**
 * 指定 offset 可以对栅格进行平移操作。
 */
export const 栅格偏移 = () => {
  return (
    <div
      className="grid"
      style={{ boxSizing: "border-box", padding: "20px", overflow: "auto" }}
    >
      <Row>
        <Col span={8}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-8</div>
        </Col>
        <Col span={8} offset={8}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-8</div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={6} offset={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
        <Col span={6} offset={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-6</div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12} offset={6}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-12</div>
        </Col>
      </Row>
    </div>
  );
};

/**
 * 指定 push 或者 pull 可以对栅格进行排序。
 */
export const 栅格排序 = () => {
  return (
    <div style={{ boxSizing: "border-box", padding: "20px", overflow: "auto" }}>
      <Row>
        <Col span={18} push={6}>
          col-18 col-push-6
        </Col>
        <Col span={6} pull={18}>
          col-6 col-pull-18
        </Col>
      </Row>
    </div>
  );
};

/**
 * 通过设置 Row 组件的 flex 属性，可以任意配置 flex 布局。
 */
export const Flex布局 = () => {
  return (
    <div style={{ boxSizing: "border-box", padding: "20px", overflow: "auto" }}>
      <p>sub-element align left</p>
      <Row type="flex" justify="start">
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
      </Row>

      <p>sub-element align center</p>
      <Row type="flex" justify="center">
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
      </Row>

      <p>sub-element align right</p>
      <Row type="flex" justify="end">
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
      </Row>

      <p>sub-element monospaced arrangement</p>
      <Row type="flex" justify="space-between">
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
      </Row>

      <p>sub-element align full</p>
      <Row type="flex" justify="space-around">
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
      </Row>
    </div>
  );
};

export const Flex子元素垂直对齐 = () => {
  return (
    <div style={{ boxSizing: "border-box", padding: "20px", overflow: "auto" }}>
      <p>Align Top</p>
      <Row type="flex" justify="center" align="top">
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
      </Row>

      <p>Align Center</p>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
      </Row>

      <p>Align Bottom</p>
      <Row type="flex" justify="space-between" align="bottom">
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ background: "rgba(203,231,254, 1)" }}>col-4</div>
        </Col>
      </Row>
    </div>
  );
};
