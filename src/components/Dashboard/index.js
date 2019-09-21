import React,{useState,useEffect} from 'react';
import 'antd/dist/antd.css';

import AppLayout from "../AppLayout";
import {Col, Layout, Row, Input, Button, Icon} from "antd";
import Nft from "../Nft";
const {Header,Content} = Layout


const { Search } = Input;

const Dashboard = () => {
    const [nftArray, setNftArray] = useState([{
        id:123,date: '1/12/19', sampleId:456
    },{
        id:124,date: '1/12/19', sampleId:457
    }]);



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
                        {nftArray.map((nft,index)=>{
                            return(<>
                                <Nft id={nft.id} date={nft.date} sampleId={nft.sampleId} />
                                    <Nft id={nft.id} date={nft.date} sampleId={nft.sampleId} />
                                    <Nft id={nft.id} date={nft.date} sampleId={nft.sampleId} />
                                    <Nft id={nft.id} date={nft.date} sampleId={nft.sampleId} />
                                </>

                            )
                        })}


                    </Row>
                </Content>
            </Layout>

        </AppLayout>

    );
};

export default Dashboard;
