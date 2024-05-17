import { Outlet, useNavigate } from "react-router-dom";
import React from "react";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Label } from "semantic-ui-react";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    Label: "Home",
  },
  {
    key: "2",
    Label: "All Taks",
  },
];

const LayoutPage = () => {
  const routeNavigation = useNavigate();
  const onLinkPage = (routes) => {
    routeNavigation(routes);
  };
  const onClickMenu = (e) => {
    if (e.key == 1) {
      onLinkPage("/home");
    } else if (e.key == 2) {
      onLinkPage("/alltasks");
    }
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          onClick={onClickMenu}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items.map((item) => ({
            ...item,
            label: (
              <Label basic color="blue" size="tiny">
                {item.Label}
              </Label>
            ),
          }))}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            height: "auto",
            padding: 24,
            minHeight: 380,
            marginTop: 10,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Dev Computing ©2024 Created by devcomputing
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
