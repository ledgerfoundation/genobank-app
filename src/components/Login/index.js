import React, {useEffect, useState} from 'react';
import { Card, Col, Layout, Row, Spin} from "antd";
import google from '../../assets/images/btn_google_signin_light_normal_web.png'
import './style.scss'
import {init, torus} from "../../helpers";

const Login = ({location, history}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        init().then(() => {
            setLoading(false)
        })
    }, []);
    const handleClick = e => {
        setLoading(true);
        torus.login().then(() => {
            localStorage.setItem('loggedIn', 'true');
            history.push('/')
        })

    };
    return (
        <Layout className={'login-layout'}>
            <Row>
                <Col md={{span: 12, offset: 6}}>
                    <Card className={'login-card'}>
                        <Row>
                            <Col><h1>
                                Welcome To GenBank
                            </h1></Col>
                        </Row>
                        <Row>
                            <Col>
                                {loading ? <Spin size="large"/> : <img src={google} alt="" onClick={handleClick}/>}

                            </Col>

                        </Row>

                    </Card>
                </Col>
            </Row>
        </Layout>
    );
};

export default Login;
