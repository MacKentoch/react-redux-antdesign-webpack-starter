// @flow
/* eslint-disable react/no-unescaped-entities */

// #region imports
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import navigationModel from '../../config/navigation.json';
import MainRoutes from '../../routes/MainRoutes';
import { type RouterProps } from '../../types/react-router';
import StyledLayout from './styled/StyledLayout';
import SideMenuLogo from './styled/SideMenuLogo';
// #endregion

// #region flow types
export type Props = { ...any } & RouterProps;

export type State = {
  navModel: navigationModel,
  selectedSidemenu: ['/'],
  ...any,
};
// #endregion

// #region constants
const { Header, Content, Footer, Sider } = Layout;
const MenuItem = Menu.Item; // workaround to fix production bundle error: "Menu not found"
// #endregion

class MainLayout extends Component<Props, State> {
  state = {
    navModel: navigationModel,
    selectedSidemenu: ['/'],
  };

  // #region lifecycle
  render() {
    const { navModel, selectedSidemenu } = this.state;

    return (
      <StyledLayout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={this.handlesOnCollpase}
        >
          <SideMenuLogo />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={selectedSidemenu}
            onClick={this.handlesOnMenuClick}
          >
            {navModel.sideLinks.map(({ label, icon, link }) => (
              <MenuItem key={link}>
                <Icon type={icon} />
                <span className="nav-text">{label}</span>
              </MenuItem>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#4A4A4A', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <MainRoutes />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            "React+ Redux+ Ant Design + Webpack Starter" made with{' '}
            <span style={{ color: '#CF000F' }}>❤️</span> by Erwan Datin
          </Footer>
        </Layout>
      </StyledLayout>
    );
  }
  // #endregion

  // #region side menu collapse event
  handlesOnCollpase = (collapsed: boolean, type: string): void => {
    /* eslint-disable no-console */
    console.log(collapsed, type);
    /* eslint-enable no-console */
  };
  // #endregion

  // #region side menu item click event
  handlesOnMenuClick = (event: SyntheticEvent<>): void => {
    if (event) {
      const { history } = this.props;
      // $FlowIgnore
      const { key } = event;

      history.push(key);
    }
  };
  // #endregion
}

export default MainLayout;
