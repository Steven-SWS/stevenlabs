import './responseAnomaly.scss';
import icon_to_unfold from '../../../assets/images/icon_to_unfold.png'

import { Form, Button, Select, DatePicker } from 'antd';
const { Option } = Select;

function responseAnomaly() {
    return ( 
        <>
        <div className="responseAnomaly">
            <div className="load_data_search_wrap">
                <Form name="control-hooks" className='label_cb_wrap'>
                    <Form.Item label="EQ chamber" >
                        <Select
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                </Form>
                <Form name="control-hooks" className='label_cb_wrap'>
                    <Form.Item label="Lot ID" >
                        <Select
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                </Form>
                <Button type="primary">Load data</Button>
            </div>
            <div className="process_name_tab">
                <ul>
                    <li>
                        <span className='title'>SPC time</span>
                        <span className='cnt'>22/03/04</span>
                        <span className='cnt'>09:00:01</span>
                    </li>
                    <li>
                        <span className='title'>Meas. process name</span>
                        <span className='cnt'>BLC ETCH CLN CD</span>
                    </li>
                    <li>
                        <span className='title'>Module</span>
                        <span className='cnt'>DEL_BLC_X_AVG</span>
                    </li>
                    <li>
                        <span className='title'>Parameter</span>
                        <span className='cnt'>TD1NJ84</span>
                    </li>
                    <li>
                        <span className='title'>Lot wafer ID</span>
                        <span className='cnt'>TD1NJ84_11</span>
                    </li>
                    <li>
                        <span className='title'>Violated SPC rules</span>
                        <span className='cnt'>0.8822</span>
                    </li>
                </ul>
                <Button className='img_only'><img src={icon_to_unfold} alt="" /></Button>
            </div>
            <div className="container flex-row cnt_box-p3050">
                <div className="content_wrap">
                    <div className="section-title flex-row flex-row-center b_mb-30"><div className="title-rectangle"></div><span>Response anomaly</span></div>
                    <div className="option_box"></div>
                </div>
            </div>
        </div>
        </>
     );
}

export default responseAnomaly;