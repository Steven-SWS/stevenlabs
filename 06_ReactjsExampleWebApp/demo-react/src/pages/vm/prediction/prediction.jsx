import './prediction.scss';
import icon_close from '../../../assets/images/icon_close.png'
import logo_Union from '../../../assets/images/Union.png'
import icon_arrow_t from '../../../assets/images/icon_arrow_t.png'
import icon_download from '../../../assets/images/icon_download.png'
import icon_refresh from '../../../assets/images/icon_refresh.png'


import { Form, Button, Select, Input, Pagination } from 'antd';
const { Search } = Input;
const { Option } = Select;
function prediction() {
    return ( 
        <>
        <div className="prediction vm_wrap">
            <div className="model_verification_tab">
                <div className="all_wrap">
                    <span>All</span>
                </div>
                <ul className="btn_cnt_wrap">
                    <li className='btn_select'><Button type="link">Model name 1<img src={icon_close} alt="" /></Button></li>
                </ul>
            </div>
            <div className="container flex-row">
                <div className="search-filter">
                    <div className="header act_on">
                        <div className="section_title">
                            <div className="title-rectangle"></div>
                            <span>Search filter</span>
                        </div>
                        <div className="btn_box">
                            <Button type="link">History</Button>
                            <Button type="link">Preset</Button>
                            <Button type="link"><img src={icon_arrow_t} alt="" /></Button>
                        </div>
                    </div>
                    <div className="content_box b_mt-10">
                        <Form name="control-hooks" className="label_cb_wrap">
                            <Form.Item label="Fab" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="Product ID">
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="Area" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="Operation ID" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="content_box">
                        <div className="sub_title_wrap">
                            <span>Model</span>
                            <span className="line_box"></span>
                        </div>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="Model" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <div className="sub_title_wrap">
                            <span>Parameter</span>
                            <span className="line_box"></span>
                        </div>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="Resp. PRM" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="EQ-ID" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <Form name="control-hooks" className="label_cb_wrap b_mt-6">
                            <Form.Item label="Module ID" >
                                <Select
                                    allowClear
                                >
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                    <Option value="">Text/number</Option>
                                </Select>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="header">
                        <div className="section_title">
                            <div className="title-rectangle"></div>
                            <span>Prediction result</span>
                        </div>
                    </div>
                    <div className="logo_wrap">
                        <img src={logo_Union} alt="" />
                        <span>Gauss Manufacturing AI</span>
                    </div>
                </div>
                <div className="content_wrap cnt_box-p3050">
                    <div className="content df_wrap b_mb-30">
                        <div className="section-title flex-row flex-row-center"><div className="title-rectangle"></div><span>Prediction result</span></div>
                        <div className="search_wrap">
                            <Search
                                placeholder="Search"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                            <div className="action-button">
                                <Button><img src={icon_download} alt="" />CSV</Button>
                                <Button className='img_only'><img src={icon_refresh} alt="" /></Button>
                            </div>
                        </div>
                    </div>
                    <div className="table_box">
                        {/* 테이블 */}
                    </div>
                    <div className="page_wrap">
                        <div className="page_num">
                            <span>Page</span>
                            <span>1</span>
                            <span>/</span>
                            <span>100</span>
                        </div>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div> 
        </div>
        </>
     );
}

export default prediction;