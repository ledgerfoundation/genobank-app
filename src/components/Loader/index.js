import React from 'react';
import {Spin} from "antd";
import './style.scss'
const Loader = () => {
    return (
        <div className={'loader'}>
            <Spin size={'large'} />
        </div>
    );
};

export default Loader;
