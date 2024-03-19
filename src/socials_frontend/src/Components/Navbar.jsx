import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import './Style/navbar.css'
import Home from './Home';
import Create from './Create_event';
import Profile from './Profile';

const { Header, Content, Sider } = Layout;

const items2 = [
  {
    key: 'sub1',
    icon: <NotificationOutlined />,
    label: 'Announcements',
    children: new Array(4).fill(null).map((_, j) => ({
      key: `announcement${j + 1}`,
      label: `Announcement ${j + 1}`,
    })),
  },
  {
    key: 'sub2',
    icon: <LaptopOutlined />,
    label: 'Events Genre',
    children: [
      { key: 'games', label: 'Games' },
      { key: 'hackathons', label: 'Hackathons' },
      { key: 'academics', label: 'Academics' },
      { key: 'others', label: 'Others' },
    ],
  },
];

const breadcrumbMap = {
  '1': ['Home'],
  '2': ['Home', 'Create Event'],
  '3': ['Home', 'Profile'],
};

const Navbar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenuItem, setSelectedMenuItem] = useState('1');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem.key);
  };

  const breadcrumbItems = breadcrumbMap[selectedMenuItem] || [];

  let renderedContent;
  switch (selectedMenuItem) {
    case '1':
      renderedContent = <Home />;
      break;
    case '2':
      renderedContent = <Create />;
      break;
    case '3':
      renderedContent = <Profile />;
      break;
    default:
      renderedContent = <div>No content available</div>;
  }

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedMenuItem]}
          onClick={handleMenuItemClick}
          items={[
            { key: '1', label: 'Home' },
            { key: '2', label: 'Create Event' },
            { key: '3', label: 'Profile' },
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{ background: colorBgContainer }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Content style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
            {renderedContent}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    
  );
};

export default Navbar;
