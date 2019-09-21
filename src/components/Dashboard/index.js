import React from 'react';
import 'antd/dist/antd.css';

import AppLayout from "../AppLayout";
import {Col, Layout, Row, Input, Button, Icon} from "antd";
import Nft from "../Nft";
const {Header,Content} = Layout


const { Search } = Input;

const Dashboard = () => {


    return (
        <AppLayout>

            <Row>
                    <Header>
                <Col md={12}>
                        <h1>Your NFTs</h1>


                </Col>
                <Col md={12}>
                    <Row  >

                        <Col md={{span:12, offset:3}}>
                            <Button> <Icon type="scan" /> Scan A new Sample</Button>
                        </Col>
                        <Col md={{span:9}}>

                            <Search

                                placeholder="input search text"
                                onSearch={value => console.log(value)}

                            />


                        </Col>
                    </Row>

                </Col>
                    </Header>


            </Row>
            <Layout>
                <Content className={'nft-list'}>
                    <Row>
                        <Nft id={123} date={'12/12/12'} />

                    </Row>
                </Content>
            </Layout>

        </AppLayout>

    );
};

export default Dashboard;
