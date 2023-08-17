import React from 'react';
import { Alert, Space, Spin } from 'antd';

const Loading = () => (
        <Space
            direction="vertical"
            style={{
                width: '100% !important',
                height: '100% !important',
                position: 'fixed',
                top:'50%',
                left:'50%',
                backgroundColor:'rgba(0,0,0,.3)'
            }}
        >
            <Space>
                <Spin tip="" size="large">
                    <div className="content" />
                </Spin>
            </Space>
        </Space>
);
export default Loading;

