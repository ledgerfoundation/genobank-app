import React from 'react';
import {Breadcrumb, Icon, Layout, Menu} from "antd";

const AppLayout = ({children}) => {
    const { Header, Content, Footer, Sider } = Layout;
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header className={'header'}>
                <div className={'logo'}> GenoBank</div>
            </Header>


            <Content style={{padding: '0 20px'}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className={'layout-content'}>
                    <Sider
                        collapsible
                        breakpoint="lg"
                    >
                        <Menu
                            mode="inline"
                            defaultOpenKeys={['sub1']}
                        >
                            <Menu.SubMenu
                                key="sub1"
                                title={
                                    <span>
                  <Icon type="user" />
                  User Actions
                </span>
                                }
                            >
                                <Menu.Item key="1">Action 1</Menu.Item>
                                <Menu.Item key="2">Action 2</Menu.Item>
                                <Menu.Item key="3">Action 3</Menu.Item>
                                <Menu.Item key="4">Action 4</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Sider>


                    <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>

                </Layout>
            </Content>

        </Layout>
    );
};

export default AppLayout;
