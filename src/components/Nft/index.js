import React from 'react';
import {Card, Col,Icon} from "antd";
import nft from '../../assets/images/nft.svg'
import './style.scss'

const {Meta} = Card;
const Nft = ({id, date}) => {
    const handleClick = e => {
        // console.log(e)
    }
    return (
        <Col span={6} >
            <Card className={'nft'}
                  actions={[

                      <Icon title={'view Info'} type="info-circle" key="info-circle" onClick={handleClick} />
                  ]}
            >
                <Meta title={`Id: ${id}`} description={`Generated On: ${date}`}/>

                    <section className={'card-content'}>

                    <img src={nft} alt=""/>
                    <p>
                        sample Id: #321
                    </p>
                    <p>
                        Sample Status: Pending
                    </p>

                    </section>
            </Card>
        </Col>
    );
};

export default Nft;
