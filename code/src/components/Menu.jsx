import React from 'react';
import { Menu } from 'antd';
import { push } from 'react-router-redux';

export default ({ dispatch }) => {

  return (
    <Menu theme={'dark'}
      style={{ width: 256 }}
      mode="inline"
      defaultOpenKeys={['sub1']}
      defaultSelectedKeys={['01']}
      onClick={({ key }) => {
        dispatch(push(`/${key}`));
      }}>
      <Menu.SubMenu title={'CSS 相关'} key='sub1'>
        <Menu.Item key="01-01-01">初识React</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}