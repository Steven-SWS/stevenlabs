import React, { useState } from 'react'
import './RecipeVerificationResult.scss'
import icon_download from '../../assets/images/icon_download.png'

import { Form, Button, Select } from 'antd';

import { Table } from 'antd';

import ECharts from 'echarts-for-react';
import RecipeVerificationResultImage from './RecipeVerificationResultImage'

const { Option } = Select;

const RecipeVerificationResult = () => {

    // grid

    const columns = [
        {
            title: 'Parameter',
            dataIndex: 'parameter',
            width: 70,
            align: 'left'
        },
        {
            title: 'RMSE',
            dataIndex: 'rmse',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50
        },
        {
            title: 'R-Squared',
            dataIndex: 'rsquared',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
        {
            title: 'Slope',
            dataIndex: 'slope',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
        {
            title: 'Skew',
            dataIndex: 'skew',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
        {
            title: 'Average',
            dataIndex: 'average',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
        {
            title: 'Max',
            dataIndex: 'max',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
        {
            title: 'Min',
            dataIndex: 'min',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
        {
            title: 'Sigma',
            dataIndex: 'sigma',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
        {
            title: 'Average (Ref)',
            dataIndex: 'average_ref',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
        {
            title: 'Max (Ref)',
            dataIndex: 'max_ref',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
        {
            title: 'Min (Ref)',
            dataIndex: 'min_ref',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
        {
            title: 'Sigma (Ref)',
            dataIndex: 'sigma_ref',
            render: text => <span>{text.toFixed(2)}</span>,
            width: 50


        },
    ];
    const data = [
        {
            parameter: 'parameter1',
            rmse: 0.0,
            rsquared: 0.0,
            slope: 0.0,
            skew: 0.0,
            average: 0.0,
            max: 0.0,
            min: 0.0,
            sigma: 0.0,
            average_ref: 0.0,
            max_ref: 0.0,
            min_ref: 0.0,
            sigma_ref: 0.0,


        },
        {
            parameter: 'parameter2',
            rmse: 0.0,
            rsquared: 0.0,
            slope: 0.0,
            skew: 0.0,
            average: 0.0,
            max: 0.0,
            min: 0.0,
            sigma: 0.0,
            average_ref: 0.0,
            max_ref: 0.0,
            min_ref: 0.0,
            sigma_ref: 0.0,


        },
        {
            parameter: 'parameter3',
            rmse: 0.0,
            rsquared: 0.0,
            slope: 0.0,
            skew: 0.0,
            average: 0.0,
            max: 0.0,
            min: 0.0,
            sigma: 0.0,
            average_ref: 0.0,
            max_ref: 0.0,
            min_ref: 0.0,
            sigma_ref: 0.0,


        },

    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };


    // Chart 
    const [options, setOptions] = useState({
        legend: {
            left: 'left'
        },
        xAxis: {
            name: '32fAIMS',
            nameGap: 40,
            nameLocation: 'middle',
            nameTextStyle: {
                fontSize: 16
            },

        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [
                    [0, 0],
                    [3, 0.3],
                    [4.0, 0.4],
                    [5.0, 0.5],
                    [7.0, 0.7],
                    [9, 0.9],
                ],
                type: 'line',
                name: '123456789012',
                color: '#65DFDC'
            }
        ]
    });

    const [options2, setOptions2] = useState({
        legend: {
            left: 'left'
        },
        xAxis: {
            name: 'Name For X-axis',
            nameGap: 40,
            nameLocation: 'middle',
            nameTextStyle: {
                fontSize: 16
            },

        },
        yAxis: {
            name: 'Name For Y-axis',
            nameGap: '30',
            nameLocation: 'middle',
            nameTextStyle: {
                fontSize: 16
            },
        },
        grid: {
            left: '50px',
            right: '50px'
        },
        series: [
            {
                data: [
                    [0, 0],
                    [13, 0.3],
                    [3.0, 0.4],
                    [6.0, 0.5],

                ],
                type: 'scatter',
                name: '123456789012',
                color: '#65A3DE'
            },
            {
                data: [
                    [0, 0],
                    [3, 0.3],
                    [4.0, 0.4],
                    [5.0, 0.5],
                    [7.0, 0.7],
                    [9, 0.9],
                ],
                type: 'scatter',
                name: '1234567890123',
                color: '#65DFDC'
            }
        ]
    });

    // Image Data
    const imageData = [
        {
            url: require('../../assets/images/image_7.png').default,
            name: 'image01',
            value: Math.random() * 10,
            score: Math.random()
        },
        {
            url: 'https://img.etnews.com/photonews/1704/945009_20170418131611_902_0001.jpg',
            name: 'image02',
            value: Math.random() * 10,
            score: Math.random()
        },
        {
            url: require('../../assets/images/image_7.png').default,
            name: 'image03',
            value: Math.random() * 10,
            score: Math.random()
        },
        {
            url: require('../../assets/images/image_7.png').default,
            name: 'image04',
            value: Math.random() * 10,
            score: Math.random()
        },
        {
            url: 'https://img.etnews.com/photonews/1704/945009_20170418131611_902_0001.jpg',
            name: 'image05',
            value: Math.random() * 10,
            score: Math.random()
        },
        {
            url: require('../../assets/images/image_7.png').default,
            name: 'image06',
            value: Math.random() * 10,
            score: Math.random()
        },


    ]

    return (
        <div className="content cnt_box-p3050">
            <div className="section-title flex-row flex-row-center b_mb-30"><div className="title-rectangle"></div><span>Verification Result</span></div>
            <div className="action-box">
                <Form name="control-hooks" className='label_cb_wrap'>
                    <Form.Item label="Evaluation type" >
                        <Select
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                </Form>
                <div className="action-button">
                    <Button><img src={icon_download} alt="" />summary</Button>
                    <Button><img src={icon_download} alt="" />Raw</Button>
                </div>
            </div>
            <div className="table_box">
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} />
            </div>
            <div className="flex-row w_100p_box">
                <div className="b_left_box">
                    <div className="sub_title">
                        <span>Correlation Scatter Plot</span>
                    </div>
                    <div className="graph_box b_fix_340">
                        <ECharts
                            option={options}
                            opts={{ renderer: 'svg' }}
                        />
                    </div>
                </div>
                <div className="b_right_box w_100p_box">
                    <div className="sub_title">
                        <span>Point CD trend</span>
                    </div>
                    <div className="graph_box">
                        <ECharts
                            option={options2}
                            opts={{ renderer: 'svg' }}
                        />
                    </div>
                </div>
            </div>
            <RecipeVerificationResultImage data={imageData}></RecipeVerificationResultImage>
        </div>
    )
}

export default RecipeVerificationResult
