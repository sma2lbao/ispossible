import { Layout } from "./";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * 页面的基础布局框架，常与组件嵌套使用，构建页面整体布局。
 */
const meta = {
  title: "Layout 布局",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 典型的页面布局。
 */
export const 基本用法 = () => {
  const { Header, Footer, Sider, Content } = Layout;

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#0958d9",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff",
    padding: "24px 50px",
  };

  const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "calc(50% - 8px)",
    maxWidth: "calc(50% - 8px)",
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {/* <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout> */}

      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider width="25%" style={siderStyle}>
            Sider
          </Sider>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>

      {/* <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Content style={contentStyle}>Content</Content>
          <Sider width="25%" style={siderStyle}>
            Sider
          </Sider>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout> */}

      {/* <Layout style={layoutStyle}>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout> */}
    </div>
  );
};
