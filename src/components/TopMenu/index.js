import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import {Link} from 'dva/router';
//import ReactDOM from 'react-dom';
//import { connect } from 'dva';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class TopMenu extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Link to={'/'}>
          <Icon type="home" />首页
          </Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to={'/wall'}>
          <Icon type="trophy" />成就墙
          </Link>
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="shopping" />奖励兑换</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <Icon type="user" />个人中心
        </Menu.Item>
      </Menu>
    );
  }
}

export default  TopMenu;
